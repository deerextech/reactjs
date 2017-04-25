import React, {Component} from 'react';
import Instafeed from 'instafeed.js';
import {Col} from 'react-bootstrap/lib/';
// import { Link} from 'react-router-dom';
var feed = new Instafeed({
  get: 'user',
  userId: '2928391172',
  clientId:'ce9c020d2fb64dfc8336dbc62a414bc3',
  accessToken: '2928391172.ce9c020.ad1f01e24dfc4b6b882ff68f6122c9ca',
  'resolution':'standard_resolution',
  limit:4

});

class HomePage extends Component {

componentDidMount(){
  feed.run();
}

  render() {
    return (
      <div className="home-page">
        <Col className="intro-blurb" xs={9}  >
          <h4>My name is Danielle...
          </h4>
          <p>
            I draw fantasy art as a hobby, using pencil crayons and my weird brain.  I'm a professional developer, specializing in Javascript.  I hangout on instagram, and post all my art processes leading to the final drawing there. If you approach me for a commission, I'll listen, but I rarely say yes. Goodluck.

          </p>


        </Col>
        <Col id="instafeed" xs={12}>
          <h4>Previously on DeerexArt Instagram....</h4>


        </Col>





      </div>
    );
  }
}

export default HomePage;
