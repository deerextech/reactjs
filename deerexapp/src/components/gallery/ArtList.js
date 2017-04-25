import React from 'react';
import {ListGroup, ListGroupItem, Col} from 'react-bootstrap/lib/';


const ArtList = ({listOfArt, handleOpenModal}) => {
  let artwork = listOfArt.map(
    (art)=>{

      // return(<div></div>)
      return(
        <Col xs={6} md={4} key={art.name}>
          <ListGroupItem
            className='artlist-item'
            onClick={handleOpenModal.bind(null, art)}>
            <ul>
              <li><img className="loadedImages" src={art.img_link} alt={'Image of' + art.name} /></li>
              <li>{art.name}</li>
              {/* <li>{art.category}</li> */}
              <li>{art.materials}</li>

              {/* <li><a href={art.merch_link}>Buy</a></li> */}

            </ul>

          </ListGroupItem>
        </Col>
      )
    });

    return (
      <Col sm={8} md={10} smOffset={2} mdOffset={1}>
        <ListGroup>
          {artwork}
        </ListGroup>
      </Col>
    )
}

export default ArtList;
