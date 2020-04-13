'use strict';

{
  const menu_contents = [
    { id: 1, menu: "横浜市", url: "https://www.city.yokohama.lg.jp/city-info/koho-kocho/press/"},
    { id: 2, menu: "川崎市", url: "http://www.city.kawasaki.jp/"},
//    { id: 3, menu: "相模原市", url: "https://www.city.sagamihara.kanagawa.jp/shisei/koho/houdo/index.html"},
    { id: 4, menu: "藤沢市", url: "http://www.city.fujisawa.kanagawa.jp/#tmp_info_cnt2"},
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
        add_iframe.setAttribute("src",key.url);
        add_page.id = "page-" + key.id;
        add_page.className = "page";
        add_page.style.display = 'none';
        add_page.appendChild(add_iframe);
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
