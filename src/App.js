//import React, {
//    Component
//} from 'react';
////import logo from './logo.svg';
////import './App.css';
//
//class App extends Component {
//    render() {
//        return ( 
//            <div className="App">
//                <h1>We will create an awesome game with React, Redux, and SVG!</h1>
//            </div>
//        );
//    }
//}
//
//export default App;


//import React, {Component} from 'react';
//import PropTypes from 'prop-types';
//
//class App extends Component {
//  render() {
//    return (
//      <div className="App">
//        <h1>{this.props.message}</h1>
//      </div>
//    );
//  }
//}
//
//App.propTypes = {
//  message: PropTypes.string.isRequired,
//};
//
//export default App;


//import React, {Component} from 'react';
//import Canvas from './components/Canvas';
//
//class App extends Component {
//  render() {
//    return (
//      <Canvas />
//    );
//  }
//}
//
//export default App;


import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { getCanvasPosition } from './utils/formulas';
import Canvas from './components/Canvas';

class App extends Component {
  componentDidMount() {
    const self = this;
    setInterval(() => {
        self.props.moveObjects(self.canvasMousePosition);
    }, 10);
  }

  trackMouse(event) {
    this.canvasMousePosition = getCanvasPosition(event);
  }

  render() {
    return (
      <Canvas
        angle={this.props.angle}
        trackMouse={event => (this.trackMouse(event))}
      />
    );
  }
}

App.propTypes = {
  angle: PropTypes.number.isRequired,
  moveObjects: PropTypes.func.isRequired,
};

export default App;