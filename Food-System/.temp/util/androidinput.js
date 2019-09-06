import $ from 'jquery';

export default function androidinput() {
  // android手机
  var winHeight = $(window).height(); // 获取当前页面高度  
  $(window).resize(function () {
    var resizeHeight = $(this).height();
    if (winHeight - resizeHeight > 50) {
      // 软键盘弹出  
      $('body').css('height', winHeight + 20 + 'px');
    } else {
      //软键盘收起
      $('body').css('height', '100%');
    }
  });
  // if(/Android/.test(navigator.appVersion)) {   
  //     window.addEventListener("resize", function() {
  //          if(document.activeElement.tagName=="INPUT" || document.activeElement.tagName=="TEXTAREA") {
  //            document.activeElement.scrollIntoView();
  //          }   }) }
}