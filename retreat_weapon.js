//Retreat weapons by Runon

//Pulls out weapon when aggressive. Hides weapons if target is lost.

//If you save an npc with a weapon, and the weapon disappears after saving, that means the script work, as the NPC retreated its weapon

//Init is called when script initializes
//This hapens after saving scripts, or after saving npc in npc wand, the last one is very important
/**
 * @param {NpcEvent.InitEvent} event
 */
function init(e) {
    var data = e.npc.storeddata; //Put the storeddata into a variable that has a smaller name
    var item = e.npc.mainhandItem; //take the mainhandItem the moment you've saved the npc
     
    if (!item.isEmpty()) { //If it is not air
        //then we put the item's nbt inside its storeddata
        data.put('weapon', item.getItemNbt().toJsonString());
    }
    
    //if the npc is not attacking something the moment you save it
    if (!e.npc.getAttackTarget()) {
        //then we hide the item
        var air = e.npc.world.createItem('minecraft:air', 0, 1);
        e.npc.setMainhandItem(air);
    }
}

//when the npc gets a new attack target
/**
 * @param {NpcEvent.TargetEvent} event
 */
function target(e) {
    var data = e.npc.storeddata;
    //we check if we have stored the weapon
    if(data.has('weapon')) {
        //then we convert the item from string -> to nbt object -> to an actual itemstack object
        var item = e.npc.world.createItemFromNbt(e.API.stringToNbt(data.get('weapon')));
        //then we set the mainhandItem to this itemstack
        e.npc.setMainhandItem(item);
    }
}

//When the npc loses its attack target
/**
 * @param {NpcEvent.TargetLostEvent} event
 */
function targetLost(e) {
    //we create a itemstack that represents air
    var air = e.npc.world.createItem('minecraft:air', 0, 1);
    //we set the npc mainhanditem to air
    e.npc.setMainhandItem(air);
}