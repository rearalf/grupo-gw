import Link from 'next/link';
import { FiFacebook, FiMapPin, FiMail, FiSmartphone } from 'react-icons/fi';
import { Footer__styles } from './styles';

export const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="footer__container">
				<div className="footer_section__one">
					<Link href="/">
						<a className="footer__brand">
							<img src="/logo/logo.png" className="brand__logo" alt="Logo" />
							<h1 className="brand__text">Grupo GW</h1>
						</a>
					</Link>
					<div className="footer__social">
						<a
							href="https://facebook.com"
							target="_blank"
							rel="noopener"
							aria-label="Ir al sitio de Facebook">
							<FiFacebook size="25" />
						</a>
					</div>
				</div>
				<hr className="footer__line" />
				<ul className="footer__section_two">
					<li className="footer__contact">
						<FiMapPin className="footer__contact__icon" size="18" />
						<div className="footer__contact__content">
							<h3>Dirección</h3>
							<p>39 C. Pte ·120 Col.Vairo</p>
							<p>San Salvador</p>
						</div>
					</li>
					<li className="footer__contact">
						<FiSmartphone className="footer__contact__icon" size="18" />
						<div className="footer__contact__content">
							<h3>Teléfono</h3>
							<p>(503) 2235-9619</p>
						</div>
					</li>
					<li className="footer__contact">
						<FiMail className="footer__contact__icon" size="18" />
						<div className="footer__contact__content">
							<h3>Correo electrónico</h3>
							<p>venta@grupo-gw.com</p>
						</div>
					</li>
				</ul>
			</div>
			<div className="end__footer">
				<div className="end__content__footer">
					Copyright © {year} All rights reserved | Development by Ricardo Alf
				</div>
			</div>
			<style jsx>{Footer__styles}</style>
		</footer>
	);
};
