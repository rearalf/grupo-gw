import css from 'styled-jsx/css';
import { theme } from '../theme';

export const About__Styles = css`
	.section__one {
		display: grid;
		text-align: center;
		align-items: center;
		justify-items: center;
		margin-bottom: 25px;
	}
	.section__one .comolumn__one {
		margin-bottom: 25px;
	}
	.section__one .section__column__title__two,
	.section__one .section__column__title__one {
		margin-bottom: 15px;
	}
	.section__one .img__one {
		width: 260px;
		height: 325px;
	}
	.section__one .column__one__part__one {
		margin-bottom: 15px;
	}

	.section__three .line__one,
	.section__one .line__one {
		background-color: ${theme['--color-h1']};
		padding: 1px;
		border: none;
		margin-bottom: 15px;
	}

	.section__two {
		display: grid;
		align-items: center;
		justify-items: center;
		text-align: center;
		margin-bottom: 50px;
	}
	.section__two .img__two {
		width: 260px;
		height: 155px;
	}
	.section__two .img__two,
	.section__one .img__one {
		border-radius: ${theme['--border-radius']};
		box-shadow: 4px 4px 10px 0 hsl(0, 0%, 40%, .4);
	}
	.section__two .section__two__text__one,
	.section__two .img__two,
	.section__two .section__two__text__two {
		margin-bottom: 25px;
	}

	.section__three {
		display: grid;
		align-items: center;
		justify-items: center;
	}
	.section__three .section__three__part__one {
		margin-bottom: 25px;
	}
	.section__three .section__three__part__two {
		display: flex;
		flex-direction: column;
	}
	.section__three .section__three__part__two .part__two__column__one,
	.section__three .section__three__part__two .part__two__column__two {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 16px 32px;
		background-color: ${theme['--background-color-secondary']};
		border-radius: ${theme['--border-radius']};
		box-shadow: 4px 4px 10px 0 hsl(0, 0%, 40%, .4);
	}
	.section__three .section__three__part__two .part__two__column__one {
		margin-bottom: 25px;
	}
	.section__three .section__three__part__two .part__two__column__two {
		margin-bottom: 25px;
	}
	.section__three .section__three__part__two .part__two__column__one .title,
	.section__three .section__three__part__two .part__two__column__two .title {
		margin-bottom: 25px;
	}

	@media screen and (min-width: 768px) {
		.section__one {
			text-align: left;
			margin-bottom: 50px;
			grid-template-columns: repeat(2, 1fr);
		}
		.section__one .comolumn__one {
			margin-right: 25px;
			margin-bottom: 0;
		}

		.section__two {
			grid-template-columns: repeat(2, 1fr);
			text-align: left;
		}
		.section__two__text__one {
			grid-column: 1/3;
		}
		.section__two .img__two {
			justify-self: flex-start;
		}

		.section__three .section__three__part__two {
			flex-direction: row;
		}
		.section__three .section__three__part__two .part__two__column__one {
			margin-right: 15px;
			margin-bottom: 0;
		}
		.section__three .section__three__part__two .part__two__column__two {
			margin-left: 15px;
			margin-bottom: 0;
		}
	}

	@media screen and (min-width: 1024px) {
		.section__two .img__two {
			justify-self: flex-start;
		}
	}
`;
