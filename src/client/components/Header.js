import React from 'react';
import {Link} from 'react-router-dom';

export const Header = () => {
	return(
		<nav>
			<div className="nav-wrapper">
				<ul id="nav-mobile" className="left hide-on-med-and-down">
					<li><Link to='/'>Главная</Link></li>
					<li><Link to='/info'>Инфо</Link></li>
				</ul>
				<Link to='/' className="brand-logo right">React SSR</Link>
			</div>
		</nav>
	)
};