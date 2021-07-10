import Link from 'next/link';
import { AppLayout } from '../components/AppLayout';
import { Home__Styles } from '../styles/pages';

function HomePage(){
	return (
		<AppLayout
			title="GO AND WALK"
			description="Grupo GW. Especialista en calzado 'GO AND WALK' ">
			<div className="section__one">
				<div className="column__one">
					<h1 className="column__one__title">Grupo GW</h1>
					<h2 className="column__one__subtitle">Especialista en calzado</h2>
					<div className="btn__group">
						<Link href="/Catalog">
							<a className="btn btn__primary">Catálogo</a>
						</Link>
						<Link href="/Contacts">
							<a className="btn btn__secundary">Contactos</a>
						</Link>
					</div>
				</div>
				<div className="column__two">
					<span className="text__shoes text__one">
						Cañon alcochonado con <br /> espuma anti-bacterial
					</span>
					<span className="text__shoes text__two">Flexibilidad en Lengüeta</span>
					<span className="text__shoes text__three">
						Puntera <br /> de Acero
					</span>
					<div className="header__zapato">
						<img src="/zapatoHome.png" alt="Zapato" />
					</div>
					<span className="text__shoes text__four">Plantillas anti-perforación</span>
					<span className="text__shoes text__five">
						Resistente a Aceites <br /> y Quimicos
					</span>
				</div>
			</div>
			<div className="section__two">
				<div className="column__one">
					<h2 className="column__one__title">Productos</h2>
					<p className="column__one__text">
						Nuestros productos están fabricados con estándares de calidad, con materia
						prima de importación y con certificaciones internacionales.
					</p>
				</div>
				<div className="column__two">
					<img src="/imagen1.jpg" alt="imagen de zapatos" />
				</div>
			</div>
			<style jsx>{Home__Styles}</style>
		</AppLayout>
	);
}

export default HomePage;
