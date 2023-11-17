import React from "react";

import Hero from "./Hero";
import Offerings from "./Offerings";
import About from "./About";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

const Welcome = () => {
	return (
		<>
			<Hero />
			<Offerings />
			<About />
			<ContactUs />
			<Footer />
		</>
	);
};

export default Welcome;
