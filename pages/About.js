import Image from 'next/image';
import { AppLayout } from '../components/AppLayout';
import { About__Styles } from '../styles/pages/About_styles';

function About(){
	return (
		<AppLayout
			title="¿Quienes Somos?"
			description="Grupo GW, es una empresa productora de calzado con una trayectoria de 25
						años en el mercado salvadoreño">
			<div className="section__one">
				<div className="comolumn__one">
					<div className="column__one__part__one">
						<h1 className="section__column__title__one">¿Quienes Somos?</h1>
						<p className="section__column__text__one">
							Grupo GW, es una empresa productora de calzado con una trayectoria de 25
							años en el mercado salvadoreño
						</p>
					</div>
					<hr className="line__one" />
					<div className="column__one__part__two">
						<h2 className="section__column__title__two">Nuestra Historia</h2>
						<p className="section__column__text__two">
							Se especializa en la fabricación de calzado deportivo, escolar, casual,
							de vestir e industrial, para caballero, calzado de seguridad industrial
							actualmente el mercado es a nivel central, paracentral y oriental.
						</p>
					</div>
				</div>
				<img src="./quienes_1.jpg" className="img__one" alt="Imagen de un par de zapatos" />
			</div>

			<div className="section__two">
				<p className="section__two__text__one">
					Inicialmente la empresa se dedicaba solo a la comercialización del calzado que
					producía (zapato de futbol) con el paso de los años la perspectiva fue cambiando
					y empezando a mejorar la logística de comercialización de los productos, por lo
					que hace unos años iniciaron su proyectó de incrementar la variedad de lineas.
				</p>
				<img
					src="./quienes_2_opt.jpg"
					className="img__two"
					alt="Imagen de un par de zapatos"
				/>
				<p className="section__two__text__two">
					Esta nueva dinámica dentro de la empresa, ha llevado a Grupo GW S.A. de C.V.,
					que es el nuevo nombre comercial a entrar a una nueva etapa, por lo que se ve en
					la necesidad de fortalecer las condiciones internas y a la vez buscar nuevas
					oportunidades en el abastecimiento de calzado.
				</p>
			</div>

			<div className="section__three">
				<div className="section__three__part__one">
					<h2 className="">Nuestros Pilares</h2>
					<hr className="line__one" />
				</div>
				<div className="section__three__part__two">
					<div className="part__two__column__one">
						<h3 className="title">Misión</h3>
						<p className="text">
							Ser una empresa en constante crecimiento, con diversidad en lineas de
							calzado, que permitan satisfacer a nuestro mercado y generar empleo para
							nuestros colaboradores.
						</p>
					</div>
					<div className="part__two__column__two">
						<h3 className="">Visión</h3>
						<p className="">
							Satisfacer las necesidades de los clientes con lineas de calzado de
							fácil aceptación y buena rentabilidad, ofreciendo una atención rápida
							con estilos modernos y calidad en nuestros productos
						</p>
					</div>
				</div>
			</div>
			<style jsx>{About__Styles}</style>
		</AppLayout>
	);
}

export default About;
