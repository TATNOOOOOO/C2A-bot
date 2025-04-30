$(function(){
    var ua = navigator.userAgent;
    if(ua.indexOf("iPhone") > 0 || ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0){
    console.log("None recommanded");
    alert("携帯電話での閲覧は推奨されません。")
    }else{
    console.log("Recommanded");
    }
  });// ウィンドウの幅と高さを取得
  // ウィンドウの幅を取得
let screenWidth = window.innerWidth;

// 目標の画面幅（1920pxに対応）
let targetWidth = 1920;

// スケーリング係数を計算（1920pxを基準にスケール）
let scaleFactor = screenWidth / targetWidth;

// bodyまたは対象の要素にスケーリングを適用
document.body.style.transform = `scale(${scaleFactor})`;

// 画面サイズが変更された際に再計算して適用
window.addEventListener('resize', function() {
  let screenWidth = window.innerWidth;
  let scaleFactor = screenWidth / targetWidth;
  document.body.style.transform = `scale(${scaleFactor})`;
});
document.body.style.transformOrigin = 'top left';
