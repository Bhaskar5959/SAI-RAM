const { app, BrowserWindow, Menu, MenuItem ,globalShortcut} = require('electron')

let win;
function createWindow() {

    win = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.once('ready-to-show', () => {
        win.show();
    })
    win.loadFile('sit.html')
    win.webContents.openDevTools()

}

app.whenReady().then(function () {
    createWindow()
    const template = [
        {
            label: 'edit',
            submenu: [
                { role: 'undo' },
                { role: 'redo' },
                { role: 'cut' },
                { role: 'copy' },
                { role: 'paste' },
                { role: 'undo' },
            ]
        },
        {
            label: 'demo',
            submenu: [
                {
                    label: 'submenu1'

                },
                {
                    label: 'submenu2'
                }
            ]
        },
        {
            label: 'help',
            submenu: [
                {
                    label: 'About electron',
                    click: function () {
                        electron.shell.openExternal("http://electron.atom.io")
                    },
                    accelerator: 'cmdorctrl + shift + H'
                }
            ]
        }
    ]
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)

    const ctxtMenu = new Menu()
    ctxtMenu.append(new MenuItem({ label: 'hello' }))
    ctxtMenu.append(new MenuItem({ role: "selectAll" }))
    ctxtMenu.append(new MenuItem({ role: "paste" }))
    ctxtMenu.append(new MenuItem({ role: "cut" }))


    win.webContents.on('context-menu', function (e, params) {
        ctxtMenu.popup(win, params.x, params.y)

    })

    globalShortcut.register('Alt+1', function(){
        win.show()
    })
});
app.on('will-quit', function(){
    globalShortcut.unregisterAll()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
