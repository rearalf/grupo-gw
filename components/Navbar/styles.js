import css from 'styled-jsx/css';
import { theme } from '../../styles/theme';

export const NavBar__Style = css`
	.header_navbar {
	}

	.navbar {
		background-color: ${theme['--background-color-primary']};
		box-shadow: 0 4px 4px 0 ${theme['--color-box-shadow']};
		margin-bottom: 40px;
		display: flex;
		justify-content: space-between;
		padding: 15px 25px;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.btn__toggle {
		background-color: transparent;
		border-radius: 50%;
		padding: 7px 8px;
		transition: box-shadow .2s ease-in-out;
	}
	.btn__toggle:hover {
		box-shadow: 0 0 6px 0 ${theme['--color-box-shadow']};
	}

	.navbar__desk {
		display: none;
	}

	.navbar__desk ul {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 20px;
	}

	.navbar__desk ul .nav__link {
		display: flex;
		align-items: center;
		gap: 5px;
	}

	.lateral__nav {
		background-color: ${theme['--background-color-primary']};
		box-shadow: 4px 0 4px 0 ${theme['--color-box-shadow']};
		width: 250px;
		height: 100%;
		position: fixed;
		z-index: 5;
		top: 0;
		left: 0;
		transform: translateX(-300px);
		transition: transform .5s ease-in-out;
	}

	.lateral__nav.show {
		transform: translateX(0);
	}

	.lateral__nav .brand {
		padding: 15px;
		margin-bottom: 30px;
	}

	.navbar__desk ul,
	.lateral__navbar {
		list-style: none;
		padding: 0;
		font-size: 16px;
	}

	.lateral__navbar .nav__link {
		display: flex;
		gap: 10px;
		padding: 16px 32px;
		transition: padding-left .5s ease-in-out;
	}
	.lateral__navbar .nav__link:hover {
		padding-left: 40px;
	}

	@media screen and (min-width: 800px) {
		.navbar {
			padding: 15px 80px;
		}
		.btn__toggle {
			display: none;
		}
		.navbar__desk {
			display: flex;
		}
		.lateral__nav,
		.lateral__nav.show {
			transform: translateX(-300px);
		}
	}
`;
