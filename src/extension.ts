import * as vscode from 'vscode';

export function activate(_context: vscode.ExtensionContext) {
	vscode.window.showInformationMessage('autominion extension is now active!');
}

export function deactivate() { }
