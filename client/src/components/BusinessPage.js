import React, { Component, createRef } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Route, withRouter } from "react-router"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from './theme'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const styles = theme => ({
    title: {
        textAlign: "center",
        margin: '30px'
    }
});

const GOOGLE_MAP_API_KEY = 'AIzaSyBb8rOjZt6I7fy4KlYlG-nV1awsIKSNyz0';

class BusinessPage extends Component {

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
                                <Map google={this.props.google}
                                     zoom={14}
                                     style={{ width: '86%', height: '70%', position: 'relative' }}
                                     initialCenter={{
                                        lat: 49.246292,
                                        lng: -123.116226
                                      }}
                                      zoomControl={true}>

                                    <Marker onClick={this.onMarkerClick}
                                        name={'Current location'} />

                                    <InfoWindow onClose={this.onInfoWindowClose}>
                                        <div>
                                            <h1>name of Selected place</h1>
                                        </div>
                                    </InfoWindow>
                                </Map>
                            </Grid>
                        </Grid>

                    </Container>
                </MuiThemeProvider>
            </div>
        );

    }
}

// export default withRouter(withStyles(styles)(BusinessPage));
export default GoogleApiWrapper({
    apiKey: ("AIzaSyBb8rOjZt6I7fy4KlYlG-nV1awsIKSNyz0")
})(withRouter(withStyles(styles)(BusinessPage)))
