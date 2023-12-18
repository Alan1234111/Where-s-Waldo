export const formatTime = (time: number) => {
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;

  const formatedMinutes = minutes.toString().padStart(2, "0");
  const formatedSeconds = seconds.toString().padStart(2, "0");
  const formatedMiliseconds = milliseconds.toString().padStart(2, "0");

  return `${formatedMinutes}:${formatedSeconds}:${formatedMiliseconds}`;
};
