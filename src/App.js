import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contacts from './components/Contacts.js';
import Home from './components/Home.js';
import Bubbles from './components/Bubbles.js';
import Nava from './components/Nav.js';
import Roadmap from './components/Roadmap.js';
import About from './components/About.js';

const bubbleMoveSpeed = 2.5;
const minBubbleTime = 50;
const maxBubbleTime = 1000;
const minBubbleSize = 0.02;
const maxBubbleSize = 0.14;
const jitterSpeed = 0.3;
const minJitterUTurn = 2000;
const maxJitterUTurn = 6000;
const minGrowthTime = 100;
const maxGrowthTime = 200;
const minGrowthRate = 0.001;
const maxGrowthRate = 0.003;
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      bubbles: []
    };
  }

  _onMouseMove(e) {
    const currTime = + new Date();
    if (currTime > this.state.lastBubbleStamp + getRandomArbitrary(minBubbleTime, maxBubbleTime)) {
      const direction = Math.random() > 0.5 ? -1 : 1;
      this.state.bubbles.push({ x: e.clientX, y: e.clientY, size: getRandomArbitrary(minBubbleSize, maxBubbleSize), direction: direction, lastTurnTime: currTime, lastGrowTime: currTime });
      this.setState({ lastBubbleStamp: currTime });
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateBubbles() {
    if (this.state) {
      const currTime = + new Date();
      const newBubbles = this.state.bubbles.map(bubble => {
        let direction = bubble.direction;
        let lastTurnTime = bubble.lastTurnTime;
        let lastGrowTime = bubble.lastGrowTime;
        let size = bubble.size;
        if (currTime > lastTurnTime + getRandomArbitrary(minJitterUTurn, maxJitterUTurn)) {
          direction = -direction;
          lastTurnTime = currTime;
        }
        if (currTime > lastGrowTime + getRandomArbitrary(minGrowthTime, maxGrowthTime)) {
          lastGrowTime = currTime;
          size += getRandomArbitrary(minGrowthRate, maxGrowthRate);
        }
        if (bubble.y < 0) {
          return null;
        }
        return {
          x: bubble.x + direction * jitterSpeed,
          y: bubble.y - bubbleMoveSpeed,
          size: size,
          direction: direction,
          lastTurnTime: lastTurnTime,
          lastGrowTime: lastGrowTime
        }
      }).filter(bubble => {
        return bubble !== null
      });
      this.setState({ bubbles: newBubbles });
    }
  }

  componentDidMount() {
    this.setState({ lastBubbleStamp: + new Date() });
    this.interval = setInterval(this.updateBubbles.bind(this), 20);
  }

  render() {
    const bubbles = this.state.bubbles.map((bubble, i) => {
      return <Bubbles x={bubble.x} y={bubble.y} size={bubble.size} key={i} />
    });
    return (
      <div className="App" onMouseMove={this._onMouseMove.bind(this)}>
        <div className="bob">
          {bubbles}
        </div>
        <Nava />
        <Home />
        <Roadmap />
        <About />
        <Contacts />

      </div >
    );
  }
}

export default App;
