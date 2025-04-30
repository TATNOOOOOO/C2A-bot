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
    let screenWidth = window.innerWidth;
    let scaleFactor = screenWidth / targetWidth;
  
    document.body.style.transform = `scale(${scaleFactor})`;
    document.body.style.transformOrigin = 'top left';
  }
  
  window.addEventListener('load', applyScale);
  window.addEventListener('resize', applyScale);
