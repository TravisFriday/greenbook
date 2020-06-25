import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Route, withRouter } from "react-router"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import BusinessPage from "./BusinessPage"

const styles = theme => ({
    title: {
        textAlign: "center",
        margin: '30px'
    }
});


//TODO: Remove this after loading actual data
const businesses = ["Business1", "Business2", "Business3"]

class Category extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isBusinessClicked: false
        }
    }

    changeBusiness = (businessTitle) => {
        localStorage.setItem("selectedBusiness", businessTitle.sampleb);

        //get category to append to business url
        var b_category = localStorage.getItem("selectedCard");
        this.props.history.push(`${b_category}/${businessTitle.sampleb}`);
        this.setState({
            ...this.state,
            isBusinessClicked: true
        })
    }

    render() {
        const { classes } = this.props;

        //Type of category, coming from previous page:
        let selectedCategoryName = localStorage.getItem("selectedCard");

        if (this.state.isBusinessClicked) {
            return (
                <BusinessPage />
            );
        }
        return (
            <div>
                <h1 className={classes.title}>{selectedCategoryName}</h1>
                <Container>
                    <Grid container spacing={3}>
                        {businesses.map((sampleb, i) => {
                            return (
                                <Grid item xs={12} sm={4} key={i}>

                                    <Card onClick={
                                        () => this.changeBusiness({sampleb})
                                    }>
                                        Business Logo
                                        <hr />
                                        <Typography>
                                            {sampleb}
                                        </Typography>
                                        <Typography>
                                            Business Description
                                        </Typography>
                                    </Card>
                                </Grid>
                            )
                        })}

                    </Grid>

                </Container>
            </div>
        );

    }
}

export default withRouter(withStyles(styles)(Category));
