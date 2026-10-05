import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Pengalaman Kerja & Freelance"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./edu.png"
								alt="University Lab"
								className="work-image"
							/>
							<div className="work-details">
								<div className="work-title">University Lab</div>
								<div className="work-subtitle">Lab Assistant</div>
							</div>
							<div className="work-duration">2024 - Sekarang</div>
						</div>

						<div className="work">
							<img
								src="./freelance.jpg"
								alt="Freelance"
								className="work-image"
							/>
							<div className="work-details">
								<div className="work-title">Freelance</div>
								<div className="work-subtitle">Software Engineer</div>
							</div>
							<div className="work-duration">2024 - Sekarang</div>
						</div>

						<div className="work">
							<img
								src="./logo-english.png"
								alt="EnglishSpace"
								className="work-image"
							/>
							<div className="work-details">
								<div className="work-title">EnglishSpace</div>
								<div className="work-subtitle">Web Developer Intern</div>
							</div>
							<div className="work-duration">Jul 2022 - Okt 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;

