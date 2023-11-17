import React from "react";

const Hero = () => {
	return (
		<section id="home">
			<div className="container">
				<div className="row pt-5">
					<div className="col-md-7 pt-5">
						<p>
							Indulge in a symphony of flavors at our artisanal bakery. Welcome
							to a world where the aroma of freshly baked wonders captivates
							your senses. Our master bakers craft each creation with passion,
							using only the finest ingredients to ensure every bite is pure
							delight.
						</p>
						<p>
							From flaky croissants to decadent cakes, experience the epitome of
							taste and craftsmanship. Whether it's a special occasion or a
							craving for the extraordinary, our bakery offers a haven for your
							palate. Elevate your moments with the magic of our oven-fresh
							delights. Your journey to exceptional taste begins here.
						</p>
					</div>

					<div className="col-md-5">
						<img
							width={515}
							className="rounded-circle"
							src="https://farm9.staticflickr.com/8166/7506043150_b0e2acaf7a.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
