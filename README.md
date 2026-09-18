# simple-papyrus-setup README

This is a small VS Code Extension for setting up Papyrus scripting projects on Linux. For Windows, it's most likely better to use any of the other ones.

## Features

- Sets up a vscode task to compile scripts  
- Sets up Scripts and Source/Scripts folder
- Sets up a default project.ppj file which is called to compile with
- Allows you to conveniently change the templates by opening the folder in your file explorer

## Requirements

- VS Code/VS Codium
- Caprica (can be found [in this github repo](https://github.com/Styyx1/Caprica/releases/tag/1.0.0-linux) for Linux)
- A Skyrim mod directory (no matter the mod manager, but it needs to be a mod manager that separates mods into folders)

## First-time setup

Before running the the project setup, you need to edit the included template to match your skyrim install as the extension does not detect your Skyrim setup.  
You also need the Creation Kit installed and have the `scripts.zip` unpacked  
Replace the `YOUR_CREATION_KIT_INSTALL_WITH_UNPACKED_SCRIPTZIP` with your path to skyrim (or the Creation Kit if you have it installed separately)

To easily do that, use **Papyrus: Open Template Folder**  

Afterwards, you can set everything up as described in [Usage](#usage)

## Extension Settings

- `papyrus-starter.modsPath`
- `papyrus-starter.compilerPath`

modsPath -> The path to your Skyrim mods folder (Example: /mnt/dev/Modding/mods)  
compilerPath -> Path to where your caprica executable is (Example: /home/userName/.local/bin/)

## Usage

1. Create a mod folder inside your configured mods directory.
2. Open the mod folder in VS Code.
3. Run `Papyrus: Setup Project`.
4. Build using the generated VS Code task.

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Credits

- [Annakins](https://github.com/annakins) for the [project.ppj](https://github.com/annakins/Skyrim#scripting-for-mod-authoring) serving as template here

---
