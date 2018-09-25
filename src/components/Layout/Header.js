import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { theme } from '../../Styles/Theme'
import { withStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core'
import { Home, PersonAdd, ContactSupport } from '@material-ui/icons'

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: '2px',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: theme.palette.secondary.main
  },
  buttonList: {
      display: 'flex',
      listStyle: 'none',
  },
  buttonListItem: {
      marginRight: '10px',
  }
};

const header = (props) => {

    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar
              color="secondary"
              position="static">
                <Toolbar variant="dense">
                  <IconButton
                      component={Link}
                      to="/"
                      aria-label="Home"
                      className={classes.menuButton}>
                    <Home />
                  </IconButton>
                  <Typography
                      variant="title"
                      color="inherit"
                      className={classes.grow}
                      >{props.branding}
                  </Typography>
                  <Button
                      component={Link}
                      to="/contact/add"
                      color="inherit"
                      >Add Contact
                      <PersonAdd style={{ fontSize: 16, marginLeft: 6 }} />
                  </Button>
                  <Button
                      component={Link}
                      to="/about"
                      color="inherit"
                      >About
                      <ContactSupport style={{ fontSize: 16, marginLeft: 6 }} />
                  </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

header.defaultProps = {
    branding: 'My App'
}

header.propTypes = {
    branding: PropTypes.string.isRequired
}

export default withStyles(styles)(header)
