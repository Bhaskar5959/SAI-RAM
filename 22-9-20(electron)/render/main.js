console.log('main.js');

const { app, BrowserWindow } = require('electron')

let winone , wintwo ;
function createWindow () {

  winone = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  })

  wintwo = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  })


  winone.loadFile('one.html')
  wintwo.loadFile('two.html')

  winone.webContents.openDevTools();
  wintwo.webContents.openDevTools();
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


