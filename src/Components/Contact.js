import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body" >
        <Grid className="contact-grid"style={{backgroundColor:'#F5F5F5'}}>
          <Cell col={6}>
            <h2>Sonam Kumari</h2>
            <img style={{height: '250px'}} src="https://cdn3.iconfinder.com/data/icons/users-6/100/5-512.png" alt="avatar" />
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
              I have been very passionate about computers and programming since
              my university life. I’m able to work well under pressure and adhere to strict deadlines.
              Being worked for different projects helped me to adapt to the changes quickly and made me a mature team worker.
            </p>
          </Cell>
          <Cell col={6}>
              <h2>Contact Me</h2>
              <hr />
              <div className="contact-list">
                  
              <List>
                  <ListItem>
                      <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}><i className="fa fa-phone-square" aria-hidden='true'></i>+91 8434047566</ListItemContent>
                  </ListItem>
                  <ListItem>
                      <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}><i className="fa fa-envelope" aria-hidden='true'></i>er.sonam2712kumari@gmail.com</ListItemContent>
                  </ListItem>
              </List>
              </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
