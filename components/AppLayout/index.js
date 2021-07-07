import { Fragment } from 'react';
import { NavBar } from '../Navbar';

export const AppLayout = ({ children }) => {
	return (
		<Fragment>
			<NavBar />
			<main className="container Mt2">{children}</main>
		</Fragment>
	);
};
