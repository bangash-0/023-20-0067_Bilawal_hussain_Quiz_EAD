import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Offerings from "./components/Offerings";
import About from "./components/About";
import ContactUs from "./components/ContactUs";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Hero />
			<Offerings />
			<About />
			<ContactUs />
		</div>
	);
}

export default App;
