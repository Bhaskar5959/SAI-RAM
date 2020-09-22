const { app, BrowserWindow } = require('electron')
let win , dimwin;
function createWindow () {

   win = new BrowserWindow({
     title:'parent',
    webPreferences: {
      nodeIntegration: true
    }
  })

  dimwin = new BrowserWindow({
    parent:win,
    title:'child',
    width:400,
    height:600,
    show:false,
    backgroundColor:"#800000",
    webPreferences: {
      nodeIntegration: true
    }
  })
  

  win.loadFile('index.html')
  dimwin.loadURL('https://github.com');
  dimwin.once('ready-to-show',()=>{
    dimwin.show()
  });

  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


