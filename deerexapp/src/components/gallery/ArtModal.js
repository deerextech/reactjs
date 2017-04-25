import React from 'react';
import {Modal} from 'react-bootstrap/lib/';
import ArtInfo from './ArtInfo';

const ArtModal = ({handleOpenModal, showModal, handleCloseModal, selectedArt}) => {
  console.log('selected art', selectedArt)
  return(
    <div>

     <Modal
       show={showModal}
       onHide={handleCloseModal}
       container={this}
       aria-labelledby="contained-modal-title"
       className="art-gallery-modal-container"
     >
       <Modal.Header closeButton>
         <Modal.Title id="contained-modal-title">{selectedArt !== null ? selectedArt.name : 'Loading...'} </Modal.Title>

       </Modal.Header>
       <Modal.Body className="art-gallery-modal-contents">

         {selectedArt !== null ?

           <ArtInfo selectedArt={selectedArt} />
           :null
         }


       </Modal.Body>
       <Modal.Footer>
         {/* <Button onClick={handleCloseModal}>Close</Button> */}
       </Modal.Footer>
     </Modal>
   </div>
  )

}
export default ArtModal;
