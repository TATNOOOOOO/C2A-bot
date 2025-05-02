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

