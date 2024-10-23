import { app, BrowserWindow, shell } from 'electron';
import 'main/event/main-event-service';
import { EnvironmentService } from 'main/environment/service/environment-service';
import installExtension, { REDUX_DEVTOOLS } from 'electron-devtools-installer';

// This allows TypeScript to pick up the magic constants that's auto-generated by Forge's Webpack
// plugin that tells the Electron app where to look for the Webpack-bundled app code (depending on
// whether you're running in development or production).
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = async () => {
  // initialize services
  await EnvironmentService.instance.init();

  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 728,
    minWidth: 1024,
    minHeight: 728,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  // Open links in default browser
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  // and load the index.html of the app.
  await mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', async () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();

    try {
      const name = await installExtension(REDUX_DEVTOOLS);
      console.log(`Added Extension:  ${name}`);
    } catch (err) {
      console.log('An error occurred: ', err);
    }
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
