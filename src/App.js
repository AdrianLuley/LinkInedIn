import React, { Component } from 'react';
import ProfilePic from './images/Profile Pic.jpg'
import './App.css';
import { Header, Grid , Icon ,  Image, Modal  } from 'semantic-ui-react'

import Button from '@material-ui/core/Button';

class App extends Component {


  render() {
    

    return (
      <div className="App">
        
         
            <Grid celled='internally'>
              <Grid.Row>
                <Grid.Column width={3}>
                
                <Button variant="contained" color='linkedin' href='https://www.linkedin.com/in/adrian-luley-a63374170/' >
                <Icon name='linkedin' /> LinkedIn
                  </Button>
           
                
                </Grid.Column>
                <Grid.Column width={10}>
                <Header as='h1'> Hello ,  My name is Adrian Luley , this is my introduction website</Header>
                <Header as='h2'> to show off my skills 
                  as a Junior web designer.</Header>
                <Header as='h3'> My Bio is below. Please enjoy and Thank you for visiting.</Header>
                <Header id="header"  as='h3' dividing>
                 
                  </Header>
                </Grid.Column>
                <Grid.Column width={3}>
                <Image src={ProfilePic}></Image>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={3}>
                <p>Blah</p>
                </Grid.Column>
                <Grid.Column width={10}>
                

                 <Modal trigger={<Button id="HTML">HTML</Button>}>
                    <Modal.Header>This is an example of HTML5</Modal.Header>
                    <Modal.Content image>
                     
                      <Modal.Description>
                        <Header>Welcome to my Website</Header>
                        <p>The basic description of HTML is a basic way to display words and simple styles to a page</p>
                        <p>you can do alot with this foundation language </p>
                      </Modal.Description>
                    </Modal.Content>
                  </Modal>
              

                  <Modal trigger={<Button id="CSS">CSS</Button>}>
                      <Modal.Header>Select a Photo</Modal.Header>
                      <Modal.Content image>
                       
                        <Modal.Description>
                          <Header>Default Profile Image</Header>
                          <p>We've found the following gravatar image associated with your e-mail address.</p>
                          <p>Is it okay to use this photo?</p>
                        </Modal.Description>
                      </Modal.Content>
                    </Modal>
                    </Grid.Column>
                <Grid.Column width={3}>
                <p>Blah</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
    
      
      </div>
    );
  }
}

export default App;
