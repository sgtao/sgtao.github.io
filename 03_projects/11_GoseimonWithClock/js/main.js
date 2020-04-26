'use strict'

{
  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  var clock = document.getElementById('digital-clock');
  var watch = document.getElementById('stop-watch');
  var startTime, elapsedTime, targetTime;
  var startTime_str = "";
  var isStarted = false;
  var timerId;

  function updateTimerText() {
    let total_sec = Math.floor(elapsedTime / 1000);
    let sec = total_sec % 60;
    let min = Math.floor(total_sec / 60) % 60;
    let hrs = Math.floor(total_sec / 3600);
    let msec = elapsedTime % 1000;
    msec = ('00' + msec).slice(-2);
    watch.textContent = hrs + ':' + min + ':' + sec + '.' + msec + ' from ' + startTime_str;
  }

  function countUp() {
    if (isStarted === false) {
      return;
    }
    timerId = setTimeout(function () {
      elapsedTime = Date.now() - startTime;
      updateTimerText();
      countUp();
    }, 20);
  }

  start.addEventListener('click', function () {
    if (isStarted === true) {
      return;
    }
    isStarted = true;
    let dd = new Date();
    startTime = Date.now();
    startTime_str = dd.toLocaleTimeString();
    this.className = 'is-hidden';
    stop.className = '';
    clock.className = 'is-hidden';
    watch.className = 'running';
    countUp();
  });

  stop.addEventListener('click', function () {
    var resultTime;
    var diff;
    if (isStarted === false) {
      return;
    }
    isStarted = false;
    clearTimeout(timerId);
    this.className = 'is-hidden';
    start.className = '';
    clock.className = 'clock';
    watch.className = 'result';
  });

  /* window actions */
  window.onload = function () {
    // show digital-clock at Page Top
    window.setInterval(function () {
      let dd = new Date();
      document.getElementById("digital-clock").innerHTML = dd.toLocaleString();
    }, 1000);
  }

}