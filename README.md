# CNPC Scripting Setup & Examples
*For Minecraft 1.12.2*
---
Minecraft Versions: [[1.16.5](https://github.com/Noppes/cnpcs-scripting-examples/tree/main), **1.12.2**]

---
Official repo to get started with CustomNPC Scripting in Visual Studio Code.

It contains several example scripts as well as Intellisense(autocompletion) for CustomNPCs.

### Table of contents
1. [Requirements for scripting](#requirements-for-scripting)
   - [Install Visual Studio Code](#install-visual-studio-code)
   - [Choose a scripting language (JavaScript, Python)](#choose-a-scripting-language)
   - [Download this repo](#download-this-repo)
2. [Getting started](#getting-started)
   - [Your first script](#your-first-script)
   - [Example scripts](#example-scripts)
   - [Handy links](#handy-links)
3. [The good stuff](#the-good-stuff)
   - [Snippets](#snippets)
   - [Intellisense (autocomplete)](#intellisense-autocomplete)
4. [FAQ](#faq)
   - [Intellisense/autocomplete is not working anymore](#intellisenseautocomplete-is-not-working-anymore)
   - [What is all the `@param` stuff?](#what-is-all-the-param-stuff)
5. [Join the Discord!](#join-the-discord)

---
## Requirements for scripting

###### Install Visual Studio Code
Visual Studio Code is one of many editors to use in scripting/programming. We use it for its ability to make scripting really easy.

Make sure to download VSCode from its [official website](https://code.visualstudio.com/download).

###### Choose a scripting language
CustomNPCs allows you to choose your own language to script in.
You only have to download a specific .jar file for your chosen language.
[Click here for info about](www.kodevelopment.nl/minecraft/customnpcs/scripting)

This repo contains only javascript examples for now so we assume you downloaded `nashorn.jar`.

If you are running CustomNPCs on a server, then only the server needs `nashorn.jar`.

###### Download this repo
Download this repository and open it up in VSCode to get started!
Create some directories. Organize the example files how you want it.

Do NOT remove `jsconfig.json` and `.vscode` or you'll lose your autocompletion feature.

---

## Getting started

###### Your first script
Decide what type of script you want to make. You can choose from:
 - NPC Script (Scripts that are executed by NPCs)
 - Item Script (Scripts that are executed by scripted items)
 - Block Script (Scripts that are executed by scripted blocks)
 - Player Script (Scripts that are executed by every player)


TODO: add explanation on in-game steps to run scripts

###### Example scripts
This repo contains some example scripts provided by people from the discord server. Some comments might be added/changed inside example scripts, but are kept as original as possible.

This list is sorted by simplest above.

 - `tempdata.js` by `Daot`
 - `storeddata.js` by `Daot`
 - `retreat_weapon.js` by `Runon`
 - `lockable_door.js` by `AnnikenYT`
 - `transporters_fee.js` by `Xelerax`

TODO: add more examples


###### Handy links

TODO: Add handy links, docs, etc

---

## The good stuff
This repo contains some extra handy files to enhance your scripting experience.
###### Snippets

TODO: Add explanation on snippets, what to type, etc

###### Intellisense (autocomplete)

TODO: Add explanation on autocomplete, how it works, etc

---
## FAQ

###### Intellisense/autocomplete is not working anymore 
Make sure your `jsconfig.json` and `.vscode` still exists within the root of your opened VSCode.

###### What is all the @param stuff?
This is required for VSCode to know what we are programming. It tells VSCode stuff about the code.

---

## Join the Discord!
[Join the discord](https://discord.gg/AJ7qPy4) to discuss scriptings or to share your creations!
