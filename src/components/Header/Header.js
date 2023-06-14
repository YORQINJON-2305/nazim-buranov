import "./header.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

export const Header = () => {
	return (
		<div className='site-header'>
			<div className='container'>
				<div className='header-top-wrap'>
					<NavLink to='/'>
						<img className='site-logo' src={logo} alt="Site's logo" />
					</NavLink>
					<ul className='header-top-list'>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? "header-link header-link-active" : "header-link"
								}
								to='/sertificats'
							>
								Sertifikatlar
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? "header-link header-link-active" : "header-link"
								}
								to='/videos'
							>
								Video
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? "header-link header-link-active" : "header-link"
								}
								to='/photos'
							>
								Fotogalareya
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
