// Qui definisci le password e cosa vede chi le inserisce.
// La CHIAVE (es. "amici123") è la password.
// Per aggiungere un file: mettilo nella cartella "privati/" e scrivi il suo nome in "files".
// Per aggiungere una password: copia un blocco e cambia la chiave.

const ACCESSI = {
  "amici123": {
    titolo: "Benvenuto, amico!",
    messaggio: "Ecco i file per te.",
    files: ["placeholder-amici.txt", "placeholder-comune.txt"]
  },
  "team456": {
    titolo: "Area Team",
    messaggio: "File riservati al team.",
    files: ["placeholder-team.txt", "placeholder-comune.txt"]
  }
};
