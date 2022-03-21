//storeddata example by Daot
/**
 * @param {NpcEvent.InitEvent} event
 */
function init(event) {
    // npc data
    event.npc.getStoreddata().put("abc", "stored in npc");
    
    // or world data 
    event.npc.world.getStoreddata().put("abc", "stored in world");
}

/**
 * @param {NpcEvent.InteractEvent} event
 */
function interact(event) {
    // npc data
    event.npc.say(event.npc.getStoreddata().get("abc"));
    
    // or world data 
    event.npc.say(event.npc.world.getStoreddata().get("abc"));
}
