require('dotenv').config();
const {app, BrowserWindow, screen} = require('electron');
const url = require("url");
const path = require("path");

let appWindow;
const env = {
  production: process.env.PRODUCTION,
  width: 800,
  height: 600
};

function initWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const w = width * .8;
  const h = height * .8;
  appWindow = new BrowserWindow({
    width: w,
    height: h,
    webPreferences: {
      nodeIntegration: true
    },
    autoHideMenuBar: true,
    x: (width / 2) - (w / 2),
    y: (height / 2) - (h / 2)
  });

  // Electron Build Path
  if (env.production === 'true') {
    appWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, `/dist/index.html`),
        protocol: "file:",
        slashes: true
      })
    );
  } else {
    appWindow.loadURL(
      url.format({
        host: 'localhost:4200',
        protocol: "http:",
        slashes: true
      })
    );
  }

  // Initialize the DevTools.
  if (env.production === 'false') {
    appWindow.webContents.openDevTools({mode: 'detach'});
  }
  appWindow.on('closed', function () {
    appWindow = null;
  });
}

app.on('ready', initWindow);

// Close when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (win === null) {
    initWindow();
  }
});
