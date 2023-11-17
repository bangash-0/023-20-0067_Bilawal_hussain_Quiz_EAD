import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import About from "./components/About";
import ContactUs from "./components/ContactUs";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Welcome />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/contact"
					element={<ContactUs />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
