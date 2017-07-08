import { h, Component, define, props } from 'skatejs';

import Cell from './cell';

const styles = {
  container(size) {
    return {
      display: 'grid',
      gridTemplateColumns: `repeat(${size}, 1fr)`,
      gridGap: '12px',
      marginTop: '16px',
    };
  },
};

export default class Board extends Component {
  static get is() { return 'lsg-board'; }

  static get props() {
    return {
      cells: {},
      level: props.number,
    };
  }

  get size() {
    if (this.level >= 20) {
      return 5;
    } else if (this.level >= 10) {
      return 4;
    } else {
      return 3;
    }
  }

  get impulseNumber() {
    // Restart to 1 impulse with each color change / column number change
    let impulse = this.level;
    if (impulse < 30) {
      impulse -= Math.floor(impulse / 5) * 5 - 1;
    } else {
      impulse -= 24;
    }

    return impulse;
  }

  get stateNumber() {
    if (this.level >= 25 || this.level % 10 >= 5) {
      return 3;
    }
    return 2;
  }

  connectedCallback() {
    super.connectedCallback();
    this.resetState();
  }

  resetState() {
    let cells = new Array(this.size * this.size);
    cells.fill(1);

    for (var i = 0; i < this.impulseNumber; i += 1) {
      cells = this._triggerImpulse(
        cells,
        Math.floor(Math.random() * cells.length)
      );
    }

    this.cells = cells;
  }

  _getXFor(index) {
    return index % this.size;
  }

  _getYFor(index) {
    return Math.floor(index / this.size);
  }

  _triggerImpulse(cells, cellIndex) {
    const x = this._getXFor(cellIndex);
    const y = this._getYFor(cellIndex);
    return cells.map((cell, cellIndex) => {
      const x2 = this._getXFor(cellIndex);
      const y2 = this._getYFor(cellIndex);

      if (Math.abs(x - x2) <= 1 && Math.abs(y - y2) <= 1) {
        return (cell + 1) % this.stateNumber;
      }
      return cell;
    });
  }

  get isVictory() {
    return this.cells.every(cell => cell === 1);
  }

  _checkVictory() {
    if (this.isVictory) {
      this.dispatchEvent(new Event('victory'));
    }
  }

  handleChange(cellIndex) {
    this.cells = this._triggerImpulse(this.cells, cellIndex);
    this._checkVictory();
  }

  renderCell(cell, index) {
    return (
      <lsg-cell
        state={cell}
        onClick={() => this.handleChange(index)}
      ></lsg-cell>
    );
  }

  renderCallback() {
    return (
        <div style={styles.container(this.size)}>
        {
          this.cells
          ? this.cells.map(this.renderCell.bind(this))
          : null
        }
      </div>
    );
  }
}

define(Board);
