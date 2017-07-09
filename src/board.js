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

const difficulties = [
  // Min level, size, states
  [1, 3, 2],
  [5, 4, 2],
  [10, 5, 2],
  [15, 3, 3],
  [20, 4, 3],
  [25, 5, 3],
];

const reverseDifficulties = difficulties.reverse();

function getDifficultyForLevel(level) {
  for (let difficulty of reverseDifficulties) {
    if (level >= difficulty[0]) {
      return difficulty;
    }
  }

  return difficulties[0];
}

export default class Board extends Component {
  static get is() { return 'lsg-board'; }

  static get props() {
    return {
      cells: {},
      level: props.number,
    };
  }

  get size() {
    return getDifficultyForLevel(this.level)[1];
  }

  get impulseNumber() {
    const [minLevel] = getDifficultyForLevel(this.level);
    return this.level - minLevel + 1;
  }

  get stateNumber() {
    return getDifficultyForLevel(this.level)[2];
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
