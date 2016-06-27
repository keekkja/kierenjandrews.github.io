window.hypercode = {
  headerElement: document.getElementsByClassName('hypercode-bg'),
  loadHeaderImage: function(indexStart, indexEnd) {
    var h = window.hypercode.headerElement;
    for (i = 0; i < h.length; i++) {
      var index = Math.floor(Math.random() * (indexEnd - indexStart + 1)) + indexStart;
      var s = h[i];
      s.style.backgroundImage = "url('./static/img/mask.png'), url('./static/img/header/"+ index +".jpg')";
      console.log(index);
    }
  }
};

window.onload = window.hypercode.loadHeaderImage(0,0);
