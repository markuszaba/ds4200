function changeLanguage() {
  var greeting = document.getElementById('greeting');
  if (greeting.textContent === 'Hi,') {
      greeting.textContent = 'Tere,';
  } else {
      greeting.textContent = 'Hi,'; 
  }
}

const myImage = document.getElementById("image");
    const changeButton = document.getElementById("changePic");

    changeButton.addEventListener("click", function() {
      const mySrc = myImage.getAttribute("src");
      if (mySrc === "images/wadirum.jpeg") {
        myImage.setAttribute("src", "images/skiselfie.jpeg");
      } else {
        myImage.setAttribute("src", "images/wadirum.jpeg");
      }
    });