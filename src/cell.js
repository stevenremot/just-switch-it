import { h, Component, define, props } from 'skatejs';

export default class Cell extends Component {
  static get is() { return 'lsg-cell'; }

  static get props() {
    return {
      lit: props.bool,
    };
  }

  renderCallback() {
    const classNames = ['cell'];

    if (this.lit) {
      classNames.push('lit');
    }

    return (
      <div class={classNames.join(' ')}>
        <style>{`
        .cell button {
          display: block;
          width: 100%;
          padding: 0;
          padding-top: 100%;
          border: transparent;
          background-color: #c0c0c0;
          border-radius: 4px;
          transition: background-color 0.2s ease-in;
        }

        .cell button:hover {
          background-color: #e0e0e0;
        }

        .cell.lit button {
          background-color: #ffff61;
        }

        .cell.lit button:hover {
          background-color: #ffffc0;
        }
      `}</style>
        <button type="button" />
      </div>
    );
  }
}

define(Cell);
