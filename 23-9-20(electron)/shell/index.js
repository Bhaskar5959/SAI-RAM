const { app, BrowserWindow } = require('electron')

function createWindow () {

   const win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadFile('index.html')
  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


