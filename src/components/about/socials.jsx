import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faGithub,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

import "./styles/socials.css";

const Socials = () => {
	return (
		<nav className="socials" aria-label="Social links">
			<div className="social">
				<a
					href={INFO.socials.github}
					target="_blank"
					rel="noreferrer"
					aria-label="GitHub Profile"
				>
					<FontAwesomeIcon
						icon={faGithub}
						className="social-icon"
						aria-hidden="true"
					/>
					<span className="social-text">Follow on GitHub</span>
				</a>
			</div>

			<div className="social">
				<a
					href={INFO.socials.linkedin}
					target="_blank"
					rel="noreferrer"
					aria-label="LinkedIn Profile"
				>
					<FontAwesomeIcon
						icon={faLinkedin}
						className="social-icon"
						aria-hidden="true"
					/>
					<span className="social-text">Follow on LinkedIn</span>
				</a>
			</div>

			<div className="social">
				<a
					href={INFO.socials.instagram}
					target="_blank"
					rel="noreferrer"
					aria-label="Instagram Profile"
				>
					<FontAwesomeIcon
						icon={faInstagram}
						className="social-icon"
						aria-hidden="true"
					/>
					<span className="social-text">Follow on Instagram</span>
				</a>
			</div>

			<div className="email">
				<div className="email-wrapper">
					<a
						href={`mailto:${INFO.main.email}`}
						aria-label={`Send email to ${INFO.main.email}`}
					>
						<FontAwesomeIcon
							icon={faEnvelope}
							className="social-icon"
							aria-hidden="true"
						/>
						<span className="social-text">{INFO.main.email}</span>
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Socials;
