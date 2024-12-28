const ejs = require("ejs");
const path = require("path");
const fs = require("fs-extra");
const { parseSwagger } = require("../swaggerParser");
 class ActivityBarProvider {
    constructor(context) {
        this.context = context;
    }
    resolveWebviewView(webviewView) {
        this._view = webviewView;
        webviewView.webview.options = {
            enableScripts: true,
        };
       const htmlPath = path.join(this.context.extensionPath, 'src', 'index.html');
        const htmlContent = fs.readFileSync(htmlPath, 'utf8');
        webviewView.webview.html = htmlContent;

        webviewView.webview.onDidReceiveMessage(async (message) => {
            if (message.command === "generate") {
              try {
                const swaggerPath = message.swaggerPath;
                const endpoints = await parseSwagger(swaggerPath);
                const endpoint = message.endpoint;
                const method = message.method;
                const selectedEndpoint = endpoints.find(
                  (ep) => ep.endpoint === endpoint && ep.method === method.toLowerCase()
                );
      
                if (!selectedEndpoint) {
                  throw new Error("Endpoint not found!");
                }
      
                const templatePath = path.join(this.context.extensionPath, "src/templates", `${method.toLowerCase()}Template.ejs`);
                const template = await fs.readFile(templatePath, "utf8");
                const generatedCode = ejs.render(template, { endpoint, method });
                webviewView.webview.postMessage({ command: "display", code: generatedCode });
              } catch (error) {
                webviewView.webview.postMessage({ command: "error", message: error.message });
              }
            }
          });
    }

}

exports.ActivityBarProvider = ActivityBarProvider;