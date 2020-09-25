const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, Menu, ipcMain } = electron;
let mainWindow;
let addwindow;
app.on('ready', function () {
    mainWindow = new BrowserWindow({});

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true,
        webPreferences: {
            nodeIntegration: true,
            nodeIntegrationInWorker: true,
        }
    }));

    mainWindow.on('closed', function () {
        app.quit();
    });
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

function createaddwindow() {
    addwindow = new BrowserWindow({
        width: 300,
        height: 200,
        title: 'add shopping list item',
        webPreferences: {
            nodeIntegration: true,
            nodeIntegrationInWorker: true,
        }
    });

    addwindow.loadURL(url.format({
        pathname: path.join(__dirname, 'add.html'),
        protocol: 'file',
        slashes: true
    }));
    addwindow.on('close', function () {
        addwindow = null;
    });
}

ipcMain.on('item:add', function (e, item) {
    console.log(item);
    mainWindow.webContents.send('item:add', item);
    addwindow.close();
});

const mainMenuTemplate = [
    {
        label: 'file',
        submenu: [
            {
                label: 'add item',
                click() {
                    createaddwindow();
                }
            },
            {
                label: 'clear items',
                click() {
                    mainWindow.webContents.send('item:clear');
                }
            },
            {
                label: 'quit',
                accelerator: process.platform == 'darwin' ? 'command+q' : 'ctrl+q',
                click() {
                    app.quit();
                }
            }
        ]
    }
];
if (process.platform == 'darwin') {
    mainMenuTemplate.unshift({});
}

if (process.env.NODE_ENV !== 'production') {
    mainMenuTemplate.push({
        label: 'Developer Tools',
        submenu: [
            {
                label: 'toggle DevTools',
                accelerator: process.platform == 'darwin' ? 'command+i' : 'ctrl+i',
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]
    });
}