const remote = require('electron').remote
const main = remote.require('./main.js')

var app = require('electron').remote;
var dialog = app.dialog;

let music = document.createElement('button')
music.textContent = 'Music'
music.addEventListener('click', () => {
    main.openWindow3()
}, false)
music.innerHTML = '<img src="style/imgs/config2.png" />';
music.style.height = "32px";
music.style.width = "32px";
music.style.position = "absolute";
music.style.padding = "0px";
music.style.top = "148px";
music.style.right = "500px";
music.style.border = "0px";
music.style.backgroundColor = "transparent";

document.body.appendChild(music)


let video = document.createElement('button')
video.textContent = 'Video'
video.addEventListener('click', () => {
    main.openWindow4()
}, false)
video.innerHTML = '<img src="style/imgs/config2.png" />';
video.style.height = "32px";
video.style.width = "32px";
video.style.position = "absolute";
video.style.padding = "0px";
video.style.top = "233px";
video.style.right = "500px";
video.style.border = "0px";
video.style.backgroundColor = "transparent";

document.body.appendChild(video)


let appication = document.createElement('button')
appication.textContent = 'Video'
appication.addEventListener('click', () => {
    main.openWindow5()
}, false)
appication.innerHTML = '<img src="style/imgs/config2.png" />';
appication.style.height = "32px";
appication.style.width = "32px";
appication.style.position = "absolute";
appication.style.padding = "0px";
appication.style.top = "313px";
appication.style.right = "500px";
appication.style.border = "0px";
appication.style.backgroundColor = "transparent";

document.body.appendChild(appication)

document.getElementById("min-btn").addEventListener("click", function(e) {
    var window = remote.getCurrentWindow();
    window.minimize();
});


/*  document.getElementById("max-btn").addEventListener("click", function (e) {
       var window = remote.getCurrentWindow();
       if (!window.isMaximized()) {
           window.maximize();
       } else {
           window.unmaximize();
       }
  });
*/

document.getElementById("close-btn").addEventListener("click", function(e) {
    var window = remote.getCurrentWindow();
    window.close();
});
