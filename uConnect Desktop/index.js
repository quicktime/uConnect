
const remote = require('electron').remote
const main = remote.require('./main.js') 


let config = document.createElement('button')
config.textContent = 'Config'
config.addEventListener('click', () => {
	main.openWindow()
}, false)
config.innerHTML = '<img src="style/imgs/config2.png" />';
config.style.height = "25px";
config.style.width = "45px";
config.style.position = "absolute";
config.style.padding = "0px";
config.style.bottom = "5px";
config.style.left = "45px";
config.style.border = "0px";
config.style.backgroundColor = "transparent";

document.body.appendChild(config)


let help = document.createElement('button')
help.textContent = 'Help'
help.addEventListener('click', () => {
	main.openWindow2()
}, false)
help.innerHTML = '<img src="style/imgs/help.png" />';
help.style.height = "25px";
help.style.width = "25px";
help.style.position = "absolute";
help.style.padding = "0px";
help.style.bottom = "5px";
help.style.left = "90px";
help.style.border = "0px";
help.style.backgroundColor = "transparent";

document.body.appendChild(help)


  document.getElementById("min-btn").addEventListener("click", function (e) {
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

  document.getElementById("close-btn").addEventListener("click", function (e) {
       var window = remote.getCurrentWindow();
       window.close();
  });
