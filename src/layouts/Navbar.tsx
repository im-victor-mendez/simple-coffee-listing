import { useState } from 'react';
import '@styles/layouts/Navbar.scss';
import TwentyOnePilotsLogo from '@assets/svg/Twenty One Pilots - Logo.svg';
import { Link } from 'react-router';

export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<nav className='navbar'>
			<div className='logo'>
				<img src={TwentyOnePilotsLogo} alt='' />
				<h1>Simple Coffee</h1>
			</div>

			<div className='menu-toggle' onClick={() => setOpen(!open)}>
				<span></span>
				<span></span>
				<span></span>
			</div>

			<ul className={`nav-links ${open ? 'open' : ''}`}>
				<li>
					<Link to={'/'}> Home</Link>
				</li>
				<li>
					<Link to={'/About'}> About Us</Link>
				</li>
				<li>
					<Link to={'/'}> Menu</Link>
				</li>
				<li>
					<Link to={'/Contact'}>Contact</Link>
				</li>
			</ul>
		</nav>
	);
}
