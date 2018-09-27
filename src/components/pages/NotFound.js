import React from 'react'
import Typography from '@material-ui/core/Typography';

export default () => {

    let titleText = React.createRef();

    function handleFocus() {
        titleText.current.style.color = '#FF5722'
    }

    return (
        <React.Fragment>
            <Typography
                variant="display3"
                align="center"
                style = {{textTransform: 'uppercase', marginTop: '40px'}}>
                <span
                    ref = {titleText}
                    onMouseOver = {handleFocus}
                    style = {{color: '#FF7043'}}>
                    404. Page Not Found
                </span>
            </Typography>
            <Typography
                variant="subheading"
                align="center"
                gutterBottom
                style = {{textTransform: 'uppercase'}}
                >Sorry, that page does not exist
            </Typography>
        </React.Fragment>
    )
}
