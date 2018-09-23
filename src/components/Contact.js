import React from 'react'
import PropTypes from 'prop-types'
import { theme } from '../Styles/Theme'
import { Paper, Grid, Button, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles'
import { deepOrange } from '@material-ui/core/colors'
import NavigationIcon from '@material-ui/icons/Navigation'
import PhoneIcon from '@material-ui/icons/Phone'
import DraftsIcon from '@material-ui/icons/Drafts'
import ClearIcon from '@material-ui/icons/Clear'

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
      gridTemplateColumns: 'minmax(10px, 20px) repeat(2, 1fr) minmax(60px, 80px)',
      // alignItems: 'center',
  },
  clearIcon: {
      gridColumn: '1 / 2',
      cursor: 'pointer',
  },
  title: {
      color: theme.palette.text.primary,
      gridColumn: '2 / 4',
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
      // marginRight: theme.spacing.unit / 2,
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

        let navigationIcon = !showContactInfo ?
        {transform: 'rotate(180deg)', marginRight: theme.spacing.unit / 2}
        :
        {transform: 'rotate(360deg)', marginRight: theme.spacing.unit * 1.4}

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
                                      <ClearIcon
                                          color="primary"
                                          fontSize="small"
                                          className = {classes.clearIcon}
                                          onClick = {() => console.log(123)}
                                           />
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
                                          {!showContactInfo ? 'Show' : 'Hide'}
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
