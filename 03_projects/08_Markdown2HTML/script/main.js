'use strict';

{
  const preview_button = document.getElementById("preview_button");
  const copy_button = document.getElementById("copy_button");

  var simplemde = new SimpleMDE({
    element: document.getElementById('editor-main'),
    autosave: {
      enabled: true,
      uniqueId: "markdownblogeditor",
      delay: 1000,
    },
    forceSync: true,
    spellChecker: false,
    toolbar: false,
    status: false,
    indentWithTabs: false
  })

  marked.setOptions({
    sanitize: true,
    sanitizer: escape,
    breaks : true
  });

  preview_button.addEventListener('click', () => {
    var markdown = document.getElementById("editor").value;
    var html = marked(markdown);
    $('#marked-preview').html(html);

    $('#result').val(html);
  });

  copy_button.addEventListener('click', () => {
    // コピー対象をJavaScript上で変数として定義する
    var copyTarget = document.getElementById("result");
    // コピー対象のテキストを選択する
    copyTarget.select();
    // 選択しているテキストをクリップボードにコピーする
    document.execCommand("Copy");
    // コピーをお知らせする
    alert("クリップボードにコピーしました！");
  });

}
