//tempdata example by Daot

/**
 * @param {NpcEvent.InitEvent} event
 */
function init(event) {
    // npc data
    event.npc.getTempdata().put("abc", [1, 2, 3, 4]);
    
    // or world data 
    event.npc.world.getTempdata().put("abc", [1, 2, 3, 4]);
}

/**
 * @param {NpcEvent.InteractEvent} event
 */
function interact(event) {
    // npc data
    event.npc.say(event.npc.getTempdata().get("abc"));
    
    // or world data 
    event.npc.say(event.npc.world.getTempdata().get("abc"));
}