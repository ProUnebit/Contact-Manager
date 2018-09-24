import React from 'react'
import PropTypes from 'prop-types'
import { theme } from '../Styles/Theme'
import { Paper, Grid, Button, List, ListItem, ListItemIcon, ListItemText, Tooltip, Zoom, Hidden } from '@material-ui/core'
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles'
import { deepOrange } from '@material-ui/core/colors'
import NavigationIcon from '@material-ui/icons/Navigation'
import PhoneIcon from '@material-ui/icons/Phone'
import DraftsIcon from '@material-ui/icons/Drafts'
import ClearIcon from '@material-ui/icons/Clear'
import { Consumer } from '../context'

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
      gridTemplateColumns: 'minmax(10px, 20px) repeat(2, minmax(60px, 1fr)) minmax(60px, 80px)',
      gridTemplateRows: 'auto',
      // alignItems: 'center',
  },
  clearIcon: {
      gridColumn: '1 / 2',
      cursor: 'pointer',
      alignSelf: 'start',
  },
  title: {
      color: theme.palette.text.primary,
      gridColumn: '2 / 4',
  },
  button: {
      gridColumn: '4 / 5',
      alignSelf: 'end',
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
  lightTooltip: {
    background: theme.palette.common.white,
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[1],
    fontSize: 12,
  }
});

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showContactInfo: false
        }
    }

    onShowCLick = () => {
        this.setState(prevState => ({
            showContactInfo: !prevState.showContactInfo
        }));
    }

    onDeleteClick = (id, dispatch) => {
        dispatch({type: 'DELETE_CONTACT', payload: id})
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
                              <Hidden xsDown>
                                <ListItemIcon>
                                  <DraftsIcon />
                                </ListItemIcon>
                              </Hidden>
                            <ListItemText primary={`Email: ${contact.email}`} />
                          </ListItem>
                          <ListItem>
                              <Hidden xsDown>
                                <ListItemIcon>
                                  <PhoneIcon />
                                </ListItemIcon>
                               </Hidden>
                            <ListItemText primary={`Phone: ${contact.phone}`} />
                          </ListItem>
                      </List>
                </Paper>
        } else {
            contactInfo = null;
        }

        return (

            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <MuiThemeProvider theme={theme}>
                            <div className = {classes.root}>
                                <Grid
                                    container
                                    spacing={24}
                                    className = {classes.gridContainer}
                                    style = {marginTop}
                                    > <Grid item xs={10} sm={7} md={6} lg={4} xl={4}>
                                          <Paper className = {classes.paper1}>
                                              <div className = {classes.contact}>
                                                  <Tooltip
                                                      classes = {{tooltip: classes.lightTooltip}}
                                                      title="Delete ?"
                                                      placement="bottom-start"
                                                      TransitionComponent={Zoom}
                                                      TransitionProps={{ timeout: 400 }}
                                                      enterDelay={200}>
                                                      <ClearIcon
                                                          color="primary"
                                                          fontSize="small"
                                                          className = {classes.clearIcon}
                                                          onClick = {this.onDeleteClick.bind(this, contact.id, dispatch)}
                                                           />
                                                   </Tooltip>
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
                    )}}
            </Consumer>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
}

export default withStyles(styles)(Contact);
