import React, { Component } from 'react';

import 'whatwg-fetch';
import ArtIndexList from './gallery/ArtIndexList';
import ArtModal from './gallery/ArtModal';


class ArtGallery extends Component {
  constructor(props){
    super(props);
    this.state = {
      artwork:[],
      loaded: false,
      showModal: false,
      selectedArt: null


    };

    this.loadArtwork = this.loadArtwork.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

  }
  loadArtwork() {
    let url = 'https://api.myjson.com/bins/fgqdv';
    //make a req to api with fetch -> get a promise back.
    // When you first make req, it will get something back, in a period of time, and be prepared to do something
    //when it comes
    //.then -> once req is given a response from api, do something with it (response)


    fetch(url).then(response => {

      return response.json()
    }).then(returnedArt => {
      console.log('returned list', returnedArt);
      this.setState({
        artwork: returnedArt.results,
        loaded: true

      });
    }).catch(ex => {
      console.log('parsing failed', ex);
    })



  }
  componentWillMount(){

    this.loadArtwork(`${this.props.baseURL}`);
  }


  handleOpenModal(artwork){
    this.setState({
      selectedArt: artwork,
      showModal: true
    })


  }
  handleCloseModal(){
    this.setState({
      showModal:false
    })
  }

  render() {
    return (
      <div className="ArtGallery">
        <h2>All the things..</h2>

                {this.state.loaded ? null : "Loading...."}

                <ArtIndexList
                  display={this.state.loaded}
                  listOfArt={this.state.artwork}
                  handleOpenModal={this.handleOpenModal}
                  selectedArt={this.state.selectedArt}
                />

                <ArtModal
                  selectedArt={this.state.selectedArt}
                  showModal={this.state.showModal}
                  handleCloseModal={this.handleCloseModal}/>

      </div>
    );
  }
}

export default ArtGallery;
