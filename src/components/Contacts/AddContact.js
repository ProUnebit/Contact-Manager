import React from 'react'
import PropTypes from 'prop-types'
import { theme } from '../../Styles/Theme'
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles'
import { Grid, Paper, Button, Typography, TextField, MenuItem } from '@material-ui/core'

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
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,

  },
  submit: {
      marginTop: '25px'
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
        sex: '',
        email: '',
        phone: ''
    }

    handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    };

    render () {

        let { classes } = this.props;
        let { name, sex, email, phone } = this.state;

        return (
            <MuiThemeProvider theme={theme}>
                <Grid
                    container
                    spacing={24}
                    className = {classes.gridContainer}>
                    <Grid item xs={10} sm={7} md={6} lg={5} xl={5}>
                        <Paper className = {classes.paper}>
                            <div className = {classes.formHeadline}>
                                <Typography
                                    color="primary"
                                    variant="headline"
                                    component="h3"
                                    >Add Contact
                                </Typography>
                                <Typography component="p">
                                    |||
                                </Typography>
                            </div>
                            <form autoComplete="off">
                                <TextField
                                    onChange={this.handleChange('name')}
                                    required
                                    className={classes.textField}
                                    label="Name"
                                    helperText="Enter the contact name"
                                    value={name}
                                    margin="normal"
                                    style = {{width: 'calc(75% - 10px)', marginRight: '20px'}}
                                    />
                                <TextField
                                    onChange={this.handleChange('name')}
                                    className={classes.textField}
                                    label="Sex"
                                    select
                                    value={sex}
                                    margin="normal"
                                    style = {{width: 'calc(25% - 10px)', verticalAlign: 'top'}}>
                                        <MenuItem>Male</MenuItem>
                                        <MenuItem>Female</MenuItem>
                                        <MenuItem>Indefinite</MenuItem>
                                </TextField>
                                <TextField
                                    onChange={this.handleChange('name')}
                                    fullWidth = {true}
                                    className={classes.textField}
                                    label="Email"
                                    helperText="Enter the contact email"
                                    value={email}
                                    margin="normal"
                                    />
                                <TextField
                                    onChange={this.handleChange('name')}
                                    fullWidth = {true}
                                    className={classes.textField}
                                    label="Phone"
                                    helperText="Enter the contact phone"
                                    value={phone}
                                    margin="normal"
                                    />
                                <Button
                                    disabled = {false}
                                    variant="flat"
                                    size="large"
                                    color="primary"
                                    fullWidth = {true}
                                    className = {classes.submit}>
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
