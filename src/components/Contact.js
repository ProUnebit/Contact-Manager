import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';
import teal from '@material-ui/core/colors/green';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
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

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  gridContainer: {
      justifyContent: 'center',
      marginTop: '30px'
  },
  paper1: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper2: {
    padding: theme.spacing.unit * 2,
    marginTop: '10px',
    textAlign: 'center',
    backgroundColor: deepOrange[50],
    overflow: 'hidden'
  },
  title: {
      color: theme.palette.text.primary
  },
  button: {
      alignSelf: 'flex-end'
  },
  list: {
      listStyle: 'none',
      textAlign: 'left',
  },
  listItem: {
      // color: theme.palette.primary.contrastText,
  },
  listItemValue: {
      // color: deepOrange[50]
  }
});

class Contact extends React.Component {
    render () {

        const { classes, name, email, phone } = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                <div className={classes.root}>
                    <Grid
                        container
                        spacing={24}
                        className={classes.gridContainer}
                        > <Grid item xs={6}>
                              <Paper className={classes.paper1}>
                                  <h4 className={classes.title}>{name}</h4>
                                  <Button color="secondary" className={classes.button}>Open</Button>
                                  <Paper className={classes.paper2}>
                                      <ul className={classes.list}>
                                          <li className={classes.listItem}>
                                              Email: <span className={classes.listItemValue}>{email}</span>
                                          </li>
                                          <li className={classes.listItem}>
                                              Phone: <span className={classes.listItemValue}>{phone}</span>
                                          </li>
                                      </ul>
                                  </Paper>
                              </Paper>
                         </Grid>
                    </Grid>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default withStyles(styles)(Contact);
