import React, {Component} from 'react';
import {Button, Col, Panel} from 'react-bootstrap/lib/';

class AboutPage extends Component{
  constructor(props) {
   super(props);
   this.state = {
     openArt: true,
     openDev: true

   };
 }
  render(){
    return(
      <div className="about-page">

        <Col className="about-page-btns" sm={12} >
          <Button className="about-page-btn" onClick={ ()=> this.setState({ openArt: !this.state.openArt })}>
            Art
          </Button>
          <Button className="about-page-btn" onClick={ ()=> this.setState({ openArt: !this.state.openArt })}>
            Dev
          </Button>
        </Col>
        <Col sm={7} >
              <Panel bsStyle="info" collapsible expanded={this.state.openArt}>
                <h4>Welcome to the Art Side....</h4>
                <p>
                  I don't consider myself a professional artist, mainly because I make my art for me and it's just cool that people like it.  I rarely take on comissions, the few times I have said yes it was only because I was very interested in the subject matter.  I do this as a hobby, so I'm really not in the market for making art that I don't care about.

                </p>
                <p>
                  I've been making art since I was a wee child, and pencils have always been my first choice in weaponry.  I enjoy the process of creating a drawing; I often use it as a theroputic activity to expend excess brain energy. I am a human with a lot of emotions and anxiety and I channel all of that energy into my art and now I never experience overwhelming emotion or anxiety and can go about my day as a regular person, haha.  That being said, a lot of people will now assume my darker themes and creepier drawings come from negative emotion-- they don't, at all.  Most of my art is the result of one or two thoughts:
                </p>
                  <ul className="about-intro">

                        <li>1. "I need this idea to exist so I can have it"</li>
                        <li>2. "It would be funny if this was a thing" </li>
                  </ul>
                  <p>
                  95% of the time, all my creepy and/or dark themed drawings come from me thinking it would be funny.  I don't care or expect anyone else to think this or agree, like I said, my art is for me and it's just cool people like it.
                  <br />
                  <span > For art updates & processes: <a href="https://www.instagram.com/deerexart" target="_blank">deerexArt</a> </span>
                </p>
              </Panel>

              <Panel collapsible bsStyle="success" expanded={!this.state.openArt}>
                <h4>For the Love of Javascript...</h4>
                <p>
                  Art buys me some cool stuff, but Javascript pays the bills.  I am a professional developer, I work on everything from websites & mobile applictions, to software. If you haven't figured it out yet-- Javascript is my favorite thing.  It is so volitile but that's what makes it so wonderful. I have opionions about most of the JS frameworks and libraries that exist, and if I don't, I'm definitely getting to it.
                </p>
                  <label >These are my favorite JS tools</label>
                  <ul id="about-js-tools">
                    <li>VanillaJS (Preferably ES6)</li>
                    <li>Angular</li>
                    <li>jQuery</li>
                    <li>NodeJS</li>
                    <li>ReactJS</li>
                    <li>Backbone</li>
                    <li>Github: <a href="https://www.instagram.com/deerextech" target="_blank">deerexTech</a> </li>
                  </ul>
              </Panel>
        </Col>

        <Col className="about-images" sm={5}>
          <img className="about-image" src="http://deerexart.com/images/pencil/stamos.jpg" alt="clone high "/>
          <img className="about-image" src="http://deerexart.com/images/pencil/arcanineFire.jpg" alt="arcanine " />
          <img className="about-image" src="http://deerexart.com/images/pencil/milkyJoe.jpg" alt="milky joe " />
          <img className="about-image" src="http://deerexart.com/images/pencil/ghirahimM.jpg" alt="ghirahim " />
        </Col>

      </div>
    )
  }
}

export default AboutPage;
