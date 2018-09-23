import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Grid, Button, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { deepOrange, teal } from '@material-ui/core/colors';
import NavigationIcon from '@material-ui/icons/Navigation';
import PhoneIcon from '@material-ui/icons/Phone';
import DraftsIcon from '@material-ui/icons/Drafts';

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
      justifyContent: 'center'
  },
  paper1: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper2: {
    // padding: theme.spacing.unit * 2,
    marginTop: '15px',
    backgroundColor: deepOrange[50],
    overflow: 'hidden',
  },
  contact: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr) minmax(60px, 80px)',
      // alignItems: 'center',
  },
  title: {
      color: theme.palette.text.primary,
      gridColumn: '1 / 4',
  },
  button: {
      gridColumn: '4 / 5',
      alignSelf: 'end ',
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
  },
  extendedIcon: {
      marginRight: theme.spacing.unit / 2,
      fontSize: '15px',
      transition: 'all .2s ease',
      // transform: 'rotate(180deg)'
},
});

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showContactInfo: false
        }
    }


    onShowCLick = event => {
        this.setState(prevState => ({
            showContactInfo: !prevState.showContactInfo
        }));
    }

    render () {

        const { classes, contact, marginTop } = this.props;
        const { showContactInfo } = this.state;

        let navigationIcon = !showContactInfo ? {transform: 'rotate(180deg)'} : {transform: 'rotate(360deg)'}

        let contactInfo;

        if (showContactInfo) {
            contactInfo =
                <Paper className = {classes.paper2}>
                    <List component="nav" className = {classes.list}>
                          <ListItem>
                            <ListItemIcon>
                              <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary={`Email: ${contact.email}`} />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <PhoneIcon />
                            </ListItemIcon>
                            <ListItemText primary={`hone: ${contact.phone}`} />
                          </ListItem>
                      </List>
                </Paper>;
        } else {
            contactInfo = null;
        }

        return (
            <MuiThemeProvider theme={theme}>
                <div className = {classes.root}>
                    <Grid
                        container
                        spacing={24}
                        className = {classes.gridContainer}
                        style = {marginTop}
                        > <Grid item xs={4}>
                              <Paper className = {classes.paper1}>
                                  <div className = {classes.contact}>
                                      <h2 className = {classes.title}>{contact.name}</h2>
                                      <Button
                                          onClick = {this.onShowCLick}
                                          color="secondary"
                                          variant="extendedFab"
                                          size="small"
                                          className = {classes.button}>
                                          <NavigationIcon
                                              fontSize="small"
                                              className = {classes.extendedIcon}
                                              style = {navigationIcon}
                                              />
                                          Open
                                      </Button>
                                  </div>
                                  {contactInfo}
                              </Paper>
                         </Grid>
                    </Grid>
                </div>
            </MuiThemeProvider>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
}

export default withStyles(styles)(Contact);
