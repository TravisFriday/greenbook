import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Route, withRouter } from "react-router"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
    title: {
        textAlign: "center",
        margin: '30px'
    }
});


class BusinessPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { classes } = this.props;

        //Type of business, coming from previous page:
        let selectedBusiness = localStorage.getItem('selectedBusiness');
        return (
            <div>
                <h1 className={classes.title}>{selectedBusiness}</h1>
                <Container>
                    Business Details
                </Container>
            </div>
        );

    }
}

export default withRouter(withStyles(styles)(BusinessPage));
