const electron = require("electron");
const ipc = electron.ipcRenderer;

const errorbtn = document.getElementById('errorbtn');

errorbtn.addEventListener('click',function(){
    ipc.send('open-error-dialog')
})