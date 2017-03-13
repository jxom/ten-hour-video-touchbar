const { app, BrowserWindow, TouchBar } = require('electron');
const { TouchBarButton, TouchBarLabel } = TouchBar

const path = require('path');
const url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const loadingTouchBar = new TouchBarLabel({
  label: 'Loading...',
  textColor: '#ffffff',
});

const loadedTouchBar = new TouchBarButton({
  label: '🙃 GET ME A 10 HOUR VIDEO! 🙃',
  backgroundColor: '#3498db',
  click: () => {
    mainWindow.setTouchBar(getTouchBar(true));
    mainWindow.maximize();
    mainWindow.loadURL('https://10.now.sh/');
  }
});

const getTouchBar = (isLoading = false) => new TouchBar([
  isLoading ? loadingTouchBar : loadedTouchBar,
  new TouchBarButton({
    label: 'OK, I have had enough now.',
    backgroundColor: '#e74c3c',
    click: () => {
      app.quit();
    }
  })
])

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({width: 600, height: 150});
    const contents = mainWindow.webContents;

    // and load the index.html of the app.
    mainWindow.loadURL('http://localhost:3000');

    mainWindow.setTouchBar(getTouchBar(false));

    contents.on('dom-ready', () => {
      mainWindow.setTouchBar(getTouchBar(false));
    });

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
