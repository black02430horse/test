import { StyledComponentProps, styled } from '@mui/material';

import { CustomTheme } from '../../../styles/types';

type CreateViewStyleProps = StyledComponentProps & {} ;



export const CreateViewStyle = styled('div')<CreateViewStyleProps>(
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
          alignItems: "center"
        },

        '.flow-name-group': {
          marginTop: "2rem",

          '.flow-name': {
            fontFamily: "Nunito",
            fontWeight: customTheme.fontWeights.regular
          }
        },

        '.attribute-container': {
          display: "flex", 
          position: "relative", 
          width: "28rem",
          alignItems: "center",

          '.add-attribute-btn': {
            backgroundColor: customTheme.colors.btnPrimary00,
            borderRadius: "2rem",
            padding: "0.5rem 0.8rem",
            color: customTheme.colors.white,
            cursor: "pointer",
            position: "absolute",
            right: 0
          },
        },
        '.qr-title': {
          fontWeight: customTheme.fontWeights.regular,
          marginBottom: "1rem"
        },

        '.qr-code-wrapper': {
          borderRadius: "2rem",
          padding: "2.5rem",
          backgroundColor: customTheme.colors.btnPrimary00,
          boxShadow: "0px 70px 80px 0px #986ce478",
          width: "18rem",
          margin: "auto",

          '.qr-code-container': {
            padding: "1rem",
            backgroundColor: customTheme.colors.white,
            borderRadius: "1rem"
          }
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
    }
  }
)