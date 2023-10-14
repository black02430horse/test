import { StyledComponentProps, styled } from '@mui/material';

import { CustomTheme } from '../../../styles/types';

type DetailViewStyleProps = StyledComponentProps & {} ;



export const DetailViewStyle = styled('div')<DetailViewStyleProps>(
  ({ theme }) => {
    const customTheme = theme as CustomTheme;

    return {
        padding: "3rem 4rem",
        // height: "100%",

        '.title': {
          marginBottom: "15px",
          fontFamily: "Nunito",
          fontWeight: customTheme.fontWeights.semibold,
          display: "flex",
          alignItems: "center",

        },
        
        '.flow-table': {
          '.table-head': {
            backgroundColor: customTheme.colors.white,
            color: customTheme.colors.black,
            fontWeight: customTheme.fontWeights.regular,
            fontFamily: 'Nunito',
            boxShadow: "none",
            border: "none"
          },

          'table': {
            borderCollapse: 'separate',
            borderSpacing: '0px 7px',
          },

          'tbody tr td': {
            // color: customTheme.colors.black,
            fontFamily: "Nunito",
            fontSize: "15px",
            fontWeight: customTheme.fontWeights.semiLight,
            border: "none",
            backgroundColor: customTheme.colors.secondary20,
          },

          'tr td: first-child': {
            borderRadius: '1rem 0 0 1rem'
          },

          'tr td: last-child': {
            borderRadius: '0 1rem 1rem 0'
          },
        },

        '.right-container': {
          display: "grid",
          justifyContent: "center",
          alignItems: "center"
        },

        '.qr-title': {
          fontWeight: customTheme.fontWeights.regular,
          marginBottom: "1rem"
        },

        '.qr-code-wrapper': {
          borderRadius: "2.5rem",
          padding: "2.5rem",
          backgroundColor: customTheme.colors.btnPrimary00,
          boxShadow: "0px 70px 80px 0px #986ce478",
          width: "14.5rem",
          margin: "auto",

          '.qr-code-container': {
            padding: "1rem",
            backgroundColor: customTheme.colors.white,
            borderRadius: "1rem"
          }
        },
        '.btn': {
          backgroundColor: customTheme.colors.btnPrimary00,
          color: customTheme.colors.white,
          borderRadius: "3rem",
          padding: "0.7rem 1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer"
        },

        '.access-btn': {
          marginTop: "2rem",
          display: "flex",
          padding: "0.7rem 1.5rem",
          border: "1px solid orange",
          borderRadius: "0.5rem",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer"
        },

        '.pdf-btn': {
          width: "7.5rem",
          marginTop: "1.5rem",
          marginBottom: "4rem"
        },

        'export-btn': {
          display: "flex",
          alignItems: "center",
          width: "14.5rem",
        },

        '.font-size-48px': {
          fontSize: "40px"
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

        '.font-size-15px': {
          fontSize: "15px"
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
        },

        '.text-align-left': {
          textAlign: "left"
        },

        '.text-align-center': {
          textAlign: "center"
        },

        '.border-radius-left': {
          borderRadius: "1rem 0 0 1rem"
        },

        '.border-radius-right': {
          borderRadius: "0 1rem 1rem 0"
        },

        '.font-regular': {
          fontWeight: customTheme.fontWeights.regular
        },

        '.color-red': {
          color: "red"
        },

        '.color-green': {
          color: "green"
        },

        '.color-orange': {
          color: "orange"
        },

        '.color-black': {
          color: "black"
        }
    }
  }
)