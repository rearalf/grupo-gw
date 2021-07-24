import css from 'styled-jsx/css';
import { theme } from '../theme';

export const Contact__Styles = css`
	.title__contact {
		margin-bottom: 25px;
	}

	h2 {
		margin-bottom: 25px;
	}

	.content__contact {
		display: grid;
		grid-template-columns: 1fr;
	}

	.section__contact {
		justify-self: center;
	}

	.form__contacts {
		position: relative;
	}

	.input__group {
		position: relative;
		width: 100%;
		margin-bottom: 25px;
	}
	.input__group.text__area__group {
		height: auto;
	}
	.form__control {
		width: 100%;
		border: 1px solid #cccccc;
		background-color: transparent;
		border-radius: 8px;
		padding: 12px;
		font-family: ${theme['--font-family-Open-Sans']};
	}
	.form__control:hover {
		outline: #cccccc auto 1px;
	}
	.form__control:focus {
		outline: #66778d auto 1px;
	}
	.form__control::placeholder {
		opacity: .6;
	}
	.form__label {
		font-size: 12px;
		background-color: ${theme['--background-color-primary']};
		padding: 0 5px;
		position: absolute;
		top: -10px;
		left: 8px;
	}

	.input__group .error {
		position: absolute;
		top: 0;
		right: 0;
	}
	.input__group .error .error__message {
		visibility: hidden;
		width: 0;
		font-size: 0;
		text-align: center;
		background-color: #ffd0cb;
		color: #e9594c;
		border-radius: ${theme['--border-radius']};
		position: absolute;
		top: 45px;
		right: 0;
		z-index: 3;
		opacity: 0;
		transition: all .2s ease-in-out;
	}
	.input__group .error .error__message:after {
		content: '';
		position: absolute;
		right: 0;
		top: -15px;
		transform: translateX(-8px);
		width: 0;
		height: 0;
		border-left: 10px solid transparent;
		border-bottom: 15px solid #ffd0cb;
		border-right: 10px solid transparent;
	}
	.input__group .error:hover .error__message {
		visibility: inherit;
		opacity: 1;
		width: 119px;
		padding: 5px 10px;
		font-size: 12px;
	}
	.input__group .error :global(svg) {
		color: #e9594c;
		font-size: 20px;
		position: absolute;
		right: 8px;
		top: 12px;
		cursor: pointer;
	}

	.message__form {
		cursor: pointer;
		position: absolute;
		right: 0;
		bottom: 0;
		background-color: #c5f7dd;
		color: #3bc279;
		border-radius: ${theme['--border-radius']};
		display: flex;
		align-items: center;
		visibility: hidden;
		width: 0;
		font-size: 0;
		transition: all .2s ease-in-out;
	}

	.message__form :global(svg) {
		margin-right: 10px;
	}

	.message__form.show__message__form {
		visibility: inherit;
		width: auto;
		font-size: 14px;
		padding: 10px 15px;
	}

	@media screen and (max-width: 768px) {
		.section__contact {
			margin-bottom: 50px;
			grid-row-start: 1;
		}
	}

	@media screen and (min-width: 768px) {
		.content__contact {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
	}

	.social__media {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 25px;
	}
	.social__media .social__network {
		background-color: ${theme['--background-color-secondary']};
		border-radius: 50%;
		margin: 0 5px;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 50px;
		height: 50px;
	}

	.contact__section {
		list-style: none;
	}
	.contact__section .contact {
		display: flex;
		margin-bottom: 25px;
	}
	.contact__section .contact :global(svg) {
		margin-right: 10px;
	}
`;
