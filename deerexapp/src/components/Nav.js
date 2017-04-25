import React, {Component} from 'react';
import Link from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div>

        <ul className="header">
          <Link to={`/home`}>
            <li>Home</li>
          </Link>
          <Link to={`/about`}>
            <li>About</li>
          </Link>
          <Link to={`/gallery`}>
            <li><a href="/gallery">Gallery</a></li>
          </Link>
        </ul>

      </div>
    )
  }
}

export default Nav;
