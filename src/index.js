import { h, Component, define, props } from 'skatejs';

import Hud from './hud';
import Board from './board';
import VictoryScreen from './victory-screen';

import { getBest, setBest } from './db';

const styles = {
  container: {
    maxWidth: '80vh',
    height: '100vh',
    margin: 'auto',
    color: 'white',
    fontFamily: 'Roboto, Helvetica',
    padding: '16px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
};

export default class Game extends Component {
  static get is() { return 'lsg-game'; }

  static get props() {
    return {
      isVictory: props.bool,
    };
  }

  connectedCallback() {
    this.boardRef = null;
    this.level = 1;
    super.connectedCallback();
  }

  handleVictory() {
    this.isVictory = true;

    if (this.level > getBest()) {
      setBest(this.level);
    }
  }

  handleRestart() {
    this.isVictory = false;

    if (this.boardRef) {
      this.level += 1;

      // Wait for level to propagate
      setImmediate(() => this.boardRef.resetState());
    }
  }

  handleBoardRef(ref) {
    if (!this.boardRef) {
      ref.resetState();
    }
    this.boardRef = ref;
  }

  renderCallback() {
    return (
      <div style={styles.container}>
        <Hud level={this.level} best={getBest()} />
        <lsg-board
          ref={ref => this.handleBoardRef(ref)}
          level={this.level}
          onVictory={() => this.handleVictory()}
        />
        <lsg-victory-screen
          isVisible={this.isVictory}
          onRestart={() => this.handleRestart()}
        />
      </div>
    );
  }
}

define(Game);
