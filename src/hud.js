import { h } from 'skatejs';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};

export default function Hud({ level }) {
  return (
    <div style={styles.container}>
      <span>Level: {level}</span>
    </div>
  );
}
