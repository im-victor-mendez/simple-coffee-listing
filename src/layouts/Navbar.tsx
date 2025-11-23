import { useState } from 'react';
import '@styles/layouts/Navbar.scss';
import TwentyOnePilotsLogo from '@assets/svg/Twenty One Pilots - Logo.svg';

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
					<a href='#'>Inicio</a>
				</li>
				<li>
					<a href='#'>Nosotros</a>
				</li>
				<li>
					<a href='#'>Menú</a>
				</li>
				<li>
					<a href='#'>Contacto</a>
				</li>
			</ul>
		</nav>
	);
}
