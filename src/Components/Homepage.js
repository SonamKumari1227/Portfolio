import React,{Component } from "react";
import { Grid, Cell } from "react-mdl";

class Homepage extends Component {
  render() {
 
    const paragraphAnimation = {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      display: 'inline-block',
      animation: 'typing 6s steps(30, end) infinite',
    };
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="homepage-grid">
          <Cell col={12}>
            <div className="profile-img-border">
              <img
                className="profile-img"
                src="images/sonam.jpg"
                alt="Ismail"
              />
            </div>
            <div className="banner-text">
            <h1 style={{ paddingTop: "20px" }}>..... MERN Stack Web Developer .....</h1>

              <h1 >.....  ML Developer .....</h1>
             
              <p style={paragraphAnimation}>
                HTML <b>|</b> CSS <b>|</b> Bootstrap <b>|</b> Javascript <b>|</b> NodeJs <b>|</b> ReactJS <b>|</b> MongoDB <b>|</b> AWS <b>|</b> C++
              </p>

              <div className="social-links">
                
                <a
                  href="https://github.com/SonamKumari1227"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-github-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/sonamkumari27/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-linkedin-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Homepage;
