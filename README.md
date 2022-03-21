# CNPC Scripting Setup & Examples

Official repo to get started with CustomNPC Scripting in Visual Studio Code.

It contains several example scripts as well as Intellisense(autocompletion) for CustomNPCs.

### Table of contents
1. Requirements for scripting
   - Install Visual Studio Code
   - Choose a scripting language (JavaScript, Python)
   - Download this repo
2. Getting started
   - Your first script
   - Example scripts
3. The good stuff
   - Snippets
   - Intellisense
4. Join the Discord!


## Requirements for scripting

###### Install Visual Studio Code
Visual Studio Code is one of many editors to use in scripting/programming. We use it for its ability to make us really efficient.

Make sure to download VSCode from its [official website](https://code.visualstudio.com/download).

###### Choose a scripting language
CustomNPCs allows you to choose your own language to script in.
You only have to download a specific .jar file for your chosen language.
[Click here for info about](www.kodevelopment.nl/minecraft/customnpcs/scripting)

This repo contains only javascript examples for now so we assume you downloaded `nashorn.jar`.

If you are running CustomNPCs on a server, then only the server needs `nashorn.jar`.

###### Download this repo
Download this repository and open it up in VSCode to get started!

## Getting started

###### Your first script
Decide what type of script you want to make. You can choose from:
 - NPC Script (Scripts that are executed by NPCs)
 - Item Script (Scripts that are executed by scripted items)
 - Block Script (Scripts that are executed by scripted blocks)
 - Player Script (Scripts that are executed by every player)



###### Example scripts
This repo contains some example scripts provided by people from the discord server. Some comments might be added/changed inside example scripts, but are kept as original as possible.

This list is sorted by simplest above.

 - `tempdata.js` by `Daot`
 - `storeddata.js` by `Daot`
 - `retreat_weapon.js` by `Runon`
 - `lockable_door.js` by `AnnikenYT`
 - `transporters_fee.js` by `Xelerax`


 **Why does the script contain all the `@param` stuff above every `function`?**
This is required for VSCode to know what we are programming. It tells VSCode stuff about the code.