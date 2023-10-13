import { StyledComponentProps, styled } from '@mui/material';

import { CustomTheme } from '../../../styles/types';

type SidebarComponentStyleProps = StyledComponentProps & {} ;

export const SidebarComponentStyle = styled('div')<SidebarComponentStyleProps>(
  ({ theme }) => {
    const customTheme = theme as CustomTheme;
    return {
      width: "300px",
      height: "100vh",
      backgroundColor: customTheme.colors.secondary00,
      '.sidebar-logo-img': {
        marginLeft: "9%",
        paddingTop: "3.5rem",
        width: '200px',
        marginBottom: '2rem',
      },
      '.sidebar-list': {
        padding: '2rem',
        '.sidebar-item': {
          display: "flex",
          padding: "0.75rem",
          borderRadius: "3rem",
          marginBottom: "1rem",
          textDecoration: "none",
          color: customTheme.colors.white,
          '.sidebar-link-text' : {
            fontFamily: "Nunito",
            marginLeft: "1rem",
            fontSize: "17px"
          }
        },
        '.active' : {
          backgroundColor: customTheme.colors.white,
          color: customTheme.colors.black
        }
      }
    }
  }
)