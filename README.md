# Jest Test Generator Extension for VS Code

This VS Code extension allows you to generate Jest tests for API endpoints defined in a Swagger specification. It provides an interactive sidebar view where you can input the Swagger file path, select an endpoint, choose the HTTP method, and generate the corresponding Jest test code. The generated code can then be copied to your clipboard.

## Features

- **Swagger file integration**: Easily input your Swagger JSON file path to load the API specification.
- **Endpoint selection**: Choose from available endpoints in your Swagger file.
- **HTTP Method**: Select from GET, POST, PUT, and DELETE HTTP methods.
- **Jest Test Generation**: Automatically generate Jest test code based on the selected endpoint and HTTP method.
- **Copy to Clipboard**: Copy the generated Jest test code to your clipboard for easy use in your project.

## Installation

1. Clone this repository or download it as a ZIP file.
2. Open the folder in VS Code.
3. Press `F5` or go to `Run > Start Debugging` to launch the extension in a new VS Code window.
4. The extension will appear as a new WebView in the VS Code sidebar, labeled "Jest Test Generator."

## Usage

1. **Open the Webview**: After installing the extension, you will see a new option in the Activity Bar labeled "Jest Test Generator." Click on it to open the WebView.
2. **Enter Swagger File Path**: In the WebView, input the path to your Swagger JSON file in the "Swagger File Path" field.
3. **Select Endpoint and HTTP Method**: Choose the endpoint and HTTP method (GET, POST, PUT, DELETE) for which you want to generate the Jest test.
4. **Generate Jest Test**: Click the "Generate" button to generate the Jest test code.
5. **Copy to Clipboard**: Once the code is displayed, click the "Copy to Clipboard" button to copy the generated code.

## Development

If you want to contribute or modify the extension, follow these steps to set up the development environment:

### Prerequisites

- Install [Node.js](https://nodejs.org/) (version 16 or later).
- Install [Visual Studio Code](https://code.visualstudio.com/).
- Install [VSCE](https://marketplace.visualstudio.com/items?itemName=vsce.vsce) for packaging the extension.

### Installing Dependencies

1. Clone the repository or download it as a ZIP file.
2. Open the project folder in VS Code.
3. Open the terminal in VS Code and run:

    ```bash
    npm install
    ```

### Running the Extension

1. Press `F5` or go to `Run > Start Debugging` to launch the extension in a new VS Code window.
2. The extension will be loaded and available in the Activity Bar.

### Building the Extension

If you want to package your extension for distribution, run:

```bash
vsce package
```