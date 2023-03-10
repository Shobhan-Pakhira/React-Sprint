import React from "react";
import pageBG from "../../assets/CertificationVerification/CardBG.jpg";
import question from "../../assets/CertificationVerification/question-mark.svg";
import pattern from "../../assets/CertificationVerification/spot.svg";

const CertificateVerfication = () => {
	return (
		<div className="container-fluid p-0 vh-100">
			<div className="d-flex flex-row justify-content-around align-items-center">
				<div className="col-7">
					<img
						className="col-12 vh-100"
						src={pageBG}
						alt="bg"
						style={{
							backgroundSize: "contain",
							backgroundPosition: "center",
						}}
					/>
				</div>
				<div
					className="col-6 d-flex flex-col justify-content-center align-items-center rounded-4 bg-light p-5 "
					style={{
						backgroundImage: `url(${pattern})`,
						opacity: "95%",
						height: "850px",
						transform: "translateX(-110px)",
						boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
					}}
				>
					<div className="d-flex flex-col justify-content-center align-items-center mb-5">
						<h1 className="display-2" style={{ fontWeight: "700" }}>
							Certificate Verfication
						</h1>
						<p style={{ fontSize: "25px" }}>
							Enter your details to get your certificate verification done
						</p>
					</div>
					<div className="d-flex flex-col">
						<h3 className="display-6" style={{ fontWeight: "500" }}>
							{" "}
							Certificate UIN Number:{" "}
						</h3>
						<input
							className="my-2 bg-dark text-light p-2 rounded-3"
							type="number"
						></input>
						<div className="d-flex flex-row justify-content-between align-items-center">
							<button className="col-10 btn btn-primary rounded-3 my-2 p-2">
								Submit !
							</button>
							<div
								className="col-1 rounded-3 bg-light"
								style={{
									backgroundImage: `url(${question})`,
									height: "42px",
									width: "42px",
								}}
							></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CertificateVerfication;
