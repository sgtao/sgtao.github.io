'use strict';
{

  /* header section */
  var openMenu = document.getElementById('open_menu');
  var closeMenu = document.getElementById('close_menu');
  var menu = document.getElementById('menu');
  
  openMenu.addEventListener('click', function () {
    menu.classList.add('shown');
  });
  
  closeMenu.addEventListener('click', function () {
    menu.classList.remove('shown');
  });
  menu.addEventListener('click', function () {
    // console.log('menu clicked');
    menu.classList.remove('shown');
  });
  
  /* mysite section */
  const contents_list = [
    { id: 1, img: 'img/01_nikkei_daily.png',  url: "01_nikkei_daily/index.html" },
    { id: 2, img: 'img/02_Biz_books.png',     url: "02_Biz_books/index.html" },
    { id: 7, img: 'img/07_MurphysLaw.png',    url: "03_projects/index.html" },
    { id: 8, img: 'img/08_Markdown2HTML.png', url: "03_projects/08_Markdown2HTML/index.html" },
    { id: 9, img: 'img/09_AmiVoiceAPI.png',   url: "03_projects/09_AmiVoiceAPI/index.html" },
    { id:10, img: 'img/10_iframePage.png',    url: "03_projects/10_iframePage/index.html" },
    { id:11, img: 'img/11_GoseimonWithClock.png', url: "03_projects/11_GoseimonWithClock/index.html" },
    { id: 12, img: 'img/12_webQRcoder.png', url: "https://sgtao.github.io/webQRcoder/" },
    { id:999, img: 'dummy', url: "dummy" }
  ];
  const mysite_images = [
    'img/01_nikkei_daily.png',
    'img/02_Biz_books.png',
    'img/07_MurphysLaw.png',
    'img/08_Markdown2HTML.png',
    'img/09_AmiVoiceAPI.png',
    'img/10_iframePage.png',
    'img/11_GoseimonWithClock.png',
    'img/12_webQRcoder.png',
  ];
  const mysite_urls = [
    "01_nikkei_daily/index.html",
    "02_Biz_books/index.html",
    "03_projects/07_MurphysLaw/index.html",
    "03_projects/08_Markdown2HTML/index.html",
    "03_projects/09_AmiVoiceAPI/index.html",
    "03_projects/10_iframePage",
    "03_projects/11_GoseimonWithClock",
    "https://sgtao.github.io/webQRcoder/",
  ];
  let currentNum = 0;
  
  function setMainImage(index) {
    let image = mysite_images[index];
    let url = mysite_urls[index];
    let img = document.querySelector('#mysite main a img');
    let link = document.querySelector('#mysite main a');
    img.setAttribute("src", image);
    link.setAttribute("href", url);
    link.setAttribute("target", "_blank");
  }
  
  function removeCurrentClass() {
    document.querySelectorAll('.thumbnails li')[currentNum]
      .classList.remove('current');
  }
  function addCurrentClass() {
    document.querySelectorAll('.thumbnails li')[currentNum]
      .classList.add('current');
  }
  
  const thumbnails = document.querySelector('.thumbnails');
  mysite_images.forEach((image, index) => {
    const li = document.createElement('li');
    if (index === currentNum) {
      li.classList.add('current');
    }
  
    li.addEventListener('click', () => {
      setMainImage(index);
      removeCurrentClass();
      currentNum = index;
      addCurrentClass();
      pauseSlideshow();
    });
    const img = document.createElement('img');
    img.src = image;
    li.appendChild(img);
    thumbnails.appendChild(li);
  });
  
  const next = document.getElementById('next');
  next.addEventListener('click', () => {
    removeCurrentClass();
    currentNum++;
    if (currentNum === mysite_images.length) {
      currentNum = 0;
    }
    addCurrentClass();
    setMainImage(currentNum);
  });
  
  const prev = document.getElementById('prev');
  prev.addEventListener('click', () => {
    removeCurrentClass();
    currentNum--;
    if (currentNum < 0) {
      currentNum = mysite_images.length - 1;
    }
    addCurrentClass();
    setMainImage(currentNum);
  });
  
  /* footer section */
  
  /* window actions */
  window.onload = function () {
    // show digital-clock at Page Top
    window.setInterval(function () {
      let dd = new Date();
      document.getElementById("digital-clock").innerHTML = dd.toLocaleString();
    }, 200);
  
    // decide to show or hidden HomeNetwork links
    let locate_host = location.host;
    let locate_url = new String();
    locate_url = locate_host.split(":")[0];
    // console.log(locate_url);
    if (!locate_url.startsWith("192.168")) {
      console.log(document.getElementById('infra'));
      document.getElementById('infra').style.display = 'none';
    }
  
    // pause SlideShow of mysite categories.
    setMainImage(currentNum);
  
  
  };
}
