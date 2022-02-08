const vscode = require("vscode");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  let disposable = vscode.commands.registerCommand(
    "latex-new-line.new-line",
    function () {
      const fileExtension = vscode.window.activeTextEditor.document.fileName
        .split(".")
        .pop();
      if (fileExtension == "tex") {
        vscode.window.activeTextEditor.insertSnippet(
          new vscode.SnippetString("\\\\\\\n")
        );
      }
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
