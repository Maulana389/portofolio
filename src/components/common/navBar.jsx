import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSun,
	faMoon,
	faBars,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;

	// Read initial theme from documentElement (set by the anti-flash script)
	const [theme, setTheme] = useState(() => {
		if (typeof document !== "undefined") {
			return (
				document.documentElement.getAttribute("data-theme") || "dark"
			);
		}
		return "dark";
	});

	const [menuOpen, setMenuOpen] = useState(false);
	const menuRef = useRef(null);

	// Keep data-theme in sync and persist
	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	// Close mobile menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (e) => {
			if (menuRef.current && !menuRef.current.contains(e.target)) {
				setMenuOpen(false);
			}
		};
		if (menuOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [menuOpen]);

	// Close menu on route change / resize
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 640) setMenuOpen(false);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const toggleTheme = () => {
		setTheme((prev) => (prev === "dark" ? "light" : "dark"));
	};

	const navLinks = [
		{ to: "/", label: "Home", key: "home" },
		{ to: "/about", label: "About", key: "about" },
		{ to: "/projects", label: "Projects", key: "projects" },
		{ to: "/contact", label: "Contact", key: "contact" },
	];

	return (
		<div className="nav-container" ref={menuRef}>
			<nav className="navbar" aria-label="Main navigation">
				<div className="nav-background">
					{/* Desktop nav list */}
					<ul className="nav-list">
						{navLinks.map(({ to, label, key }) => (
							<li
								key={key}
								className={active === key ? "nav-item active" : "nav-item"}
							>
								<Link to={to}>{label}</Link>
							</li>
						))}

						<li className="nav-item theme-toggle-item">
							<button
								className="theme-toggle-btn"
								onClick={toggleTheme}
								title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
								aria-label={`Switch to ${
									theme === "dark" ? "light" : "dark"
								} mode`}
								aria-pressed={theme === "light"}
							>
								<FontAwesomeIcon
									icon={theme === "dark" ? faSun : faMoon}
									aria-hidden="true"
								/>
							</button>
						</li>
					</ul>

					{/* Mobile: theme toggle + hamburger always visible */}
					<div className="nav-mobile-controls">
						<button
							className="theme-toggle-btn"
							onClick={toggleTheme}
							title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
							aria-label={`Switch to ${
								theme === "dark" ? "light" : "dark"
							} mode`}
							aria-pressed={theme === "light"}
						>
							<FontAwesomeIcon
								icon={theme === "dark" ? faSun : faMoon}
								aria-hidden="true"
							/>
						</button>
						<button
							className="nav-hamburger"
							onClick={() => setMenuOpen((prev) => !prev)}
							aria-label={menuOpen ? "Close menu" : "Open menu"}
							aria-expanded={menuOpen}
							aria-controls="mobile-nav-menu"
						>
							<FontAwesomeIcon
								icon={menuOpen ? faXmark : faBars}
								aria-hidden="true"
							/>
						</button>
					</div>
				</div>

				{/* Mobile dropdown menu */}
				{menuOpen && (
					<div
						className="nav-mobile-menu"
						id="mobile-nav-menu"
						role="navigation"
						aria-label="Mobile navigation"
					>
						<ul className="nav-mobile-list">
							{navLinks.map(({ to, label, key }) => (
								<li
									key={key}
									className={
										active === key ? "nav-mobile-item active" : "nav-mobile-item"
									}
								>
									<Link to={to} onClick={() => setMenuOpen(false)}>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				)}
			</nav>
		</div>
	);
};

export default NavBar;
