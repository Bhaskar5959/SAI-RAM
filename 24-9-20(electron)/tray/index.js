const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require('url')
const Tray = electron.Tray
const iconpath = path.join(__dirname, 'bird.jpg')
const Menu = electron.Menu

let win;
let tray = null

app.on('ready', function () {
    tray = new Tray(iconpath)
    let template = [
        {
            label: 'audio',
            submenu: [
                {
                    label: 'low',
                    type: 'radio',
                    checked: true
                },
                {
                    label: 'high',
                    type: 'radio',
                }
            ]
        },
        {
            label:'video',
            submenu:[
                {
                    label:'1280x720',
                    type: 'radio',
                    checked:true
                },
                {
                    label:'1920x1080',
                    type:'radio',
                }
            ]
        }
    ]
    const ctxtMenu = Menu.buildFromTemplate(template)
    tray.setApplicationMenu(ctxtMenu)

});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})


