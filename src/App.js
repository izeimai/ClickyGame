import React, { Component } from 'react';
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import images from "./images.json";
import './App.css';

class App extends Component {

  state = {images};

  removeImage = id => {
    const newImageArray = this.state.images.filter(image => !(image.id === id))
    this.setState({images: newImageArray});
  }

  render() {
    return (
      <Wrapper>
        <h1 className="title">Alphabet Image List</h1>
        {this.state.images.map( images => (<ImageCard images={images}
        removeImage = {this.removeImage}/>))}
        />
      </Wrapper >
    );
  }
}

export default App;
