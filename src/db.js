const MIGRATIONS = [
  [1, (storage) => {
    const best = storage.getItem('lsg-best');
    storage.clear();
    storage.setItem('lsg-current-level', +best || 1);
  }],
];

function getVersion() {
  return localStorage.getItem('lsg-version') || 0;
}

function setVersion(version) {
  localStorage.setItem('lsg-version', version);
}

function migrate() {
  const currentVersion = getVersion();
  let lastVersion = currentVersion;

  for (let [version, migration] of MIGRATIONS) {
    if (version > currentVersion) {
      migration(localStorage);
      lastVersion = version;
    }
  }

  setVersion(lastVersion);
}

export function openDb() {
  migrate();
}

export function getCurrentLevel() {
  return +localStorage.getItem('lsg-current-level') || 1;
}

export function setCurrentLevel(level) {
  return localStorage.setItem('lsg-current-level', +level);
}
