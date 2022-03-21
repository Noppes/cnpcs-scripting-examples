//tempdata example by Daot
//npc data
function init(event) {
    event.npc.getTempdata().put("abc", [1, 2, 3, 4]);

}
function interact(event) {
    event.npc.say(event.npc.getTempdata().get("abc"));

}

/// or world data 
function init(event) {
    event.npc.world.getTempdata().put("abc", [1, 2, 3, 4]);

}
function interact(event) {
    event.npc.say(event.npc.world.getTempdata().get("abc"));

}