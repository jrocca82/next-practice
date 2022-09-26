import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const NotFound = () => {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.push("/");
		}, 3000);
	}, []);

	return (
		<>
			<Head>
				<title>Ninja List | 404</title>
				<meta name="keywords" content="ninja" />
			</Head>
			<div className="not-found">
				<h1>Oops!</h1>
				<h2>That page cannot be found.</h2>
				<p>
					Go back to the{" "}
					<Link href="/">
						<a>home page</a>
					</Link>
					.
				</p>
			</div>
		</>
	);
};

export default NotFound;
