import css from 'styled-jsx/css';
import { theme } from '../../styles/theme';

export const Footer__styles = css`
	.footer {
		margin-top: 50px;
		background-color: ${theme['--background-color-secondary']};
		box-shadow: 0 -5px 4px 0 ${theme['--color-box-shadow']};
	}
	.footer__container {
		padding: 15px 30px;
	}

	.footer_section__one {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 25px;
	}
	.footer__brand {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.footer__brand .brand__logo {
		margin-right: 10px;
	}

	.footer__line {
		opacity: .5;
		margin-bottom: 25px;
	}

	.footer__section_two {
		list-style: none;
		padding: 0 25%;
		margin-bottom: 25px;
	}
	.footer__contact {
		display: flex;
		align-items: center;
		margin-bottom: 25px;
	}
	.footer__contact :global(svg) {
		margin-right: 10px;
		align-self: flex-start;
	}

	.end__footer {
		background-color: ${theme['--background-color-primary']};
		padding: 15px 0;
	}
	.end__content__footer {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: .8em;
		text-align: center;
	}

	@media screen and (min-width: 575px) {
		.footer__container {
			padding: 15px 80px;
		}
		.footer__section_two {
			display: flex;
			align-items: flex-start;
			justify-content: space-between;
			padding: 0;
		}
	}
`;
