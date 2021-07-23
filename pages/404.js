import { Header } from '../components/Head';

export default function Custom404(){
	return (
		<div className="content">
			<Header title={'404 Esta página no se pudo encontrar'} description={''} />
			<img src="/404-sgv.svg" alt="404 - Page Not Found" />
			<h3>
				404 - Esta página no se pudo encontrar <a href="/">Regresar a inicio</a>
			</h3>
			<style jsx>{`
				.content {
					margin: 0 auto;
					width: 85%;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					height: 100vh;
				}
				img {
					width: 100%;
					margin-bottom: 25px;
				}
			`}</style>
		</div>
	);
}
