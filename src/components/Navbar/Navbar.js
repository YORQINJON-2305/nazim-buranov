import { NavLink } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
	return (
		<nav className='site-nav'>
			<div className='container'>
				<ul className='nav-list'>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "nav-item-link nav-item-link-active"
									: "nav-item-link"
							}
							to='/'
						>
							Bosh sahifa
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "nav-item-link nav-item-link-active"
									: "nav-item-link"
							}
							to='/Yangiliklar'
						>
							Yangiliklar
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "nav-item-link nav-item-link-active"
									: "nav-item-link"
							}
							to='/maqolalar'
						>
							Maqolalar
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "nav-item-link nav-item-link-active"
									: "nav-item-link"
							}
							to='/ilmiy-maqolalar'
						>
							Ilmiy Maqolalar
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "nav-item-link nav-item-link-active"
									: "nav-item-link"
							}
							to="/she'riyat"
						>
							She'riyat
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "nav-item-link nav-item-link-active"
									: "nav-item-link"
							}
							to='/hikoyalar'
						>
							Hikoyalar
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "nav-item-link nav-item-link-active"
									: "nav-item-link"
							}
							to='/jurnallar'
						>
							Jurnallar
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "nav-item-link nav-item-link-active"
									: "nav-item-link"
							}
							to='/kitoblar'
						>
							Kitoblar
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};
