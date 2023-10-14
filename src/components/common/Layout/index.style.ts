import { StyledComponentProps, styled } from '@mui/material';

import { CustomTheme } from '../../../styles/types';

type LayoutComponentStyleProps = StyledComponentProps & {} ;

export const LayoutComponentStyle = styled('div')<LayoutComponentStyleProps>(
  ({ theme }) => {
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
          backgroundImage: 'url(/world.jpg)',
          padding: '4rem 2rem',
          borderRadius: '4rem 0 0 4rem',
          boxSizing: 'border-box'
        }
      }

      
    }
  }
)