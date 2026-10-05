import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Tentang | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
				<link
					rel="canonical"
					href="https://portofolio-maulana-akbar.vercel.app/about"
				/>
			</Helmet>

			<div className="page-content">
				<header>
					<NavBar active="about" />
				</header>
				<main className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<h1 className="title about-title">
									{INFO.about.title}
								</h1>

								<p
									className="subtitle about-subtitle"
									style={{ whiteSpace: "pre-line" }}
								>
									{INFO.about.description}
								</p>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<img
										src="photo profile.png"
										alt="Profil Maulana Akbar Wibowo"
									/>
								</div>
								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>

						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>

					<footer className="page-footer">
						<Footer />
					</footer>
				</main>
			</div>
		</React.Fragment>
	);
};

export default About;
