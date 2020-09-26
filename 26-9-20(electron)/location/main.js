const { app, BrowserWindow } = require('electron')
let win;
function createWindow () {

   win = new BrowserWindow({
    
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.once('ready-to-show',()=>{
    win.show();
  })
  win.loadFile('index.html')
  win.webContents.openDevTools();

}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


