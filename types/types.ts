import { ParsedUrlQuery } from "querystring";

export type UserDetails = {
		id: number;
		name: string;
        email: string;
        website: string;
        address: {
            city: string;
        }
};

export type NinjasProps = {
	ninjas: UserDetails[];
};
 
export interface Params extends ParsedUrlQuery {
    id: string,
 }
