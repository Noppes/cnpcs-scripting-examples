# CNPC Scripting Setup & Examples
*For Minecraft 1.16.5*
---
Minecraft Versions: [**1.16.5**, [1.12.2](https://github.com/Noppes/cnpcs-scripting-examples/tree/1.12.2)]

---
Official repo to get started with CustomNPC Scripting in Visual Studio Code.

It contains several example scripts as well as Intellisense(autocompletion) for CustomNPCs.

**NOTE: This repo is still WIP. Snippets and Typings are still in the making.**
***Intellisense for 1.12.2 is done! Check it out in the 1.12.2 branch! (1.16.5 coming soon)***
### Table of contents
1. [Requirements for scripting](#requirements-for-scripting)
   - [Install Visual Studio Code](#1-install-visual-studio-code)
   - [Choose a scripting language (JavaScript, Python)](#2-choose-a-scripting-language)
   - [Download this repo](#3-download-this-repo)
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

#### 1. Install Visual Studio Code
Visual Studio Code is one of many editors to use in scripting/programming. We use it for its ability to make scripting really easy.

Make sure to download VSCode from its [official website](https://code.visualstudio.com/download).

#### 2. Choose a scripting language
CustomNPCs allows you to choose your own language to script in.
You only have to download a specific .jar file for your chosen language.
[Click here for info about enabling scripting](www.kodevelopment.nl/minecraft/customnpcs/scripting)

This repo contains only javascript examples for now so we assume you downloaded `nashorn.jar`.

If you are running CustomNPCs on a server, then only the server needs `nashorn.jar`.

If you are making a modpack for singleplayer or self-host use you'll need to include `nashorn.jar` in your modpack.
This can be problematic if you have a CurseForge modpack, but is easily solved because [someone uploaded `nashorn.jar` to CurseForge](https://www.curseforge.com/minecraft/mc-mods/project-nashorn)

#### 3. Download this repo
Download this repository and open it up in VSCode to get started!
Create some directories. Organize the example files how you want it.

Do NOT remove `jsconfig.json` and `.vscode` or you'll lose your autocompletion feature.

---

## Getting started

#### Your first script
Decide what type of script you want to make. You can choose from:
 - NPC Script (Scripts that are executed by NPCs)
 - Item Script (Scripts that are executed by scripted items)
 - Block Script (Scripts that are executed by scripted blocks)
 - Player Script (Scripts that are executed by every player)


TODO: add explanation on in-game steps to run scripts

#### Example scripts
This repo contains some example scripts provided by people from the discord server. Some comments might be added/changed inside example scripts, but are kept as original as possible.

This list is sorted by simplest above.

 - `tempdata.js` by `Daot`
 - `storeddata.js` by `Daot`
 - `retreat_weapon.js` by `Runon`
 - `lockable_door.js` by `AnnikenYT`
 - `transporters_fee.js` by `Xelerax`

TODO: add more examples
TODO: test examples


#### Handy links

Summary of all links scattered in this document plus a few more.

***Docs***
[CustomNPCs 1.16.5 Documentation](http://www.kodevelopment.nl/customnpcs/api/1.16.5/)

***Downloads***
[VSCode](https://code.visualstudio.com/download)

***Learn CustomNPCs & JavaScript***
[W3Schools](https://www.w3schools.com/js/default.asp)
[Tutorialspoint](https://www.tutorialspoint.com/javascript/index.htm)
[Eloquentjavascript](https://eloquentjavascript.net/index.html)
[FreeCodeCamp](https://www.freecodecamp.org/news/javascript-modules-a-beginner-s-guide-783f7d7a5fcc#.zeh1blwi0)
[Daot's YouTube channel](https://www.youtube.com/user/MrToady2000)
[Yellow768's CNPC playlist](https://www.youtube.com/watch?v=G1TU21NGQ0I&list=PL7ysKllrqw-61vQKAAGxlTxsMA62P0jKP)

***Other***
[Nashorn on CurseForge](https://www.curseforge.com/minecraft/mc-mods/project-nashorn)

---

## The good stuff
This repo contains some extra handy files to enhance your scripting experience.
#### Snippets

TODO: Add explanation on snippets, what to type, etc

#### Intellisense (autocomplete)

TODO: Add explanation on autocomplete, how it works, etc

---
## FAQ

#### Intellisense/autocomplete is not working anymore 
Make sure your `jsconfig.json` and `.vscode` still exists within the root of your opened VSCode project.

#### What is all the @param stuff?
This is required for VSCode to know what we are programming. It tells VSCode stuff about the code.

---

## Join the Discord!
Need some scripting help or want to share your creation? Go ahead and join our official CNPC Scripting discord server.

For non-scripting related questions, join the official CustomNPC Discord

[![Discord Server for Scripting](https://discordapp.com/api/guilds/177204059109982208/widget.png?style=banner3)](https://discord.gg/AJ7qPy4) [![Discord Server for Scripting](https://discordapp.com/api/guilds/151785576557707264/widget.png?style=banner3)](https://discord.gg/AJ7qPy4)
