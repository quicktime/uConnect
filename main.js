const electron = require('electron');
const app = electron.app
const BrowserWindow = electron.BrowserWindow;

app.on('ready', () => {
	let win = new BrowserWindow({width:1000, height:800, resizable:false, frame: false, icon: __dirname + '/u27.jpg'})
	win.loadURL(`file://${__dirname}/index.html`)
//	win.webContents.openDevTools()
})

exports.openWindow = () => {
	let win = new BrowserWindow({width:800, height:600, resizable: false, frame: false})
	win.loadURL(`file://${__dirname}/config.html`)

}

	exports.openWindow2 = () => {
		let win = new BrowserWindow({width:800, height:600, resizable: false, frame: false})
		win.loadURL(`file://${__dirname}/help.html`)

}
