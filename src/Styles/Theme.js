import { createMuiTheme } from '@material-ui/core/styles'
import { deepOrange, teal, pink } from '@material-ui/core/colors'

export const theme = createMuiTheme({
  palette: {
    primary: {
        light: deepOrange[300],
        main: deepOrange[400],
        dark: deepOrange[700],
        contrastText: '#fff',
    },
    secondary: {
        light: pink['A400'],
        main: teal['A400'],
    }
  }
});
