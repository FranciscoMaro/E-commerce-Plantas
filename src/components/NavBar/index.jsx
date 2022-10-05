import React from "react";
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<div className="container">
			<nav className="nav">
				<div className="nav__brand">
					<NavLink className="nav__link" to="/">
						Todos los productos
					</NavLink>
				</div>
				<ul className="nav__list">
					<li>
						<NavLink className="nav__link" to="/categoria/citricos">
							Citricos
						</NavLink>
					</li>
					<li>
						<NavLink className="nav__link" to="/categoria/pinos">
							Pinos
						</NavLink>
					</li>
					<li>
						<NavLink className="nav__link" to="cart">
							<CartWidget />
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;
