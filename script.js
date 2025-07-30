function updateClock(){

    const now= new Date();
    const hours = now.getHours().toString().padStart(2,0);
    const min = now.getMinutes().toString().padStart(2,0);;
    const seconds = now.getSeconds().toString().padStart(2,0);;
    const timeString =`${hours}:${min}:${seconds}`;
    document.getElementById("clock").textContent=timeString;

    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = now.toLocaleDateString(undefined, dateOptions);
  document.getElementById("date").textContent = dateString;
}
updateClock();
setInterval(updateClock,1000);