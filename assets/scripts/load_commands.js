function loadCommands() {
    loadAnime();
}

function loadAnime() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/assets/data/anime.txt", true);

  xhr.onload = function () {
    if (this.status == 200) {
      document.getElementById(
        "anime"
      ).innerHTML = `${this.responseText}`;
    } else if ((this.status = 404)) {
      document.getElementById("anime").innerText = "Not Found";
    }   
 };

 xhr.onerror = function () {
    console.log("Request Error!");
  };

  xhr.send();
}

function loadImages() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/assets/data/images.txt", true);
  
    xhr.onload = function () {
      if (this.status == 200) {
        document.getElementById(
          "images"
        ).innerHTML = `${this.responseText}`;
      } else if ((this.status = 404)) {
        document.getElementById("images").innerText = "Not Found";
      }
  };

  xhr.onerror = function () {
    console.log("Request Error!");
  };

  xhr.send();
}

function loadFun() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/assets/data/fun.txt", true);
  
    xhr.onload = function () {
      if (this.status == 200) {
        document.getElementById(
          "fun"
        ).innerHTML = `${this.responseText}`;
      } else if ((this.status = 404)) {
        document.getElementById("fun").innerText = "Not Found";
      }
  };

  xhr.onerror = function () {
    console.log("Request Error!");
  };

  xhr.send();
}

function loadUtilities() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/assets/data/utilities.txt", true);
  
    xhr.onload = function () {
      if (this.status == 200) {
        document.getElementById(
          "utilities"
        ).innerHTML = `${this.responseText}`;
      } else if ((this.status = 404)) {
        document.getElementById("utilities").innerText = "Not Found";
      }
  };

  xhr.onerror = function () {
    console.log("Request Error!");
  };

  xhr.send();
}

function loadUtilities() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/assets/data/utilities.txt", true);
  
    xhr.onload = function () {
      if (this.status == 200) {
        document.getElementById(
          "utilities"
        ).innerHTML = `${this.responseText}`;
      } else if ((this.status = 404)) {
        document.getElementById("utilities").innerText = "Not Found";
      }
  };

  xhr.onerror = function () {
    console.log("Request Error!");
  };

  xhr.send();
}

function loadModeration() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/assets/data/moderation.txt", true);
  
    xhr.onload = function () {
      if (this.status == 200) {
        document.getElementById(
          "moderation"
        ).innerHTML = `${this.responseText}`;
      } else if ((this.status = 404)) {
        document.getElementById("moderation").innerText = "Not Found";
      }
  };

  xhr.onerror = function () {
    console.log("Request Error!");
  };

  xhr.send();
}

function loadGif() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/assets/data/gif.txt", true);
  
    xhr.onload = function () {
      if (this.status == 200) {
        document.getElementById(
          "gif"
        ).innerHTML = `${this.responseText}`;
      } else if ((this.status = 404)) {
        document.getElementById("gif").innerText = "Not Found";
      }
  };

  xhr.onerror = function () {
    console.log("Request Error!");
  };

  xhr.send();
}

function loadSearch() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/assets/data/search.txt", true);
  
    xhr.onload = function () {
      if (this.status == 200) {
        document.getElementById(
          "search"
        ).innerHTML = `${this.responseText}`;
      } else if ((this.status = 404)) {
        document.getElementById("search").innerText = "Not Found";
      }
  };

  xhr.onerror = function () {
    console.log("Request Error!");
  };

  xhr.send();
}

function loadNsfw() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/assets/data/nsfw.txt", true);
  
    xhr.onload = function () {
      if (this.status == 200) {
        document.getElementById(
          "nsfw"
        ).innerHTML = `${this.responseText}`;
      } else if ((this.status = 404)) {
        document.getElementById("nsfw").innerText = "Not Found";
      }
  };

  xhr.onerror = function () {
    console.log("Request Error!");
  };

  xhr.send();
}