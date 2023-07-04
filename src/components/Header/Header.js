import "./header.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { useEffect, useState } from "react";

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [savedScrollPosition, setSavedScrollPosition] = useState(0);

	useEffect(() => {
		const handleMenuToggle = () => {
			if (!isOpen) {
				// Menyuni yopganda saqlangan scroll-ni qaytarish
				document.body.style.overflow = 'auto';
				window.scrollTo(0, savedScrollPosition);
			} else {
				// Menyuni ochganda scroll-ni saqlash va o'chirish
				setSavedScrollPosition(window.pageYOffset);
				document.body.style.overflow = 'hidden';
			}
		};

		handleMenuToggle();

		// Effect deaktivatsiya bo'lganda scroll-ni tiklash
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [isOpen, savedScrollPosition]);


	const handleMenuClick = () => {
		setIsOpen(!isOpen)
	}

	return (
		<header>
			<div className={isOpen ? "site-header show-menu" : "site-header"}>
				<div className='my-container'>
					<div className='header-top-wrap'>
						<NavLink to='/'>
							<img className='site-logo' src={logo} alt="Site's logo" />
						</NavLink>
						<nav className="header-nav">
							<ul className='header-top-list'>
								<li>
									<NavLink
										className={({ isActive }) =>
											isActive ? "header-link header-link-active" : "header-link"
										}
										onClick={() => setIsOpen(false)}
										to='/Sertifikatlar'
									>
										Sertifikatlar
									</NavLink>
								</li>
								<li>
									<NavLink
										className={({ isActive }) =>
											isActive ? "header-link header-link-active" : "header-link"
										}
										onClick={() => setIsOpen(false)}
										to='/Videolar'
									>
										Video
									</NavLink>
								</li>
								<li>
									<NavLink
										className={({ isActive }) =>
											isActive ? "header-link header-link-active" : "header-link"
										}
										onClick={() => setIsOpen(false)}
										to='/Foto_lavhalar'
									>
										Fotogalareya
									</NavLink>
								</li>
							</ul>
						</nav>
						<div class="menu-btn" onClick={handleMenuClick}>
							<span class="menu-btn-burger"></span>
						</div>
					</div>
				</div>
			</div>
			<div class="overlay"></div>
		</header>
	);
};
