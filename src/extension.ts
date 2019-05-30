import * as vscode from 'vscode';
import { WTCHEADER } from './templates';

export function activate(context: vscode.ExtensionContext) {
		console.log('Congratulations, your extension "wethinkcode-header" is now active!');
	let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World!');
        console.log(WTCHEADER);
        
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
