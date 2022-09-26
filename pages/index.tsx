import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Ninja List | Home</title>
				<meta name="keywords" content="ninja"/>
			</Head>
			<div>
				<h1>Homepage</h1>
			</div>
		</>
	);
};

export default Home;
