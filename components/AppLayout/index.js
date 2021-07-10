import { Fragment } from 'react';
import { NavBar } from '../Navbar';
import { Header } from '../Head';

export const AppLayout = ({ children, title = '', description = '' }) => {
	return (
		<Fragment>
			<Header title={title} description={description} />
			<NavBar />
			<main className="container">{children}</main>
		</Fragment>
	);
};
