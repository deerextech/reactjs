import React from 'react';
// import SelectItemsPerPageButtons from './selectItemsPerPageButtons';
// import PaginationContainer from './PaginationContainer';
import ArtList from './ArtList';
// import SortList from './SortList';

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
        {/* <SortList
          options={options}
          selectedValue={selectedValue}
          allValue={allValue}
          onOptionSelected={onOptionSelected}
        /> */}

        <ArtList
          listOfArt={listOfArt}
          handleOpenModal={handleOpenModal} />


      </div>
    )
  }
export default ArtIndexList;
