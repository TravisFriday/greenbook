import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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

const useStyles = makeStyles((theme) => ({
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
}));

const categories = {
  "Legal Services": LegalService,
  "Food & Beverage": Food,
  "Marketing ": Marketing,
  "Consulting ": Consulting,
  "Information Technology": It,
};

const pictures = [Consulting, It, LegalService, Food, Marketing];

export default function CategoryCards() {
  const classes = useStyles();

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
                <Card className={classes.card}>
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
          {/* <Col sm={6} md={4} lg={3} style={{ paddingTop: "20px" }}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Shop Goods"
                  height="200"
                  image={GoodsPic}
                  title={`${categories[0]}`}
                />
                <CardContent>
                  <Typography
                    className={classes.titleText}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    {`${categories[0]}`}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Col>
          <Col sm={6} md={4} lg={3} style={{ paddingTop: "20px" }}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Shop Goods"
                  height="200"
                  image={GoodsPic}
                  title={`${categories[0]}`}
                />
                <CardContent>
                  <Typography
                    className={classes.titleText}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    {`${categories[1]}`}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Col>
          <Col sm={6} md={4} lg={3} style={{ paddingTop: "20px" }}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Shop Services"
                  height="200"
                  image={ServicesPic}
                  title="Shop Services"
                />
                <CardContent>
                  <Typography
                    className={classes.titleText}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    {`${categories[2]}`}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Col>
          <Col sm={6} md={4} lg={3} style={{ paddingTop: "20px" }}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Shop Goods"
                  height="200"
                  image={GoodsPic}
                  title={`${categories[0]}`}
                />
                <CardContent>
                  <Typography
                    className={classes.titleText}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    {`${categories[3]}`}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Col> */}
        </Row>
        {/* <Row>
          <Col className={classes.row}></Col>
        </Row> */}
      </Container>
    </div>
  );
}
