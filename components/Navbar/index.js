import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiHome, FiBookOpen, FiUsers, FiUser } from 'react-icons/fi';
import { NavBar__Style } from './styles';

export const NavBar = () => {
	const [ toggle, settoggle ] = useState(false);

	return (
		<header className="header_navbar">
			<nav className="navbar">
				<Link href="/" passHref>
					<a className="brand">
						<img src="/logo/logo.png" className="brand__logo" alt="logo" />
						<h1>Grupo GW</h1>
					</a>
				</Link>
				<button
					className="btn__toggle"
					aria-label="Bar Toggle"
					onClick={() => settoggle(!toggle)}>
					<FiMenu size={20} />
				</button>
				<div className="navbar__desk">
					<ul>
						<Link href="/" passHref>
							<li className="nav__item">
								<a className="nav__link">
									<FiHome />Inicio
								</a>
							</li>
						</Link>
						<Link href="/Catalog" passHref>
							<li className="nav__item">
								<a className="nav__link">
									<FiBookOpen />Catálogo
								</a>
							</li>
						</Link>
						<Link href="/About" passHref>
							<li className="nav__item">
								<a className="nav__link">
									<FiUsers />Sobre Nosotros
								</a>
							</li>
						</Link>
						<Link href="/Contacts" passHref>
							<li className="nav__item">
								<a className="nav__link">
									<FiUser />Contactos
								</a>
							</li>
						</Link>
					</ul>
				</div>
			</nav>
			<div className={`lateral__nav ${toggle ? 'show' : ''}`}>
				<Link href="/">
					<a className="brand">
						<img src="/logo/logo.png" className="brand__logo" alt="logo" />
						<h1>Grupo GW</h1>
					</a>
				</Link>
				<ul className="lateral__navbar">
					<Link href="/" passHref>
						<li className="nav__item">
							<a className="nav__link">
								<FiHome />Inicio
							</a>
						</li>
					</Link>
					<Link href="/Catalog" passHref>
						<li className="nav__item">
							<a className="nav__link">
								<FiBookOpen />Catálogo
							</a>
						</li>
					</Link>
					<Link href="/About" passHref>
						<li className="nav__item">
							<a className="nav__link">
								<FiUsers />Sobre Nosotros
							</a>
						</li>
					</Link>
					<Link href="/Contacts" passHref>
						<li className="nav__item">
							<a className="nav__link">
								<FiUser />Contactos
							</a>
						</li>
					</Link>
				</ul>
			</div>
			<style jsx>{NavBar__Style}</style>
		</header>
	);
};
