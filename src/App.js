import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Offerings from "./components/Offerings";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Hero />
			<Offerings />
			<Footer />
		</div>
	);
}

export default App;
