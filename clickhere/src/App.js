import React, { Component } from 'react';
import Mainform from "./components/Mainform";
import Image from "./components/Image";
import './App.css';

class App extends Component {

  state = {
    images: [
      {
        url : "../images/buggs.jpg", 
        ref : 1,
        selected : false
      },
      {
        url : "../images/daffy.jpg", 
        ref : 2,
        selected : false
      }
    ],
    numGuesses: 0,
    highScore: 0
  };

  render () {
    return (
      <div>
        <Mainform />
        <div className="row">
          <div className="col-md-2">
            {/* blank */}
          </div>
          

          <div className="col-md-8">
              {this.state.images.map(currentImage => {
                return (
                  <Image 
                    source={currentImage.url}
                    ref={currentImage.ref}
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


// function App() {
//   return (
//     <div>
//       <Mainform />
//       <div class="row">
//         <div class="col-md-12">
//           <Image /><Image /><Image />
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;
