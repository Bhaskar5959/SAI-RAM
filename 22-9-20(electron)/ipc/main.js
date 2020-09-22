const { create } = require("domain");
const electron = require("electron")
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path')
const url = require('url')
const ipc = electron.ipcMain
const dialog = electron.dialog
let win;

function createWindow(){
  win = new BrowserWindow({width:800,height:600})

  win.loadURL(url.format({
    pathname:path.join(__dirname,"index.html"),
    protocol:'file',
    slashes:true
  }));

  win.on('Closed',()=>{
    win = nul
  });
}
ipc.on('open-error-dialog', function(event){
  dialog.showErrorBox('an error message','demo of an error messages')
})
app.on('ready',createWindow);

app.on('window-all-closed',()=>{
  if(process.platform !== 'darwin'){
    app.quit();
  }
})