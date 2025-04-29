$(function(){
    var ua = navigator.userAgent;
    if(ua.indexOf("iPhone") > 0 || ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0){
    console.log("None recommanded");
    alert("携帯電話での閲覧は推奨されません。")
    }else{
    console.log("Recommanded");
    }
  });// ウィンドウの幅と高さを取得
  
  let screenWidth = window.innerWidth;
  let screenHeight = window.innerHeight;
  
  // 目標の画面サイズ（1920x1080）
  let targetWidth = 1920;
  let targetHeight = 1080;
  
  // 幅と高さに基づいてスケーリング係数を計算
  let scaleWidth = screenWidth / targetWidth;
  let scaleHeight = screenHeight / targetHeight;
  
  // 幅と高さの両方を調整するために最小のスケーリング係数を使用
  let scaleFactor = Math.min(scaleWidth, scaleHeight);
  
  // bodyまたは対象の要素にスケーリングを適用し、左上に固定
  document.body.style.transform = `scale(${scaleFactor})`;
  document.body.style.transformOrigin = "0 0"; // 縮小の基準点を左上に設定
  document.body.style.position = "absolute";  // 左上に固定するために絶対位置に設定
  document.body.style.top = "0";
  document.body.style.left = "0";
  
  // 画面サイズが変更された際に再計算して適用
  window.addEventListener('resize', function() {
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    
    let scaleWidth = screenWidth / targetWidth;
    let scaleHeight = screenHeight / targetHeight;
    
    let scaleFactor = Math.min(scaleWidth, scaleHeight);
    
    document.body.style.transform = `scale(${scaleFactor})`;
    document.body.style.transformOrigin = "0 0"; // 縮小の基準点を左上に設定
    document.body.style.position = "absolute";  // 左上に固定
    document.body.style.top = "0";
    document.body.style.left = "0";
  });
  