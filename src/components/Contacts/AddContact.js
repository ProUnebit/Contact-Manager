import React from 'react'
import PropTypes from 'prop-types'
import { theme } from '../../Styles/Theme'
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles'
import { Grid, Paper, Button, Typography } from '@material-ui/core'

const styles = theme => ({
  gridContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '40px'
  },
  paper: {
      padding: theme.spacing.unit * 2,

  },
  formHeadline: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    textTransform: 'uppercase'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  submit: {
      minWidth: '100%'
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class AddContact extends React.Component {

    state = {
        name: '',
        email: '',
        phone: ''
    }

    render () {

        const { classes } = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                <Grid
                    container
                    spacing={24}
                    className = {classes.gridContainer}>
                    <Grid item xs={10} sm={7} md={6} lg={5} xl={5}>
                        <Paper className = {classes.paper}>
                            <div className = {classes.formHeadline}>
                                <Typography color="primary" variant="headline" component="h3">
                                    Add Contact
                                </Typography>
                                <Typography component="p">
                                    |||
                                </Typography>
                            </div>
                            <form>
                                <Button variant="contained" size="large" color="secondary" className={classes.submit}>
                                    S u b m i t
                                </Button>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </MuiThemeProvider>
        )
    }
}

export default  withStyles(styles)(AddContact);
