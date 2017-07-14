import { h, Component, define, props } from 'skatejs';

export default class Cell extends Component {
  static get is() { return 'lsg-cell'; }

  static get props() {
    return {
      state: props.number,
    };
  }

  renderCallback() {
    return (
      <div class={`cell lit${this.state}`}>
        <style>{`
        .cell button {
          display: block;
          width: 100%;
          padding: 0;
          padding-top: 100%;
          border: transparent;
          border-radius: 4px;
          transition: background-color 0.2s ease-in;
          outline: none;
          cursor: pointer;

          -webkit-tap-highlight-color: rgba(255, 255, 255, 0.3);
        }

        .cell.lit0 button, .cell.lit0 button:focus {
          background-color: #c0c0c0;
        }

        .cell.lit1 button, .cell.lit1 button:focus {
          background-color: #ffff61;
        }

        .cell.lit2 button, .cell.lit2 button:focus {
          background-color: #f25656;
        }

        @media (hover) {

          .cell.lit0 button:hover {
            background-color: #e0e0e0;
          }

          .cell.lit1 button:hover {
            background-color: #ffffc0;
          }

          .cell.lit2 button:hover {
            background-color: #fca2a2;
          }
        }
      `}</style>
        <button type="button" />
      </div>
    );
  }
}

define(Cell);
