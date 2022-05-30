import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Sitemap Animes</title>
				<meta
					name="description"
					content="Projeto criado para aperfeiçoamento em Next.JS e para criar um sitemap
					dinâmico."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Sitemap Animes ✌</h1>

				<p className={styles.description}>
					Projeto criado para aperfeiçoamento em Next.JS e para criar um sitemap
					dinâmico.
				</p>

				<div className={styles.grid}>
					<a href="https://nextjs.org/docs" className={styles.card}>
						<h2>Animes &rarr;</h2>
						<p>Ache o anime que você quiser</p>
					</a>

					<a
						href="https://github.com/miguelrisquelme/sitemap-anime"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.card}
					>
						<h2>Repositório &rarr;</h2>
						<p>Entre para ver mais sobre o código do projeto</p>
					</a>

					<a
						href="https://github.com/iamvishnusankar/next-sitemap"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.card}
					>
						<h2>Biblioteca &rarr;</h2>
						<p>Clique aqui para saber mais sobre a lib: next-sitemap</p>
					</a>

					<a
						href="https://github.com/RocktimSaikia/anime-chan"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.card}
					>
						<h2>API &rarr;</h2>
						<p>Clique aqui para saber mais sobre a API de animes</p>
					</a>
				</div>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://github.com/miguelrisquelme"
					target="_blank"
					rel="noopener noreferrer"
				>
					Made by Miguel Riquelme
				</a>
			</footer>
		</div>
	);
};

export default Home;
