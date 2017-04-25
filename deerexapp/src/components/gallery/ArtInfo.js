import React from 'react';


const ArtInfo = ({selectedArt}) => {


return(
  <div className="art-gallery-selected-img">

       <img  src={selectedArt.img_link} alt={selectedArt.name} />
       <p>{selectedArt.description}</p>


</div>
)
}


export default ArtInfo;
