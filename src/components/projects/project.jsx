import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link, tech } = props;

	const isExternal = link && (link.startsWith("http://") || link.startsWith("https://"));

	const content = (
		<div className="project-container">
			<div className="project-logo">
				<img src={logo} alt={`Logo ${title}`} />
			</div>
			<div className="project-title">{title}</div>
			<div className="project-description">{description}</div>
			
			{tech && tech.length > 0 && (
				<div className="project-tech-stack">
					{tech.map((t, idx) => (
						<span key={idx} className="project-tech-badge">{t}</span>
					))}
				</div>
			)}

			<div className="project-link">
				<div className="project-link-icon">
					<FontAwesomeIcon icon={faLink} />
				</div>
				<div className="project-link-text">{linkText}</div>
			</div>
		</div>
	);

	return (
		<div className="project">
			{isExternal ? (
				<a href={link} target="_blank" rel="noreferrer">
					{content}
				</a>
			) : (
				<Link to={link}>
					{content}
				</Link>
			)}
		</div>
	);
};

export default Project;

