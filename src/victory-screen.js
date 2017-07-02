import { h, Component, define, props } from 'skatejs';

const style = `
.victory-screen {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  background-color: rgba(128, 128, 128, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease-in;

  text-align: center;
}

.victory-screen.hidden {
  opacity: 0;
  pointer-events: none;
}

.victory-screen span {
  display: inline-block;
  color: white;
  font-size: 32px;
  margin-bottom: 32px;
}

.victory-screen button {
  background-color: lightblue;
  color: white;
  border: none;
  padding: 12px;
  font-size: 16px;
}
`;

export default class VictoryScreen extends Component {
  static get is() { return 'lsg-victory-screen'; }

  static get props() {
    return {
      isVisible: props.bool,
    };
  }

  handleClick(event) {
    event.stopPropagation();
    this.dispatchEvent(new Event('restart'));
  }

  renderCallback() {
    const classNames = ['victory-screen'];

    if (!this.isVisible) {
      classNames.push('hidden');
    }

    return (
      <div class={classNames.join(' ')}>
        <style>{style}</style>
        <span>Well done!</span>
        <button type="button" onClick={evt => this.handleClick(evt)}>
          Click to restart
        </button>
      </div>
    );
  }
}

define(VictoryScreen);
