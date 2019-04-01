import React, { Component } from 'react';
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import images from "./images.json";
import './App.css';

class App extends Component {

  // Set the state with images.json object and default values of game start
  state = {
    images: images,
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
    // Do I even need to return anything?
    return true;
  };

  // Function to shuffle the order of the images
  shuffleImages = array => {
    for (var i = array.length - 1; i > 0; i--) {
      var randomIndex = Math.floor(Math.random() * i);
      // store array the current index's value temporarily
      var tempValue = array[i];
      // switch out randomIndex's value to current index's value
      array[i] = array[randomIndex];
      // change randomIndex's value to tempValue
      array[randomIndex] = tempValue;
    }
    return array;
  }

  // Function to add a count to a clicked image and shuffle, or call restartGame if counter is already 1
  countImage = id => {
    console.log("You've clicked an image");
    // If the counter of the clicked image is still 0
    if (this.state.images[id].counter === 0) {
      // add a point to the score
      this.setState({ score: (this.state.score + 1) });
      // add a point to the counter of the matching object in array 'images'
      this.state.images[id].counter = 1;
      // shuffle the array and re-render
      this.shuffleImages(this.state.images);
    } else { // Otherwise restart the game because counter was already at 1
      this.restartGame();
    }


    //return true;
  }

  render() {
    // check the array
    console.log(this.state.images);
    return (
      <div className="container">
        <Navbar score={this.state.score} topscore={this.state.topscore}></Navbar>
        <Header></Header>
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="title">Alphabet Images</h1>
          </div>
        </div>
        <Wrapper>
          {this.state.images.map(images => (<ImageCard image={images.image}
            countImage={this.countImage} id={images.id} key={images.id} />))}
        </Wrapper >
      </div>
    );
  }
}

export default App;
