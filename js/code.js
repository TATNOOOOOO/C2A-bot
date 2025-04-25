$(function(){
    var ua = navigator.userAgent;
    if(ua.indexOf("iPhone") > 0 || ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0){
    console.log("None recommanded");
    alert("携帯電話での閲覧は推奨されません。")
    }else{
    console.log("Recommanded");
    }
  });

  // ウィンドウの横幅を取得
function adjustLayout() {
  const width = window.innerWidth;

  // iPadくらいの横幅（768px〜1024px）になったら調整
  if (width >= 768 && width <= 1024) {
    document.body.style.fontSize = '14px';  // 文字サイズを変更
    document.body.style.margin = '10px';    // 余白を調整
    // 必要に応じて他のスタイルを追加
  } else {
    document.body.style.fontSize = '16px';  // PC用のフォントサイズに戻す
    document.body.style.margin = '20px';    // PC用の余白に戻す
  }
}

// ウィンドウのリサイズ時にレイアウトを調整
window.addEventListener('resize', adjustLayout);

// 初期化時にレイアウトを調整
adjustLayout();
