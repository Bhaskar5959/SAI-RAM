const { app, BrowserWindow } = require('electron')
let win;
function createWindow () {

   win = new BrowserWindow({
     width:500,
     height:150,
     frame:false,
     show:false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.once('ready-to-show',()=>{
    win.show();
  })
  win.loadFile('index.html')

}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


