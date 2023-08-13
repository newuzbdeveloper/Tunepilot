export function formatMinAndSec(sec) {
  if (!sec) return "0:00";
  let seconds = Math.floor(sec);

  return (
    (seconds - (seconds %= 60)) / 60 + (9 < seconds ? ":" : ":0") + seconds
  );
}
