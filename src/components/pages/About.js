import React from 'react'
import { theme } from '../../Styles/Theme'
import { Paper, Grid, Typography, Button, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles'
import { Drafts } from '@material-ui/icons'

const styles = theme => ({
    gridContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '40px'
    },
    paper: {
        padding: theme.spacing.unit * 2.5,
    },
    list: {

    },
})

const About =  (props) => {

    const { classes } = props;

    return (
        <MuiThemeProvider theme={theme}>
            <Grid
                container
                spacing={24}
                className = {classes.gridContainer}>
                <Grid item xs={10} sm={7} md={6} lg={5} xl={5}>
                    <Paper className = {classes.paper}>
                        <Typography align="center">
                            <h2>About Contact Manager</h2>
                            <p>React.js App to manage contacts</p>
                            <p>Version: <span style = {{color: '#FF7043'}}>0.8 Alfa</span></p>
                        </Typography>
                        <Typography align="center">
                            <h3>Follow me:</h3>
                        </Typography>
                        <Grid
                            container
                            spacing={24}
                            style = {{marginTop: '20px'}}>
                            <Grid item xs>
                                <List className = {classes.list}>
                                    <ListItem
                                        button
                                        onClick = {() => window.open('https://twitter.com/ProUnebit')}>
                                        <ListItemText secondary="Twitter" />
                                    </ListItem>
                                    <ListItem
                                        button
                                        onClick = {() => window.open('https://github.com/ProUnebit')}>
                                        <ListItemText secondary="GitHub" />
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs>
                                <List className = {classes.list}>
                                    <ListItem
                                        button
                                        onClick = {() => window.open('https://moikrug.ru/pro-une-bit')}>
                                        <ListItemText secondary="Moikrug" />
                                    </ListItem>
                                    <ListItem
                                        button
                                        onClick = {() => window.open('https://www.linkedin.com/in/alexey-ratnikov')}>
                                        <ListItemText  secondary="Linkedin" />
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </MuiThemeProvider>
    )
}

export default withStyles(styles)(About)
