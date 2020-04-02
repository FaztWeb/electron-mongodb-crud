const { createWindow } = require('./main')
const { app } = require('electron')

require('./database');

app.whenReady().then(createWindow);
app.allowRendererProcessReuse = false 