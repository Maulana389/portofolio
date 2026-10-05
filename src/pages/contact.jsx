import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Kontak | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
				<link
					rel="canonical"
					href="https://portofolio-maulana-akbar.vercel.app/contact"
				/>
			</Helmet>

			<div className="page-content">
				<header>
					<NavBar active="contact" />
				</header>
				<main className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<h1 className="title contact-title">
							Mari Terhubung: Hubungi Maulana Akbar Wibowo
						</h1>

						<p className="subtitle contact-subtitle">
							Jangan ragu untuk menghubungi saya jika Anda berminat
							berkolaborasi dalam proyek perangkat lunak, mendiskusikan
							peluang karir/freelance backend engineering, atau sekadar
							berjejaring. Anda dapat mengirimkan email langsung ke{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							. Saya biasanya membalas pesan dalam waktu 24 jam. Anda
							juga dapat terhubung melalui{" "}
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								LinkedIn
							</a>{" "}
							atau mendiskusikan repositori di{" "}
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								GitHub
							</a>
							.
						</p>
					</div>

					<section className="socials-container" aria-label="Contact links">
						<div className="contact-socials">
							<Socials />
						</div>
					</section>

					<footer className="page-footer">
						<Footer />
					</footer>
				</main>
			</div>
		</React.Fragment>
	);
};

export default Contact;
