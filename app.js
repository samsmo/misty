var app = require("app"),
    BrowserWindow = require("browser-window"),
    mainWindow = null;

app.on("ready", function() {
    mainWindow = new BrowserWindow({
        width: 600,
        height: 600
    });

    mainWindow.loadUrl("file://" + __dirname + "/index.html");

    mainWindow.openDevTools();

    mainWindow.on("closed", function() {
        mainWindow = null;
    });
});
