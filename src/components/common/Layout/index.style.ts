import { StyledComponentProps, styled } from '@mui/material';

import { CustomTheme } from '../../../styles/types';
import { PATH } from '../../../consts';

type LayoutComponentStyleProps = StyledComponentProps & {currentPath : string} ;

export const LayoutComponentStyle = styled('div')<LayoutComponentStyleProps>(
  ({ theme, currentPath }) => {
    const customTheme = theme as CustomTheme;

    return {
      display: "flex",

      '.sidebar': {
        width: "350px"
      },

      '.main-container': {
        width: "100%",
        backgroundColor: customTheme.colors.secondary00,

        '.landing': {
          backgroundColor: customTheme.colors.white,
          // width: "100%",
          height: '100%',
          backgroundImage: (currentPath === PATH.DOWNLOAD || currentPath === PATH.CONNECT) ? 'url(/world.jpg)' : '',
          padding: '2rem 2rem',
          borderRadius: '3rem 0 0 3rem',
          boxSizing: 'border-box',
          position: 'relative'
        },

        '.profile-container': {
          display: 'flex',
          position: 'absolute',
          right: 0,
          marginTop: "2rem",

          '.profile-name': {
            fontFamily: 'Nunito',
            fontSize: "18px",
            display: "flex",
            alignItems: "center"
          },

          '.profile': {
            marginLeft: '1rem',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
          }
        },
        
      },

      '.margin-right-1': {
        marginRight: "0.5rem"
      },

      '.margin-left-1': {
        marginLeft: "1.5rem"
      }
      
    }
  }
)