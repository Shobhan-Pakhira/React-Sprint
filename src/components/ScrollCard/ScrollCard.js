import React from "react";
import './ScrollCard.css'
import CardImage from "../../assets/ScrollCard/see.png";

const cardData = [
	{
		image: CardImage,
		title: "Gain Content",
		info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		image: CardImage,
		title: "Gain Content",
		info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		image: CardImage,
		title: "Gain Content",
		info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
];

const ScrollCard = () => {
	return (
		<div className="container-fluid">
			<div className="col-lg-12 col-md-8 col-sm-6 d-flex flex-column justify-content-center align-items-center">
				<h1 className="text-center pb-5 pt-2 mt-2">
					<strong>
						Gain Context, Address Blind Spots, <br /> and Eliminate Universal
						Risk
					</strong>
				</h1>
				<div className="container">
					<div className="col-12">
						{cardData.map((data, idx) => {
							return (
								<div className="col-12 bg-dark rounded-4 d-flex flex-row justify-content-between align-items-center my-5 sticky-card">
									<img src={CardImage} alt="img" style={{ height: "550px" }} />
									<div
										className="col-6 d-flex flex-column text-light"
										style={{ paddingRight: "150px" }}>
										  <h2
											  className="display-5 mb-3"
											  style={{ fontSize: "45px", fontWeight: "500" }}>
											    Gain Content
										  </h2>
										  <p style={{ fontSize: "18px" }}>
											  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
										  </p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ScrollCard;