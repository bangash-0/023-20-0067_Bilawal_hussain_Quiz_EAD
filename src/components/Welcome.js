import React from "react";

import Hero from "./Hero";
import Offerings from "./Offerings";
import About from "./About";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Welcome = () => {
	return (
		<>
			<NavBar />
			<Hero />
			<Offerings />
			<About />
			<ContactUs />
			<Footer />
		</>
	);
};

export default Welcome;
