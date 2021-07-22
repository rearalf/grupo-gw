import css from 'styled-jsx/css';
import { theme } from '../theme';

export const Home__Styles = css`
	.section__one {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: repeat(2, 1fr);
		align-items: center;
		justify-items: center;
		margin-bottom: 25px;
	}

	.section__one .column__one {
		text-align: center;
		margin-bottom: 25px;
	}
	.section__one .column__one .column__one__title {
		font-size: 40px;
		margin-bottom: 10px;
	}
	.section__one .column__one .column__one__subtitle {
		font-size: 30px;
		margin-bottom: 25px;
	}

	.btn__group {
		display: flex;
		gap: 10px;
		justify-content: center;
	}

	.section__one .column__two {
		display: grid;
		grid-template-columns: repeat(4, 80px);
		grid-template-rows: repeat(4, 60px);
		grid-template-areas: "Text1 Text1  . Text2" "Text3 img img Text2" "Text3  img img Text4"
			"Text5 Text5 . Text4";
		margin-bottom: 25px;
	}

	.section__one .column__two .header__zapato {
		grid-area: img;
	}
	.section__one .column__two .text__one {
		grid-area: Text1;
		place-self: center;
	}
	.section__one .column__two .text__two {
		grid-area: Text2;
		place-self: center;
	}
	.section__one .column__two .text__three {
		grid-area: Text3;
		place-self: center;
	}
	.section__one .column__two .text__four {
		grid-area: Text4;
		place-self: center;
	}
	.section__one .column__two .text__five {
		grid-area: Text5;
		place-self: center;
	}

	.section__one .column__two .header__zapato {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.section__one .column__two .header__zapato img {
		width: 100%;
		transition: all .5s;
	}
	.section__one .column__two .header__zapato img:hover {
		transform: rotate(45deg);
	}
	.section__one .column__two .header__zapato::after {
		content: '';
		display: block;
		background-color: ${theme['--background-color-secondary']};
		border-radius: 50%;
		position: absolute;
		z-index: -1;
		width: 100%;
		height: 100%;
	}

	.section__one .column__two .text__shoes {
		color: ${theme['--color-h2']};
		transition: all .5s;
		font-size: 12px;
	}
	.section__one .column__two .text__shoes:hover {
		transform: translateX(1rem);
	}
	.section__one .column__two .text__shoes::after {
		content: '';
		display: block;
		margin-top: 5px;
		border-bottom: 2px solid ${theme['--color-h2']};
	}

	.section__two {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 25px;
	}
	.section__two .column__one,
	.section__two .column__two {
		flex: 1;
	}

	.section__two .column__one {
		text-align: center;
		margin-bottom: 25px;
	}
	.section__two .column__one .column__one__title {
		font-size: 30px;
		margin-bottom: 25px;
	}

	.section__two .column__two {
		display: flex;
		justify-content: center;
	}
	.section__two .column__two img {
		width: 200px;
		border-radius: ${theme['--border-radius']};
		box-shadow: 4px 4px 10px 0 hsl(0, 0%, 40%, .4);
	}

	@media screen and (min-width: 768px) {
		.section__one {
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(1, 1fr);
		}
		.section__one .column__one {
			text-align: left;
			justify-self: flex-start;
		}
		.btn__group {
			justify-content: flex-start;
		}
		.section__one .column__two .text__shoes {
			font-size: 14px;
		}

		.section__two {
			flex-direction: row;
		}
		.section__two .column__one {
			text-align: left;
		}
	}

	@media screen and (min-width: 1024px) {
		.section__one .column__two {
			grid-template-columns: repeat(4, 120px);
			grid-template-rows: repeat(4, 100px);
		}
		.section__one .column__two .text__shoes {
			font-size: 20px;
		}

		.section__two .column__one .column__one__title {
			font-size: 35px;
		}
		.section__two .column__one .column__one__text {
			font-size: 18px;
		}
		.section__two .column__two img {
			width: 400px;
		}
	}
`;
