import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

type LayoutProps = {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="content">
			<NavBar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
