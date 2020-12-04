import { app, BrowserWindow } from 'electron';
import { tray } from './components/trayMenu';

app.setUserTasks([
    {
        program: process.execPath,
        arguments: '--new-window',
        iconPath: process.execPath,
        iconIndex: 0,
        title: 'New window',
        description: 'create a new window',
    },
    {
        program: process.execPath,
        arguments: '--new-window',
        iconPath: process.execPath,
        iconIndex: 0,
        title: 'New Tomato',
        description: 'Start a tomato timer',
    },
    {
        program: process.execPath,
        arguments: '--new-window',
        iconPath: process.execPath,
        iconIndex: 0,
        title: 'Pause',
        description: 'Pause current timer',
    },
]);

const createWindow = (): void => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    win.setProgressBar(0.5);

    win.loadFile('index.html');
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
