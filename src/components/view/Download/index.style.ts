import { StyledComponentProps, styled } from '@mui/material';

import { CustomTheme } from '../../../styles/types';

type DownloadViewStyleProps = StyledComponentProps & {} ;

export const DownloadViewStyle = styled('div')<DownloadViewStyleProps>(
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

        '.btn-group': {
          display: "flex",
          marginTop: '0px',
          margin: 'auto',

          '.btn': {
            marginRight: "8px",
            height: '47px',
            backgroudColor: customTheme.colors.black,
            borderRadius: '0.5rem',
            width: "12.5rem",
            '.btn-item': {
              marginRight: "8px"
            }
          },
        },

        '.up-container': {
          display: "grid",
          justifyContent: "center",
          width: "400px",
          margin: "auto"
        },

        '.qr-code-wrapper': {
          backgroundColor: customTheme.colors.btnPrimary00,
          padding: "1rem 3.5rem 3.5rem 3.5rem",
          boxShadow: "0px 70px 80px 0px #986ce478",
          color: customTheme.colors.white,
          borderRadius: "3rem",
          textAlign: 'center',
          marginTop: '2.5rem',

          '.qr-code-container': {
            backgroundColor: customTheme.colors.white,
            borderRadius: '1.5rem',
            textAlign: 'center',
            padding: '1rem'
          }
        },

        '.next-btn-group': {
          backgroundColor: customTheme.colors.btnSecondary00,
          borderRadius: '1rem',
          padding: '1rem 1.5rem',
          display: 'flex',

          '.next-btn': {
            backgroundColor: customTheme.colors.btnPrimary00,
            borderRadius: '4rem',
            padding: '0.8rem 1rem',
            textAlign: 'center',
            display: 'flex',
            textDecoration: 'none',
            color: customTheme.colors.white,
            marginLeft: "2rem",
            alignItems: 'center'
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