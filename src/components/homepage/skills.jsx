import React from "react";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";
import INFO from "../../data/user";
import "./styles/skills.css";

const Skills = () => {
	const skills = INFO.skills || [];

	return (
		<div className="skills">
			<Card
				icon={faCode}
				title="Core Tech Stack"
				body={
					<div className="skills-body">
						<div className="skills-list">
							{skills.map((skill, index) => (
								<div key={index} className="skill-badge">
									<span className="skill-name">{skill.name}</span>
									<span className="skill-category">{skill.category}</span>
								</div>
							))}
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Skills;
