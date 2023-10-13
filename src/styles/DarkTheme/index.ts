import { createTheme } from '@mui/material/styles';

const themeColor = {
	colors: {
		white: '#ffffff',
		black: '#000000',
		secondary00: '#0D1E3E'
	}
};

const themeFont = {
	fonts: {
		mainFont: 'Arial'
	},
	fontWeights: {
		semibold: 900,
		regular: 700,
		light: 400
	}
};

export const darkTheme = createTheme({
	...themeColor,
	...themeFont,
	palette: {
		mode: 'dark'
	}
});