import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const header = (props) => {

    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                  <IconButton className={classes.menuButton} color="inherit" aria-label="Home">
                    <HomeIcon />
                  </IconButton>
                  <Typography variant="title" color="inherit" className={classes.grow}>
                    {props.branding}
                  </Typography>
                  <ul>
                      <li>
                          <a href="/">Home</a>
                      </li>
                      <li>
                          <a href="/">Add contact</a>
                      </li>
                  </ul>
                  <Button color="inherit">Add Contact</Button>
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
