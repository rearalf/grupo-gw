import Head from 'next/head';

export const Header = ({ title = '', description = '' }) => {
	return (
		<Head>
			<title>{title} | Gruopo GW</title>
			<link rel="icon" href="/logo/favicon.ico" type="image/x-icon" />
			<meta name="theme-color" content="#be3323" />
			<meta name="description" content={description} />
			<meta name="title" content={title} />
			<meta name="apple-mobile-web-app-title" content="Grupo GW" />
			<meta name="og:title" content={title} />
			<meta name="og:description" content="Grupo GW" />
			<meta name="og:locale" content="es_SV" />
			<meta property="og:type" content="website" />
		</Head>
	);
};
