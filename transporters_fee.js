//Transporter's Fee by Xelerax

//// Get the location of that transporter's teleport location ////

/**
 * @param {NpcEvent.InitEvent} event
 */
function init(event) {
    var locname1 = event.npc.role.location.getName();
    event.npc.world.getStoreddata().put("locname1", locname1)
}

//// Function using the transporter role ////

/**
 * @param {DialogEvent.CloseEvent} event
 */
function dialogClose(event) {
    var dest = event.dialog.getId();
    if (dest === "DIALOG ID") { //// "DIALOG ID" is the id of the dialog with the name of the location
        if (event.player.removeItem("minecraft:cobblestone", 0, 10)) { //// set the item|variant|quantity you want
            var User = event.player.getMCEntity();
            var loc1 = event.npc.world.getStoreddata().get("locname1");
            event.npc.role.transport(User, locname1); ////using locname1 in this case will teleport you to your current NPC if you get this location name
        }
        else {
            event.npc.say("No can do chief, I'm not running a charity. I've got to \"pay the rent\" aswell.");
        }
    }
    ////When you will add another transporter location, add another row of "if(dest===..." here
}

