import React from 'react';
import ArtList from './ArtList';

const ArtIndexList = ({
    display,
    listOfArt,
    btnSize,
    handleOpenModal}) => {

    let style = {display:'none'}

    if(display){
      style.display = 'initial'}
      else{
        style.display;
      }

    return(
<div>
     
        <ArtList
          listOfArt={listOfArt}
          handleOpenModal={handleOpenModal} />


      </div>
    )
  }
export default ArtIndexList;
