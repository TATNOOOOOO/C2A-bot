$(function(){
  var ua = navigator.userAgent;

  // スマホ判定（iPhone または Android の Mobile）
  var isMobile = /iPhone|Android.*Mobile/.test(ua);

  // タブレット判定（iPad または Android タブレット（Mobile なし））
  var isTablet = /iPad|Android(?!.*Mobile)/.test(ua);

  if (isMobile) {
    console.log("Mobile: Not recommended");
    alert("携帯電話での閲覧は推奨されません。");
  } else if (isTablet) {
    console.log("Tablet: Toolbar suggestion");
    alert("ツールバーを非表示にして閲覧するのを推奨します。");
  } else {
    console.log("PC: Recommended");
    // PC は何もしない
  }
});

$(function () {
  function checkScroll() {
    $('.fd').each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll + windowHeight > targetElement + 150) {
        $(this).addClass('scrollin');
      }
    });
  }

  // スクロールイベントでの判定
  $(window).scroll(checkScroll);

  // 初期表示時に判定
  checkScroll();

  // 1秒ごとに判定を繰り返す（1000ミリ秒）
  setInterval(checkScroll, 1000);
});



  let targetWidth = 1920;
  function applyScale() {
    const screenWidth = window.innerWidth;
    const baseWidth = 1920; // PCで設計した幅
    const scale = screenWidth / baseWidth;
  
    document.body.style.transform = `scale(${scale})`;
    document.body.style.transformOrigin = 'top left';
  
    // スケールに合わせて、body のサイズを逆補正
    document.body.style.width = `${100 / scale}vw`;
    document.body.style.height = `${100 / scale}vh`;
    document.documentElement.style.overflowX = 'hidden'; // 横スクロール抑制
  }
  
  applyScale();
  window.addEventListener('resize', applyScale);
