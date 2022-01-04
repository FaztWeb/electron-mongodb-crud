const { createWindow } = require("./main");
const { app } = require("electron");

require("./database");

app.whenReady().then(createWindow);

try {
  require('electron-reloader')(module)
} catch (_) {}

app.allowRendererProcessReuse = false;
