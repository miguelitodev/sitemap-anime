import axios from "axios";
import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const animes: string[] = await axios
    .get("https://animechan.vercel.app/api/available/anime")
    .then((res) => res.data);

  const fields: ISitemapField[] = animes.map((anime) => {
    let animeFormatted = anime;

    animeFormatted = animeFormatted.replaceAll("&", "&amp;");
    animeFormatted = animeFormatted.replaceAll("<", "&lt;");
    animeFormatted = animeFormatted.replaceAll(">", "&gt;");
    animeFormatted = animeFormatted.replaceAll(" ", "%20");

    return {
      loc: `https://sitemap-anime.vercel.app/animes/${animeFormatted}`,
      lastmod: new Date().toISOString(),
    };
  });

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
