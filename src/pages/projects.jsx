import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Proyek | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
				<link
					rel="canonical"
					href="https://portofolio-maulana-akbar.vercel.app/projects"
				/>
			</Helmet>

			<div className="page-content">
				<header>
					<NavBar active="projects" />
				</header>
				<main className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<h1 className="title projects-title">
							Software Engineer &amp; Backend Developer — Mengubah ide menjadi
							solusi perangkat lunak yang andal.
						</h1>

						<p className="subtitle projects-subtitle">
							Saya telah mengembangkan berbagai proyek yang memperlihatkan
							keahlian saya dalam backend engineering, arsitektur REST API,
							pengembangan modul sistem web (seperti Leave System &amp;
							Reservation Platform), serta aplikasi MERN stack. Setiap proyek
							dirancang dengan fokus pada skalabilitas, otentikasi aman, dan
							kemudahan pengoperasian bagi pengguna akhir.
						</p>

						<section className="projects-list" aria-label="Project list">
							<AllProjects />
						</section>
					</div>
					<footer className="page-footer">
						<Footer />
					</footer>
				</main>
			</div>
		</React.Fragment>
	);
};

export default Projects;
