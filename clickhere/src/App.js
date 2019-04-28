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
  {
    url: "../images/sam.png",
    refId: 6,
    selected: false
  }, 
  {
    url: "../images/sylvester.png",
    refId: 7,
    selected: false
  }, 
  {
    url: "../images/taz.jpg",
    refId: 8,
    selected: false
  }, 
  {
    url: "../images/tweety.png",
    refId: 9,
    selected: false
  }, 
  {
    url: "../images/wile.jpg",
    refId: 10,
    selected: false
  },
  {
    url: "../images/gossamer.jpg",
    refId: 11,
    selected: false
  }
];

class App extends Component {

  state = {
    images: imagesAry,
    numGuesses: 0,
    highScore: 0,
    message: "Click on a character"
  };


  stopShake = () => {
    var imgList = document.querySelectorAll("div.imageCard");
    imgList.forEach(function (thisImage) {
      thisImage.classList.remove("apply-shake");
    });
  }
  
  shakeImages = () => {
    var imgList = document.querySelectorAll("div.imageCard");
    imgList.forEach(function(thisImage) {
      thisImage.classList.add("apply-shake");
    });
    setTimeout(this.stopShake, 750);
  }


  shuffelImages = currentAry => {
    const oldAry = currentAry.slice(0);
    const newAry = [];
    var randomIndex = 0;
    for (var i=0; i < currentAry.length; i++) {
      randomIndex = Math.floor(Math.random() * ((oldAry.length - 1) + 1));
      newAry.push(oldAry[randomIndex]);
      oldAry.splice(randomIndex,1);
    }
    return newAry;
  }

  chooseImage = refId => {
    var newHighScore = this.state.highScore;
    var newNumGuesses = 0;
    var newMessage = "";
    if (imagesAry[refId].selected === false) {
      imagesAry[refId].selected = true;
      newNumGuesses = this.state.numGuesses + 1;
      newMessage = "You chose correctly!  Choose another."
      if (newNumGuesses > newHighScore) {
        newHighScore = newNumGuesses;
        newMessage = "You have the new high score!  Keep going"
      }
    } else {
      this.shakeImages();

      newMessage = "Game over, loser!  Start again.";
      for (var i=0; i < (imagesAry.length - 1); i++) {
        console.log(i);
        imagesAry[i].selected = false;
      }
    }
    var mixedAry = this.shuffelImages(imagesAry);
    this.setState({
      images: mixedAry,
      numGuesses: newNumGuesses,
      highScore: newHighScore,
      message: newMessage
    });
    console.log(imagesAry);
  }

  render () {
    return (
      <div class="container">
        <img src="../images/wb.jpg" alt="background" id="backgroundImg"></img>
        <Mainform 
          numGuesses={this.state.numGuesses}
          highScore={this.state.highScore}
          message={this.state.message}
        />

        <div className="row" >
          <div className="col-md-3">
            {/* blank */}
          </div>

          <div className="col-md-6">
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

          <div className="col-md-3">
            {/* blank */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
