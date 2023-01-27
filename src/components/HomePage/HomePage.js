import React from "react";
import "./HomePage.css";
import intelLogo from "../../assets/HomePage/intelLogo.avif";

const HomePage = () => {
	return (
		<div className="background">
			<div className="Container-top">
				<div className="hexagon pt-5">beehee hive</div>
				<div className="numbers" />
				<div className="box-rigth pt-5">
					<div className="row">
						<div className="col-4 ">
							<h2>100%</h2>
							<p>SaaS technology</p>
						</div>
						<div className="col-4 ">
							<h2>100+</h2>
							<p>Threat intel sources</p>
						</div>
						<div className="col-4">
							<h2>100+</h2>
							<p>Threat intel sources</p>
						</div>
					</div>

					<div className="row mt-5">
						<div className="col-4">
							<h2>100%</h2>
							<p>SaaS technology</p>
						</div>
						<div className="col-4 ">
							<h2>1,400+</h2>
							<p>Buit in queries</p>
						</div>
						<div className="col-4">
							<h2>200+</h2>
							<p>Costomer</p>
						</div>
					</div>
				</div>
			</div>

			<div className="footer-box mt-5">
				<div className="row">
					<div className="col-2">
						<img src={intelLogo} alt='logos'/>
					</div>
					<div className="col-2">
						<img src={intelLogo} alt='logos'/>
					</div>
					<div className="col-2">
						<img src={intelLogo} alt='logos'/>
					</div>
					<div className="col-2">
						<img src={intelLogo} alt='logos'/>
					</div>
					<div className="col-2">
						<img src={intelLogo} alt='logos'/>
					</div>
					<div className="col-2">
						<img src={intelLogo} alt='logos'/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
