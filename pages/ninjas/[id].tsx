import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Params, UserDetails } from "../../types/types";

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = (await res.json()) as UserDetails[];
	const paths = data.map((ninja) => {
		return {
			params: {
				id: ninja.id.toString(),
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps<UserDetails, Params> = async (
	context
) => {
	const id = context.params!.id;
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/` + id);
	const data = (await res.json()) as UserDetails;
	return {
		props: {
			id: data.id,
			name: data.name,
			email: data.email,
			address: data.address,
            website: data.website
		},
	};
};

const UserInfo = ({ name, email, address, website }: UserDetails) => {
	return (
		<div>
			<h1>{name}</h1>
			<p>{email}</p>
			<p>{website}</p>
			<p>{address.city}</p>
		</div>
	);
};

export default UserInfo;
