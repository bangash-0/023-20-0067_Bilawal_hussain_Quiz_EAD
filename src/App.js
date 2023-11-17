import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Offerings from "./components/Offerings";
import About from "./components/About";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Hero />
			<Offerings />
			<About />
		</div>
	);
}

export default App;
