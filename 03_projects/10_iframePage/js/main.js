'use strict';

{
  const menu_contents = [
    { id: 141003, menu: "横浜市", url: "https://www.city.yokohama.lg.jp/city-info/koho-kocho/press/", load: "success"},
    { id: 141305, menu: "川崎市", url: "http://www.city.kawasaki.jp/", load: "success"},
    { id: 141500, menu: "相模原市", url: "https://www.city.sagamihara.kanagawa.jp/shisei/koho/houdo/index.html", load: "refused" },
    { id: 14201, menu: "横須賀市", url: "https://www.city.yokosuka.kanagawa.jp/shisei/shinchaku/index.html" },
    { id: 14203, menu: "平塚市", url: "http://www.city.hiratsuka.kanagawa.jp/news_category6.html" },
    { id: 14204, menu: "鎌倉市", url: "https://www.city.kamakura.kanagawa.jp/oshirase/index.html" },
    { id: 14205, menu: "藤沢市", url: "https://www.city.fujisawa.kanagawa.jp/shinchaku/index.html" },
/*
    { id: 14206, menu: "小田原市", url: "http://www.city.odawara.kanagawa.jp/topix/" },
    { id: 14207, menu: "茅ヶ崎市", url: "https://www.city.chigasaki.kanagawa.jp/about/update.html" },
    { id: 14208, menu: "逗子市", url: "https://www.city.zushi.kanagawa.jp/topics/" },
    { id: 14210, menu: "三浦市", url: "http://www.city.miura.kanagawa.jp/shisei-whatsnew.html" },
    { id: 14211, menu: "秦野市", url: "https://www.city.hadano.kanagawa.jp/www/news.html" },
    { id: 14212, menu: "厚木市", url: "https://www.city.atsugi.kanagawa.jp/information/news.html" },
    { id: 14213, menu: "大和市", url: "http://www.city.yamato.lg.jp/web/news/newslist.html" },
    { id: 14214, menu: "伊勢原市", url: "https://www.city.isehara.kanagawa.jp/categories/bunya/shisei/more@docs_3@c_shinchaku.html" },
    { id: 14215, menu: "海老名市", url: "https://www.city.ebina.kanagawa.jp/newslist.html" },
    { id: 14216, menu: "座間市", url: "https://www.city.zama.kanagawa.jp/www/topics/0000000000000/ACL04000.html" },
    { id: 14217, menu: "南足柄市", url: "http://www.city.minamiashigara.kanagawa.jp/newsTopics/" },
    { id: 14218, menu: "綾瀬市", url: "https://www.city.ayase.kanagawa.jp/index.html#tab1" },
    { id: 14301, menu: "三浦郡葉山町", url: "https://www.town.hayama.lg.jp/new.html" },
    { id: 14321, menu: "高座郡寒川町", url: "http://www.town.samukawa.kanagawa.jp/oshirase/index.html" },
    { id: 14341, menu: "中郡大磯町", url: "http://www.town.oiso.kanagawa.jp/news.html" },
    { id: 14342, menu: "中郡二宮町", url: "http://www.town.ninomiya.kanagawa.jp/news.html" },
    { id: 14361, menu: "足柄上郡中井町", url: "https://www.town.nakai.kanagawa.jp/local//common/controls/alllist/AllList.aspx?type=new" },
    { id: 14362, menu: "足柄上郡大井町", url: "https://www.town.oi.kanagawa.jp/soshiki/list1-1.html" },
    { id: 14363, menu: "足柄上郡松田町", url: "https://town.matsuda.kanagawa.jp/soshiki/list1-1.html" },
    { id: 14364, menu: "足柄上郡山北町", url: "http://www.town.yamakita.kanagawa.jp/news/0001.html" },
    { id: 14366, menu: "足柄上郡開成町", url: "https://www.town.kaisei.kanagawa.jp/forms/top/top.aspx#tab2" },
    { id: 14382, menu: "足柄下郡箱根町", url: "http://www.town.hakone.kanagawa.jp/" },
    { id: 14383, menu: "足柄下郡真鶴町", url: "http://www.town.manazuru.kanagawa.jp/news.html" },
    { id: 14384, menu: "足柄下郡湯河原町", url: "https://www.town.yugawara.kanagawa.jp/information/" },
    { id: 14401, menu: "愛甲郡愛川町", url: "https://www.town.aikawa.kanagawa.jp/news_list.html" },
    { id: 14402, menu: "愛甲郡清川村", url: "https://www.town.kiyokawa.kanagawa.jp/news.html" },
*/
    { id:999, menu:"dummy" , url:"dummy" }
  ]; 
  console.dir(menu_contents);
  
  var menu = document.getElementById('tab_menus');
  var content = document.getElementById('tab_contents');
  var current; // 現在の状態を保持する変数

  var tab_menus = document.getElementById('tab_menus');
  var tab_contents = document.getElementById('tab_contents');

  /* window actions */
  window.onload = function () {
    var menus = menu.getElementsByTagName('a');
    let i;
    console.log("menus(basic)" + menus);
    for (i = 0; i < menus.length; i++) {
      tab_init(menus[i], i);
    }

    menu_contents.forEach(function (key){
      console.dir(key);
      console.log("id   : " + key.id)
      console.log("menu : " + key.menu);
      console.log("url  : " + key.url);
      if (key.load != null) {
        console.log("load is " + key.load);
      }

      if (key.menu != "dummy") { 
        // Create tab menu
        const add_menu = document.createElement('li');
        const add_url = document.createElement('a');
        add_url.innerHTML = key.menu;
        add_url.setAttribute("href", "#page-" + key.id);
        add_menu.appendChild(add_url);
        tab_menus.appendChild(add_menu);
  
        // Create tab content
        const add_page = document.createElement('div');
        const add_iframe = document.createElement('iframe');
        const add_parag = document.createElement('p');
        
        add_page.id = "page-" + key.id;
        add_page.className = "page";
        add_page.style.display = 'none';
        if ((key.load == null) || (key.load === "success")) {
          add_iframe.setAttribute("src",key.url);
          add_page.appendChild(add_iframe);
        } else { // load is "refused"
          add_parag.innerHTML = "<a href=\"" + key.url + "\" target=\"_blank\">こちら</a>のリンクより開きます（別ウィンドウ）。"
          add_page.appendChild(add_parag);
        }
        tab_contents.appendChild(add_page);
        console.log('tab_menus : ', tab_menus);
        console.log('tab_contents : ', tab_contents);
        tab_init(add_url, i++);
      }
    });
  }  

  function tab_init(link, index){
    console.log('in tab_init, link is ' + link);
    let id = link.hash.slice(1);
    console.log('in tab_init, id is ' + id);
    let page = document.getElementById(id);
    console.log('in tab_init, page is ', page);
    if (!current){ // 状態の初期化
      current = {page:page, menu:link};
      page.style.display = 'block';
      link.className = 'active';
    } else {
      page.style.display = 'none';
    }
    link.onclick = function(){
      current.page.style.display = 'none';
      current.menu.className = '';
      page.style.display = 'block';
      link.className = 'active';
      current.page = page;
      current.menu = link;
      console.dir(current);
      return false;
    };
  }
}
