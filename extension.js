
const vscode = require("vscode");
const acitivtyBarProvider = require("./src/provider/activityBarProvider");

function activate(context) {
    const provider = new acitivtyBarProvider.ActivityBarProvider(context);
    context.subscriptions.push(vscode.window.registerWebviewViewProvider('jestGenerator.openview', provider));
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
