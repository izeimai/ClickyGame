import React, { Component } from 'react';
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import images from "./images.json";
import './App.css';

class App extends Component {

  // Set the state and default values of game start
  state = {
    images,
    score: 0,
    topscore: 0
  };

  restartGame = () => {
    // Rewrite the top score if the current score is higher
    if (this.state.score > this.state.topscore) {
      this.setState({ topscore: this.state.score })
    }
    // reset the current score back to 0
    this.setState({ score: 0 });
    // reset each image's clicked counter back to 0
    this.state.images.forEach(image => { image.counter = 0 })
    return
  }

  countImage = id => {
    const newImageArray = this.state.images.filter(image => !(image.id === id))
    this.setState({ images: newImageArray });
  }

  render() {
    return (
      <div className="container">
        <Navbar score={this.state.score} topscore={this.state.topscore}></Navbar>
        <Header></Header>
        <Wrapper>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="title">Alphabet Image List</h1>
              </div>
            </div>
            <div className="row">
              {this.state.images.map(images => (<ImageCard images={images}
                countImage={this.countImage} />))}
            </div>
          </div>
        </Wrapper >
      </div>
    );
  }
}

export default App;
