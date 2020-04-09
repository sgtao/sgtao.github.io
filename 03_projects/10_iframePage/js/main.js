'use strict';

{
  var menu = document.getElementById('tab_menu');
  var content = document.getElementById('tab_content');
  var menus = menu.getElementsByTagName('a');
  var current; // 現在の状態を保持する変数
  const menu_contents = [
    { "id": 1, "menu": "神奈川県", "href": "http://www.pref.kanagawa.jp/prs/list-2020-1-1.html"},
    { "id": 2, "menu": "横浜市", "href": "https://www.city.yokohama.lg.jp/city-info/"},
    { "id": 3, "menu": "川崎市", "href": "http://www.city.kawasaki.jp/"},
    { "id": 4, "menu": "藤沢市", "href": "http://www.city.fujisawa.kanagawa.jp/#tmp_info_cnt2"}
  ];
  console.dir(menu_contents);


  for (var i = 0, l = menus.length;i < l; i++){
    tab_init(menus[i], i);
  }
  function tab_init(link, index){
    var id = link.hash.slice(1);
    var page = document.getElementById(id);
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
