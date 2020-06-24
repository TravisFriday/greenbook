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

//TODO: Remove this after loading actual data
const businesses = ["Business1", "Business2", "Business3"]

class Category extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        let selectedCategoryName = localStorage.getItem("selectedCard");
        return (
            <div>
                <h1 className={classes.title}>{selectedCategoryName}</h1>
                <Container>
                    <Grid container spacing={3}>
                        {businesses.map((sampleb, i) => {
                            return (
                                <Grid item xs={12} sm={4} key={i}>

                                    <Card>
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
