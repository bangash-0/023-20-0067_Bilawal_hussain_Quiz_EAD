import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Welcome = () => {
	return (
		<Container>
			<Row>
				<Col md={6}>
					<h1>Welcome to Our Bakery</h1>
					<p>Indulge in a symphony of flavors at our artisanal bakery.</p>
				</Col>
			</Row>
		</Container>
	);
};

export default Welcome;
