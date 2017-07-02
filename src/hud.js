import { h } from 'skatejs';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};

export default function Hud({ level, best }) {
  return (
    <div style={styles.container}>
      <span>Level: {level}</span>
      <span>Best: {best || 'N/A'}</span>
    </div>
  );
}
