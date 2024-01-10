import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid className="resume-gird">
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="images/sonam.jpg"
                alt="sonam"
                style={{ height: "250px" }}
              />
            </div>

            <h2 style={{ paddingTop: "1em" }}>Sonam Kumari</h2>
            <h5 style={{ color: "grey" }}>MERN Stack Developer</h5>
            <hr style={{ borderTop: "2px solid #833fb2", width: "50%" }} />
            <p style={{ textAlign: "justify" }}>
              Hello, I'm Sonam Kumari, a versatile tech enthusiast and full-stack MERN developer with a passion for cutting-edge technologies.
              My expertise extends across the realms of machine learning, AWS cloud computing, and C++ programming. With a keen interest in exploring the frontiers of technology, I bring a dynamic skill set to the table. My journey as a developer is characterized by a commitment to staying at the forefront of innovation,
              ensuring that I deliver solutions that align with the ever-evolving landscape of the tech industry.</p>
            <hr style={{ borderTop: "2px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p></p>
            <h5>Phone</h5>
            <p>(+91) 8434047566</p>
            <h5>Email</h5>
            <p>er.sonam2712kumari@gmail.com</p>
           
            <h5>Download CV</h5>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              href="/Resume(4).pdf"
            >
              My Update CV
            </a>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Experience</h2>
            <Experience
              startYear={"september 2021"}
              endYear={"Present"}              
              jobName={"Full Stack Web Deveoper"}
              companyName={"Cloud Computing Cell , AKGEC"}
              jobDesc={
                ["I'm a Full Stack Web Developer currently contributing to the Cloud Computing Cell at AKGEC. I take pride in successfully orchestrating diverse events and fostering teamwork, drawing from my rich experience in various projects. L",
                  "Beyond the code, I'm an enthusiastic C++ coder and machine learning developer, always eager to delve into challenges and participate in competitions. ",
                  "Throughout my journey, I have orchestrated successful events, showcasing my proficiency in project management and teamwork. With a diverse portfolio of completed projects and active participation in competitions, I thrive in dynamic, collaborative environments. My enthusiasm extends to C++ coding and machine learning development, where I continue to explore and contribute to the ever-evolving tech landscape. Enhancing features and improvements existing functionality of a social media platform for the Hawai’i-based volunteering students to organize, plan and collaborate as the Global Aloha initiative built using Angular, .Net Core 3.1 & PostgreSQL",
                  "Excited about the limitless possibilities technology offers, I am poised to create meaningful impact and drive innovation in every endeavorupported frontend by providing Rest API.",
                 
                ]
              }
            />
           
           
           
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Education</h2>
            <Education
              startYear={2021}
              endYear={2025}
              schoolName={"Ajay Kumar Garg Engineering College , Ghaziabad"}
              degreeName={"B.Tech in Computer Science & Engineering with specialization in Datascience"}
            />
             <Education
              startYear={2018}
              endYear={2020}
              schoolName={"Jamshedpur Women's College"}
              degreeName={" Completed Senior Secondary School with 7.34 CGPA"}
            />
             <Education
              startYear={2008}
              endYear={2018}
              schoolName={"Gurunanak High School , Mango"}
              degreeName={" Completed High School with 8.7 CGPA"}
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />            
            <h2>Skills</h2>
            <Skills skill={"HTML/CSS"} progress={80} />
            <Skills skill={"Javascript"} progress={80} />
            <Skills skill={"ReactJS"} progress={80} />
            <Skills skill={"NodeJS"} progress={80} />
            <Skills skill={"MongoDB"} progress={80} />
            <Skills skill={"Express JS"} progress={80} />
            <Skills skill={"AWS"} progress={80} />
            <Skills skill={"Prompt Engineering"} progress={80} />
            <Skills skill={"C++"} progress={80} />
            
            <hr style={{ borderTop: "3px solid #e22947" }} />
          
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
