declare class CommandNoppesBase {
	subcommands;
	execute(server: MinecraftServer, sender: ICommandSender, args: String[]): void;
	getUsage(sender: ICommandSender): String;
	getDescription(): String;
	getUsage(): String;
	runSubCommands(): boolean;
	executeSub(server: MinecraftServer, sender: ICommandSender, command: String, args: String[]): void;
	canRun(server: MinecraftServer, sender: ICommandSender, usage: String, args: String[]): void;
	getRequiredPermissionLevel(): Number;
}

declare class CustomNPCsException {
}

declare class IContainer {
	getSize(): Number;
	getSlot(slot: Number): IItemStack;
	setSlot(slot: Number, item: IItemStack): void;
	/**
	 * Expert users only
	 */
	getMCInventory(): IInventory;
	/**
	 * Expert users only
	 */
	getMCContainer(): Container;
	count(item: IItemStack, ignoreDamage: boolean, ignoreNBT: boolean): Number;
	getItems(): IItemStack[];
}

declare class IContainerCustomChest extends IContainer {
	setName(name: String): void;
	getName(): String;
}

declare class IDamageSource {
	getType(): String;
	isUnblockable(): boolean;
	isProjectile(): boolean;
	getTrueSource(): IEntity;
	getImmediateSource(): IEntity;
	getMCDamageSource(): DamageSource;
}

declare class IDimension {
	getId(): Number;
	getName(): String;
	getSuffix(): String;
}

declare class INbt {
	remove(key: String): void;
	has(key: String): boolean;
	getBoolean(key: String): boolean;
	setBoolean(key: String, value: boolean): void;
	getShort(key: String): short;
	setShort(key: String, value: short): void;
	getInteger(key: String): Number;
	setInteger(key: String, value: Number): void;
	getByte(key: String): byte;
	setByte(key: String, value: byte): void;
	getLong(key: String): Number;
	setLong(key: String, value: Number): void;
	getDouble(key: String): Number;
	setDouble(key: String, value: Number): void;
	getFloat(key: String): Number;
	setFloat(key: String, value: Number): void;
	getString(key: String): String;
	setString(key: String, value: String): void;
	getByteArray(key: String): byte;
	setByteArray(key: String, value: byte[]): void;
	getIntegerArray(key: String): Number;
	setIntegerArray(key: String, value: int[]): void;
	getList(key: String, type: Number): Object;
	getListType(key: String): Number;
	setList(key: String, value: Object[]): void;
	getCompound(key: String): INbt;
	setCompound(key: String, value: INbt): void;
	getKeys(): String[];
	getType(key: String): Number;
	getMCNBT(): NBTTagCompound;
	toJsonString(): String;
	/**
	 * Compares if two nbt tags are the same/contain the same data
	 */
	isEqual(nbt: INbt): boolean;
	/**
	 * Clears all tags
	 */
	clear(): void;
	/**
	 * Merges two nbt tabs, note that nbt tags will be overwritten if they have the
	 *  same keys
	 */
	merge(nbt: INbt): void;
	mcSetTag(key: String, base: NBTBase): void;
	mcGetTag(key: String): NBTBase;
}

declare class IPos {
	getX(): Number;
	getY(): Number;
	getZ(): Number;
	up(): IPos;
	up(n: Number): IPos;
	down(): IPos;
	down(n: Number): IPos;
	north(): IPos;
	north(n: Number): IPos;
	east(): IPos;
	east(n: Number): IPos;
	south(): IPos;
	south(n: Number): IPos;
	west(): IPos;
	west(n: Number): IPos;
	add(x: Number, y: Number, z: Number): IPos;
	add(pos: IPos): IPos;
	subtract(x: Number, y: Number, z: Number): IPos;
	subtract(pos: IPos): IPos;
	normalize(): Number;
	getMCBlockPos(): BlockPos;
	offset(direction: Number): IPos;
	offset(direction: Number, n: Number): IPos;
	distanceTo(pos: IPos): Number;
}

declare class IRayTrace {
	getPos(): IPos;
	getBlock(): IBlock;
	getSideHit(): Number;
}

declare class IScoreboard {
	getObjectives(): IScoreboardObjective[];
	getObjective(name: String): IScoreboardObjective;
	hasObjective(objective: String): boolean;
	removeObjective(objective: String): void;
	addObjective(objective: String, criteria: String): IScoreboardObjective;
	setPlayerScore(player: String, objective: String, score: Number, datatag: String): void;
	getPlayerScore(player: String, objective: String, datatag: String): Number;
	hasPlayerObjective(player: String, objective: String, datatag: String): boolean;
	deletePlayerScore(player: String, objective: String, datatag: String): void;
	getTeams(): IScoreboardTeam[];
	hasTeam(name: String): boolean;
	addTeam(name: String): IScoreboardTeam;
	getTeam(name: String): IScoreboardTeam;
	removeTeam(name: String): void;
	getPlayerTeam(player: String): IScoreboardTeam;
	removePlayerTeam(player: String): void;
	getPlayerList(): String;
}

declare class IScoreboardObjective {
	getName(): String;
	getDisplayName(): String;
	setDisplayName(name: String): void;
	getCriteria(): String;
	isReadyOnly(): boolean;
	getScores(): IScoreboardScore[];
	getScore(player: String): IScoreboardScore;
	hasScore(player: String): boolean;
	createScore(player: String): IScoreboardScore;
	removeScore(player: String): void;
}

declare class IScoreboardScore {
	getValue(): Number;
	setValue(val: Number): void;
	getPlayerName(): String;
}

declare class IScoreboardTeam {
	getName(): String;
	getDisplayName(): String;
	setDisplayName(name: String): void;
	addPlayer(player: String): void;
	hasPlayer(player: String): boolean;
	removePlayer(player: String): void;
	getPlayers(): String[];
	clearPlayers(): void;
	getFriendlyFire(): boolean;
	setFriendlyFire(bo: boolean): void;
	setColor(color: String): void;
	getColor(): String;
	setSeeInvisibleTeamPlayers(bo: boolean): void;
	getSeeInvisibleTeamPlayers(): boolean;
}

declare class ITimers {
	/**
	 * Used for timer events, will throw an error if a timer with the id is already started
	 */
	start(id: Number, ticks: Number, repeat: boolean): void;
	/**
	 * Used for timer events, wont throw an error if an timer with this id already exists and will overwrite it with this new one
	 */
	forceStart(id: Number, ticks: Number, repeat: boolean): void;
	has(id: Number): boolean;
	stop(id: Number): boolean;
	/**
	 * Resets the timer back to 0
	 */
	reset(id: Number): void;
	clear(): void;
}

declare class IWorld {
	getNearbyEntities(x: Number, y: Number, z: Number, range: Number, type: Number): IEntity;
	getNearbyEntities(pos: IPos, range: Number, type: Number): IEntity;
	getClosestEntity(x: Number, y: Number, z: Number, range: Number, type: Number): IEntity;
	getClosestEntity(pos: IPos, range: Number, type: Number): IEntity;
	/**
	 * This gets all currently loaded entities in a world
	 */
	getAllEntities(type: Number): IEntity;
	getTime(): Number;
	setTime(time: Number): void;
	getTotalTime(): Number;
	getBlock(x: Number, y: Number, z: Number): IBlock;
	setBlock(x: Number, y: Number, z: Number, name: String, meta: Number): void;
	removeBlock(x: Number, y: Number, z: Number): void;
	getLightValue(x: Number, y: Number, z: Number): Number;
	getPlayer(name: String): IPlayer;
	isDay(): boolean;
	isRaining(): boolean;
	getDimension(): IDimension;
	setRaining(bo: boolean): void;
	thunderStrike(x: Number, y: Number, z: Number): void;
	/**
	 * Sound will be played in a 16 block range
	 */
	playSoundAt(pos: IPos, sound: String, volume: Number, pitch: Number): void;
	/**
	 * Sends a packet from the server to the client everytime its called. Probably should not use this too much.
	 */
	spawnParticle(particle: String, x: Number, y: Number, z: Number, dx: Number, dy: Number, dz: Number, speed: Number, count: Number): void;
	broadcast(message: String): void;
	getScoreboard(): IScoreboard;
	/**
	 * Stores any type of data, but will be gone on restart
	 *  Temp data is the same cross dimension
	 */
	getTempdata(): IData;
	/**
	 * Stored data persists through world restart. Unlike tempdata only Strings and Numbers can be saved.
	 *  Stored data is the same cross dimension
	 */
	getStoreddata(): IData;
	createItem(name: String, damage: Number, size: Number): IItemStack;
	createItemFromNbt(nbt: INbt): IItemStack;
	explode(x: Number, y: Number, z: Number, range: Number, fire: boolean, grief: boolean): void;
	getAllPlayers(): IPlayer[];
	getBiomeName(x: Number, z: Number): String;
	spawnEntity(entity: IEntity): void;
	/**
	 * Depricated, use the API.clones.spawn instead
	 */
	spawnClone(x: Number, y: Number, z: Number, tab: Number, name: String): IEntity;
	/**
	 * Depricated, use the API.clones.get instead
	 */
	getClone(tab: Number, name: String): IEntity;
	getRedstonePower(x: Number, y: Number, z: Number): Number;
	/**
	 * Expert users only
	 */
	getMCWorld(): WorldServer;
	/**
	 * Expert users only
	 */
	getMCBlockPos(x: Number, y: Number, z: Number): BlockPos;
	getEntity(uuid: String): IEntity;
	createEntityFromNBT(nbt: INbt): IEntity;
	createEntity(id: String): IEntity;
	getSpawnPoint(): IBlock;
	setSpawnPoint(block: IBlock): void;
	getName(): String;
}

declare class NpcAPI {
	/**
	 * Doesnt spawn the npc in the world
	 */
	createNPC(world: World): ICustomNpc;
	/**
	 * Creates and spawns an npc
	 */
	spawnNPC(world: World, x: Number, y: Number, z: Number): ICustomNpc;
	getIEntity(entity: Entity): IEntity;
	getIBlock(world: World, pos: BlockPos): IBlock;
	getIContainer(inventory: IInventory): IContainer;
	getIContainer(container: Container): IContainer;
	getIItemStack(itemstack: ItemStack): IItemStack;
	getIWorld(world: WorldServer): IWorld;
	getIWorlds(): IWorld[];
	getINbt(compound: NBTTagCompound): INbt;
	getIPos(x: Number, y: Number, z: Number): IPos;
	getFactions(): IFactionHandler;
	getRecipes(): IRecipeHandler;
	getQuests(): IQuestHandler;
	getDialogs(): IDialogHandler;
	getClones(): ICloneHandler;
	getIDamageSource(damagesource: DamageSource): IDamageSource;
	stringToNbt(str: String): INbt;
	createMail(sender: String, subject: String): IPlayerMail;
	createCustomGui(id: Number, width: Number, height: Number, pauseGame: boolean): ICustomGui;
	/**
	 * Get player data even if they are offline
	 */
	getRawPlayerData(uuid: String): INbt;
	/**
	 * Used by modders
	 */
	events(): EventBus;
	/**
	 * Use to register your own /noppes subcommand
	 */
	registerCommand(command: CommandNoppesBase): void;
	getGlobalDir(): File;
	getWorldDir(): File;
	IsAvailable(): boolean;
	Instance(): NpcAPI;
	registerPermissionNode(permission: String, defaultType: Number): void;
	hasPermissionNode(permission: String): boolean;
	executeCommand(world: IWorld, command: String): String;
	getRandomName(dictionary: Number, gender: Number): String;
}

declare class IBlock {
	getX(): Number;
	getY(): Number;
	getZ(): Number;
	getPos(): IPos;
	getMetadata(): Number;
	setMetadata(i: Number): void;
	getName(): String;
	/**
	 * Removes this block
	 */
	remove(): void;
	isRemoved(): boolean;
	isAir(): boolean;
	setBlock(name: String): IBlock;
	setBlock(block: IBlock): IBlock;
	hasTileEntity(): boolean;
	isContainer(): boolean;
	getContainer(): IContainer;
	/**
	 * Temp data stores anything but only untill it's reloaded. 
	 *  (works only for customnpcs blocks)
	 */
	getTempdata(): IData;
	/**
	 * Stored data persists through world restart. Unlike tempdata only Strings and Numbers can be saved 
	 *  (works only for blocks with TileEntities)
	 */
	getStoreddata(): IData;
	getWorld(): IWorld;
	getTileEntityNBT(): INbt;
	setTileEntityNBT(nbt: INbt): void;
	/**
	 * Expert users only
	 */
	getMCTileEntity(): TileEntity;
	/**
	 * Expert users only
	 */
	getMCBlock(): Block;
	blockEvent(type: Number, data: Number): void;
	getDisplayName(): String;
	/**
	 * Expert users only
	 */
	getMCBlockState(): IBlockState;
	/**
	 * Simulates a player interacting with this block (can give weird results)
	 */
	interact(side: Number): void;
}

declare class IBlockFluidContainer extends IBlock {
	getFluidPercentage(): Number;
	getFuildDensity(): Number;
	getFuildTemperature(): Number;
	getFluidValue(): Number;
	getFluidName(): String;
}

declare class IBlockScripted extends IBlock {
	setModel(item: IItemStack): void;
	setModel(name: String): void;
	getModel(): IItemStack;
	getTimers(): ITimers;
	setRedstonePower(strength: Number): void;
	getRedstonePower(): Number;
	setIsLadder(enabled: boolean): void;
	getIsLadder(): boolean;
	setLight(value: Number): void;
	getLight(): Number;
	setScale(x: Number, y: Number, z: Number): void;
	getScaleX(): Number;
	getScaleY(): Number;
	getScaleZ(): Number;
	setRotation(x: Number, y: Number, z: Number): void;
	getRotationX(): Number;
	getRotationY(): Number;
	getRotationZ(): Number;
	/**
	 * On servers the enable-command-block option in the server.properties needs to be set to true <br>
	 *  Use /gamerule commandBlockOutput false/true to turn off/on command block feedback <br>
	 *  Setting NpcUseOpCommands to true in the CustomNPCs.cfg should allow the npc to run op commands, be warned this could be a major security risk, use at own risk <br>
	 *  For permission plugins the commands are run under uuid:c9c843f8-4cb1-4c82-aa61-e264291b7bd6 and name:[customnpcs]
	 */
	executeCommand(command: String): String;
	getIsPassible(): boolean;
	setIsPassible(bo: boolean): void;
	getHardness(): Number;
	setHardness(hardness: Number): void;
	getResistance(): Number;
	setResistance(resistance: Number): void;
	getTextPlane(): ITextPlane;
	getTextPlane2(): ITextPlane;
	getTextPlane3(): ITextPlane;
	getTextPlane4(): ITextPlane;
	getTextPlane5(): ITextPlane;
	getTextPlane6(): ITextPlane;
}

declare class IBlockScriptedDoor extends IBlock {
	getTimers(): ITimers;
	getOpen(): boolean;
	setOpen(open: boolean): void;
	setBlockModel(name: String): void;
	getBlockModel(): String;
	getHardness(): Number;
	setHardness(hardness: Number): void;
	getResistance(): Number;
	setResistance(resistance: Number): void;
}

declare class ITextPlane {
	getText(): String;
	setText(text: String): void;
	getRotationX(): Number;
	getRotationY(): Number;
	getRotationZ(): Number;
	setRotationX(x: Number): void;
	setRotationY(y: Number): void;
	setRotationZ(z: Number): void;
	getOffsetX(): Number;
	getOffsetY(): Number;
	getOffsetZ(): Number;
	setOffsetX(x: Number): void;
	setOffsetY(y: Number): void;
	setOffsetZ(z: Number): void;
	getScale(): Number;
	setScale(scale: Number): void;
}


declare const AnimationType_NORMAL = 0;
declare const AnimationType_SIT = 1;
declare const AnimationType_SLEEP = 2;
declare const AnimationType_HUG = 3;
declare const AnimationType_SNEAK = 4;
declare const AnimationType_DANCE = 5;
declare const AnimationType_AIM = 6;
declare const AnimationType_CRAWL = 7;
declare const AnimationType_POINT = 8;
declare const AnimationType_CRY = 9;
declare const AnimationType_WAVE = 10;
declare const AnimationType_BOW = 11;
declare const AnimationType_NO = 12;
declare const AnimationType_YES = 13;
declare const AnimationType_DEATH = 14;

declare const EntityType_ANY = -1;
declare const EntityType_UNKNOWN = 0;
declare const EntityType_PLAYER = 1;
declare const EntityType_NPC = 2;
declare const EntityType_MONSTER = 3;
declare const EntityType_ANIMAL = 4;
declare const EntityType_LIVING = 5;
declare const EntityType_ITEM = 6;
declare const EntityType_PROJECTILE = 7;
declare const EntityType_PIXELMON = 8;
declare const EntityType_VILLAGER = 9;
declare const EntityType_ARROW = 10;
declare const EntityType_THROWABLE = 11;


declare const GuiComponentType_BUTTON = 0;
declare const GuiComponentType_LABEL = 1;
declare const GuiComponentType_TEXTURED_RECT = 2;
declare const GuiComponentType_TEXT_FIELD = 3;
declare const GuiComponentType_SCROLL = 4;
declare const GuiComponentType_ITEM_SLOT = 5;
declare const GuiComponentType_TEXT_AREA = 6;

declare const ItemType_NORMAL = 0;
declare const ItemType_BOOK = 1;
declare const ItemType_BLOCK = 2;
declare const ItemType_ARMOR = 3;
declare const ItemType_SWORD = 4;
declare const ItemType_SEEDS = 5;
declare const ItemType_SCRIPTED = 6;

declare const JobType_NONE = 0;
declare const JobType_BARD = 1;
declare const JobType_HEALER = 2;
declare const JobType_GUARD = 3;
declare const JobType_ITEMGIVER = 4;
declare const JobType_FOLLOWER = 5;
declare const JobType_SPAWNER = 6;
declare const JobType_CONVERSATION = 7;
declare const JobType_CHUNKLOADER = 8;
declare const JobType_PUPPET = 9;
declare const JobType_BUILDER = 10;
declare const JobType_FARMER = 11;
declare const JobType_MAXSIZE = 12;


declare const MarkType_NONE = 0;
declare const MarkType_QUESTION = 1;
declare const MarkType_EXCLAMATION = 2;
declare const MarkType_POINTER = 3;
declare const MarkType_SKULL = 4;
declare const MarkType_CROSS = 5;
declare const MarkType_STAR = 6;


declare const OptionType_QUIT_OPTION = 0;
declare const OptionType_DIALOG_OPTION = 1;
declare const OptionType_DISABLED = 2;
declare const OptionType_ROLE_OPTION = 3;
declare const OptionType_COMMAND_BLOCK = 4;

declare const ParticleType_NONE = 0;
declare const ParticleType_SMOKE = 1;
declare const ParticleType_PORTAL = 2;
declare const ParticleType_REDSTONE = 3;
declare const ParticleType_LIGHTNING = 4;
declare const ParticleType_LARGE_SMOKE = 5;
declare const ParticleType_MAGIC = 6;
declare const ParticleType_ENCHANT = 7;
declare const ParticleType_CRIT = 8;

declare const PotionEffectType_NONE = 0;
declare const PotionEffectType_FIRE = 1;
declare const PotionEffectType_POISON = 2;
declare const PotionEffectType_HUNGER = 3;
declare const PotionEffectType_WEAKNESS = 4;
declare const PotionEffectType_SLOWNESS = 5;
declare const PotionEffectType_NAUSEA = 6;
declare const PotionEffectType_BLINDNESS = 7;
declare const PotionEffectType_WITHER = 8;

declare const QuestType_ITEM = 0;
declare const QuestType_DIALOG = 1;
declare const QuestType_KILL = 2;
declare const QuestType_LOCATION = 3;
declare const QuestType_AREA_KILL = 4;
declare const QuestType_MANUAL = 5;

declare const RoleType_NONE = 0;
declare const RoleType_TRADER = 1;
declare const RoleType_FOLLOWER = 2;
declare const RoleType_BANK = 3;
declare const RoleType_TRANSPORTER = 4;
declare const RoleType_MAILMAN = 5;
declare const RoleType_COMPANION = 6;
declare const RoleType_DIALOG = 7;
declare const RoleType_MAXSIZE = 8;

declare const SideType_DOWN = 0;
declare const SideType_UP = 1;
declare const SideType_NORTH = 2;
declare const SideType_SOUTH = 3;
declare const SideType_WEST = 4;
declare const SideType_EAST = 5;

declare const TacticalType_DEFAULT = 0;
declare const TacticalType_DODGE = 1;
declare const TacticalType_SURROUND = 2;
declare const TacticalType_HITNRUN = 3;
declare const TacticalType_AMBUSH = 4;
declare const TacticalType_STALK = 5;
declare const TacticalType_NONE = 6;

declare class IAnimal extends IEntityLiving {
}

declare class IArrow extends IEntity {
}

declare class ICustomNpc extends IEntityLiving {
	getDisplay(): INPCDisplay;
	getInventory(): INPCInventory;
	getStats(): INPCStats;
	getAi(): INPCAi;
	getAdvanced(): INPCAdvanced;
	getFaction(): IFaction;
	setFaction(id: Number): void;
	getRole(): INPCRole;
	getJob(): INPCJob;
	getTimers(): ITimers;
	getHomeX(): Number;
	getHomeY(): Number;
	getHomeZ(): Number;
	getOwner(): IEntityLivingBase;
	setHome(x: Number, y: Number, z: Number): void;
	/**
	 * Basically completely resets the npc. This will also call the Init script
	 */
	reset(): void;
	say(message: String): void;
	sayTo(player: IPlayer, message: String): void;
	shootItem(target: IEntityLivingBase, item: IItemStack, accuracy: Number): IProjectile;
	shootItem(x: Number, y: Number, z: Number, item: IItemStack, accuracy: Number): IProjectile;
	/**
	 * If the player can't carry the item it will fall on the ground. (unless the player is in creative)
	 */
	giveItem(player: IPlayer, item: IItemStack): void;
	setDialog(slot: Number, dialog: IDialog): void;
	getDialog(slot: Number): IDialog;
	/**
	 * Force update client. Normally it updates client once every 10 ticks
	 */
	updateClient(): void;
	/**
	 * On servers the enable-command-block option in the server.properties needs to be set to true <br>
	 *  Use /gamerule commandBlockOutput false/true to turn off/on command block feedback <br>
	 *  Setting NpcUseOpCommands to true in the CustomNPCs.cfg should allow the npc to run op commands, be warned this could be a major security risk, use at own risk <br>
	 *  For permission plugins the commands are run under uuid:c9c843f8-4cb1-4c82-aa61-e264291b7bd6 and name:[customnpcs]
	 */
	executeCommand(command: String): String;
}

declare class IEntity {
	getX(): Number;
	setX(x: Number): void;
	getY(): Number;
	setY(y: Number): void;
	getZ(): Number;
	setZ(z: Number): void;
	getBlockX(): Number;
	getBlockY(): Number;
	getBlockZ(): Number;
	getPos(): IPos;
	setPos(pos: IPos): void;
	setPosition(x: Number, y: Number, z: Number): void;
	setRotation(rotation: Number): void;
	getRotation(): Number;
	getHeight(): Number;
	getEyeHeight(): Number;
	getWidth(): Number;
	setPitch(pitch: Number): void;
	getPitch(): Number;
	getMount(): IEntity;
	setMount(entity: IEntity): void;
	getRiders(): IEntity[];
	getAllRiders(): IEntity[];
	addRider(entity: IEntity): void;
	clearRiders(): void;
	knockback(power: Number, direction: Number): void;
	isSneaking(): boolean;
	isSprinting(): boolean;
	dropItem(item: IItemStack): IEntityItem;
	inWater(): boolean;
	inFire(): boolean;
	inLava(): boolean;
	/**
	 * Temp data stores anything but only untill it's reloaded
	 */
	getTempdata(): IData;
	/**
	 * Stored data persists through world restart. Unlike tempdata only Strings and Numbers can be saved
	 */
	getStoreddata(): IData;
	/**
	 * The Entity's extra stored NBT data
	 */
	getNbt(): INbt;
	isAlive(): boolean;
	getAge(): Number;
	/**
	 * Despawns this entity. Removes it permanently
	 */
	despawn(): void;
	/**
	 * Spawns this entity into the world (For NPCs dont forget to set their home position)
	 */
	spawn(): void;
	/**
	 * Kill the entity, doesnt't despawn it
	 */
	kill(): void;
	isBurning(): boolean;
	setBurning(seconds: Number): void;
	/**
	 * Removes fire from this entity
	 */
	extinguish(): void;
	getWorld(): IWorld;
	getTypeName(): String;
	getType(): Number;
	typeOf(type: Number): boolean;
	/**
	 * Expert users only
	 */
	getMCEntity(): Entity;
	getUUID(): String;
	generateNewUUID(): String;
	/**
	 * Stores the entity as clone server side
	 */
	storeAsClone(tab: Number, name: String): void;
	/**
	 * This is not a function you should be calling every tick.
	 *  Returns the entire entity as nbt
	 */
	getEntityNbt(): INbt;
	/**
	 * This is not a function you should be calling every tick
	 */
	setEntityNbt(nbt: INbt): void;
	/**
	 * Gets the first block within distance the npc is looking at
	 */
	rayTraceBlock(distance: Number, stopOnLiquid: boolean, ignoreBlockWithoutBoundingBox: boolean): IRayTrace;
	/**
	 * Gets the entities within distance the npc is looking at sorted by distance
	 */
	rayTraceEntities(distance: Number, stopOnLiquid: boolean, ignoreBlockWithoutBoundingBox: boolean): IEntity;
	/**
	 * Tags are used by scoreboards and can be used in commands
	 */
	getTags(): String[];
	addTag(tag: String): void;
	hasTag(tag: String): boolean;
	removeTag(tag: String): void;
	/**
	 * Play specific minecraft animations client side
	 *  0 and 3 are for EntityLivingBase entities and 2 is only for players
	 */
	playAnimation(type: Number): void;
	damage(amount: Number): void;
	getMotionX(): Number;
	getMotionY(): Number;
	getMotionZ(): Number;
	setMotionX(motion: Number): void;
	setMotionY(motion: Number): void;
	setMotionZ(motion: Number): void;
	getName(): String;
	setName(name: String): void;
	hasCustomName(): boolean;
	getEntityName(): String;
}

declare class IEntityItem extends IEntity {
	getOwner(): String;
	setOwner(name: String): void;
	getPickupDelay(): Number;
	setPickupDelay(delay: Number): void;
	getAge(): Number;
	setAge(age: Number): void;
	getLifeSpawn(): Number;
	setLifeSpawn(age: Number): void;
	getItem(): IItemStack;
	setItem(item: IItemStack): void;
}

declare class IEntityLiving extends IEntityLivingBase {
	isNavigating(): boolean;
	/**
	 * Stop navigating wherever this npc was walking to
	 */
	clearNavigation(): void;
	/**
	 * Start path finding toward this target
	 */
	navigateTo(x: Number, y: Number, z: Number, speed: Number): void;
	jump(): void;
	getMCEntity(): EntityLiving;
	getNavigationPath(): IPos;
}

declare class IEntityLivingBase extends IEntity {
	getHealth(): Number;
	setHealth(health: Number): void;
	getMaxHealth(): Number;
	setMaxHealth(health: Number): void;
	isAttacking(): boolean;
	setAttackTarget(living: IEntityLivingBase): void;
	getAttackTarget(): IEntityLivingBase;
	getLastAttacked(): IEntityLivingBase;
	getLastAttackedTime(): Number;
	canSeeEntity(entity: IEntity): boolean;
	swingMainhand(): void;
	swingOffhand(): void;
	getMainhandItem(): IItemStack;
	setMainhandItem(item: IItemStack): void;
	getOffhandItem(): IItemStack;
	setOffhandItem(item: IItemStack): void;
	/**
	 * Note not all Living Entities support this
	 */
	getArmor(slot: Number): IItemStack;
	setArmor(slot: Number, item: IItemStack): void;
	/**
	 * Works the same as the <a href="http://minecraft.gamepedia.com/Commands#effect">/effect command</a>
	 */
	addPotionEffect(effect: Number, duration: Number, strength: Number, hideParticles: boolean): void;
	clearPotionEffects(): void;
	getPotionEffect(effect: Number): Number;
	addMark(type: Number): IMark;
	removeMark(mark: IMark): void;
	getMarks(): IMark[];
	isChild(): boolean;
	getMCEntity(): EntityLivingBase;
	getMoveForward(): Number;
	setMoveForward(move: Number): void;
	getMoveStrafing(): Number;
	setMoveStrafing(move: Number): void;
	getMoveVertical(): Number;
	setMoveVertical(move: Number): void;
}

declare class IMonster extends IEntityLiving {
}

declare class IPixelmon extends IAnimal {
	/**
	 * Returns a <a href="https://reforged.gg/docs/com/pixelmonmod/pixelmon/api/pokemon/Pokemon.html">Pokemon</a> object
	 *  
	 *  Doesnt work with generations
	 */
	getPokemonData(): Object;
}

declare class IPlayer extends IEntityLivingBase {
	getDisplayName(): String;
	hasFinishedQuest(id: Number): boolean;
	hasActiveQuest(id: Number): boolean;
	startQuest(id: Number): void;
	factionStatus(factionId: Number): Number;
	/**
	 * Add the quest from finished quest list
	 */
	finishQuest(id: Number): void;
	/**
	 * Removes the quest from active quest list
	 */
	stopQuest(id: Number): void;
	/**
	 * Removes the quest from active and finished quest list
	 */
	removeQuest(id: Number): void;
	hasReadDialog(id: Number): boolean;
	showDialog(id: Number, name: String): void;
	removeDialog(id: Number): void;
	addDialog(id: Number): void;
	addFactionPoints(faction: Number, points: Number): void;
	getFactionPoints(faction: Number): Number;
	message(message: String): void;
	getGamemode(): Number;
	setGamemode(mode: Number): void;
	/**
	 * Use getInventory().count instead
	 */
	inventoryItemCount(item: IItemStack): Number;
	/**
	 * Use getInventory().count instead
	 */
	inventoryItemCount(id: String, damage: Number): Number;
	getInventory(): IContainer;
	getInventoryHeldItem(): IItemStack;
	removeItem(item: IItemStack, amount: Number): boolean;
	removeItem(id: String, damage: Number, amount: Number): boolean;
	removeAllItems(item: IItemStack): void;
	giveItem(item: IItemStack): boolean;
	giveItem(id: String, damage: Number, amount: Number): boolean;
	/**
	 * Same as the /spawnpoint command
	 */
	setSpawnpoint(x: Number, y: Number, z: Number): void;
	resetSpawnpoint(): void;
	hasAchievement(achievement: String): boolean;
	getExpLevel(): Number;
	setExpLevel(level: Number): void;
	hasPermission(permission: String): boolean;
	getPixelmonData(): Object;
	getTimers(): ITimers;
	closeGui(): void;
	getMCEntity(): EntityPlayerMP;
	getSpawnPoint(): IBlock;
	setSpawnPoint(block: IBlock): void;
	getHunger(): Number;
	setHunger(level: Number): void;
	kick(message: String): void;
	sendNotification(title: String, msg: String, type: Number): void;
	sendMail(mail: IPlayerMail): void;
	/**
	 * WANRING, REMOVES ALL PLAYER DATA (data only from CustomNPCs, does not clear inventory etc)
	 */
	clearData(): void;
	getActiveQuests(): IQuest[];
	getFinishedQuests(): IQuest[];
	/**
	 * Syncs inventory changes to the client side. Also checks Item Quests for completion
	 */
	updatePlayerInventory(): void;
	playSound(sound: String, volume: Number, pitch: Number): void;
	showChestGui(rows: Number): IContainer;
	getOpenContainer(): IContainer;
	canQuestBeAccepted(id: Number): boolean;
	/**
	 * Open a ICustomGui to this player.
	 */
	showCustomGui(gui: ICustomGui): void;
	getCustomGui(): ICustomGui;
}

declare class IProjectile extends IThrowable {
	getItem(): IItemStack;
	setItem(item: IItemStack): void;
	getHasGravity(): boolean;
	setHasGravity(bo: boolean): void;
	getAccuracy(): Number;
	setAccuracy(accuracy: Number): void;
	/**
	 * Entity where the projectile heads towards
	 *  The position for the projectile needs to have been set for this
	 */
	setHeading(entity: IEntity): void;
	/**
	 * Position where the projectile heads towards.
	 *  The position for the projectile needs to have been set for this
	 */
	setHeading(x: Number, y: Number, z: Number): void;
	setHeading(yaw: Number, pitch: Number): void;
	/**
	 * For scripters to enable projectile events in their current scripting container
	 */
	enableEvents(): void;
}

declare class IThrowable extends IEntity {
}

declare class IVillager extends IEntityLiving {
}

declare class IData {
	put(key: String, value: Object): void;
	get(key: String): Object;
	remove(key: String): void;
	has(key: String): boolean;
	getKeys(): String[];
	/**
	 * Removes all data
	 */
	clear(): void;
}

declare class ILine {
	getText(): String;
	setText(text: String): void;
	getSound(): String;
	setSound(sound: String): void;
	getShowText(): boolean;
	setShowText(show: boolean): void;
}

declare class IMark {
	getAvailability(): IAvailability;
	getColor(): Number;
	setColor(color: Number): void;
	getType(): Number;
	setType(type: Number): void;
	/**
	 * Calling this will send the changes you've made to the clients
	 */
	update(): void;
}

declare class INPCAdvanced {
	setLine(type: Number, slot: Number, text: String, sound: String): void;
	getLine(type: Number, slot: Number): String;
	getLineCount(type: Number): Number;
	getSound(type: Number): String;
	setSound(type: Number, sound: String): void;
}

declare class INPCAi {
	getAnimation(): Number;
	setAnimation(type: Number): void;
	getCurrentAnimation(): Number;
	setReturnsHome(bo: boolean): void;
	getReturnsHome(): boolean;
	getRetaliateType(): Number;
	setRetaliateType(type: Number): void;
	getMovingType(): Number;
	setMovingType(type: Number): void;
	getNavigationType(): Number;
	setNavigationType(type: Number): void;
	getStandingType(): Number;
	setStandingType(type: Number): void;
	getAttackInvisible(): boolean;
	setAttackInvisible(attack: boolean): void;
	getWanderingRange(): Number;
	setWanderingRange(range: Number): void;
	getInteractWithNPCs(): boolean;
	setInteractWithNPCs(interact: boolean): void;
	getStopOnInteract(): boolean;
	setStopOnInteract(stopOnInteract: boolean): void;
	getWalkingSpeed(): Number;
	setWalkingSpeed(speed: Number): void;
	getMovingPathType(): Number;
	getMovingPathPauses(): boolean;
	setMovingPathType(type: Number, pauses: boolean): void;
	getDoorInteract(): Number;
	setDoorInteract(type: Number): void;
	getCanSwim(): boolean;
	setCanSwim(canSwim: boolean): void;
	getSheltersFrom(): Number;
	setSheltersFrom(type: Number): void;
	getAttackLOS(): boolean;
	setAttackLOS(enabled: boolean): void;
	getAvoidsWater(): boolean;
	setAvoidsWater(enabled: boolean): void;
	getLeapAtTarget(): boolean;
	setLeapAtTarget(leap: boolean): void;
	getTacticalType(): Number;
	setTacticalType(type: Number): void;
	getTacticalRange(): Number;
	setTacticalRange(range: Number): void;
}

declare class INPCDisplay {
	getName(): String;
	setName(name: String): void;
	getTitle(): String;
	setTitle(title: String): void;
	getSkinUrl(): String;
	setSkinUrl(url: String): void;
	getSkinPlayer(): String;
	setSkinPlayer(name: String): void;
	getSkinTexture(): String;
	setSkinTexture(texture: String): void;
	getHasLivingAnimation(): boolean;
	setHasLivingAnimation(enabled: boolean): void;
	getVisible(): Number;
	setVisible(type: Number): void;
	/**
	 * If the availability is set, you can check if its visible to the player or not
	 */
	isVisibleTo(player: IPlayer): boolean;
	getBossbar(): Number;
	setBossbar(type: Number): void;
	getSize(): Number;
	setSize(size: Number): void;
	getTint(): Number;
	setTint(color: Number): void;
	getShowName(): Number;
	setShowName(type: Number): void;
	setCapeTexture(texture: String): void;
	getCapeTexture(): String;
	setOverlayTexture(texture: String): void;
	getOverlayTexture(): String;
	setModelScale(part: Number, x: Number, y: Number, z: Number): void;
	getModelScale(part: Number): Number;
	getBossColor(): Number;
	setBossColor(color: Number): void;
	setModel(model: String): void;
	getModel(): String;
	setHasHitbox(bo: boolean): void;
	getHasHitbox(): boolean;
}

declare class INPCInventory {
	getRightHand(): IItemStack;
	setRightHand(item: IItemStack): void;
	getLeftHand(): IItemStack;
	setLeftHand(item: IItemStack): void;
	getProjectile(): IItemStack;
	setProjectile(item: IItemStack): void;
	getArmor(slot: Number): IItemStack;
	setArmor(slot: Number, item: IItemStack): void;
	setDropItem(slot: Number, item: IItemStack, chance: Number): void;
	getDropItem(slot: Number): IItemStack;
	getExpMin(): Number;
	getExpMax(): Number;
	getExpRNG(): Number;
	/**
	 * Sets the random exp dropped when the npc dies
	 */
	setExp(min: Number, max: Number): void;
	getItemsRNG(): IItemStack;
}

declare class INPCJob {
	getType(): Number;
}

declare class INPCMelee {
	getStrength(): Number;
	setStrength(strength: Number): void;
	getDelay(): Number;
	setDelay(speed: Number): void;
	getRange(): Number;
	setRange(range: Number): void;
	getKnockback(): Number;
	setKnockback(knockback: Number): void;
	getEffectType(): Number;
	getEffectTime(): Number;
	getEffectStrength(): Number;
	setEffect(type: Number, strength: Number, time: Number): void;
}

declare class INPCRanged {
	getStrength(): Number;
	setStrength(strength: Number): void;
	getSpeed(): Number;
	setSpeed(speed: Number): void;
	/**
	 * Burst is the ammount shot at a time. E.g. a burst of 5 burst delay of 2 and a normal delay of 20, 
	 *  will shoot 5 projectiles with a delay of 2 ticks every 20 ticks.
	 */
	getBurst(): Number;
	setBurst(count: Number): void;
	getBurstDelay(): Number;
	setBurstDelay(delay: Number): void;
	getKnockback(): Number;
	setKnockback(punch: Number): void;
	getSize(): Number;
	setSize(size: Number): void;
	getRender3D(): boolean;
	setRender3D(render3d: boolean): void;
	getSpins(): boolean;
	setSpins(spins: boolean): void;
	getSticks(): boolean;
	setSticks(sticks: boolean): void;
	getHasGravity(): boolean;
	setHasGravity(hasGravity: boolean): void;
	getAccelerate(): boolean;
	setAccelerate(accelerate: boolean): void;
	getExplodeSize(): Number;
	setExplodeSize(size: Number): void;
	getEffectType(): Number;
	getEffectTime(): Number;
	getEffectStrength(): Number;
	setEffect(type: Number, strength: Number, time: Number): void;
	getGlows(): boolean;
	setGlows(glows: boolean): void;
	getParticle(): Number;
	setParticle(type: Number): void;
	getSound(type: Number): String;
	setSound(type: Number, sound: String): void;
	getShotCount(): Number;
	setShotCount(count: Number): void;
	getHasAimAnimation(): boolean;
	setHasAimAnimation(aim: boolean): void;
	getAccuracy(): Number;
	setAccuracy(accuracy: Number): void;
	getRange(): Number;
	setRange(range: Number): void;
	getDelayMin(): Number;
	getDelayMax(): Number;
	getDelayRNG(): Number;
	setDelay(min: Number, max: Number): void;
	getFireType(): Number;
	setFireType(type: Number): void;
	getMeleeRange(): Number;
	setMeleeRange(range: Number): void;
}

declare class INPCRole {
	getType(): Number;
}

declare class INPCStats {
	getMaxHealth(): Number;
	setMaxHealth(maxHealth: Number): void;
	getResistance(type: Number): Number;
	setResistance(type: Number, value: Number): void;
	getCombatRegen(): Number;
	setCombatRegen(regen: Number): void;
	getHealthRegen(): Number;
	setHealthRegen(regen: Number): void;
	getMelee(): INPCMelee;
	getRanged(): INPCRanged;
	getImmune(type: Number): boolean;
	setImmune(type: Number, bo: boolean): void;
	/**
	 * (0=Normal, 1=Undead, 2=Arthropod) Only used for damage calculations with enchants
	 */
	setCreatureType(type: Number): void;
	/**
	 * (0=Normal, 1=Undead, 2=Arthropod) Only used for damage calculations with enchants
	 */
	getCreatureType(): Number;
	getRespawnType(): Number;
	setRespawnType(type: Number): void;
	getRespawnTime(): Number;
	setRespawnTime(seconds: Number): void;
	getHideDeadBody(): boolean;
	setHideDeadBody(hide: boolean): void;
	getAggroRange(): Number;
	setAggroRange(range: Number): void;
}

declare class IPixelmonPlayerData {
	/**
	 * Returns <a href="https://reforged.gg/docs/com/pixelmonmod/pixelmon/api/storage/PartyStorage.html">PartyStorage</a>
	 */
	getParty(): Object;
	/**
	 * Returns <a href="https://reforged.gg/docs/com/pixelmonmod/pixelmon/api/storage/PCStorage.html">PCStorage</a>
	 */
	getPC(): Object;
}

declare class IPlayerMail {
	getSender(): String;
	setSender(sender: String): void;
	getSubject(): String;
	setSubject(subject: String): void;
	getText(): String;
	setText(text: String[]): void;
	getQuest(): IQuest;
	setQuest(id: Number): void;
	getContainer(): IContainer;
}

declare class IJobBard {
	getSong(): String;
	setSong(song: String): void;
}

declare class IJobBuilder {
	isBuilding(): boolean;
}

declare class IJobFarmer {
	isPlucking(): boolean;
}

declare class IJobFollower extends INPCJob {
	getFollowing(): String;
	setFollowing(name: String): void;
	isFollowing(): boolean;
	getFollowingNpc(): ICustomNpc;
}

declare class IJobPuppet extends INPCJob {
	getIsAnimated(): boolean;
	setIsAnimated(bo: boolean): void;
	getAnimationSpeed(): Number;
	setAnimationSpeed(speed: Number): void;
	/**
	 * Part 6-11 are for animation
	 */
	getPart(part: Number): IJobPuppetPart;
}

declare class IJobSpawner {
	/**
	 * Npc needs to be attacking something or be set to Despawn Spawns On Target Lost: No, otherwise it will despawn right away
	 */
	spawnEntity(i: Number): IEntityLivingBase;
	removeAllSpawned(): void;
}

declare class IRoleDialog {
	getDialog(): String;
	setDialog(text: String): void;
	getOption(option: Number): String;
	setOption(option: Number, text: String): void;
	getOptionDialog(option: Number): String;
	setOptionDialog(option: Number, text: String): void;
}

declare class IRoleFollower extends INPCRole {
	getDays(): Number;
	addDays(days: Number): void;
	getInfinite(): boolean;
	setInfinite(infinite: boolean): void;
	getGuiDisabled(): boolean;
	setGuiDisabled(disabled: boolean): void;
	getFollowing(): IPlayer;
	setFollowing(player: IPlayer): void;
	isFollowing(): boolean;
	reset(): void;
	setRefuseSoulstone(refuse: boolean): void;
	getRefuseSoulstone(): boolean;
}

declare class IRoleTrader extends INPCRole {
	getSold(slot: Number): IItemStack;
	getCurrency1(slot: Number): IItemStack;
	getCurrency2(slot: Number): IItemStack;
	set(slot: Number, currency: IItemStack, currency2: IItemStack, sold: IItemStack): void;
	remove(slot: Number): void;
	setMarket(name: String): void;
	getMarket(): String;
}

declare class IRoleTransporter extends INPCRole {
	getLocation(): IRoleTransporter.ITransportLocation;
}

declare class BlockEvent {
	block: IBlock;
}

declare class CustomContainerEvent {
	container: IContainer;
	player: IPlayer;
}

declare class CustomGuiEvent {
	player: IPlayer;
	gui: ICustomGui;
}

declare class CustomNPCsEvent {
	API;
}

declare class DialogEvent {
	dialog: IDialog;
	player: IPlayer;
}

declare class ForgeEvent {
	event: Event;
}

declare class HandlerEvent {
}

declare class ItemEvent {
	item: IItemScripted;
}

declare class NpcEvent {
	npc: ICustomNpc;
}

declare class PlayerEvent {
	player: IPlayer;
}

declare class ProjectileEvent {
	projectile: IProjectile;
}

declare class QuestEvent {
	quest: IQuest;
	player: IPlayer;
}

declare class RoleEvent {
	npc: ICustomNpc;
	player: IPlayer;
}

declare class WorldEvent {
	world: IWorld;
}

declare class IButton extends ICustomGuiComponent {
	getWidth(): Number;
	getHeight(): Number;
	setSize(width: Number, height: Number): IButton;
	getLabel(): String;
	setLabel(label: String): IButton;
	getTexture(): String;
	hasTexture(): boolean;
	setTexture(texture: String): IButton;
	getTextureX(): Number;
	getTextureY(): Number;
	setTextureOffset(textureX: Number, textureY: Number): IButton;
	setEnabled(bo: boolean): void;
	getEnabled(): boolean;
}

declare class ICustomGui {
	getID(): Number;
	getWidth(): Number;
	getHeight(): Number;
	getComponents(): java.util.List<ICustomGuiComponent>;
	getSlots(): java.util.List<IItemSlot>;
	setSize(width: Number, height: Number): void;
	setDoesPauseGame(pauseGame: boolean): void;
	setBackgroundTexture(resourceLocation: String): void;
	/**
	 * Add a regular, Minecraft style button to this GUI. Uses default width and height.
	 */
	addButton(id: Number, label: String, x: Number, y: Number): IButton;
	/**
	 * Add a regular, Minecraft style button to this GUI, with a defined width and height.
	 */
	addButton(id: Number, label: String, x: Number, y: Number, width: Number, height: Number): IButton;
	/**
	 * Add a button with a custom texture to this GUI.
	 *  Hover Texture is taken from directly beneath the base texture.
	 *  For examples, look at Vanilla Minecraft button textures.
	 */
	addTexturedButton(id: Number, label: String, x: Number, y: Number, width: Number, height: Number, texture: String): IButton;
	/**
	 * Add a button with a custom texture to this GUI, with a texture offset.
	 *  Hover Texture is taken from directly beneath the base texture.
	 *  For examples, look at Vanilla Minecraft button textures.
	 */
	addTexturedButton(id: Number, label: String, x: Number, y: Number, width: Number, height: Number, texture: String, textureX: Number, textureY: Number): IButton;
	/**
	 * Add a Label to the GUI.
	 */
	addLabel(id: Number, label: String, x: Number, y: Number, width: Number, height: Number): ILabel;
	/**
	 * Add a Label to the GUI.
	 */
	addLabel(id: Number, label: String, x: Number, y: Number, width: Number, height: Number, color: Number): ILabel;
	/**
	 * Add a Text Field input to the GUI, that the player can type into.
	 */
	addTextField(id: Number, x: Number, y: Number, width: Number, height: Number): ITextField;
	/**
	 * Add a Text Field input to the GUI, that the player can type into.
	 */
	addTextArea(id: Number, x: Number, y: Number, width: Number, height: Number): ITextArea;
	/**
	 * Add a texture to be drawn within the GUI.
	 */
	addTexturedRect(id: Number, texture: String, x: Number, y: Number, width: Number, height: Number): ITexturedRect;
	/**
	 * Add a texture to be drawn within the GUI.
	 */
	addTexturedRect(id: Number, texture: String, x: Number, y: Number, width: Number, height: Number, textureX: Number, textureY: Number): ITexturedRect;
	/**
	 * Add a Scroll List to the GUI, for the player to select from.
	 */
	addScroll(id: Number, x: Number, y: Number, width: Number, height: Number, list: String[]): IScroll;
	/**
	 * Add an Item Slot to the GUI.
	 *  CAUTION: Handling Item Storage can be complicated. Once the GUI closes, any items in it will be lost unless you handle storing/saving this information yourself.
	 */
	addItemSlot(x: Number, y: Number): IItemSlot;
	/**
	 * Add an Item Slot to the GUI with an IItemStack already in it.
	 *  CAUTION: Handling Item Storage can be complicated. Once the GUI closes, any items in it will be lost unless you handle storing/saving this information yourself.
	 */
	addItemSlot(x: Number, y: Number, stack: IItemStack): IItemSlot;
	/**
	 * Add a display of the Player's Inventory to the GUI.
	 *  A Player's inventory is around 162 Wide, and 58 Tall. Take this into consideration when placing this.
	 */
	showPlayerInventory(x: Number, y: Number): void;
	/**
	 * Get a component from this GUI by it's ID.
	 */
	getComponent(id: Number): ICustomGuiComponent;
	/**
	 * Remove component from this GUI by it's ID.
	 */
	removeComponent(id: Number): void;
	/**
	 * Update a given component in this GUI, if a component with a matching ID exists.
	 */
	updateComponent(component: ICustomGuiComponent): void;
	/**
	 * Update the given player's CustomGUI with this one.
	 */
	update(player: IPlayer): void;
}

declare class ICustomGuiComponent {
	getID(): Number;
	setID(id: Number): ICustomGuiComponent;
	getPosX(): Number;
	getPosY(): Number;
	setPos(x: Number, y: Number): ICustomGuiComponent;
	hasHoverText(): boolean;
	getHoverText(): String;
	setHoverText(text: String): ICustomGuiComponent;
	setHoverText(text: String[]): ICustomGuiComponent;
}

declare class IItemSlot extends ICustomGuiComponent {
	hasStack(): boolean;
	getStack(): IItemStack;
	setStack(itemStack: IItemStack): IItemSlot;
	getMCSlot(): Slot;
}

declare class ILabel extends ICustomGuiComponent {
	getText(): String;
	setText(label: String): ILabel;
	getWidth(): Number;
	getHeight(): Number;
	setSize(width: Number, height: Number): ILabel;
	getColor(): Number;
	setColor(color: Number): ILabel;
	getScale(): Number;
	setScale(scale: Number): ILabel;
}

declare class IScroll extends ICustomGuiComponent {
	getWidth(): Number;
	getHeight(): Number;
	setSize(width: Number, height: Number): IScroll;
	getList(): String;
	setList(list: String[]): IScroll;
	getDefaultSelection(): Number;
	setDefaultSelection(defaultSelection: Number): IScroll;
	isMultiSelect(): boolean;
	setMultiSelect(multiSelect: boolean): IScroll;
}

declare class ITextArea extends ITextField {
	setCodeTheme(bo: boolean): void;
	getCodeTheme(): boolean;
}

declare class ITextField extends ICustomGuiComponent {
	getWidth(): Number;
	getHeight(): Number;
	setSize(width: Number, height: Number): ITextField;
	getText(): String;
	setText(defaultText: String): ITextField;
	setEnabled(bo: boolean): void;
	getEnabled(): boolean;
}

declare class ITexturedButton extends IButton {
	getTexture(): String;
	setTexture(texture: String): ITexturedButton;
	getTextureX(): Number;
	getTextureY(): Number;
	setTextureOffset(textureX: Number, textureY: Number): ITexturedButton;
}

declare class ITexturedRect extends ICustomGuiComponent {
	getTexture(): String;
	setTexture(texture: String): ITexturedRect;
	getWidth(): Number;
	getHeight(): Number;
	setSize(width: Number, height: Number): ITexturedRect;
	getScale(): Number;
	setScale(scale: Number): ITexturedRect;
	getTextureX(): Number;
	getTextureY(): Number;
	setTextureOffset(offsetX: Number, offsetY: Number): ITexturedRect;
}

declare class ICloneHandler {
	spawn(x: Number, y: Number, z: Number, tab: Number, name: String, world: IWorld): IEntity;
	get(tab: Number, name: String, world: IWorld): IEntity;
	set(tab: Number, name: String, entity: IEntity): void;
	remove(tab: Number, name: String): void;
}

declare class IDialogHandler {
	categories(): java.util.List<IDialogCategory>;
	get(id: Number): IDialog;
}

declare class IFactionHandler {
	list(): java.util.List<IFaction>;
	delete(id: Number): IFaction;
	/**
	 * Example: create("Bandits", 0xFF0000)
	 */
	create(name: String, color: Number): IFaction;
	get(id: Number): IFaction;
}

declare class IQuestHandler {
	categories(): java.util.List<IQuestCategory>;
	get(id: Number): IQuest;
}

declare class IRecipeHandler {
	getGlobalList(): java.util.List<IRecipe>;
	getCarpentryList(): java.util.List<IRecipe>;
	addRecipe(name: String, global: boolean, result: IItemStack, objects: Object[]): IRecipe;
	addRecipe(name: String, global: boolean, result: IItemStack, width: Number, height: Number, recipe: IItemStack[]): IRecipe;
	delete(id: Number): IRecipe;
}

declare class IAvailability {
	isAvailable(player: IPlayer): boolean;
	getDaytime(): Number;
	setDaytime(type: Number): void;
	getMinPlayerLevel(): Number;
	setMinPlayerLevel(level: Number): void;
	getDialog(i: Number): Number;
	setDialog(i: Number, id: Number, type: Number): void;
	removeDialog(i: Number): void;
	getQuest(i: Number): Number;
	setQuest(i: Number, id: Number, type: Number): void;
	removeQuest(i: Number): void;
	setFaction(i: Number, id: Number, type: Number, stance: Number): void;
	removeFaction(i: Number): void;
	setScoreboard(i: Number, objective: String, type: Number, value: Number): void;
}

declare class IDialog {
	getId(): Number;
	getName(): String;
	setName(name: String): void;
	getText(): String;
	setText(text: String): void;
	getQuest(): IQuest;
	setQuest(quest: IQuest): void;
	getCommand(): String;
	setCommand(command: String): void;
	getOptions(): java.util.List<IDialogOption>;
	getOption(slot: Number): IDialogOption;
	getAvailability(): IAvailability;
	getCategory(): IDialogCategory;
	save(): void;
}

declare class IDialogCategory {
	dialogs(): java.util.List<IDialog>;
	getName(): String;
	create(): IDialog;
}

declare class IDialogOption {
	getSlot(): Number;
	getName(): String;
	getType(): Number;
}

declare class IFaction {
	getId(): Number;
	getName(): String;
	getDefaultPoints(): Number;
	setDefaultPoints(points: Number): void;
	getColor(): Number;
	playerStatus(player: IPlayer): Number;
	hostileToNpc(npc: ICustomNpc): boolean;
	hostileToFaction(factionId: Number): boolean;
	getHostileList(): Number;
	addHostile(id: Number): void;
	removeHostile(id: Number): void;
	hasHostile(id: Number): boolean;
	getIsHidden(): boolean;
	setIsHidden(bo: boolean): void;
	getAttackedByMobs(): boolean;
	setAttackedByMobs(bo: boolean): void;
	save(): void;
}

declare class IQuest {
	getId(): Number;
	getName(): String;
	setName(name: String): void;
	getType(): Number;
	setType(type: Number): void;
	getLogText(): String;
	setLogText(text: String): void;
	getCompleteText(): String;
	setCompleteText(text: String): void;
	getNextQuest(): IQuest;
	setNextQuest(quest: IQuest): void;
	getObjectives(player: IPlayer): IQuestObjective;
	getCategory(): IQuestCategory;
	getRewards(): IContainer;
	getNpcName(): String;
	setNpcName(name: String): void;
	save(): void;
	getIsRepeatable(): boolean;
}

declare class IQuestCategory {
	quests(): java.util.List<IQuest>;
	getName(): String;
	create(): IQuest;
}

declare class IQuestObjective {
	getProgress(): Number;
	/**
	 * Does not work for Item or Dialog quests
	 */
	setProgress(progress: Number): void;
	getMaxProgress(): Number;
	isCompleted(): boolean;
	getText(): String;
}

declare class IRecipe {
	getName(): String;
	isGlobal(): boolean;
	setIsGlobal(bo: boolean): void;
	getIgnoreNBT(): boolean;
	setIgnoreNBT(bo: boolean): void;
	getIgnoreDamage(): boolean;
	setIgnoreDamage(bo: boolean): void;
	getWidth(): Number;
	getHeight(): Number;
	getResult(): ItemStack;
	getRecipe(): ItemStack;
	saves(bo: boolean): void;
	saves(): boolean;
	save(): void;
	delete(): void;
	getId(): Number;
}

declare class IItemArmor extends IItemStack {
	getArmorSlot(): Number;
	getArmorMaterial(): String;
}

declare class IItemBlock extends IItemStack {
	getBlockName(): String;
}

declare class IItemBook extends IItemStack {
	getText(): String;
	/**
	 * Set the text for multiple pages
	 */
	setText(pages: String[]): void;
	getAuthor(): String;
	setAuthor(author: String): void;
	getTitle(): String;
	setTitle(title: String): void;
}

declare class IItemScripted extends IItemStack {
	hasTexture(damage: Number): boolean;
	getTexture(damage: Number): String;
	/**
	 * All scripted items with the same damage value have the same texture.
	 *  To change the actual texture of the item call setItemDamage afterwards with the same damage value
	 */
	setTexture(damage: Number, texture: String): void;
	setMaxStackSize(size: Number): void;
	getDurabilityValue(): Number;
	setDurabilityValue(value: Number): void;
	getDurabilityShow(): boolean;
	setDurabilityShow(bo: boolean): void;
	getDurabilityColor(): Number;
	setDurabilityColor(color: Number): void;
	getColor(): Number;
	setColor(color: Number): void;
}

declare class IItemStack {
	getStackSize(): Number;
	setStackSize(size: Number): void;
	getMaxStackSize(): Number;
	getItemDamage(): Number;
	setItemDamage(value: Number): void;
	getMaxItemDamage(): Number;
	getAttackDamage(): Number;
	damageItem(damage: Number, living: IEntityLiving): void;
	addEnchantment(id: String, strenght: Number): void;
	isEnchanted(): boolean;
	hasEnchant(id: String): boolean;
	removeEnchant(id: String): boolean;
	isBlock(): boolean;
	isWearable(): boolean;
	hasCustomName(): boolean;
	setCustomName(name: String): void;
	getDisplayName(): String;
	getItemName(): String;
	getName(): String;
	isBook(): boolean;
	copy(): IItemStack;
	/**
	 * No support is given for this method. Dont use if you dont know what you are doing.
	 */
	getMCItemStack(): ItemStack;
	getNbt(): INbt;
	hasNbt(): boolean;
	/**
	 * Removes the nbt from the itemstack
	 */
	removeNbt(): void;
	getItemNbt(): INbt;
	isEmpty(): boolean;
	getType(): Number;
	getLore(): String;
	setLore(lore: String[]): void;
	setAttribute(name: String, value: Number): void;
	setAttribute(name: String, value: Number, slot: Number): void;
	getAttribute(name: String): Number;
	hasAttribute(name: String): boolean;
	/**
	 * Temp data stores anything but only untill it's reloaded
	 */
	getTempdata(): IData;
	/**
	 * Stored data persists through world restart. Unlike tempdata only Strings and Numbers can be saved
	 */
	getStoreddata(): IData;
	getFoodLevel(): Number;
	compare(item: IItemStack, ignoreNBT: boolean): boolean;
}

declare namespace CommandNoppesBase {

	class SubCommand extends Annotation {
		name(): String;
		usage(): String;
		desc(): String;
		permission(): Number;
	}

}

declare namespace IJobPuppet {

	class IJobPuppetPart extends IJobPuppet {
		getRotationX(): Number;
		getRotationY(): Number;
		getRotationZ(): Number;
		setRotation(x: Number, y: Number, z: Number): void;
	}

}

declare namespace IRoleTransporter {

	class ITransportLocation extends IRoleTransporter {
		getId(): Number;
		getDimension(): Number;
		getX(): Number;
		getY(): Number;
		getZ(): Number;
		getName(): String;
		/**
		 * Returns the unlock type
		 */
		getType(): Number;
	}

}

declare namespace BlockEvent {

	class BreakEvent extends BlockEvent {
	}

	class ClickedEvent extends BlockEvent {
		player: IPlayer;
	}

	class CollidedEvent extends BlockEvent {
		entity: IEntity;
	}

	class DoorToggleEvent extends BlockEvent {
	}

	class EntityFallenUponEvent extends BlockEvent {
		entity: IEntity;
		distanceFallen;
	}

	class ExplodedEvent extends BlockEvent {
	}

	class HarvestedEvent extends BlockEvent {
		player: IPlayer;
	}

	class InitEvent extends BlockEvent {
	}

	class InteractEvent extends BlockEvent {
		player: IPlayer;
		hitX: Number;
		hitY: Number;
		hitZ: Number;
		side: Number;
	}

	class NeighborChangedEvent extends BlockEvent {
		changedPos: IPos;
	}

	class RainFillEvent extends BlockEvent {
	}

	class RedstoneEvent extends BlockEvent {
		prevPower: Number;
		power: Number;
	}

	class TimerEvent extends BlockEvent {
		id: Number;
	}

	class UpdateEvent extends BlockEvent {
	}

}

declare namespace CustomContainerEvent {

	class CloseEvent extends CustomContainerEvent {
	}

	class SlotClickedEvent extends CustomContainerEvent {
		slotItem: IItemStack;
		heldItem: IItemStack;
		slot;
	}

}

declare namespace CustomGuiEvent {

	class ButtonEvent extends CustomGuiEvent {
		buttonId: Number;
	}

	class CloseEvent extends CustomGuiEvent {
	}

	class ScrollEvent extends CustomGuiEvent {
		scrollId: Number;
		selection: String[];
		doubleClick: boolean;
		scrollIndex: Number;
	}

	class SlotClickEvent extends CustomGuiEvent {
		slotId: Number;
		stack: IItemStack;
		dragType: Number;
		clickType: String;
	}

	class SlotEvent extends CustomGuiEvent {
		slotId: Number;
		stack: IItemStack;
	}

}

declare namespace DialogEvent {

	class CloseEvent extends DialogEvent {
	}

	class OpenEvent extends DialogEvent {
	}

	class OptionEvent extends DialogEvent {
		option: IDialogOption;
	}

}

declare namespace ForgeEvent {

	class EntityEvent extends ForgeEvent {
		entity: IEntity;
	}

	class InitEvent extends ForgeEvent {
	}

	class WorldEvent extends ForgeEvent {
		world: IWorld;
	}

}

declare namespace HandlerEvent {

	class FactionsLoadedEvent extends HandlerEvent {
		handler: IFactionHandler;
	}

	class RecipesLoadedEvent extends HandlerEvent {
		handler: IRecipeHandler;
	}

}

declare namespace ItemEvent {

	class AttackEvent extends ItemEvent {
		type: Number;
		target: Object;
		player: IPlayer;
		damageSource;
	}

	class InitEvent extends ItemEvent {
	}

	class InteractEvent extends ItemEvent {
		type: Number;
		target: Object;
		player: IPlayer;
	}

	class PickedUpEvent extends ItemEvent {
		entity: IEntityItem;
		player: IPlayer;
	}

	class SpawnEvent extends ItemEvent {
		entity: IEntityItem;
	}

	class TossedEvent extends ItemEvent {
		entity: IEntityItem;
		player: IPlayer;
	}

	class UpdateEvent extends ItemEvent {
		player: IPlayer;
	}

}

declare namespace NpcEvent {

	class CollideEvent extends NpcEvent {
		entity: IEntity;
	}

	class DamagedEvent extends NpcEvent {
		damageSource;
		source: IEntity;
		damage: Number;
		clearTarget;
	}

	class DiedEvent extends NpcEvent {
		damageSource;
		type;
		source;
		droppedItems;
		expDropped;
		line;
	}

	class InitEvent extends NpcEvent {
	}

	class InteractEvent extends NpcEvent {
		player: IPlayer;
	}

	class KilledEntityEvent extends NpcEvent {
		entity: IEntityLivingBase;
	}

	class MeleeAttackEvent extends NpcEvent {
		target: IEntityLivingBase;
		damage: Number;
	}

	class RangedLaunchedEvent extends NpcEvent {
		target: IEntityLivingBase;
		damage: Number;
		projectiles: java.util.List<IProjectile>;
	}

	class TargetEvent extends NpcEvent {
		entity: IEntityLivingBase;
	}

	class TargetLostEvent extends NpcEvent {
		entity: IEntityLivingBase;
	}

	class TimerEvent extends NpcEvent {
		id: Number;
	}

	class UpdateEvent extends NpcEvent {
	}

}

declare namespace PlayerEvent {

	class AttackEvent extends PlayerEvent {
		type: Number;
		target: Object;
		damageSource;
	}

	class BreakEvent extends PlayerEvent {
		block: IBlock;
		exp: Number;
	}

	class ChatEvent extends PlayerEvent {
		message: String;
	}

	class ContainerClosed extends PlayerEvent {
		container: IContainer;
	}

	class ContainerOpen extends PlayerEvent {
		container: IContainer;
	}

	class DamagedEntityEvent extends PlayerEvent {
		damageSource;
		target: IEntity;
		damage: Number;
	}

	class DamagedEvent extends PlayerEvent {
		damageSource;
		source: IEntity;
		damage: Number;
		clearTarget;
	}

	class DiedEvent extends PlayerEvent {
		damageSource;
		type;
		source;
	}

	class FactionUpdateEvent extends PlayerEvent {
		faction: IFaction;
		points: Number;
		init: boolean;
	}

	class InitEvent extends PlayerEvent {
	}

	class InteractEvent extends PlayerEvent {
		type: Number;
		target: Object;
	}

	class KeyPressedEvent extends PlayerEvent {
		key: Number;
		isCtrlPressed: boolean;
		isAltPressed: boolean;
		isShiftPressed: boolean;
		isMetaPressed: boolean;
	}

	class KilledEntityEvent extends PlayerEvent {
		entity: IEntityLivingBase;
	}

	class LevelUpEvent extends PlayerEvent {
		change: Number;
	}

	class LoginEvent extends PlayerEvent {
	}

	class LogoutEvent extends PlayerEvent {
	}

	class PickUpEvent extends PlayerEvent {
		item: IItemStack;
	}

	class RangedLaunchedEvent extends PlayerEvent {
	}

	class TimerEvent extends PlayerEvent {
		id: Number;
	}

	class TossEvent extends PlayerEvent {
		item: IItemStack;
	}

	class UpdateEvent extends PlayerEvent {
	}

}

declare namespace ProjectileEvent {

	class ImpactEvent extends ProjectileEvent {
		type: Number;
		target: Object;
	}

	class UpdateEvent extends ProjectileEvent {
	}

}

declare namespace QuestEvent {

	class QuestCompletedEvent extends QuestEvent {
	}

	class QuestStartEvent extends QuestEvent {
	}

	class QuestTurnedInEvent extends QuestEvent {
		expReward: Number;
		itemRewards: IItemStack[];
	}

}

declare namespace RoleEvent {

	class BankUnlockedEvent extends RoleEvent {
		slot: Number;
	}

	class BankUpgradedEvent extends RoleEvent {
		slot: Number;
	}

	class FollowerFinishedEvent extends RoleEvent {
	}

	class FollowerHireEvent extends RoleEvent {
		days: Number;
	}

	class MailmanEvent extends RoleEvent {
		mail: IPlayerMail;
	}

	class TradeFailedEvent extends RoleEvent {
		sold: IItemStack|null;
		currency1: IItemStack|null;
		currency2: IItemStack|null;
		receiving;
	}

	class TraderEvent extends RoleEvent {
		sold: IItemStack|null;
		currency1: IItemStack|null;
		currency2: IItemStack|null;
	}

	class TransporterUnlockedEvent extends RoleEvent {
	}

	class TransporterUseEvent extends RoleEvent {
		location: IRoleTransporter.ITransportLocation;
	}

}

declare namespace WorldEvent {

	class ScriptCommandEvent extends WorldEvent {
		arguments: String[];
		pos: IPos;
	}

}

declare namespace java.util {
	/**
	 * Use `Java.from` to cast this list to an normal array
	 */
	class List<T> {

	}
}