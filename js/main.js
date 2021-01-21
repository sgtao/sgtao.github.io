'use strict';
{
  /* hero-slider section */
  document.addEventListener('DOMContentLoaded', function() {
    // var hero = new HeroSlider('.swiper-container');
    // hero.start({delay: 4000});
    const main = new Main();
  });

  class Main {
    constructor() {
        this._init();
    }
    _init() {
        this.hero = new HeroSlider('.swiper-container');
    // hero.start({delay: 4000});
        Pace.on('done', this._paceDone.bind(this));
    }

    _paceDone() {
        this._windowInit();
    }

    _windowInit(){
      console.log('window init.')
      // decide to show or hidden HomeNetwork links
      let locate_host = location.host;
      let locate_url = new String();
      locate_url = locate_host.split(":")[0];
      // console.log(locate_url);
      if (locate_url.startsWith("192.168")) {
        document.querySelector('#header h1').textContent = 'MySite on Pi4';
      } else {
        document.querySelector('#header h1').textContent = 'MySite on github.io';
        document.querySelector('#homeinfra').classList.add('hide')
      }
    }
  }


  // footer section 
  // ========================================================
  // スクロールでトップに戻るボタンを表示
  // refer : https://rfs.jp/sb/javascript/js-lab/brn-backtotop.html  
  //=========================================================
  // スクロールして何ピクセルでアニメーションさせるか
  var px_change = 200;
  // スクロールのイベントハンドラを登録
  window.addEventListener('scroll', function(e) {
    // 変化するポイントまでスクロールしたらクラスを追加
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if ( scrollTop > px_change ) {
      document.querySelector( "#page_top" ).classList.add( "fadein" );
  
    // 変化するポイント以前であればクラスを削除
    } else {
      document.querySelector( "#page_top" ).classList.remove( "fadein" );
    }
  });

  const btn_page_top = document.querySelector('#page_top')
document.getElementById( "page_top" ).addEventListener('click', function(e) {
	anime.remove("html, body");
	anime({
		targets: "html, body",
		scrollTop: 0,
		dulation: 600,
		easing: 'easeOutCubic',
	});
	return false;
});

}
