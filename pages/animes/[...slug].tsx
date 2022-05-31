import axios from "axios";
import { GetServerSideProps } from "next";
import styles from "../../styles/Home.module.css";
interface IAnime {
	data: [
		{
			anime: string;
			character: string;
			quote: string;
		}
	];
}

const Anime = ({ data }: IAnime) => {
	const { anime, character, quote } = data[0];
	return (
		<main className={styles.main}>
			<h1>{anime}</h1>
			<small>{character}</small>
			<p>{quote}</p>
		</main>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const { slug } = query as { slug: string };
	const formattedSlug = slug[0].replaceAll(" ", "%20");

	const data = await axios
		.get(`https://animechan.vercel.app/api/quotes/anime?title=${formattedSlug}`)
		.then((res) => res.data);

	return {
		props: {
			data,
		},
	};
};

export default Anime;
