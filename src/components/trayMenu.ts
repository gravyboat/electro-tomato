import { app, Tray, Menu, nativeImage } from 'electron';
import * as path from 'path';

export const tray = () => {
    const iconPath = path.join(__dirname, '/app/assets/images/tomato.png');
    const tray = new Tray(nativeImage.createFromPath(iconPath));
    return tray;
};
