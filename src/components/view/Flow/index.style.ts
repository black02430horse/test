import { StyledComponentProps, styled } from '@mui/material';

import { CustomTheme } from '../../../styles/types';

type FlowViewStyleProps = StyledComponentProps & {} ;

export const FlowViewStyle = styled('div')<FlowViewStyleProps>(
  ({ theme }) => {
    const customTheme = theme as CustomTheme;

    return {
        padding: "3rem 4rem",
        height: "100%",

        '.title': {
          marginBottom: "15px",
          fontFamily: "Nunito",
          fontWeight: customTheme.fontWeights.semibold
        },

        '.new-flow-btn': {
          backgroundColor: customTheme.colors.btnPrimary00,
          borderRadius: '4rem',
          padding: '1rem 1rem',
          textAlign: 'center',
          display: 'flex',
          textDecoration: 'none',
          color: customTheme.colors.white,
          alignItems: 'center',
          cursor: "pointer",
          width: "7rem",
          marginTop: "1rem"

        },

        '.flow-table': {
          marginTop: "2rem",
          // border: 'none',
          boxShadow: 'none',


          '.table-header': {
            backgroundColor: customTheme.colors.white,
            fontFamily: "Nunito",
            color: customTheme.colors.black,
            fontWeight: customTheme.fontWeights.regular,
            boxShadow: 'none',
            border: 'none',
            fontSize: '13px',
          },

          '.table-body': {
            backgroundColor: customTheme.colors.secondary10,
            fontFamily: "Nunito",
            color: customTheme.colors.black,
            fontWeight: customTheme.fontWeights.semiLight,
            boxShadow: 'none',
            // border: 'none',
            borderBottom: "12px solid white",
            fontSize: '16px',
            lineHeight: 1.6,

          },

          '.verification-page': {
            textDecoration: 'none',
            color: customTheme.colors.btnPrimary00
          },

          '.no-verification': {
            backgroundColor: customTheme.colors.secondary10,
            fontFamily: "Nunito",
            color: customTheme.colors.black,
            fontWeight: customTheme.fontWeights.semiLight,
            boxShadow: 'none',
            border: 'none',
            fontSize: '16px',
            lineHeight: 1.6,
            textAlign: 'center'
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