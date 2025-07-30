let timeFormat = '24'; 

function setFormat(format) {
  timeFormat = format;
}

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  let ampm = '';
  if (timeFormat === '12') {
    ampm = hours >= 12 ? ' PM' : ' AM';
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;
  }

  const hoursStr = hours.toString().padStart(2, '0');
  const timeString = `${hoursStr}:${minutes}:${seconds}${timeFormat === '12' ? ampm : ''}`;
  document.getElementById("clock").textContent = timeString;

  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = now.toLocaleDateString(undefined, dateOptions);
  document.getElementById("date").textContent = dateString;
}

updateClock();
setInterval(updateClock, 1000);
