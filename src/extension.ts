// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as path from 'path';
import { mkdir } from 'fs/promises';
import * as vscode from 'vscode';
import * as fs from 'fs/promises';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const setup = vscode.commands.registerCommand('simple-papyrus-setup.setup', async () => {

		const config = vscode.workspace.getConfiguration('papyrus-starter');

		const mods_path = config.get<string>('modsPath');

		const compiler_path = config.get<string>('compilerPath');

		const workspace = vscode.workspace.workspaceFolders?.[0];

		if(!mods_path || !compiler_path){
			vscode.window.showErrorMessage('Mods or compiler path are invalid');
			return;
		}

		if (!workspace){
    		vscode.window.showErrorMessage('Open a folder before running Papyrus Starter.');
    		return;
		}

		const project_path = workspace.uri.fsPath;
		const mod_name = path.basename(project_path);

		const relative = path.relative(mods_path, project_path);

		if (relative.startsWith('..') || path.isAbsolute(relative)){
    		vscode.window.showErrorMessage('The current project is not inside the configured mods directory.');
    		return;
		}

		await mkdir(path.join(project_path, 'Scripts'), {recursive: true});
		await mkdir(path.join(project_path, 'Source', 'Scripts'), { recursive: true });
		await fs.cp(path.join(context.extensionPath, 'templates', 'project.ppj'), path.join(project_path, 'project.ppj'), { force: true });
		await fs.cp(path.join(context.extensionPath, 'templates', '.vscode'), path.join(project_path, '.vscode'), { recursive: true });
		
	});

	const open_template = vscode.commands.registerCommand('simple-papyrus-setup.openTemplates', async () => {

		const template_path = path.join(context.extensionPath,'templates');
		await vscode.env.openExternal(vscode.Uri.file(template_path));	
	});
	context.subscriptions.push(setup);
	context.subscriptions.push(open_template);
}

// This method is called when your extension is deactivated
export function deactivate() {}
