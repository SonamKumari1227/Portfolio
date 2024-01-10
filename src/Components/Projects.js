import React, { Component } from "react";
import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };

    this.RecommendationSystem = () => {
      window.location.assign(
        "https://github.com/SonamKumari1227/Books-Movies-Recommendation-System"
      );
    };
    this.PlacementPredictor = () => {
      window.location.assign(
        "https://github.com/SonamKumari1227/Placement-Prediction"
      );
    };
    this.WebScrapingBasedProject = () => {
      window.location.assign(
        "https://github.com/SonamKumari1227/MultiSite-Web-Scraper-Analyzer"
      );
    };
    this.WeatherApp = () => {
      window.location.assign("https://github.com/SonamKumari1227/Weather-App-Using-React-");
    };
    this.MatrixMultiplication = () => {
      window.location.assign("https://github.com/ismail5g/EasyBazar");
    };
    this.Calculator = () => {
      window.location.assign("https://github.com/SonamKumari1227/JS-applications/blob/master/calculator.html");
    };
    this.ToDoApp = () => {
      window.location.assign(
        "https://github.com/SonamKumari1227/TaskManager"
      );
    };
    this.ReactCompositeShowcase = () => {
      window.location.assign(
        "https://github.com/SonamKumari1227/React-Composite-Showcase"
      );
    };
    this.toggleCategories = () => {
      if (this.state.activeTab === 0) {
        return (

          <div className="projects-grid">
            {/* Recommendation System */}


            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/recommendation.jpg) center / cover",
                }}
              >
                RecommendationSystem
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This is a Books and Movies Recommendation System, based on NLP ,
                Mchine learning.
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.RecommendationSystem.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>






            {/* Plcaement Predictor*/}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/PlacementPredictor.png) center / cover",
                }}
              
              >
                Plcaement Predictor
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                Logistic Regression based Plcaement Predictor
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.PlacementPredictor.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>




            {/* Web Scarping */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/Webscraping.png) center / cover",
                }}
              >
                End To End Data Analysis Project
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This is a end to end multi site Web Scraing and and analyzing different variables and craeting a output excel sheet.
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.WebScrapingBasedProject.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      }
      else if (this.state.activeTab === 1) {
        return (
          <div className="projects-grid">
            {/* Weather app */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/WeatherApp.png) center / cover",
                }}
              >
                Weather Application
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This is an Weather application with amazing UI/UX.
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.WeatherApp.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            {/* MatrixMultiplication  */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/MatrixMultiplication.png) center / cover",
                }}
              >
                Matrix Multiplication
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This is an app for matrix Multiplication built by using the javascript with amazing UI/UX.
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.MatrixMultiplication.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>


            {/* calculator */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/calculator.png) center / cover",
                }}
              >
                Calculator
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This is a Javascript based Calculator application .
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.Calculator.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      }
      if (this.state.activeTab === 2) {
        return (
          <div>
            {/* To do APP */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/ToDoApp.png) center / cover",
                }}
              >
                To-Do-App
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                Thisis a To do application with amazing UI/UX and uses MongoDB for task storage.
              </CardText>
              
              <Button
                style={{ margin: "0 10px" }}
                raised
                ripple
                primary
                onClick={this.ToDoApp.bind(this)}
              >
                <i className="fa fa-github" aria-hidden="true" /> Github
              </Button>
              <Button raised accent ripple style={{ margin: "0 10px" }}>
                <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
              </Button>
             
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      } else {
        return (
          <div>
            {/* To do APP */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/ToDoApp.png) center / cover",
                }}
              >
                To-Do-App
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                Thisis a To do application with amazing UI/UX and uses MongoDB for task storage.
              </CardText>
              
              <Button
                style={{ margin: "0 10px" }}
                raised
                ripple
                primary
                onClick={this.ToDoApp.bind(this)}
              >
                <i className="fa fa-github" aria-hidden="true" /> Github
              </Button>
              <Button raised accent ripple style={{ margin: "0 10px" }}>
                <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
              </Button>
             
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>



             {/*ReactCompositeShowcase*/}
             <Card shadow={5} className="project-item">
             <CardTitle
    style={{
      color: "#333",
      height: "180px",
      background: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb866WTG6Fy2xBulWMWNgfvPXN0ITUWIavBg&usqp=CAU") center / cover`,
    }}
  >
   react full package
  </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This is a full package off all small interesting projects.
              </CardText>
              
              <Button
                style={{ margin: "0 10px" }}
                raised
                ripple
                primary
                onClick={this.ReactCompositeShowcase.bind(this)}
              >
                <i className="fa fa-github" aria-hidden="true" /> Github
              </Button>
              <Button raised accent ripple style={{ margin: "0 10px" }}>
                <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
              </Button>
             
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>


        )
      }
    };
  }
    render() {
      return (
        <div className="category-tabs">
          <Tabs
            activeTab={this.state.activeTab}
            onChange={(tabId) => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab>Machine Learning</Tab>
            <Tab>Javascript</Tab>
            <Tab>ReactJS</Tab>
            <Tab>NodeJs</Tab>
            <Tab>MERN</Tab>
            <Tab>C++</Tab>
          </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </div>
      );
    }
  }


export default Projects;