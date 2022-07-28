let hourhand = document.getElementById("hourhand");
let minhand = document.getElementById("minhand");
let sechand = document.getElementById("sechand");

setInterval(() => {
  let time = new Date();
  let hour = time.getHour();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  let hRot = hour*30 + min/2;
  let mRot = min*6;
  let sRot = sec*6;

  hourhand.style.transform = `rotate(${hRot})`;
  minhand.style.transform = `rotate(${mRot})`;
  sechand.style.transform = `rotate(${sRot})`;
}, 1000);