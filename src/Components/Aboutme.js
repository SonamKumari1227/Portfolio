import React, { Component } from "react";

class Aboutme extends Component {
  render() {
    const containerStyle = {
      textAlign: "center",
      marginLeft: 'auto',
      color: '#fff',
      marginRight: 'auto',
      marginTop: '100px',
      width: '60%',
      padding: '20px',
      backgroundColor: '#F5F5F5',
      color: 'black',
      padding:'30px 30px'
      
    };
  
    return (
      <div style={containerStyle} >
        <h1 style={{fontSize: '40px', textTransform: 'uppercase', fontFamily: 'Caveat'}}>About      Me</h1>
        <p style={{textAlign: 'justify', fontFamily: 'Caveat',fontWeight:"bold",fontSize:"20px"}}>
          Hello, I'm Sonam Kumari, a versatile tech enthusiast and full-stack MERN developer with a
          passion for cutting-edge technologies. My expertise extends across the realms of machine learning,
          AWS cloud computing, and C++ programming. With a keen interest in exploring the frontiers of technology,
          I bring a dynamic skill set to the table. My journey as a developer is characterized by a commitment to staying at
          the forefront of innovation, ensuring that I deliver solutions that align with the ever-evolving landscape of the tech industry. 
        </p>
      </div>
    );
  }
}

export default Aboutme;
