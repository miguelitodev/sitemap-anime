import axios from "axios";
import fs from "fs";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = "https://sitemap-anime.vercel.app";
  const animes: string[] = await axios
    .get("https://animechan.vercel.app/api/available/anime")
    .then((res) => res.data);

  const staticPages = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "api",
        "_app.tsx",
        "_document.tsx",
        "_error.tsx",
        "sitemap.xml.tsx",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`;
    });

  const fields: string[] = animes.map((anime) => {
    let animeFormatted = anime;

    animeFormatted = animeFormatted.replaceAll("&", "&amp;");
    animeFormatted = animeFormatted.replaceAll("<", "&lt;");
    animeFormatted = animeFormatted.replaceAll(">", "&gt;");
    animeFormatted = animeFormatted.replaceAll(" ", "%20");

    return `https://sitemap-anime.vercel.app/animes/${animeFormatted}`;
  });

  const sitemapsUrls = [...staticPages, ...fields];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapsUrls
        .map((url) => {
          const path = url.replace("index.tsx", "");
          return `
            <url>
              <loc>${path}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default function Site() {}
