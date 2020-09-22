console.log('from one')

const BrowserWindow = require('electron').remote.BrowserWindow;
const path = require('path');
const url = require('url');

const newWindowBtn = document.getElementById('newWindowBtn');
newWindowBtn.addEventListener('click', function(event){
   const  winthree = new BrowserWindow();
   winthree.loadURL(url.format({
       pathname: path.join(__dirname, 'three.html'),
       protocol: 'file',
       slashes:true

   }));
        
      winthree.webContents.openDevTools();
    
})