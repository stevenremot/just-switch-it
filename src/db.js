export function setBest(best) {
  localStorage.setItem('lsg-best', best);
}

export function getBest() {
  return +localStorage.getItem('lsg-best');
}
