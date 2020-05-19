// THIS IS A GENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// SOURCE FILE AT "src/lucid-dream.ejs"

const fs = require('fs');
const os = require('os');
const path = require('path');

/**
 * @namespace
 */
const Lucid = {
	/**
	 * @property {Object} config - The Lucid configuration object
	 * @memberof Lucid
	 */
	config: require('./config/lucid-dream.json'),
	/**
 	* @property {Apply} Apply - The Apply class
 	* @memberof Lucid
 	*/
	Apply: require('./lib/api/Apply'),
	/**
 	* @property {Decal} Decal - The Decal class
 	* @memberof Lucid
 	*/
	Decal: require('./lib/api/Decal'),
	/**
 	* @property {Dialog} Dialog - The Dialog class
 	* @memberof Lucid
 	*/
	Dialog: require('./lib/api/Dialog'),
	/**
 	* @property {Effect} Effect - The Effect class
 	* @memberof Lucid
 	*/
	Effect: require('./lib/api/Effect'),
	/**
 	* @property {Filler} Filler - The Filler class
 	* @memberof Lucid
 	*/
	Filler: require('./lib/api/Filler'),
	/**
 	* @property {ObjectTiles} ObjectTiles - The ObjectTiles class
 	* @memberof Lucid
 	*/
	ObjectTiles: require('./lib/api/ObjectTiles'),
	/**
 	* @property {Parallax} Parallax - The Parallax class
 	* @memberof Lucid
 	*/
	Parallax: require('./lib/api/Parallax'),
	/**
 	* @property {Style} Style - The Style class
 	* @memberof Lucid
 	*/
	Style: require('./lib/api/Style'),
	/**
 	* @property {Tiles} Tiles - The Tiles class
 	* @memberof Lucid
 	*/
	Tiles: require('./lib/api/Tiles'),
	/**
 	* @property {Chapter} Chapter - The Chapter class
 	* @memberof Lucid
 	*/
	Chapter: require('./lib/api/Chapter'),
	/**
 	* @property {Map} Map - The Map class
 	* @memberof Lucid
 	*/
	Map: require('./lib/api/Map'),
	/**
 	* @property {Mod} Mod - The Mod class
 	* @memberof Lucid
 	*/
	Mod: require('./lib/api/Mod'),
	/**
 	* @property {Room} Room - The Room class
 	* @memberof Lucid
 	*/
	Room: require('./lib/api/Room'),
	/**
 	* @property {Side} Side - The Side class
 	* @memberof Lucid
 	*/
	Side: require('./lib/api/Side')
};

/**
 * @namespace Entity
 * @memberof Lucid
 */
Lucid.Entity = {
	/**
 	* @property {BadelineBoost} BadelineBoost - The BadelineBoost class
 	* @memberof Lucid.Entity
 	*/
	BadelineBoost: require('./lib/api/entities/BadelineBoost'),
	/**
 	* @property {BigSpinner} BigSpinner - The BigSpinner class
 	* @memberof Lucid.Entity
 	*/
	BigSpinner: require('./lib/api/entities/BigSpinner'),
	/**
 	* @property {BigWaterfall} BigWaterfall - The BigWaterfall class
 	* @memberof Lucid.Entity
 	*/
	BigWaterfall: require('./lib/api/entities/BigWaterfall'),
	/**
 	* @property {Bird} Bird - The Bird class
 	* @memberof Lucid.Entity
 	*/
	Bird: require('./lib/api/entities/Bird'),
	/**
 	* @property {BirdForsakenCityGem} BirdForsakenCityGem - The BirdForsakenCityGem class
 	* @memberof Lucid.Entity
 	*/
	BirdForsakenCityGem: require('./lib/api/entities/BirdForsakenCityGem'),
	/**
 	* @property {BirdPath} BirdPath - The BirdPath class
 	* @memberof Lucid.Entity
 	*/
	BirdPath: require('./lib/api/entities/BirdPath'),
	/**
 	* @property {BlackGem} BlackGem - The BlackGem class
 	* @memberof Lucid.Entity
 	*/
	BlackGem: require('./lib/api/entities/BlackGem'),
	/**
 	* @property {BlockField} BlockField - The BlockField class
 	* @memberof Lucid.Entity
 	*/
	BlockField: require('./lib/api/entities/BlockField'),
	/**
 	* @property {Bonfire} Bonfire - The Bonfire class
 	* @memberof Lucid.Entity
 	*/
	Bonfire: require('./lib/api/entities/Bonfire'),
	/**
 	* @property {Booster} Booster - The Booster class
 	* @memberof Lucid.Entity
 	*/
	Booster: require('./lib/api/entities/Booster'),
	/**
 	* @property {BounceBlock} BounceBlock - The BounceBlock class
 	* @memberof Lucid.Entity
 	*/
	BounceBlock: require('./lib/api/entities/BounceBlock'),
	/**
 	* @property {Bridge} Bridge - The Bridge class
 	* @memberof Lucid.Entity
 	*/
	Bridge: require('./lib/api/entities/Bridge'),
	/**
 	* @property {BridgeFixed} BridgeFixed - The BridgeFixed class
 	* @memberof Lucid.Entity
 	*/
	BridgeFixed: require('./lib/api/entities/BridgeFixed'),
	/**
 	* @property {Cassette} Cassette - The Cassette class
 	* @memberof Lucid.Entity
 	*/
	Cassette: require('./lib/api/entities/Cassette'),
	/**
 	* @property {CassetteBlock} CassetteBlock - The CassetteBlock class
 	* @memberof Lucid.Entity
 	*/
	CassetteBlock: require('./lib/api/entities/CassetteBlock'),
	/**
 	* @property {ChaserBarrier} ChaserBarrier - The ChaserBarrier class
 	* @memberof Lucid.Entity
 	*/
	ChaserBarrier: require('./lib/api/entities/ChaserBarrier'),
	/**
 	* @property {Checkpoint} Checkpoint - The Checkpoint class
 	* @memberof Lucid.Entity
 	*/
	Checkpoint: require('./lib/api/entities/Checkpoint'),
	/**
 	* @property {Cliffflag} Cliffflag - The Cliffflag class
 	* @memberof Lucid.Entity
 	*/
	Cliffflag: require('./lib/api/entities/Cliffflag'),
	/**
 	* @property {CliffsideFlag} CliffsideFlag - The CliffsideFlag class
 	* @memberof Lucid.Entity
 	*/
	CliffsideFlag: require('./lib/api/entities/CliffsideFlag'),
	/**
 	* @property {Clothesline} Clothesline - The Clothesline class
 	* @memberof Lucid.Entity
 	*/
	Clothesline: require('./lib/api/entities/Clothesline'),
	/**
 	* @property {Cloud} Cloud - The Cloud class
 	* @memberof Lucid.Entity
 	*/
	Cloud: require('./lib/api/entities/Cloud'),
	/**
 	* @property {ClutterCabinet} ClutterCabinet - The ClutterCabinet class
 	* @memberof Lucid.Entity
 	*/
	ClutterCabinet: require('./lib/api/entities/ClutterCabinet'),
	/**
 	* @property {ClutterDoor} ClutterDoor - The ClutterDoor class
 	* @memberof Lucid.Entity
 	*/
	ClutterDoor: require('./lib/api/entities/ClutterDoor'),
	/**
 	* @property {Cobweb} Cobweb - The Cobweb class
 	* @memberof Lucid.Entity
 	*/
	Cobweb: require('./lib/api/entities/Cobweb'),
	/**
 	* @property {ColorSwitch} ColorSwitch - The ColorSwitch class
 	* @memberof Lucid.Entity
 	*/
	ColorSwitch: require('./lib/api/entities/ColorSwitch'),
	/**
 	* @property {ConditionBlock} ConditionBlock - The ConditionBlock class
 	* @memberof Lucid.Entity
 	*/
	ConditionBlock: require('./lib/api/entities/ConditionBlock'),
	/**
 	* @property {CoreMessage} CoreMessage - The CoreMessage class
 	* @memberof Lucid.Entity
 	*/
	CoreMessage: require('./lib/api/entities/CoreMessage'),
	/**
 	* @property {CoreModeToggle} CoreModeToggle - The CoreModeToggle class
 	* @memberof Lucid.Entity
 	*/
	CoreModeToggle: require('./lib/api/entities/CoreModeToggle'),
	/**
 	* @property {CoverupWall} CoverupWall - The CoverupWall class
 	* @memberof Lucid.Entity
 	*/
	CoverupWall: require('./lib/api/entities/CoverupWall'),
	/**
 	* @property {CrumbleBlock} CrumbleBlock - The CrumbleBlock class
 	* @memberof Lucid.Entity
 	*/
	CrumbleBlock: require('./lib/api/entities/CrumbleBlock'),
	/**
 	* @property {CrumbleWallOnRumble} CrumbleWallOnRumble - The CrumbleWallOnRumble class
 	* @memberof Lucid.Entity
 	*/
	CrumbleWallOnRumble: require('./lib/api/entities/CrumbleWallOnRumble'),
	/**
 	* @property {CrushBlock} CrushBlock - The CrushBlock class
 	* @memberof Lucid.Entity
 	*/
	CrushBlock: require('./lib/api/entities/CrushBlock'),
	/**
 	* @property {CutsceneNode} CutsceneNode - The CutsceneNode class
 	* @memberof Lucid.Entity
 	*/
	CutsceneNode: require('./lib/api/entities/CutsceneNode'),
	/**
 	* @property {DarkChaser} DarkChaser - The DarkChaser class
 	* @memberof Lucid.Entity
 	*/
	DarkChaser: require('./lib/api/entities/DarkChaser'),
	/**
 	* @property {DashBlock} DashBlock - The DashBlock class
 	* @memberof Lucid.Entity
 	*/
	DashBlock: require('./lib/api/entities/DashBlock'),
	/**
 	* @property {DashSwitchH} DashSwitchH - The DashSwitchH class
 	* @memberof Lucid.Entity
 	*/
	DashSwitchH: require('./lib/api/entities/DashSwitchH'),
	/**
 	* @property {DashSwitchV} DashSwitchV - The DashSwitchV class
 	* @memberof Lucid.Entity
 	*/
	DashSwitchV: require('./lib/api/entities/DashSwitchV'),
	/**
 	* @property {Door} Door - The Door class
 	* @memberof Lucid.Entity
 	*/
	Door: require('./lib/api/entities/Door'),
	/**
 	* @property {DreamBlock} DreamBlock - The DreamBlock class
 	* @memberof Lucid.Entity
 	*/
	DreamBlock: require('./lib/api/entities/DreamBlock'),
	/**
 	* @property {DreamHeartGem} DreamHeartGem - The DreamHeartGem class
 	* @memberof Lucid.Entity
 	*/
	DreamHeartGem: require('./lib/api/entities/DreamHeartGem'),
	/**
 	* @property {Dreammirror} Dreammirror - The Dreammirror class
 	* @memberof Lucid.Entity
 	*/
	Dreammirror: require('./lib/api/entities/Dreammirror'),
	/**
 	* @property {ExitBlock} ExitBlock - The ExitBlock class
 	* @memberof Lucid.Entity
 	*/
	ExitBlock: require('./lib/api/entities/ExitBlock'),
	/**
 	* @property {Eyebomb} Eyebomb - The Eyebomb class
 	* @memberof Lucid.Entity
 	*/
	Eyebomb: require('./lib/api/entities/Eyebomb'),
	/**
 	* @property {FakeBlock} FakeBlock - The FakeBlock class
 	* @memberof Lucid.Entity
 	*/
	FakeBlock: require('./lib/api/entities/FakeBlock'),
	/**
 	* @property {FakeHeart} FakeHeart - The FakeHeart class
 	* @memberof Lucid.Entity
 	*/
	FakeHeart: require('./lib/api/entities/FakeHeart'),
	/**
 	* @property {FakeWall} FakeWall - The FakeWall class
 	* @memberof Lucid.Entity
 	*/
	FakeWall: require('./lib/api/entities/FakeWall'),
	/**
 	* @property {FallingBlock} FallingBlock - The FallingBlock class
 	* @memberof Lucid.Entity
 	*/
	FallingBlock: require('./lib/api/entities/FallingBlock'),
	/**
 	* @property {FinalBoss} FinalBoss - The FinalBoss class
 	* @memberof Lucid.Entity
 	*/
	FinalBoss: require('./lib/api/entities/FinalBoss'),
	/**
 	* @property {FinalBossFallingBlock} FinalBossFallingBlock - The FinalBossFallingBlock class
 	* @memberof Lucid.Entity
 	*/
	FinalBossFallingBlock: require('./lib/api/entities/FinalBossFallingBlock'),
	/**
 	* @property {FinalBossMovingBlock} FinalBossMovingBlock - The FinalBossMovingBlock class
 	* @memberof Lucid.Entity
 	*/
	FinalBossMovingBlock: require('./lib/api/entities/FinalBossMovingBlock'),
	/**
 	* @property {FireBall} FireBall - The FireBall class
 	* @memberof Lucid.Entity
 	*/
	FireBall: require('./lib/api/entities/FireBall'),
	/**
 	* @property {FireBarrier} FireBarrier - The FireBarrier class
 	* @memberof Lucid.Entity
 	*/
	FireBarrier: require('./lib/api/entities/FireBarrier'),
	/**
 	* @property {FlingBird} FlingBird - The FlingBird class
 	* @memberof Lucid.Entity
 	*/
	FlingBird: require('./lib/api/entities/FlingBird'),
	/**
 	* @property {FlingBirdIntro} FlingBirdIntro - The FlingBirdIntro class
 	* @memberof Lucid.Entity
 	*/
	FlingBirdIntro: require('./lib/api/entities/FlingBirdIntro'),
	/**
 	* @property {FloatingDebris} FloatingDebris - The FloatingDebris class
 	* @memberof Lucid.Entity
 	*/
	FloatingDebris: require('./lib/api/entities/FloatingDebris'),
	/**
 	* @property {FloatySpaceBlock} FloatySpaceBlock - The FloatySpaceBlock class
 	* @memberof Lucid.Entity
 	*/
	FloatySpaceBlock: require('./lib/api/entities/FloatySpaceBlock'),
	/**
 	* @property {Flutterbird} Flutterbird - The Flutterbird class
 	* @memberof Lucid.Entity
 	*/
	Flutterbird: require('./lib/api/entities/Flutterbird'),
	/**
 	* @property {ForegroundDebris} ForegroundDebris - The ForegroundDebris class
 	* @memberof Lucid.Entity
 	*/
	ForegroundDebris: require('./lib/api/entities/ForegroundDebris'),
	/**
 	* @property {FriendlyGhost} FriendlyGhost - The FriendlyGhost class
 	* @memberof Lucid.Entity
 	*/
	FriendlyGhost: require('./lib/api/entities/FriendlyGhost'),
	/**
 	* @property {GlassBlock} GlassBlock - The GlassBlock class
 	* @memberof Lucid.Entity
 	*/
	GlassBlock: require('./lib/api/entities/GlassBlock'),
	/**
 	* @property {Glider} Glider - The Glider class
 	* @memberof Lucid.Entity
 	*/
	Glider: require('./lib/api/entities/Glider'),
	/**
 	* @property {GoldenBerry} GoldenBerry - The GoldenBerry class
 	* @memberof Lucid.Entity
 	*/
	GoldenBerry: require('./lib/api/entities/GoldenBerry'),
	/**
 	* @property {GoldenBlock} GoldenBlock - The GoldenBlock class
 	* @memberof Lucid.Entity
 	*/
	GoldenBlock: require('./lib/api/entities/GoldenBlock'),
	/**
 	* @property {Gondola} Gondola - The Gondola class
 	* @memberof Lucid.Entity
 	*/
	Gondola: require('./lib/api/entities/Gondola'),
	/**
 	* @property {GreenBlocks} GreenBlocks - The GreenBlocks class
 	* @memberof Lucid.Entity
 	*/
	GreenBlocks: require('./lib/api/entities/GreenBlocks'),
	/**
 	* @property {Hahaha} Hahaha - The Hahaha class
 	* @memberof Lucid.Entity
 	*/
	Hahaha: require('./lib/api/entities/Hahaha'),
	/**
 	* @property {Hanginglamp} Hanginglamp - The Hanginglamp class
 	* @memberof Lucid.Entity
 	*/
	Hanginglamp: require('./lib/api/entities/Hanginglamp'),
	/**
 	* @property {HeartGemDoor} HeartGemDoor - The HeartGemDoor class
 	* @memberof Lucid.Entity
 	*/
	HeartGemDoor: require('./lib/api/entities/HeartGemDoor'),
	/**
 	* @property {IceBlock} IceBlock - The IceBlock class
 	* @memberof Lucid.Entity
 	*/
	IceBlock: require('./lib/api/entities/IceBlock'),
	/**
 	* @property {InfiniteStar} InfiniteStar - The InfiniteStar class
 	* @memberof Lucid.Entity
 	*/
	InfiniteStar: require('./lib/api/entities/InfiniteStar'),
	/**
 	* @property {IntroCar} IntroCar - The IntroCar class
 	* @memberof Lucid.Entity
 	*/
	IntroCar: require('./lib/api/entities/IntroCar'),
	/**
 	* @property {IntroCrusher} IntroCrusher - The IntroCrusher class
 	* @memberof Lucid.Entity
 	*/
	IntroCrusher: require('./lib/api/entities/IntroCrusher'),
	/**
 	* @property {InvisibleBarrier} InvisibleBarrier - The InvisibleBarrier class
 	* @memberof Lucid.Entity
 	*/
	InvisibleBarrier: require('./lib/api/entities/InvisibleBarrier'),
	/**
 	* @property {JumpThru} JumpThru - The JumpThru class
 	* @memberof Lucid.Entity
 	*/
	JumpThru: require('./lib/api/entities/JumpThru'),
	/**
 	* @property {KevinsPc} KevinsPc - The KevinsPc class
 	* @memberof Lucid.Entity
 	*/
	KevinsPc: require('./lib/api/entities/KevinsPc'),
	/**
 	* @property {Key} Key - The Key class
 	* @memberof Lucid.Entity
 	*/
	Key: require('./lib/api/entities/Key'),
	/**
 	* @property {Killbox} Killbox - The Killbox class
 	* @memberof Lucid.Entity
 	*/
	Killbox: require('./lib/api/entities/Killbox'),
	/**
 	* @property {Lamp} Lamp - The Lamp class
 	* @memberof Lucid.Entity
 	*/
	Lamp: require('./lib/api/entities/Lamp'),
	/**
 	* @property {Light} Light - The Light class
 	* @memberof Lucid.Entity
 	*/
	Light: require('./lib/api/entities/Light'),
	/**
 	* @property {Lightbeam} Lightbeam - The Lightbeam class
 	* @memberof Lucid.Entity
 	*/
	Lightbeam: require('./lib/api/entities/Lightbeam'),
	/**
 	* @property {Lightning} Lightning - The Lightning class
 	* @memberof Lucid.Entity
 	*/
	Lightning: require('./lib/api/entities/Lightning'),
	/**
 	* @property {LightningBlock} LightningBlock - The LightningBlock class
 	* @memberof Lucid.Entity
 	*/
	LightningBlock: require('./lib/api/entities/LightningBlock'),
	/**
 	* @property {LockBlock} LockBlock - The LockBlock class
 	* @memberof Lucid.Entity
 	*/
	LockBlock: require('./lib/api/entities/LockBlock'),
	/**
 	* @property {Memorial} Memorial - The Memorial class
 	* @memberof Lucid.Entity
 	*/
	Memorial: require('./lib/api/entities/Memorial'),
	/**
 	* @property {MemorialTextController} MemorialTextController - The MemorialTextController class
 	* @memberof Lucid.Entity
 	*/
	MemorialTextController: require('./lib/api/entities/MemorialTextController'),
	/**
 	* @property {MoonCreature} MoonCreature - The MoonCreature class
 	* @memberof Lucid.Entity
 	*/
	MoonCreature: require('./lib/api/entities/MoonCreature'),
	/**
 	* @property {MoveBlock} MoveBlock - The MoveBlock class
 	* @memberof Lucid.Entity
 	*/
	MoveBlock: require('./lib/api/entities/MoveBlock'),
	/**
 	* @property {MovingPlatform} MovingPlatform - The MovingPlatform class
 	* @memberof Lucid.Entity
 	*/
	MovingPlatform: require('./lib/api/entities/MovingPlatform'),
	/**
 	* @property {NegaBlock} NegaBlock - The NegaBlock class
 	* @memberof Lucid.Entity
 	*/
	NegaBlock: require('./lib/api/entities/NegaBlock'),
	/**
 	* @property {Npc} Npc - The Npc class
 	* @memberof Lucid.Entity
 	*/
	Npc: require('./lib/api/entities/Npc'),
	/**
 	* @property {Oshirodoor} Oshirodoor - The Oshirodoor class
 	* @memberof Lucid.Entity
 	*/
	Oshirodoor: require('./lib/api/entities/Oshirodoor'),
	/**
 	* @property {Payphone} Payphone - The Payphone class
 	* @memberof Lucid.Entity
 	*/
	Payphone: require('./lib/api/entities/Payphone'),
	/**
 	* @property {Picoconsole} Picoconsole - The Picoconsole class
 	* @memberof Lucid.Entity
 	*/
	Picoconsole: require('./lib/api/entities/Picoconsole'),
	/**
 	* @property {Plateau} Plateau - The Plateau class
 	* @memberof Lucid.Entity
 	*/
	Plateau: require('./lib/api/entities/Plateau'),
	/**
 	* @property {PlaybackBillboard} PlaybackBillboard - The PlaybackBillboard class
 	* @memberof Lucid.Entity
 	*/
	PlaybackBillboard: require('./lib/api/entities/PlaybackBillboard'),
	/**
 	* @property {PlaybackTutorial} PlaybackTutorial - The PlaybackTutorial class
 	* @memberof Lucid.Entity
 	*/
	PlaybackTutorial: require('./lib/api/entities/PlaybackTutorial'),
	/**
 	* @property {Player} Player - The Player class
 	* @memberof Lucid.Entity
 	*/
	Player: require('./lib/api/entities/Player'),
	/**
 	* @property {PlayerSeeker} PlayerSeeker - The PlayerSeeker class
 	* @memberof Lucid.Entity
 	*/
	PlayerSeeker: require('./lib/api/entities/PlayerSeeker'),
	/**
 	* @property {RedBlocks} RedBlocks - The RedBlocks class
 	* @memberof Lucid.Entity
 	*/
	RedBlocks: require('./lib/api/entities/RedBlocks'),
	/**
 	* @property {Refill} Refill - The Refill class
 	* @memberof Lucid.Entity
 	*/
	Refill: require('./lib/api/entities/Refill'),
	/**
 	* @property {ReflectionHeartStatue} ReflectionHeartStatue - The ReflectionHeartStatue class
 	* @memberof Lucid.Entity
 	*/
	ReflectionHeartStatue: require('./lib/api/entities/ReflectionHeartStatue'),
	/**
 	* @property {ResortLantern} ResortLantern - The ResortLantern class
 	* @memberof Lucid.Entity
 	*/
	ResortLantern: require('./lib/api/entities/ResortLantern'),
	/**
 	* @property {ResortRoofEnding} ResortRoofEnding - The ResortRoofEnding class
 	* @memberof Lucid.Entity
 	*/
	ResortRoofEnding: require('./lib/api/entities/ResortRoofEnding'),
	/**
 	* @property {Resortmirror} Resortmirror - The Resortmirror class
 	* @memberof Lucid.Entity
 	*/
	Resortmirror: require('./lib/api/entities/Resortmirror'),
	/**
 	* @property {RidgeGate} RidgeGate - The RidgeGate class
 	* @memberof Lucid.Entity
 	*/
	RidgeGate: require('./lib/api/entities/RidgeGate'),
	/**
 	* @property {RisingLava} RisingLava - The RisingLava class
 	* @memberof Lucid.Entity
 	*/
	RisingLava: require('./lib/api/entities/RisingLava'),
	/**
 	* @property {RotateSpinner} RotateSpinner - The RotateSpinner class
 	* @memberof Lucid.Entity
 	*/
	RotateSpinner: require('./lib/api/entities/RotateSpinner'),
	/**
 	* @property {RotatingPlatforms} RotatingPlatforms - The RotatingPlatforms class
 	* @memberof Lucid.Entity
 	*/
	RotatingPlatforms: require('./lib/api/entities/RotatingPlatforms'),
	/**
 	* @property {SandwichLava} SandwichLava - The SandwichLava class
 	* @memberof Lucid.Entity
 	*/
	SandwichLava: require('./lib/api/entities/SandwichLava'),
	/**
 	* @property {Seeker} Seeker - The Seeker class
 	* @memberof Lucid.Entity
 	*/
	Seeker: require('./lib/api/entities/Seeker'),
	/**
 	* @property {SeekerBarrier} SeekerBarrier - The SeekerBarrier class
 	* @memberof Lucid.Entity
 	*/
	SeekerBarrier: require('./lib/api/entities/SeekerBarrier'),
	/**
 	* @property {SeekerStatue} SeekerStatue - The SeekerStatue class
 	* @memberof Lucid.Entity
 	*/
	SeekerStatue: require('./lib/api/entities/SeekerStatue'),
	/**
 	* @property {SinkingPlatform} SinkingPlatform - The SinkingPlatform class
 	* @memberof Lucid.Entity
 	*/
	SinkingPlatform: require('./lib/api/entities/SinkingPlatform'),
	/**
 	* @property {Slider} Slider - The Slider class
 	* @memberof Lucid.Entity
 	*/
	Slider: require('./lib/api/entities/Slider'),
	/**
 	* @property {SoundSource} SoundSource - The SoundSource class
 	* @memberof Lucid.Entity
 	*/
	SoundSource: require('./lib/api/entities/SoundSource'),
	/**
 	* @property {SoundTest3D} SoundTest3D - The SoundTest3D class
 	* @memberof Lucid.Entity
 	*/
	SoundTest3D: require('./lib/api/entities/SoundTest3D'),
	/**
 	* @property {SpikesDown} SpikesDown - The SpikesDown class
 	* @memberof Lucid.Entity
 	*/
	SpikesDown: require('./lib/api/entities/SpikesDown'),
	/**
 	* @property {SpikesLeft} SpikesLeft - The SpikesLeft class
 	* @memberof Lucid.Entity
 	*/
	SpikesLeft: require('./lib/api/entities/SpikesLeft'),
	/**
 	* @property {SpikesRight} SpikesRight - The SpikesRight class
 	* @memberof Lucid.Entity
 	*/
	SpikesRight: require('./lib/api/entities/SpikesRight'),
	/**
 	* @property {SpikesUp} SpikesUp - The SpikesUp class
 	* @memberof Lucid.Entity
 	*/
	SpikesUp: require('./lib/api/entities/SpikesUp'),
	/**
 	* @property {Spinner} Spinner - The Spinner class
 	* @memberof Lucid.Entity
 	*/
	Spinner: require('./lib/api/entities/Spinner'),
	/**
 	* @property {Spring} Spring - The Spring class
 	* @memberof Lucid.Entity
 	*/
	Spring: require('./lib/api/entities/Spring'),
	/**
 	* @property {StarClimbController} StarClimbController - The StarClimbController class
 	* @memberof Lucid.Entity
 	*/
	StarClimbController: require('./lib/api/entities/StarClimbController'),
	/**
 	* @property {StarJumpBlock} StarJumpBlock - The StarJumpBlock class
 	* @memberof Lucid.Entity
 	*/
	StarJumpBlock: require('./lib/api/entities/StarJumpBlock'),
	/**
 	* @property {Strawberry} Strawberry - The Strawberry class
 	* @memberof Lucid.Entity
 	*/
	Strawberry: require('./lib/api/entities/Strawberry'),
	/**
 	* @property {SummitBackgroundManager} SummitBackgroundManager - The SummitBackgroundManager class
 	* @memberof Lucid.Entity
 	*/
	SummitBackgroundManager: require('./lib/api/entities/SummitBackgroundManager'),
	/**
 	* @property {SummitGemManager} SummitGemManager - The SummitGemManager class
 	* @memberof Lucid.Entity
 	*/
	SummitGemManager: require('./lib/api/entities/SummitGemManager'),
	/**
 	* @property {Summitcheckpoint} Summitcheckpoint - The Summitcheckpoint class
 	* @memberof Lucid.Entity
 	*/
	Summitcheckpoint: require('./lib/api/entities/Summitcheckpoint'),
	/**
 	* @property {Summitcloud} Summitcloud - The Summitcloud class
 	* @memberof Lucid.Entity
 	*/
	Summitcloud: require('./lib/api/entities/Summitcloud'),
	/**
 	* @property {Summitgem} Summitgem - The Summitgem class
 	* @memberof Lucid.Entity
 	*/
	Summitgem: require('./lib/api/entities/Summitgem'),
	/**
 	* @property {SwapBlock} SwapBlock - The SwapBlock class
 	* @memberof Lucid.Entity
 	*/
	SwapBlock: require('./lib/api/entities/SwapBlock'),
	/**
 	* @property {SwitchBlock} SwitchBlock - The SwitchBlock class
 	* @memberof Lucid.Entity
 	*/
	SwitchBlock: require('./lib/api/entities/SwitchBlock'),
	/**
 	* @property {SwitchGate} SwitchGate - The SwitchGate class
 	* @memberof Lucid.Entity
 	*/
	SwitchGate: require('./lib/api/entities/SwitchGate'),
	/**
 	* @property {TempleBigEyeball} TempleBigEyeball - The TempleBigEyeball class
 	* @memberof Lucid.Entity
 	*/
	TempleBigEyeball: require('./lib/api/entities/TempleBigEyeball'),
	/**
 	* @property {TempleCrackedBlock} TempleCrackedBlock - The TempleCrackedBlock class
 	* @memberof Lucid.Entity
 	*/
	TempleCrackedBlock: require('./lib/api/entities/TempleCrackedBlock'),
	/**
 	* @property {TempleEye} TempleEye - The TempleEye class
 	* @memberof Lucid.Entity
 	*/
	TempleEye: require('./lib/api/entities/TempleEye'),
	/**
 	* @property {TempleGate} TempleGate - The TempleGate class
 	* @memberof Lucid.Entity
 	*/
	TempleGate: require('./lib/api/entities/TempleGate'),
	/**
 	* @property {TempleMirror} TempleMirror - The TempleMirror class
 	* @memberof Lucid.Entity
 	*/
	TempleMirror: require('./lib/api/entities/TempleMirror'),
	/**
 	* @property {TempleMirrorPortal} TempleMirrorPortal - The TempleMirrorPortal class
 	* @memberof Lucid.Entity
 	*/
	TempleMirrorPortal: require('./lib/api/entities/TempleMirrorPortal'),
	/**
 	* @property {Tentacles} Tentacles - The Tentacles class
 	* @memberof Lucid.Entity
 	*/
	Tentacles: require('./lib/api/entities/Tentacles'),
	/**
 	* @property {TheoCrystal} TheoCrystal - The TheoCrystal class
 	* @memberof Lucid.Entity
 	*/
	TheoCrystal: require('./lib/api/entities/TheoCrystal'),
	/**
 	* @property {TheoCrystalPedestal} TheoCrystalPedestal - The TheoCrystalPedestal class
 	* @memberof Lucid.Entity
 	*/
	TheoCrystalPedestal: require('./lib/api/entities/TheoCrystalPedestal'),
	/**
 	* @property {Torch} Torch - The Torch class
 	* @memberof Lucid.Entity
 	*/
	Torch: require('./lib/api/entities/Torch'),
	/**
 	* @property {TouchSwitch} TouchSwitch - The TouchSwitch class
 	* @memberof Lucid.Entity
 	*/
	TouchSwitch: require('./lib/api/entities/TouchSwitch'),
	/**
 	* @property {Towerviewer} Towerviewer - The Towerviewer class
 	* @memberof Lucid.Entity
 	*/
	Towerviewer: require('./lib/api/entities/Towerviewer'),
	/**
 	* @property {TrackSpinner} TrackSpinner - The TrackSpinner class
 	* @memberof Lucid.Entity
 	*/
	TrackSpinner: require('./lib/api/entities/TrackSpinner'),
	/**
 	* @property {Trapdoor} Trapdoor - The Trapdoor class
 	* @memberof Lucid.Entity
 	*/
	Trapdoor: require('./lib/api/entities/Trapdoor'),
	/**
 	* @property {TriggerSpikesDown} TriggerSpikesDown - The TriggerSpikesDown class
 	* @memberof Lucid.Entity
 	*/
	TriggerSpikesDown: require('./lib/api/entities/TriggerSpikesDown'),
	/**
 	* @property {TriggerSpikesLeft} TriggerSpikesLeft - The TriggerSpikesLeft class
 	* @memberof Lucid.Entity
 	*/
	TriggerSpikesLeft: require('./lib/api/entities/TriggerSpikesLeft'),
	/**
 	* @property {TriggerSpikesRight} TriggerSpikesRight - The TriggerSpikesRight class
 	* @memberof Lucid.Entity
 	*/
	TriggerSpikesRight: require('./lib/api/entities/TriggerSpikesRight'),
	/**
 	* @property {TriggerSpikesUp} TriggerSpikesUp - The TriggerSpikesUp class
 	* @memberof Lucid.Entity
 	*/
	TriggerSpikesUp: require('./lib/api/entities/TriggerSpikesUp'),
	/**
 	* @property {WallBooster} WallBooster - The WallBooster class
 	* @memberof Lucid.Entity
 	*/
	WallBooster: require('./lib/api/entities/WallBooster'),
	/**
 	* @property {WallSpringLeft} WallSpringLeft - The WallSpringLeft class
 	* @memberof Lucid.Entity
 	*/
	WallSpringLeft: require('./lib/api/entities/WallSpringLeft'),
	/**
 	* @property {WallSpringRight} WallSpringRight - The WallSpringRight class
 	* @memberof Lucid.Entity
 	*/
	WallSpringRight: require('./lib/api/entities/WallSpringRight'),
	/**
 	* @property {Water} Water - The Water class
 	* @memberof Lucid.Entity
 	*/
	Water: require('./lib/api/entities/Water'),
	/**
 	* @property {Waterfall} Waterfall - The Waterfall class
 	* @memberof Lucid.Entity
 	*/
	Waterfall: require('./lib/api/entities/Waterfall'),
	/**
 	* @property {Wavedashmachine} Wavedashmachine - The Wavedashmachine class
 	* @memberof Lucid.Entity
 	*/
	Wavedashmachine: require('./lib/api/entities/Wavedashmachine'),
	/**
 	* @property {Whiteblock} Whiteblock - The Whiteblock class
 	* @memberof Lucid.Entity
 	*/
	Whiteblock: require('./lib/api/entities/Whiteblock'),
	/**
 	* @property {Wire} Wire - The Wire class
 	* @memberof Lucid.Entity
 	*/
	Wire: require('./lib/api/entities/Wire'),
	/**
 	* @property {YellowBlocks} YellowBlocks - The YellowBlocks class
 	* @memberof Lucid.Entity
 	*/
	YellowBlocks: require('./lib/api/entities/YellowBlocks'),
	/**
 	* @property {ZipMover} ZipMover - The ZipMover class
 	* @memberof Lucid.Entity
 	*/
	ZipMover: require('./lib/api/entities/ZipMover')
};

/**
 * @namespace Trigger
 * @memberof Lucid
 */
Lucid.Trigger = {
	/**
 	* @property {AltMusicTrigger} AltMusicTrigger - The AltMusicTrigger class
 	* @memberof Lucid.Trigger
 	*/
	AltMusicTrigger: require('./lib/api/triggers/AltMusicTrigger'),
	/**
 	* @property {AmbienceParamTrigger} AmbienceParamTrigger - The AmbienceParamTrigger class
 	* @memberof Lucid.Trigger
 	*/
	AmbienceParamTrigger: require('./lib/api/triggers/AmbienceParamTrigger'),
	/**
 	* @property {BirdPathTrigger} BirdPathTrigger - The BirdPathTrigger class
 	* @memberof Lucid.Trigger
 	*/
	BirdPathTrigger: require('./lib/api/triggers/BirdPathTrigger'),
	/**
 	* @property {BlackholeStrength} BlackholeStrength - The BlackholeStrength class
 	* @memberof Lucid.Trigger
 	*/
	BlackholeStrength: require('./lib/api/triggers/BlackholeStrength'),
	/**
 	* @property {BloomFadeTrigger} BloomFadeTrigger - The BloomFadeTrigger class
 	* @memberof Lucid.Trigger
 	*/
	BloomFadeTrigger: require('./lib/api/triggers/BloomFadeTrigger'),
	/**
 	* @property {CameraAdvanceTargetTrigger} CameraAdvanceTargetTrigger - The CameraAdvanceTargetTrigger class
 	* @memberof Lucid.Trigger
 	*/
	CameraAdvanceTargetTrigger: require('./lib/api/triggers/CameraAdvanceTargetTrigger'),
	/**
 	* @property {CameraOffsetTrigger} CameraOffsetTrigger - The CameraOffsetTrigger class
 	* @memberof Lucid.Trigger
 	*/
	CameraOffsetTrigger: require('./lib/api/triggers/CameraOffsetTrigger'),
	/**
 	* @property {CameraTargetTrigger} CameraTargetTrigger - The CameraTargetTrigger class
 	* @memberof Lucid.Trigger
 	*/
	CameraTargetTrigger: require('./lib/api/triggers/CameraTargetTrigger'),
	/**
 	* @property {ChangeRespawnTrigger} ChangeRespawnTrigger - The ChangeRespawnTrigger class
 	* @memberof Lucid.Trigger
 	*/
	ChangeRespawnTrigger: require('./lib/api/triggers/ChangeRespawnTrigger'),
	/**
 	* @property {CheckpointBlockerTrigger} CheckpointBlockerTrigger - The CheckpointBlockerTrigger class
 	* @memberof Lucid.Trigger
 	*/
	CheckpointBlockerTrigger: require('./lib/api/triggers/CheckpointBlockerTrigger'),
	/**
 	* @property {CreditsTrigger} CreditsTrigger - The CreditsTrigger class
 	* @memberof Lucid.Trigger
 	*/
	CreditsTrigger: require('./lib/api/triggers/CreditsTrigger'),
	/**
 	* @property {DetachFollowersTrigger} DetachFollowersTrigger - The DetachFollowersTrigger class
 	* @memberof Lucid.Trigger
 	*/
	DetachFollowersTrigger: require('./lib/api/triggers/DetachFollowersTrigger'),
	/**
 	* @property {EventTrigger} EventTrigger - The EventTrigger class
 	* @memberof Lucid.Trigger
 	*/
	EventTrigger: require('./lib/api/triggers/EventTrigger'),
	/**
 	* @property {GoldenBerryCollectTrigger} GoldenBerryCollectTrigger - The GoldenBerryCollectTrigger class
 	* @memberof Lucid.Trigger
 	*/
	GoldenBerryCollectTrigger: require('./lib/api/triggers/GoldenBerryCollectTrigger'),
	/**
 	* @property {InteractTrigger} InteractTrigger - The InteractTrigger class
 	* @memberof Lucid.Trigger
 	*/
	InteractTrigger: require('./lib/api/triggers/InteractTrigger'),
	/**
 	* @property {LightFadeTrigger} LightFadeTrigger - The LightFadeTrigger class
 	* @memberof Lucid.Trigger
 	*/
	LightFadeTrigger: require('./lib/api/triggers/LightFadeTrigger'),
	/**
 	* @property {LookoutBlocker} LookoutBlocker - The LookoutBlocker class
 	* @memberof Lucid.Trigger
 	*/
	LookoutBlocker: require('./lib/api/triggers/LookoutBlocker'),
	/**
 	* @property {MinitextboxTrigger} MinitextboxTrigger - The MinitextboxTrigger class
 	* @memberof Lucid.Trigger
 	*/
	MinitextboxTrigger: require('./lib/api/triggers/MinitextboxTrigger'),
	/**
 	* @property {MoonGlitchBackgroundTrigger} MoonGlitchBackgroundTrigger - The MoonGlitchBackgroundTrigger class
 	* @memberof Lucid.Trigger
 	*/
	MoonGlitchBackgroundTrigger: require('./lib/api/triggers/MoonGlitchBackgroundTrigger'),
	/**
 	* @property {MusicFadeTrigger} MusicFadeTrigger - The MusicFadeTrigger class
 	* @memberof Lucid.Trigger
 	*/
	MusicFadeTrigger: require('./lib/api/triggers/MusicFadeTrigger'),
	/**
 	* @property {MusicTrigger} MusicTrigger - The MusicTrigger class
 	* @memberof Lucid.Trigger
 	*/
	MusicTrigger: require('./lib/api/triggers/MusicTrigger'),
	/**
 	* @property {NoRefillTrigger} NoRefillTrigger - The NoRefillTrigger class
 	* @memberof Lucid.Trigger
 	*/
	NoRefillTrigger: require('./lib/api/triggers/NoRefillTrigger'),
	/**
 	* @property {OshiroTrigger} OshiroTrigger - The OshiroTrigger class
 	* @memberof Lucid.Trigger
 	*/
	OshiroTrigger: require('./lib/api/triggers/OshiroTrigger'),
	/**
 	* @property {RespawnTargetTrigger} RespawnTargetTrigger - The RespawnTargetTrigger class
 	* @memberof Lucid.Trigger
 	*/
	RespawnTargetTrigger: require('./lib/api/triggers/RespawnTargetTrigger'),
	/**
 	* @property {RumbleTrigger} RumbleTrigger - The RumbleTrigger class
 	* @memberof Lucid.Trigger
 	*/
	RumbleTrigger: require('./lib/api/triggers/RumbleTrigger'),
	/**
 	* @property {SpawnFacingTrigger} SpawnFacingTrigger - The SpawnFacingTrigger class
 	* @memberof Lucid.Trigger
 	*/
	SpawnFacingTrigger: require('./lib/api/triggers/SpawnFacingTrigger'),
	/**
 	* @property {StopBoostTrigger} StopBoostTrigger - The StopBoostTrigger class
 	* @memberof Lucid.Trigger
 	*/
	StopBoostTrigger: require('./lib/api/triggers/StopBoostTrigger'),
	/**
 	* @property {WindAttackTrigger} WindAttackTrigger - The WindAttackTrigger class
 	* @memberof Lucid.Trigger
 	*/
	WindAttackTrigger: require('./lib/api/triggers/WindAttackTrigger')
};

Lucid.config.lucidDir = path.join(os.homedir(), '.lucid-dream');
if (!fs.existsSync(Lucid.config.lucidDir)) {
	fs.mkdirSync(Lucid.config.lucidDir);
}

module.exports = Lucid;
