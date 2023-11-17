import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Offerings() {
	return (
		<Card style={{ width: "10rem" }}>
			<Card.Img
				className="w-10"
				variant="top"
				src="https://picsum.photos/100"
			/>
			<Card.Body>
				<Card.Title>Card Title</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</Card.Text>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
	);
}

export default Offerings;
