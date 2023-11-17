import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
	return (
		<Navbar
			expand="lg"
			className="bg-white "
		>
			<Container className="">
				<Navbar.Brand href="#home">
					<img
						className="rounded-circle"
						width={70}
						src="https://static.vecteezy.com/system/resources/previews/012/371/334/original/bakery-logo-design-with-flat-style-of-bakery-chef-hat-and-spoon-illustration-vector.jpg"
						alt=""
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#offerings">Menu</Nav.Link>
						<Nav.Link href="#about-us">About Us</Nav.Link>
						<Nav.Link href="#contact-us">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
