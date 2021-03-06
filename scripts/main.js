document.addEventListener('DOMContentLoaded', function () {
    const main = new Main();
});

class Main {
    constructor() {
        this.header = document.querySelector('.header');
        this.sides = document.querySelectorAll('.side');
        this.btn_page_top = document.querySelector('#page_top');
        this._observers = [];
        this._init();
    }

    set observers(val) {
        this._observers.push(val);
    }

    get observers() {
        return this._observers;
    }

    _init() {
        new MobileMenu();
        this.hero = new HeroSlider('.swiper-container');
        Pace.on('done', this._paceDone.bind(this));
        // console.log(this.btn_page_top)
        init_page_top(this.btn_page_top);

        // callback for PageObserve of some sections
        this._scrollInit(); 
        const so = new ScrollObserver('.cover-slide', this._inviewAnimation);


        // decide to show or hidden HomeNetwork links
        let locate_host = location.host;
        let locate_url = new String();
        locate_url = locate_host.split(":")[0];
        if (locate_url.startsWith("192.168")) {
            document.querySelector('.logo__mysite').textContent = 'MySite on Pi4';
        } else {
            document.querySelector('.logo__mysite').textContent = 'MySite on github.io';
            document.querySelector('#homeinfra').classList.add('hide')
        }

    }

    _paceDone() {
        this._scrollInit();
    }

    _inviewAnimation(el, inview) {
        console.log(this);
        if(inview) {
            el.classList.add('inview');
        }else {
            el.classList.remove('inview');
        }
    }

    _navAnimation(el, inview) {
        if(inview) {
            this.header.classList.remove('triggered');
        } else {
            this.header.classList.add('triggered');
        }
    }

    _sideAnimation(el, inview) {
        if(inview) {
            this.sides.forEach(side => side.classList.add('inview'));
        } else {
            this.sides.forEach(side => side.classList.remove('inview'));
        }
    }

    _textAnimation(el, inview) {
        if(inview) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        }
    }

    _toggleSlideAnimation(el, inview) {
        if(inview) {
            this.hero.start();
        } else {
            this.hero.stop();
        }
    }

    _destroyObservers() {
        this.observers.forEach(ob => {
            ob.destroy();
        });
    }

    destroy() {
        this._destroyObservers();
    }

    _scrollInit() {
        // this.observers = new ScrollObserver('.nav-trigger', this._navAnimation.bind(this), {once: false});
        // this.observers = new ScrollObserver('.cover-slide', this._inviewAnimation);
        this.observers = new ScrollObserver('.appear', this._inviewAnimation);
        this.observers = new ScrollObserver('.tween-animate-title', this._textAnimation, {rootMargin: "-200px 0px"});
        this.observers = new ScrollObserver('.swiper-container', this._toggleSlideAnimation.bind(this), {once: false});
        this.observers = new ScrollObserver('#main-content', this._sideAnimation.bind(this), {once: false, rootMargin: "-300px 0px"});
    }
}

