import { createTheme } from '@mui/material/styles';

const themeColor = {
	colors: {
		white: '#ffffff',
		black: '#000000',
		secondary00: '#0D1E3E',
		btnPrimary00: '#8A6BE1',
		btnSecondary00: '#F5F2FD'
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