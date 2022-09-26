import styles from "../../styles/Ninjas.module.css";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { GetStaticProps } from "next";
import { NinjasProps } from "../../types/types";

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await res.json();

	return {
		props: { ninjas: data as NinjasProps },
	};
};

const Ninjas = ({ ninjas }: NinjasProps) => {
	return (
		<>
			<Head>
				<title>Ninja List | Ninjas</title>
				<meta name="keywords" content="ninja" />
			</Head>
			<div>
				<h1>All Ninjas</h1>
				{ninjas.map((ninja) => (
					<Link href={"/ninjas/" + ninja.id} key={ninja.id}>
						<a className={styles.single}>
							<h3>{ninja.name}</h3>
						</a>
					</Link>
				))}
			</div>
		</>
	);
};

export default Ninjas;
