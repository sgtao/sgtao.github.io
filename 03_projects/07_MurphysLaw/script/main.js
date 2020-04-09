'use strict';
{
  let video = document.getElementById('video');
  let msgs = document.getElementById('message');
  let nextTime = 30;
  let prevTime = 15;
  const IntervalTime = 100;
  const play = document.getElementById('play');
  const pause = document.getElementById('pause');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  prev.innerHTML = "&lt;" + prevTime;
  next.innerHTML = nextTime + "&gt;";

  const downRate = document.getElementById('downRate');
  const resetRate = document.getElementById('resetRate');
  const upRate = document.getElementById('upRate');
  downRate.innerHTML = "downRate";
  resetRate.innerHTML = "rstRate";
  upRate.innerHTML = "upRate";

  // Play / Stop Control
  function playVideo() {
    play.classList.add('hidden');
    pause.classList.remove('hidden');
    video.play();
  }
  function pauseVideo() {
    play.classList.remove('hidden');
    pause.classList.add('hidden');
    video.pause(); 
  }
  // Skip Control
  function prevSkipVideo() {
    video.pause();
    if (video.currentTime > 10) {
      video.currentTime = video.currentTime - prevTime;
    } else {
      video.currentTime = 0;
    }
    video.play();
  }
  function nextSkipVideo() {
    video.pause();
    video.currentTime = video.currentTime + nextTime;
    video.play();
  }

  // Sub-function for speed ratio control
  // round under 1.0 
  // refer MDN : https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/round
  function round(number, precision) {
    var shift = function (number, precision, reverseShift) {
      if (reverseShift) {
        precision = -precision;
      }
      var numArray = ("" + number).split("e");
      return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision) : precision));
    };
    return shift(Math.round(shift(number, precision, false)), precision, true);
  }
  // speed ratio control
  function speedupVideo() {
    let currentRate = video.playbackRate;
    if (currentRate < 10) {
      video.playbackRate = round(currentRate + 0.25, 2);
    } else if (currentRate < 1.0) {
      video.playbackRate = round(currentRate + 0.1, 2);
    }
  }
  function speedresetVideo() {
    video.playbackRate = 1;
  }
  function speeddownVideo() {
    let currentRate = video.playbackRate;
    if (currentRate > 10.0) {
      video.playbackRate = 10.0;
    } else if (currentRate > 1.0) {
      video.playbackRate = round(currentRate - 0.25, 2);
    } else if (currentRate > 0.1) {
      video.playbackRate = round(currentRate - 0.1, 2);
    } else {
      return;
    }
  }

  // mouse event listener
  play.addEventListener('click', () => { playVideo(); });
  pause.addEventListener('click',() => { pauseVideo(); });
  prev.addEventListener('click', () => { prevSkipVideo(); });
  next.addEventListener('click', () => { nextSkipVideo(); });
  downRate.addEventListener('click', () => { speeddownVideo(); });
  resetRate.addEventListener('click', () => { speedresetVideo(); });
  upRate.addEventListener('click', () => { speedupVideo(); });

  // Short-cut Keymap definition
  document.addEventListener('keydown', (event) => {
    let keyName = event.key;
    let minites = Math.floor(video.currentTime / 60);
    let seconds = Math.floor(video.currentTime % 60);
    let pre_msg = "Current Time is " + minites + ":" + seconds + " ";
    
    if (event.ctrlKey) {
      console.log(pre_msg + `keydown:Ctrl + ${keyName}`);
    } else if (event.shiftKey) {
      console.log(pre_msg + `keydown:Shift + ${keyName}`);
      if (keyName === "P")      { prevSkipVideo(); }  
      else if (keyName === "N") { nextSkipVideo(); } 
      else if (keyName === "D") { speeddownVideo(); } 
      else if (keyName === "R") { speedresetVideo(); } 
      else if (keyName === "U") { speedupVideo(); } 
      else if (keyName === " ") { 
        if (video.paused) {
          playVideo(); 
        } else {
          pauseVideo(); 
        }
      } 
    } else {
      console.log(pre_msg + `keydown:${keyName}`);
    }
  });
  
  video.addEventListener("mouseover", function(){
    console.log('mouse over');
    console.log('video.playbackRate is ' + video.playbackRate);
    video.setAttribute('controls', '');
  });
  video.addEventListener("mouseout", function(){
    video.removeAttribute("controls");
  });

  window.onload = function () {
    window.setInterval(function () {
      if (video.paused) {
        play.classList.remove('hidden');
        pause.classList.add('hidden');
      } else {
        play.classList.add('hidden');
        pause.classList.remove('hidden');
      }
      let minites = Math.floor(video.currentTime / 60);
      let seconds = Math.floor(video.currentTime % 60);
      let speedRate = video.playbackRate;
      msgs.innerText = "Current Time is " + minites + ":" + seconds + 
      ", Current Speed is " + speedRate;
    }, IntervalTime);
  }

}
