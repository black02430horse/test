import { StyledComponentProps, styled } from '@mui/material';

import { CustomTheme } from '../../../styles/types';

type ConnectViewStyleProps = StyledComponentProps & {} ;

export const ConnectViewStyle = styled('div')<ConnectViewStyleProps>(
  ({ theme }) => {
    const customTheme = theme as CustomTheme;

    return {
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",

        '.title': {
          marginBottom: "15px",
          fontFamily: "Nunito",
          fontWeight: customTheme.fontWeights.regular
        },

        '.qr-code-wrapper': {
          backgroundColor: customTheme.colors.btnPrimary00,
          padding: "2rem 3rem 3rem 3rem",
          boxShadow: "0px 70px 80px 0px #986ce478",
          color: customTheme.colors.white,
          borderRadius: "3rem",
          textAlign: 'center',
          marginTop: '2.5rem',

          '.qr-code-container': {
            backgroundColor: customTheme.colors.white,
            borderRadius: '2rem',
            textAlign: 'center',
            padding: '1rem 0',
            marginTop: '2rem'
          }
        },

        '.font-size-36px': {
          fontSize: "36px"
        },

        '.font-size-24px': {
          fontSize: "24px"
        },

        '.font-size-12px': {
          fontSize: "12px"
        },

        '.font-size-18px': {
          fontSize: "18px"
        },

        '.font-family-nunito': {
          fontFamily: 'Nunito'
        },

        '.line-height-1': {
          lineHeight: '1'
        },

        '.text-decoration-none': {
          textDecoration: 'none'
        },

        '.align-items-center': {
          display: "flex",
          alignItems: "center"
        }
    }
  }
)