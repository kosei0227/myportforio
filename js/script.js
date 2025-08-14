$(function () {

  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });

  //画面が読み込まれた瞬間の処理
  $(document).ready(function() {
    setTimeout(() => {
      console.log('実行します');
      $('.opening').fadeOut(1500);
      console.log('最初に読み込みます');
    },1500);
    
  })

});
