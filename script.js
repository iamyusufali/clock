const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const setDate = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondInDegree = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondInDegree}deg)`;

  const minutes = now.getMinutes();
  const minInDegree = (minutes / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minInDegree}deg)`;

  let hours = now.getHours();
  if (hours > 12) hours = hours - 12;
  const hoursInDegree = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursInDegree}deg)`;
};

setInterval(setDate, 1000);
