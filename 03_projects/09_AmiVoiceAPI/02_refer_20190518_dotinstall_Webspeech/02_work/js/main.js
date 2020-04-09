'use strict';
{
  const btn = document.querySelector('button');
  // SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
  // const speech = new SpeechRecognition();
  const speech = new webkitSpeechRecognition();
  speech.lang = 'en-US';

  btn.addEventListener('click', () => {
    console.log('clicked');
    btn.disabled = true;
    speech.start();
  });

  speech.onresult = (e) => {
    // console.log(e);
    // alert(e.results[0][0].transcript);
    speech.stop();
    if (e.results[0].isFinal) {
      console.log(e.results[0][0].transcript);
      document.body.style.background = e.results[0][0].transcript;
    } else {
      console.log(e);
    }
    btn.disabled = false;
  };

  speech.onend = () => {
    speech.start();
  };

  speech.onsoundstart = () => {
    btn.textContent = 'Processing...';
  };

  speech.onsoundend = () => {
    btn.textContent = 'Waiting...';
  };
  

}
