import React from 'react'
import { theme } from '../../Styles/Theme'
import { Paper, Grid, Typography, List, ListItem, ListItemText, Avatar } from '@material-ui/core'
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles'

const styles = theme => ({
    gridContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 40
    },
    paper: {
        padding: theme.spacing.unit * 2.5,
    }
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
                        <Typography align="center" variant="title">
                            About Contact Manager
                        </Typography>
                        <Typography align="center" variant="subheading" color="textSecondary">
                            React.js App to manage contacts
                        </Typography>
                        <Typography align="center" variant="caption">
                            Version: <span style = {{color: '#FF7043'}}>0.8 Alfa</span>
                        </Typography>
                        <Typography align="center" variant='title' style = {{marginTop: 30}}>
                            Follow me:
                        </Typography>
                        <Grid
                            container
                            spacing={24}
                            style = {{marginTop: 10, padding: '0 80px'}}>
                            <Grid item xs>
                                <List>
                                    <ListItem
                                        button
                                        onClick = {() => window.open('https://github.com/ProUnebit')}>
                                        <Avatar style = {{backgroundColor: '#616161'}}>G</Avatar>
                                        <ListItemText secondary="GitHub" align="center" />
                                    </ListItem>
                                    <ListItem
                                        button
                                        onClick = {() => window.open('https://twitter.com/ProUnebit')}>
                                        <Avatar style = {{backgroundColor: '#2196F3'}}>T</Avatar>
                                        <ListItemText secondary="Twitter" align="center" />
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs>
                                <List>
                                    <ListItem
                                        button
                                        onClick = {() => window.open('https://moikrug.ru/pro-une-bit')}>
                                        <Avatar style = {{backgroundColor: '#FF5252'}}>M</Avatar>
                                        <ListItemText secondary="Moikrug" align="center" />
                                    </ListItem>
                                    <ListItem
                                        button
                                        onClick = {() => window.open('https://www.linkedin.com/in/alexey-ratnikov')}>
                                        <Avatar style = {{backgroundColor: '#303F9F'}}>L</Avatar>
                                        <ListItemText  secondary="Linkedin" align="center" />
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
