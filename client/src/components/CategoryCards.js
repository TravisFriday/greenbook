import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import { Row, Col, Container } from "react-bootstrap";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";
import GoodsPic from "../assets/goods1.jpg";

import Consulting from "../assets/consulting.jpg";
import It from "../assets/it.jpg";
import LegalService from "../assets/legalService.jpg";
import Food from "../assets/food.jpg";
import Marketing from "../assets/marketing.jpg";
import Category from "./Category"
import { withRouter } from "react-router"


const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 70,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  image: {},
  titleText: {
    textAlign: "center",
  },
  row: {
    paddingTop: 30,
    paddingBottom: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const categories = {
  "Legal Services": LegalService,
  "Food & Beverage": Food,
  "Marketing": Marketing,
  "Consulting": Consulting,
  "Information Technology": It,
};

const pictures = [Consulting, It, LegalService, Food, Marketing];

class CategoryCards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false
    }
  }
  changeRouter = (categoryName) => {
    localStorage.setItem("selectedCard", categoryName.category);
    this.props.history.push(`${categoryName.category}`);
    this.setState({
      ...this.state,
      isClicked: true
    })
  }

  render() {
    const { classes } = this.props;

    if (this.state.isClicked) {
      return (
        <Category />
      );
    }
    return (

      <div className={classes.root}>
        <Container fluid>
          <Row>
            {Object.entries(categories).map(([category, image]) => {
              return (
                <Col
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  style={{ paddingTop: "20px" }}
                  key={category}
                >
                  <Card className={classes.card}
                    onClick={
                      () => this.changeRouter({ category })
                    }>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Shop Goods"
                        height="200"
                        image={image}
                        title={category}
                      />
                      <CardContent>
                        <Typography
                          className={classes.titleText}
                          gutterBottom
                          variant="h5"
                          component="h2"
                        >
                          {category}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Col>
              );
            })}
          </Row>
          {/* <Row>
          <Col className={classes.row}></Col>
        </Row> */}
        </Container>
      </div>
    );

  }
}

export default withRouter(withStyles(styles)(CategoryCards));
