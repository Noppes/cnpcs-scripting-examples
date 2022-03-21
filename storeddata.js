//storeddata example by Daot
//npc data
function init(event) {
    event.npc.getStoreddata().put("abc", "stored");

}
function interact(event) {
    event.npc.say(event.npc.getStoreddata().get("abc"));

}

/// or world data 
function init(event) {
    event.npc.world.getStoreddata().put("abc", "stored");

}
function interact(event) {
    event.npc.say(event.npc.world.getStoreddata().get("abc"));

}