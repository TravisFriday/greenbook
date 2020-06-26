import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Route, withRouter } from "react-router"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from './theme'

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
                <MuiThemeProvider theme={theme}>
                    <h1 className={classes.title}>{selectedBusiness}</h1>
                    <Container>
                        {/* About Us section */}
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12}>
                                <Typography variant='h5'>
                                    About Us
                            </Typography>
                                <Card>
                                    <Typography>
                                        Text about us
                                </Typography>
                                </Card>
                            </Grid>
                        </Grid>

                        {/* Social and address section */}
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Typography variant='h5'>
                                    Social Media
                            </Typography>
                                <Card>
                                    <Typography>
                                        Social media information
                                </Typography>
                                </Card>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Typography variant='h5'>
                                    Address
                            </Typography>
                                <Card>
                                    <Typography>
                                        business address
                                </Typography>
                                </Card>
                            </Grid>
                        </Grid>

                        {/* Contact Section */}
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12}>
                                <Typography variant='h5'>
                                   Contact Details
                            </Typography>
                                <Card>
                                    <Typography>
                                        Contact Details here
                                </Typography>
                                </Card>
                            </Grid>
                        </Grid>

                        {/* Photos Section */}
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12}>
                                <Typography variant='h5'>
                                   Photos
                            </Typography>
                                <Card>
                                    <Typography>
                                       Photo collection
                                </Typography>
                                </Card>
                            </Grid>
                        </Grid>

                        {/* Locator */}
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12}>
                                <Typography variant='h5'>
                                   Locator
                            </Typography>
                                <Card>
                                    <Typography>
                                        Google map
                                </Typography>
                                </Card>
                            </Grid>
                        </Grid>

                    </Container>
                </MuiThemeProvider>
            </div>
        );

    }
}

export default withRouter(withStyles(styles)(BusinessPage));
