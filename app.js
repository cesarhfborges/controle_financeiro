const {app, BrowserWindow, screen} = require('electron');
const url = require("url");
const path = require("path");

let appWindow;
const env = {
  production: false
};

function initWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize
  appWindow = new BrowserWindow({
    width: 360,
    height: 640,
    webPreferences: {
      nodeIntegration: true
    },
    autoHideMenuBar: true,
    x: width - 360,
    y: height - 640
  });

  // Electron Build Path
  if (env.production) {
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
  appWindow.webContents.openDevTools({ mode: 'detach' });

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
