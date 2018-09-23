import { createMuiTheme } from '@material-ui/core/styles'
import { deepOrange, teal } from '@material-ui/core/colors'

export const theme = createMuiTheme({
  palette: {
    primary: {
    light: deepOrange[300],
    main: deepOrange[400],
    dark: deepOrange[700],
    contrastText: '#fff',
    },
    secondary: {
      main: teal['A400'],
    },
  },
});
