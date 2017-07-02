import { h, Component, define, props } from 'skatejs';

import Cell from './cell';

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '12px',
    marginTop: '16px',
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

  connectedCallback() {
    super.connectedCallback();
    this.resetState();
  }

  resetState() {
    let cells = new Array(9);
    cells.fill(true);

    for (var i = 0; i < this.level; i += 1) {
      cells = this._triggerImpulse(
        cells,
        Math.floor(Math.random() * cells.length)
      );
    }

    this.cells = cells;
  }

  _getXFor(index) {
    return index % 3;
  }

  _getYFor(index) {
    return Math.floor(index / 3);
  }

  _triggerImpulse(cells, cellIndex) {
    const x = this._getXFor(cellIndex);
    const y = this._getYFor(cellIndex);
    return cells.map((cell, cellIndex) => {
      const x2 = this._getXFor(cellIndex);
      const y2 = this._getYFor(cellIndex);

      if (Math.abs(x - x2) <= 1 && Math.abs(y - y2) <= 1) {
        return !cell;
      }
      return cell;
    });
  }

  get isVictory() {
    return this.cells.every(cell => cell);
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
        lit={cell}
        onClick={() => this.handleChange(index)}
      ></lsg-cell>
    );
  }

  renderCallback() {
    return (
      <div style={styles.container}>
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
