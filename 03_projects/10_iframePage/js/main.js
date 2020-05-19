'use strict';

{
  const menu_contents = [
    { id: 141003, menu: "横浜市", type: "ordinance-city", url: "https://www.city.yokohama.lg.jp/city-info/koho-kocho/press/", load: "success"},
    { id: 141305, menu: "川崎市", type: "ordinance-city", url: "http://www.city.kawasaki.jp/", load: "success"},
    { id: 141500, menu: "相模原市", type: "ordinance-city", url: "https://www.city.sagamihara.kanagawa.jp/shisei/koho/houdo/index.html", load: "refused" },
    { id: 14201, menu: "横須賀市", type: "general-city", url: "https://www.city.yokosuka.kanagawa.jp/shisei/shinchaku/index.html" },
    { id: 14203, menu: "平塚市", type: "general-city", url: "http://www.city.hiratsuka.kanagawa.jp/news_category6.html" },
    { id: 14204, menu: "鎌倉市", type: "general-city", url: "https://www.city.kamakura.kanagawa.jp/oshirase/index.html" },
    { id: 14205, menu: "藤沢市", type: "general-city", url: "https://www.city.fujisawa.kanagawa.jp/shinchaku/index.html" },
    { id: 14206, menu: "小田原市", type: "general-city", url: "http://www.city.odawara.kanagawa.jp/topix/" },
    { id: 14207, menu: "茅ヶ崎市", type: "general-city", url: "https://www.city.chigasaki.kanagawa.jp/about/update.html", load: "refused" },
    { id: 14208, menu: "逗子市", type: "general-city", url: "https://www.city.zushi.kanagawa.jp/topics/" },
    { id: 14210, menu: "三浦市", type: "general-city", url: "http://www.city.miura.kanagawa.jp/shisei-whatsnew.html" },
    { id: 14211, menu: "秦野市", type: "general-city", url: "https://www.city.hadano.kanagawa.jp/www/news.html", load: "refused" },
    { id: 14212, menu: "厚木市", type: "general-city", url: "https://www.city.atsugi.kanagawa.jp/information/news.html" },
    { id: 14213, menu: "大和市", type: "general-city", url: "http://www.city.yamato.lg.jp/web/news/newslist.html" },
    { id: 14214, menu: "伊勢原市", type: "general-city", url: "https://www.city.isehara.kanagawa.jp/categories/bunya/shisei/more@docs_3@c_shinchaku.html" },
    { id: 14215, menu: "海老名市", type: "general-city", url: "https://www.city.ebina.kanagawa.jp/newslist.html", load: "refused" },
    { id: 14216, menu: "座間市", type: "general-city", url: "https://www.city.zama.kanagawa.jp/www/topics/0000000000000/ACL04000.html" },
    { id: 14217, menu: "南足柄市", type: "general-city", url: "http://www.city.minamiashigara.kanagawa.jp/newsTopics/" },
    { id: 14218, menu: "綾瀬市", type: "general-city", url: "https://www.city.ayase.kanagawa.jp/index.html#tab1" },
    { id: 14301, menu: "三浦郡葉山町", type: "town", url: "https://www.town.hayama.lg.jp/new.html" },
    { id: 14321, menu: "高座郡寒川町", type: "town", url: "http://www.town.samukawa.kanagawa.jp/oshirase/index.html" },
    { id: 14341, menu: "中郡大磯町", type: "town", url: "http://www.town.oiso.kanagawa.jp/news.html" },
    { id: 14342, menu: "中郡二宮町", type: "town", url: "http://www.town.ninomiya.kanagawa.jp/news.html" },
    { id: 14361, menu: "足柄上郡中井町", type: "town", url: "https://www.town.nakai.kanagawa.jp/local//common/controls/alllist/AllList.aspx?type=new" },
    { id: 14362, menu: "足柄上郡大井町", type: "town", url: "https://www.town.oi.kanagawa.jp/soshiki/list1-1.html" },
    { id: 14363, menu: "足柄上郡松田町", type: "town", url: "https://town.matsuda.kanagawa.jp/soshiki/list1-1.html" },
    { id: 14364, menu: "足柄上郡山北町", type: "town", url: "http://www.town.yamakita.kanagawa.jp/news/0001.html" },
    { id: 14366, menu: "足柄上郡開成町", type: "town", url: "https://www.town.kaisei.kanagawa.jp/forms/top/top.aspx#tab2", load: "refused" },
    { id: 14382, menu: "足柄下郡箱根町", type: "town", url: "http://www.town.hakone.kanagawa.jp/" },
    { id: 14383, menu: "足柄下郡真鶴町", type: "town", url: "http://www.town.manazuru.kanagawa.jp/news.html" },
    { id: 14384, menu: "足柄下郡湯河原町", type: "town", url: "https://www.town.yugawara.kanagawa.jp/information/" },
    { id: 14401, menu: "愛甲郡愛川町", type: "town", url: "https://www.town.aikawa.kanagawa.jp/news_list.html" },
    { id: 14402, menu: "愛甲郡清川村", type: "village", url: "https://www.town.kiyokawa.kanagawa.jp/news.html" },
    { id:999, menu:"dummy" , type: "dummy", url:"dummy" }
  ]; 
  console.dir(menu_contents);

  var menu = document.getElementById('tab_menus');
  var content = document.getElementById('tab_contents');
  var current; // 現在の状態を保持する変数

  var tab_menus = document.getElementById('tab_menus');
  var tab_contents = document.getElementById('tab_contents');

  // check select area
  const chkbox_pref = document.querySelector("div#select-area input[name='pref']");
  const chkbox_ordinance = document.querySelector("div#select-area input[name='ordinance']");
  const chkbox_general = document.querySelector("div#select-area input[name='general']");
  const chkbox_town = document.querySelector("div#select-area input[name='town']");
  const chkbox_village = document.querySelector("div#select-area input[name='village']");

  var area_select = {
    chk_ordinance: false,
    chk_general: false,
    chk_town: false,
    chk_village: false,
    chk_dummy: false
  };
  var loadJson = localStorage.getItem('areaselect');
  console.log('loadJson : ' + loadJson);
  if (loadJson === null) {
    area_select.chk_ordinance = chkbox_ordinance.checked;
    area_select.chk_general   = chkbox_general.checked;
    area_select.chk_town      = chkbox_town.checked;
    area_select.chk_village   = chkbox_village.checked;
  } else { // restore from localStorage
    area_select = JSON.parse(loadJson);
    console.log(area_select.chk_ordinance);
    console.log(area_select.chk_general);
    console.log(area_select.chk_town);
    console.log(area_select.chk_village);
    chkbox_ordinance.checked = area_select.chk_ordinance;
    chkbox_general.checked = area_select.chk_general;
    chkbox_town.checked =  area_select.chk_town;
    chkbox_village.checked = area_select.chk_village;
  }

  /* window actions */
  window.onload = function () {
    var menus = menu.getElementsByTagName('a');
    let i;
    console.log("menus(basic)" + menus);
    tab_init(menus[0]);

    menu_contents.forEach(function (key){
      console.dir(key);
      console.log("id   : " + key.id)
      console.log("menu : " + key.menu);
      console.log("type : " + key.type);
      console.log("url  : " + key.url);
      if (key.load != null) {
        console.log("load is " + key.load);
      }

      if (key.menu != "dummy") {
        // Check Type and show
        switch (key.type) {
          case 'ordinance-city' :
            if (area_select.chk_ordinance == false) { return; }
            break;
          case 'general-city':
            if (area_select.chk_general == false) { return; }
            break;
          case 'town':
            if (area_select.chk_town == false) { return; }
            break;
          case 'village':
            if (area_select.chk_village == false) { return; }
            break;
          default :
            console.log('type is not defined!');
            return;
        }
        create_tab_menu(key, tab_menus, tab_contents);        
      }
    });
  }  

  // Create tab menu
  function create_tab_menu(key, target_menus, target_contents) {
    const add_menu = document.createElement('li');
    const add_url = document.createElement('a');
    add_url.innerHTML = key.menu;
    add_url.setAttribute("href", "#page-" + key.id);
    add_menu.appendChild(add_url);
    target_menus.appendChild(add_menu);

    // Create tab content
    const add_page = document.createElement('div');
    const add_iframe = document.createElement('iframe');
    const add_parag = document.createElement('p');

    add_page.id = "page-" + key.id;
    add_page.className = "page";
    add_page.style.display = 'none';
    if ((key.load == null) || (key.load === "success")) {
      add_iframe.setAttribute("src", key.url);
      add_page.appendChild(add_iframe);
    } else { // load is "refused"
      add_parag.innerHTML = "<a href=\"" + key.url + "\" target=\"_blank\">こちら</a>のリンクより開きます（別ウィンドウ）。"
      add_page.appendChild(add_parag);
    }
    target_contents.appendChild(add_page);
    console.log('tab_menus : ', target_menus);
    console.log('tab_contents : ', target_contents);
    tab_init(add_url);
  }

  function tab_init(link){
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
      console.log('link clicked');
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

  // Save area selector, and reload page
  const btn_reload = document.querySelector('#btn_reload');
  const save_chkbox_reload = function() {
    // save checkbox status
    console.log('save to localStorage');
    area_select.chk_ordinance = chkbox_ordinance.checked;
    area_select.chk_general = chkbox_general.checked;
    area_select.chk_town = chkbox_town.checked;
    area_select.chk_village = chkbox_village.checked;
    area_select.chk_dummy = false;
    let saveJson = JSON.stringify(area_select);
    localStorage.setItem('areaselect', saveJson);

    // reload page
    document.location.reload()
  }
  btn_reload.addEventListener('click', save_chkbox_reload);

  // clear local storage
  const clear_localStorage = function () {
    console.log('clear localStorage');
    localStorage.removeItem('areaselect');
    document.location.reload()
  }
  const clearLS = document.querySelector('.clearLS');
  clearLS.addEventListener('click', clear_localStorage);


}
