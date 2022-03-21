//Lockable Door Script by AnnikenYT

var key_name = "Anniken's key" // Name of the key.
var door_name = "Door" // This name will be displayed in information messages.
var locked = true; // Standart value. True means locked by default, false means open.

// DONT CHANGE!
function init(event) {
 event.block.setBlockModel("minecraft:iron_door");
}


function interact(event) {
	//Lock
	if (!locked) {
		if (event.player.getMainhandItem().getDisplayName() == key_name) {
			locked = true
			event.block.setBlockModel("minecraft:iron_door");
			event.player.message("<" + door_name + "> This door is now locked");
			event.player.playSound("minecraft:block.enchantment_table.use", 1, 1);
			event.setCanceled(true);
		}
	}
	//Unlock
	else {
		if (event.player.getMainhandItem().getDisplayName() == key_name) {
			locked = false
			event.block.setBlockModel("minecraft:wooden_door");
			event.player.message("<" + door_name + "> This door is now unlocked");
			event.player.playSound("minecraft:block.enchantment_table.use", 1, 1);
			event.setCanceled(true);
		}
		//Tell player that door is locked
		if (locked) {
			event.setCanceled(true);
			event.player.message("<" + door_name + "> This door is locked");
			event.player.playSound("minecraft:block.enchantment_table.use", 1, 1);
		}
	}
}