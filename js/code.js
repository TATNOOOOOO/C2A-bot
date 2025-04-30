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
  const targetWidth = 1920;
  const scaleFactor = screenWidth / targetWidth;

  console.log("scaleFactor:", scaleFactor); // 動作確認用ログ

  if (scaleFactor < 1) {
    document.body.style.transform = `scale(${scaleFactor})`;
    document.body.style.transformOrigin = 'top left';
    document.body.style.width = `${100 / scaleFactor}%`; // 白い余白対策
  } else {
    document.body.style.transform = '';
    document.body.style.transformOrigin = '';
    document.body.style.width = '';
  }
}

window.addEventListener('load', applyScale);
window.addEventListener('resize', applyScale);


