import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import React, { useState } from "react";

export function ContactUs() {
	const [fullName, setFullName] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [email, setEmail] = useState("");
	const [description, setDescription] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		// Log form data
		console.log({
			fullName,
			phone,
			address,
			email,
			description,
		});
	};

	return (
		<section id="contact-us">
			<div
				className="container pt-5 pb-5"
				style={{ background: "#fff", color: "#000" }}
			>
				<h4 className="p-3">Contact Us</h4>
				<div className="row">
					<div className="col-md-4 offset-md-2">
						<Form>
							<Form.Group
								className="mb-3"
								controlId="formBasicEmail"
							>
								<Form.Control
									type="text"
									placeholder="Full Name"
									value={fullName}
									onChange={(e) => setFullName(e.target.value)}
								/>
							</Form.Group>
						</Form>
					</div>
					<div className="col-md-4">
						<Form>
							<Form.Group
								className="mb-3"
								controlId="formBasicPassword"
							>
								<Form.Control
									type="number"
									placeholder="Phone"
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
								/>
							</Form.Group>
						</Form>
					</div>
				</div>

				<div className="row">
					<div className="col-md-4 offset-md-2">
						<Form>
							<Form.Group
								className="mb-3"
								controlId="formBasicEmail"
							>
								<Form.Control
									type="text"
									placeholder="Address"
									value={address}
									onChange={(e) => setAddress(e.target.value)}
								/>
							</Form.Group>
						</Form>
					</div>
					<div className="col-md-4">
						<Form>
							<Form.Group
								className="mb-3"
								controlId="formBasicPassword"
							>
								<Form.Control
									type="email"
									placeholder="Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</Form.Group>
						</Form>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-md-8 mx-auto">
							<Form onSubmit={handleSubmit}>
								<Form.Group
									className="mb-3"
									controlId="exampleForm.ControlTextarea1"
								>
									<Form.Control
										placeholder="Description"
										as="textarea"
										rows={3}
										value={description}
										onChange={(e) => setDescription(e.target.value)}
									/>
								</Form.Group>
								<Button
									variant="success"
									type="submit"
									className="float-end px-5"
								>
									Submit
								</Button>
							</Form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
