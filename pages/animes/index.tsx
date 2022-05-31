import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

const Animes = () => {
	const [namesAnime, setNameAnimes] = useState<
		string[] | AxiosResponse | any
	>();

	useEffect(() => {
		axios
			.get("https://animechan.vercel.app/api/available/anime")
			.then((res) => setNameAnimes(res.data));
	}, []);

	return (
		<main className={styles.main}>
			{namesAnime?.map((anime: string) => (
				<Link key={anime} href={`/animes/${anime}`} passHref>
					<a className={styles.link}>{anime}</a>
				</Link>
			))}
		</main>
	);
};

export default Animes;
