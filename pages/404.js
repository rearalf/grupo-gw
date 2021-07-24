import { Header } from '../components/Head';
import Image from 'next/image';
import Link from 'next/link';

export default function Custom404(){
	return (
		<div className="content">
			<Header title={'404 Esta página no se pudo encontrar'} description={''} />
			<Image src="/404-sgv.svg" alt="404 - Page Not Found" width={500} height={500} />
			<h3>
				404 - Esta página no se pudo encontrar
				<Link href="/">
					<a>Regresar a inicio</a>
				</Link>
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
