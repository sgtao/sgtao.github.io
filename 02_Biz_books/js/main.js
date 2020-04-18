'use strict';

{
  const menu_contents = [
    { id: 1, menu: "第１章　思考法", url: "memo/01_thinking.html", load: "success"},
    { id: 2, menu: "第２章　発想法＆読書術", url: "memo/02_idea.html", load: "success"},
    { id: 3, menu: "第３章　ビジネス基礎", url: "memo/03_basic.html", load: "success"},
    { id: 4, menu: "第４章　自己管理法", url: "memo/04_self-management.html", load: "success"},
    { id: 5, menu: "第５章　コンセプト設計／戦略", url: "memo/05_strategy.html", load: "success"},
    { id: 6, menu: "第６章　コミュニケーション術", url: "memo/06_communication.html", load: "success"},
    { id: 7, menu: "第７章　マネジメント法", url: "memo/07_management.html", load: "success"},
    { id: 8, menu: "第８章　思考法", url: "memo/08_life-design.html", load: "success"},
    { id: 9, menu: "第９章　自己実現法", url: "memo/09_self-actualized.html", load: "success"},
    { id: 10, menu: "第10章　成功哲学", url: "memo/10_success_philos.html", load: "success"},
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
