$(function(){
    var ua = navigator.userAgent;
    if(ua.indexOf("iPhone") > 0 || ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0){
    console.log("None recommanded");
    alert("携帯電話での閲覧は推奨されません。")
    }else{
    console.log("Recommanded");
    }
  });

let targetWidth = 1920;
function applyScale() {
  const screenWidth = window.innerWidth;
  let scaleFactor = screenWidth / screenWidth; // 自分の画面幅に基づいてスケール

  // スケーリングを適用（縮小時のみ）
  if (scaleFactor < 1) {
    document.body.style.transform = `scale(${scaleFactor})`;
    document.body.style.transformOrigin = 'top left';
    document.body.style.width = '100%';  // 横幅を100%に合わせる
  } else {
    document.body.style.transform = '';  // 拡大しない
    document.body.style.transformOrigin = '';
    document.body.style.width = '';
  }
}

window.addEventListener('load', applyScale);  // ページ読み込み後にスケーリング
window.addEventListener('resize', applyScale);  // 画面リサイズ時にも適用

