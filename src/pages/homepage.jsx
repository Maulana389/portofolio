import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Works from "../components/homepage/works";
import Skills from "../components/homepage/skills";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";

const skillsList = [
	{
		name: "Java",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
	},
	{
		name: "PHP (Laravel)",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
	},
	{
		name: "Node.js",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
	},
	{
		name: "React",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
	},
	{
		name: "MongoDB",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
	},
	{
		name: "MySQL",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
	},
	{
		name: "Git",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
	},
	{
		name: "ClickUp",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
	},
];

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);
			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid var(--logo-border)" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
				<meta
					property="og:title"
					content={INFO.main.title}
				/>
				<meta
					property="og:description"
					content={currentSEO.description}
				/>
				<link
					rel="canonical"
					href="https://portofolio-maulana-akbar.vercel.app/"
				/>
			</Helmet>

			<div className="page-content">
				<header>
					<NavBar active="home" />
				</header>
				<main className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<section
							className="homepage-first-area"
							aria-label="Hero introduction"
						>
							<div className="homepage-first-area-left-side">
								<h1 className="title homepage-title">
									{INFO.homepage.title}
								</h1>

								<p className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</p>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="photo profile.png"
											alt="Foto Profil Maulana Akbar Wibowo"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</section>

						<div
							className="homepage-socials"
							role="list"
							aria-label="Social media links"
						>
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
								aria-label="GitHub Profile"
								role="listitem"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
									aria-hidden="true"
								/>
							</a>
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
								aria-label="LinkedIn Profile"
								role="listitem"
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="homepage-social-icon"
									aria-hidden="true"
								/>
							</a>
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
								aria-label="Instagram Profile"
								role="listitem"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="homepage-social-icon"
									aria-hidden="true"
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								aria-label="Send Email"
								role="listitem"
							>
								<FontAwesomeIcon
									icon={faEnvelope}
									className="homepage-social-icon"
									aria-hidden="true"
								/>
							</a>
						</div>

						<section className="homepage-skills" aria-label="Core Tech Stack">
							<h2 className="homepage-section-title">
								Core Tech Stack &amp; Tools
							</h2>
							<div className="skills-grid" role="list">
								{skillsList.map((skill, index) => (
									<div
										key={index}
										className="skill-card"
										role="listitem"
										aria-label={skill.name}
									>
										<img
											src={skill.icon}
											alt={`${skill.name} logo`}
											className="skill-icon"
											loading="lazy"
										/>
										<p>{skill.name}</p>
									</div>
								))}
							</div>
						</section>

						<section
							className="homepage-projects"
							aria-label="Featured Projects"
						>
							<h2
								className="homepage-section-title"
								style={{ marginBottom: "0" }}
							>
								Featured Projects
							</h2>
							<AllProjects />
						</section>

						<section
							className="homepage-after-title"
							aria-label="Experience and skills summary"
						>
							<div className="homepage-works">
								<Works />
							</div>
							<div className="homepage-skills-summary">
								<Skills />
							</div>
						</section>

						<footer className="page-footer">
							<Footer />
						</footer>
					</div>
				</main>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
