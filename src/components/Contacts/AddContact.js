import React from 'react'
import PropTypes from 'prop-types'
import MaskedInput from 'react-text-mask'
import { theme } from '../../Styles/Theme'
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles'
import { Grid, Paper, Button, Typography, TextField, MenuItem, FormControl, InputLabel, Input, ListItemIcon } from '@material-ui/core'
import BorderColorIcon from '@material-ui/icons/BorderColor'

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
    justifyContent: 'flex-start',
    textTransform: 'uppercase'
  },
  form: {

  },
  textField: {

  },
  formControl: {

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

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

const sexValues = ['Male', 'Female', 'Indefinite'];

class AddContact extends React.Component {

    state = {
        name: '',
        sex: '',
        email: '',
        phone: '(   )    -    ',
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
                                <ListItemIcon>
                                    <BorderColorIcon style = {{color: '#1DE9B6', marginLeft: '10px'}} />
                                </ListItemIcon>
                            </div>
                            <form
                                autoComplete="off"
                                className = {classes.form}>
                                <TextField
                                    onChange={this.handleChange('name')}
                                    required
                                    className={classes.textField}
                                    label="Name"
                                    helperText="Enter the contact name"
                                    value={name}
                                    margin="normal"
                                    style = {{width: 'calc(75% - 15px)', marginRight: '30px'}}
                                    />
                                <TextField
                                    onChange={this.handleChange('sex')}
                                    className={classes.textField}
                                    label="Sex"
                                    select
                                    value={sex}
                                    margin="normal"
                                    style = {{width: 'calc(25% - 15px)', verticalAlign: 'top'}}>
                                        {sexValues.map(sexValue => (
                                                <MenuItem key={sexValue} value={sexValue}>
                                                  {sexValue}
                                                </MenuItem>
                                            ))}
                                </TextField>
                                <TextField
                                    onChange={this.handleChange('email')}
                                    className={classes.textField}
                                    label="Email"
                                    helperText="Enter the contact email"
                                    value={email}
                                    margin="normal"
                                    style = {{width: 'calc(50% - 15px)', marginRight: '30px'}}
                                    />
                                <FormControl
                                    className={classes.formControl}
                                    margin="normal"
                                    style = {{width: 'calc(50% - 15px)', verticalAlign: 'top'}}>
                                  <InputLabel htmlFor="formatted-text-mask-input">Phone</InputLabel>
                                  <Input
                                    value={phone}
                                    onChange={this.handleChange('phone')}
                                    inputComponent={TextMaskCustom}
                                    />
                                </FormControl>
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

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

AddContact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(AddContact);
