function formatTimeCustomly(iMilliseconds) {
  const iTotalSeconds = Math.floor(iMilliseconds / 1000);
  const iMinutes = Math.floor(iTotalSeconds / 60);
  const iSeconds = iTotalSeconds % 60;
  const iMillis = iMilliseconds % 1000;

  const szMinutes = String(iMinutes).padStart(2, "0");
  const szSeconds = String(iSeconds).padStart(2, "0");
  const szMillis = String(iMillis).padStart(3, "0");

  console.log("formatTime called", szMillis);

  return `${szMinutes}:${szSeconds}:${szMillis}`;
}
