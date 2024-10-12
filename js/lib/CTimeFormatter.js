function formatTimeCustomly(iSeconds) {
  const iTotalSeconds = Math.floor(iSeconds);
  const iMinutes = Math.floor(iTotalSeconds / 60);
  const iSecs = iTotalSeconds % 60;
  const iMillis = Math.floor((iSeconds - iTotalSeconds) * 1000);

  const szMinutes = String(iMinutes).padStart(2, "0");
  const szSeconds = String(iSecs).padStart(2, "0");
  const szMillis = String(iMillis).padStart(3, "0");

  return `${szMinutes}:${szSeconds}:${szMillis}`;
}
