const openbtn = document.getElementById('openbtn')
const shell = require('electron').shell

openbtn.addEventListener('click', function(event){
    shell.openPath('C:\Users\\Sai Ram\\Desktop\\5-9-20\\update.txt')
    shell.openExternal(('C:\Users\\Sai Ram\\Desktop\\5-9-20\\bird.jpg'))
    shell.openExternal('http://electron.atom.io')
})