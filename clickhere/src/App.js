import React, { Component } from 'react';
import Mainform from "./components/Mainform";
import Image from "./components/Image";
import './App.css';

const imagesAry = [
  {
    url: "../images/buggs.jpg",
    refId: 0,
    selected: false
  },
  {
    url: "../images/daffy.jpg",
    refId: 1,
    selected: false
  },
  {
    url: "../images/elmer.jpg",
    refId: 2,
    selected: false
  },
  {
    url: "../images/foghorn.jpg",
    refId: 3,
    selected: false
  },
  {
    url: "../images/marvin.png",
    refId: 4,
    selected: false
  },
  {
    url: "../images/porky.png",
    refId: 5,
    selected: false
  },
];

class App extends Component {

  state = {
    images: imagesAry,
    numGuesses: 0,
    highScore: 0
  };

  chooseImage = refId => {
    if (imagesAry[refId].selected === false) {
      imagesAry[refId].selected = true;
      var newNumGuesses = this.state.numGuesses + 1;
      var newHighScore = this.state.highScore;
      if (newNumGuesses > newHighScore) {
        newHighScore = newNumGuesses;
      };
      this.setState({ 
        images : imagesAry,
        numGuesses : newNumGuesses,
        highScore : newHighScore
      });
    } else {
      console.log("Game over, loser!");
    };
  };

  render () {
    return (
      <div>
        <Mainform 
          numGuesses={this.state.numGuesses}
          highScore={this.state.highScore}
        />

        <div className="row">
          <div className="col-md-2">
            {/* blank */}
          </div>

          <div className="col-md-8">
              {this.state.images.map(currentImage => {
                return (
                  <Image 
                    chooseImage={this.chooseImage}
                    key={currentImage.refId}
                    source={currentImage.url}
                    refId={currentImage.refId}
                  />
                );
              })}
          </div>

          <div className="col-md-2">
            {/* blank */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
