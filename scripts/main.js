let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/m.logo.png') {
    myImage.setAttribute('src','images/drivens.png');
  } else if(mySrc === 'images/drivens.png') {
    myImage.setAttribute('src','images/furinkazan.png');
  } else if(mySrc === 'images/furinkazan.png') {
    myImage.setAttribute('src','images/kadokawa.png');
  } else if(mySrc === 'images/kadokawa.png') {
    myImage.setAttribute('src','images/konami.png');
  } else if(mySrc === 'images/konami.png') {
    myImage.setAttribute('src','images/abemas.png');
  } else if(mySrc === 'images/abemas.png') {
    myImage.setAttribute('src','images/phoenix.png');
  } else if(mySrc === 'images/phoenix.png') {
    myImage.setAttribute('src','images/raiden.png');
  } else if(mySrc === 'images/raiden.png') {
    myImage.setAttribute('src','images/pirates.png');
  } else {
    myImage.setAttribute('src','images/m.logo.png');
  }
}