const remote = require('electron').remote
const main = remote.require('./main.js')

var app = require('electron').remote;
var dialog = app.dialog;

var SerialPort = require('serialport');
var port = new SerialPort('COM3');

port.on('open', function() {
    port.write('main screen turn on', function(err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
        console.log('message written');
    });
});

port.on('data', function(data) {
    console.log('Data: ' + data);
});

// open errors will be emitted as an error event
port.on('error', function(err) {
    console.log('Error: ', err.message);
})

var exec require('child_process').exec;
var winLockCommand = 'rund1132.exe user32.dll, LockWorkStation';
var winShutdownCommand = 'shutdown -s';
var openFireFox = 'start firefox';
var closeFireFox = 'Taskkill /IM firefox.exe';

while read - r line < /COM3; do
if ("$line" == "One" * ) {
    exec(winLockCommand);
} else if ("$line" == "Two" * ) {
    exec(winShutDownCommand);

} else if ("$line" == "Two" * ) {
    exec(winShutDownCommand);

  /* Redacted spotify due to issues see spotify.js */

} else if ("$line" == "Four" * ) {
    exec(openFireFox);
} else if ("$line" == "Five" * ) {
    exec(closeFireFox);
}

/* redacted Spotify due to issues see spotify.js */



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
