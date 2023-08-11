export function formatMinAndSec(seconds) {
  if (!seconds) return null;

  return (
    (seconds - (seconds %= 60)) / 60 + (9 < seconds ? ":" : ":0") + seconds
  );
}
