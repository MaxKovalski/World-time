let intervalId;
let timeZone;
function start() {
  changeTimezone();
  intervalId = setInterval(changeTimezone, 1000);
}

function stop() {
  clearInterval(intervalId);
}

function changeTimezone() {
  const getDate = new Date();
  const setTime = getDate.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    weekday: "long",
    hour12: true,
    timeZone: timeZone,
  });

  document.querySelector("#clockChange").innerHTML = setTime;
}
function setTimezone(timezone) {
  timeZone = timezone;
  changeTimezone();
}
