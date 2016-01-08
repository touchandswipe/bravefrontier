/*hp,atk,def,rec,crit,spark,elemental,bbmod,ATKBuff*/
sphereList=[
	{name:"No Sphere",nick:"none",stats:[0,0,0,0,0,0,0,0,0]},
	{name:"Axe of Hadaron",nick:"axehadaron",stats:[0,0.2,0.2,0,0,0,0.3,0,2.8]},
	{name:"Amanohabaken",nick:"amanohabaken",stats:[0,0.75,0,0,0,0,0,0,0]},
	{name:"Amenonuhoko",nick:"amenonuhoko",stats:[0,1.5,1.5,0,1,0,0,0,0]},
	{name:"Batootha",nick:"batootha",stats:[0,0.3,0.3,0,0,0.5,0,0,0]},
	{name:"Blades of Ultor",nick:"bladeultor",stats:[0,0.3,0.3,0,1,0,0,0,0]},
	{name:"Blighted Seal",nick:"blightseal",stats:[0,1,-0.2,-0.2,1.5,0,0,0,0]},
	{name:"Bow of Andaria",nick:"bowandaria",stats:[0,0.3,0.3,0,0,0,0,1.5,0]},
	{name:"Brass Orb",nick:"brassorb",stats:[0,0.2,0.2,0,0,0,0,1.3,0]},
	{name:"Buffer Jewel",nick:"buffer",stats:[0.35,0.35,0.35,0.35,0,0,0,0,0]},
	{name:"Dandelga",nick:"dandelga",stats:[0.3,0.3,0,0,0,0,0,0,0]},
	{name:"Duel Fragment",nick:"duelfrag",stats:[0.3,0.3,0,0,0,0,0,0,0]},
	{name:"Fallacy Orb",nick:"fallacy",stats:[0.15,0.15,0.15,0.15,0,0,0,0,0]},
	{name:"Flag Flower",nick:"flagflow",stats:[0,0,0,0,0,1,0,0,0]},
	{name:"Forgebreaker",nick:"forgebreak",stats:[0.2,0.2,0.2,0.2,0,0,0,0,0]},
	{name:"Four Bonds",nick:"fourbonds",stats:[0,0,0,0,0,0.5,0,0,0]},
	{name:"Frozen Fantasy",nick:"ffantasy",stats:[0.3,0.3,0.4,0.4,0,0,0,0,0]},
	{name:"Frozen Myth",nick:"fmyth",stats:[0.2,0.2,0.3,0.3,0,0,0,0,0]},
	{name:"Geldnite Axe",nick:"geldnite",stats:[0,0,0,0,0.5,0,0,0,0]},
	{name:"Glacies Staff",nick:"glaciess",stats:[0.2,0.2,0.2,0.2,0,0,0,1,0]},
	{name:"Godly Flower",nick:"godflower",stats:[0,0,0.75,0.75,0,0.5,0,0,0.75]},
	{name:"Golem Core",nick:"golemcore",stats:[0,0.3,0.3,0,0,0,0,1.5,0]},
	{name:"Harp of Aurelia",nick:"harpaurelia",stats:[0,0,0,0,0,0,0,0,0]},
	{name:"Heavenly Bud",nick:"heavenbud",stats:[0,0,0,0,0,1,0,0,0]},
	{name:"Heresy Orb",nick:"heresy",stats:[0.15,0.15,0.15,0.15,0,0,0,0,0]},
	{name:"Holy Eight",nick:"holyeight",stats:[0,0.3,0.3,0,0.5,0,0,0,0]},
	{name:"Illusion Gizmo",nick:"illugizmo",stats:[0,0.3,0,0,0.5,0,0.5,0,0]},
	{name:"Impiety Orb",nick:"impiety",stats:[0.15,0.15,0.15,0.15,0,0,0,0,0]},
	{name:"Infidelity Orb",nick:"infidel",stats:[0.15,0.15,0.15,0.15,0,1,0,0,0]},
	{name:"Legwand",nick:"leg",stats:[0.25,0.25,0.25,0.25,0,0,0,0,0]},
	{name:"Malice Jewel",nick:"malice",stats:[0.3,0.3,0.3,0.3,0,0,0,0,0]},
	{name:"Medulla Gem",nick:"medulla",stats:[0.2,0.2,0.2,0.2,0,0,0,0,0]},
	{name:"Nevana Crown",nick:"nevanacrown",stats:[0.4,0.4,0.4,0.4,0,0,0,0,1]},
	{name:"Obsidian Core Amp",nick:"obcoreamp",stats:[0,0.8,0,0,0,0,0,0,0]},
	{name:"Occult Treasure",nick:"occult",stats:[0.4,0.4,0.4,0.4,0,0,0,0,0]},
	{name:"Reeze's Armor",nick:"reeze",stats:[0.4,0.5,0.5,0.5,0,0,0,0,0]},
	{name:"Revelation Book",nick:"revbook",stats:[0,0,0,0,0,0.5,0.5,0,0]},
	{name:"Sacred Axe",nick:"sacredaxe",stats:[0,0,0,0,0,1.5,0,0,0]},
	{name:"Sacred Jewel",nick:"sacredj",stats:[0.15,0.15,0.15,0.15,0,0,0,0,0]},
	{name:"Sacred Staff",nick:"sacredstaff",stats:[0.5,0,0,0,0,0,0,0,0]},
	{name:"Sacred Treasure",nick:"sacredtrea",stats:[0,0,0,0,0,0,0,0,1.5]},
	{name:"Sky Harbinger",nick:"skyharb",stats:[0.3,0.3,0,0,0,0,0,0,2]},
	{name:"Sky Orb",nick:"skyorb",stats:[1,1,1,1,0,0,0,0,0]},
	{name:"Spear of Zedus",nick:"spearzedus",stats:[0.2,0.2,0.2,0.2,0,0,0,0,0]},
	{name:"Star Flower",nick:"starflower",stats:[0,0,0,0,0,1.2,0,0,0]},
	{name:"Steeple Rose",nick:"steeple",stats:[0,0,0,0,0,0.5,0,0,0]},
	{name:"Tridon\'s Trident",nick:"tridont",stats:[0.3,0,0,0.3,0,0,0,0,0]},
	{name:"Vulcan Axe",nick:"vulcanaxe",stats:[0.3,0.3,0,0,0,0,0,0,0.5]},
	{name:"War Demon Blade",nick:"wardemon",stats:[0,0,0,0,0,0.5,0.5,0,1]}
];
extraList=[
	{name:"No Extra Skill Bonus",nick:"none",stats:[0,0,0,0,0,0,0,0,0]},
	{name:"20%",nick:"twenty",stats:[0.2,0.2,0.2,0.2,0,0,0,0,0]}
];
/*Stats Calc Var*/
lsBonus=[0,0,0,0,0,0,0,0,0];
unitBonus={A:[0,0,0,0,0,0,0,0,0],B:[0,0,0,0,0,0,0,0,0],C:[0,0,0,0,0,0,0,0,0],D:[0,0,0,0,0,0,0,0,0],E:[0,0,0,0,0,0,0,0,0],F:[0,0,0,0,0,0,0,0,0]};
squadSparkDMG=0;
squadCritDMG=0;
squadElementDMG=0;
squadATKBUFF=0;
squadBBDMG=0;
countVar=0;
unitProcessing="";
trashStr='<i class="fa fa-plus fa-5x"></i>';
gKey = 'AIzaSyCyF9yZ9Lyl57HAQXtzrd3yONewk4-fGSg';
rawParseObj=[];
lsMap=[
	{desc:"% HP", stack:true, impact:"hp% buff",criteria:["elements buffed","unique elements required","bb gauge above % buff requirement","hp above % buff requirement","hp below % buff requirement","gender required"]},
	{desc:"% ATK", stack:true, impact:"atk% buff",criteria:["elements buffed","unique elements required","bb gauge above % buff requirement","hp above % buff requirement","hp below % buff requirement","gender required"]},
	{desc:"% DEF", stack:true, impact:"def% buff",criteria:["elements buffed","unique elements required","bb gauge above % buff requirement","hp above % buff requirement","hp below % buff requirement","gender required"]},
	{desc:"% REC", stack:true, impact:"rec% buff",criteria:["elements buffed","unique elements required","bb gauge above % buff requirement","hp above % buff requirement","hp below % buff requirement","gender required"]},
	{desc:"% ATK+ by HP", stack:true, impact:"atk% extra buff based on hp", impact2:"atk% base buff", criteria:["buff proportional to hp"]},
	{desc:"% DEF+ by HP", stack:true, impact:"def% extra buff based on hp", impact2:"def% base buff", criteria:["buff proportional to hp"]},
	{desc:"% ATK+ on X DMG Dealt", stack:true, impact:"!damage dealt threshold buff activation||buff.atk% buff (1)", impact2:"!buff.atk% buff (1)", turns:"!buff.buff turns (1)", criteria:["damage dealt threshold buff activation"], hideprefix:true},
	{desc:"% ATK+ Turn after CRIT", stack:true, impact:"!on crit activation chance%||buff.atk% buff (1)", impact2:"!buff.atk% buff (1)", turns:"!buff.buff turns (1)", criteria:["on crit activation chance%"], hideprefix:true},
	{desc:"% ATK+ First Turns", stack:true, impact:"first x turns atk% (1)", criteria:["first x turns"]},
	{desc:"% DEF+ First Turns", stack:true, impact:"first x turns def% (3)", criteria:["first x turns"]},
	{desc:"% CRIT+", stack:true, impact:"crit% buff"},
	{desc:"% Spark DMG+", impact:"damage% for spark",stack:true},
	{desc:"% Spark DMG Debuff", stack:true, impact:"spark debuff%",chance:"spark debuff chance%",criteria:["spark debuff turns"]},
	{desc:"% Spark DMG+ on SparkCount", stack:true, impact:"!spark count buff activation||buff.spark dmg% buff", impact2:"!buff.spark dmg% buff", turns:"!buff turns (40)",criteria:["spark count buff activation"], hideprefix:true},
	{desc:"% DMG+ to Ailed Enemy", stack:true, impact:"atk% buff when enemy has ailment"},
	{desc:"% CRIT DMG+", impact:"crit multiplier%",stack:true},
	{desc:"% BB ATK%+", impact:"bb atk% buff",stack:true},
	{desc:"% BB ATK%+ on SparkCount",stack:true, impact:"!spark count buff activation||buff.bb atk% buff", impact2:"!buff.bb atk% buff", turns:"!buff.buff turns (72)", criteria:["spark count buff activation"], hideprefix:true},
	{desc:"% BB ATK%+ on X DMG Dealt",stack:true, impact:"!damage dealt threshold buff activation||buff.bb atk% buff", turns:"!buff.buff turns (72)" , impact2:"!buff.bb atk% buff", criteria:["damage dealt threshold buff activation"], hideprefix:true},
	{desc:"% BB ATK%+ on X DMG Taken",stack:true, impact:"!damage threshold buff activation||buff.bb atk% buff", turns:"!buff.buff turns (72)", impact2:"!buff.bb atk% buff", criteria:["damage threshold buff activation"], hideprefix:true},
	{desc:"% Ignore DEF", impact:"ignore def%"},
	{desc:"Null CRITs", impact:"crit chance base resist%",hideprefix:true},
	{desc:"Null Ails", impact:"poison resist%",hideprefix:true},
	{desc:"Null Element Weakness", impact:"strong base element damage resist%",hideprefix:true},
	{desc:"% BC+",impact:"bc drop rate% buff"},
	{desc:"% BC+ on Spark",impact:"bc drop% for spark"},
	{desc:"BC Fill on ATKed", impact:"bc fill when attacked low", impact2:"bc fill when attacked high", chance:"bc fill when attacked%"},
	{desc:"BC Fill on ATK", impact:"bc fill when attacking low", impact2:"bc fill when attacking high", chance:"bc fill when attacking%"},
	{desc:"BC Fill on Spark", impact:"bc fill on spark low", impact2:"bc fill on spark high", chance:"bc fill on spark%"},
	{desc:"BC Fill on CRIT", impact:"bc fill on crit min", impact2:"bc fill on crit max", chance:"bc fill on crit%"},
	{desc:"BC Fill ATKed on Guard", impact:"bc filled when attacked while guarded"},
	{desc:"BC TurnFill", impact:"bc fill per turn"},
	{desc:"BC Fill", impact:"increase bb gauge", criteria:["damage threshold activation"]},
	{desc:"% BC Fill+", impact:"bb gauge fill rate%"},
	{desc:"% BB Cost Reduced", impact:"reduced bb bc cost%"},
	{desc:"% Reduce BB Gauge Used", impact:"reduced bb bc use% low", impact2:"reduced bb bc use% high", chance:"reduced bb bc use chance%"},
	{desc:"% HP Drain", impact:"hp drain% low", impact2:"hp drain% high",chance:"hp drain chance%"},
	{desc:"% HC+",impact:"hc drop rate% buff"},
	{desc:"% HC+ on Spark",impact:"hc drop% for spark"},
	{desc:"% HC Fill+", impact:"hc effectiveness%"},
	{desc:"Heal Each Turn+", impact:"turn heal low", impact2:"turn heal high",criteria:["rec% added (turn heal)"]},
	{desc:"Heal on Spark", impact:"heal on spark low", impact2:"heal on spark high", chance:"heal on spark%"},
	{desc:"% HP Heal on ATKed", impact:"dmg% to hp% when attacked low", impact2:"dmg% to hp% when attacked high", chance:"dmg% to hp% when attacked chance%"},
	{desc:"Heal on Guard", impact:"on guard activation chance%", impact2:"!buff.gradual heal low", hideprefix:true},
	{desc:"% Angel Idol", impact:"angel idol recover chance% low", impact2:"angel idol recover chance% high", criteria:["angel idol recover counts"]},
	{desc:"% OD Fill+", impact:"od fill rate%"},
	{desc:"% Item+",impact:"item drop rate% buff"},
	{desc:"% Karma+",impact:"karma drop rate% buff"},
 	{desc:"% Karma+ on Spark",impact:"karma drop% for spark"},
 	{desc:"% Zel+",impact:"zel drop rate% buff"},
 	{desc:"% Zel+ on Spark",impact:"zel drop% for spark"},
	{desc:"% Reduce DMG Assured", impact:"dmg% mitigation"},
	{desc:"% Reduce DMG by Chance", impact:"dmg reduction%", chance:"dmg reduction chance%"},
	{desc:"Reduce DMG to 1", impact:"take 1 dmg%", chance:"take 1 dmg%",hideprefix:true},
	{desc:"% Reduce DMG Buff", impact:"dmg reduction% buff", criteria:["damage threshold buff activation"]},
	{desc:"% Reduce DMG on Guard", impact:"guard increase mitigation%"},
	{desc:"% Fire Resist", impact:"fire resist%"},
	{desc:"% Water Resist", impact:"water resist%"},
	{desc:"% Earth Resist", impact:"earth resist%"},
	{desc:"% Thunder Resist", impact:"thunder resist%"},
	{desc:"% Light Resist", impact:"light resist%"},
	{desc:"% Dark Resist", impact:"dark resist%"},
	{desc:"% Reduce DMG (Fire Enemy)", impact:"mitigate fire attacks", impact2:"dmg% mitigation for elemental attacks",hideprefix:true},
	{desc:"% Reduce DMG (Water Enemy)", impact:"mitigate water attacks", impact2:"dmg% mitigation for elemental attacks",hideprefix:true},
	{desc:"% Reduce DMG (Earth Enemy)", impact:"mitigate earth attacks", impact2:"dmg% mitigation for elemental attacks",hideprefix:true},
	{desc:"% Reduce DMG (Thunder Enemy)", impact:"mitigate thunder attacks", impact2:"dmg% mitigation for elemental attacks",hideprefix:true},
	{desc:"% Reduce DMG (Light Enemy)", impact:"mitigate light attacks", impact2:"dmg% mitigation for elemental attacks",hideprefix:true},
	{desc:"% Reduce DMG (Dark Enemy)", impact:"mitigate dark attacks", impact2:"dmg% mitigation for elemental attacks",hideprefix:true},
	{desc:"% Fire Weakness DMG+", impact:"!fire units do extra elemental weakness dmg||elemental weakness multiplier%", impact2:"elemental weakness multiplier%", hideprefix:true},
	{desc:"% Water Weakness DMG+", impact:"!water units do extra elemental weakness dmg||elemental weakness multiplier%", impact2:"elemental weakness multiplier%", hideprefix:true},
	{desc:"% Earth Weakness DMG+", impact:"!earth units do extra elemental weakness dmg||elemental weakness multiplier%", impact2:"elemental weakness multiplier%", hideprefix:true},
	{desc:"% Thunder Weakness DMG+", impact:"!thunder units do extra elemental weakness dmg||elemental weakness multiplier%", impact2:"elemental weakness multiplier%", hideprefix:true},
	{desc:"% Light Weakness DMG+", impact:"!light units do extra elemental weakness dmg||elemental weakness multiplier%", impact2:"elemental weakness multiplier%", hideprefix:true},
	{desc:"% Dark Weakness DMG+", impact:"!dark units do extra elemental weakness dmg||elemental weakness multiplier%", impact2:"elemental weakness multiplier%", hideprefix:true},
	{desc:"% EXP+", impact:"xp gained increase%"},
];
bbMap=[
	{desc:"% HP+", impact:"max hp% increase"},
	{desc:"% ATK+", impact:"atk% buff (1)", turns:"buff turns"},
	{desc:"% DEF+", impact:"def% buff (3)", turns:"buff turns"},
	{desc:"% REC+", impact:"rec% buff (5)", turns:"buff turns"},
	{desc:"% Elemental ATK+", impact:"atk% buff (13)", impact2:"element buffed", turns:"buff turns"},
	{desc:"% HC+", impact:"hc drop rate% buff (9)", turns:"drop rate buff turns"},
	{desc:"Gradual Heal", impact:"gradual heal low", impact2:"gradual heal high", turns:"gradual heal turns (8)"},
	{desc:"Heal", impact:"heal low", impact2:"heal high"},
	{desc:"Angel Idol", impact:"angel idol buff (12)", hideprefix:true},
	{desc:"% Angel Idol", impact:"angel idol recover chance%", turns:"angel idol buff turns (91)"},
	{desc:"Revive Dead", impact:"revive unit hp%", chance:"revive unit chance%", hideprefix:true},
	{desc:"% Convert to ATK", impact:"atk% buff (46)", impact2:"converted attribute", turns:"% converted turns"},
	{desc:"% Convert to DEF", impact:"def% buff (47)", impact2:"converted attribute", turns:"% converted turns"},
	{desc:"Cure Ails", impact:"ailments cured", hideprefix:true},
	{desc:"Null Ails", impact:"resist status ails turns", turns:"resist status ails turns", hideprefix:true},
	{desc:"Null Stats Debuff", impact:"stat down immunity buff turns", turns:"stat down immunity buff turns", hideprefix:true},
	{desc:"Hitcount+", impact:"hit increase/hit", turns:"hit increase buff turns (50)"},
	{desc:"% Ignore DEF", impact:"defense% ignore", turns:"defense% ignore turns (39)"},
	{desc:"% BB ATK%+", impact:"bb atk% buff", turns:"buff turns (72)"},
	{desc:"% BB ATK%+/Turn", impact:"bb atk% inc per use", criteria:["bb atk% max number of inc"]},
	{desc:"% Spark DMG+", impact:"spark dmg% buff (40)", turns:"buff turns"},
	{desc:"% Spark DMG Debuff", impact:"spark dmg% received", chance:"spark dmg received apply%", turns:"spark dmg received debuff turns (94)"},
	{desc:"% RED Spark DMG+ ", impact:"spark dmg inc% buff", chance:"spark dmg inc chance%", turns:"spark dmg inc buff turns (131)"},
	{desc:"% DMG+ to Ailed Enemy", impact:"atk% buff when enemy has ailment", turns:"atk% buff turns (110)"},
	{desc:"% CRIT+", impact:"crit% buff (7)", turns:"buff turns"},
	{desc:"% CRIT DMG+", impact:"crit multiplier%", turns:"buff turns (84)"},
	{desc:"Add fire to ATK", turns:"elements added turns", impact:"elements dummy",hideprefix:true},
	{desc:"Add water to ATK", turns:"elements added turns", impact:"elements dummy",hideprefix:true},
	{desc:"Add earth to ATK", turns:"elements added turns", impact:"elements dummy",hideprefix:true},
	{desc:"Add thunder to ATK", turns:"elements added turns", impact:"elements dummy",hideprefix:true},
	{desc:"Add light to ATK", turns:"elements added turns", impact:"elements dummy",hideprefix:true},
	{desc:"Add dark to ATK", turns:"elements added turns", impact:"elements dummy",hideprefix:true},
	{desc:"% Fire Weakness DMG+", impact:"!fire units do extra elemental weakness dmg||elemental weakness multiplier%", impact2:"elemental weakness multiplier%", turns:"elemental weakness buff turns", hideprefix:true},
	{desc:"% Water Weakness DMG+", impact:"!water units do extra elemental weakness dmg||elemental weakness multiplier%", impact2:"elemental weakness multiplier%", turns:"elemental weakness buff turns", hideprefix:true},
	{desc:"% Earth Weakness DMG+", impact:"!earth units do extra elemental weakness dmg||elemental weakness multiplier%", impact2:"elemental weakness multiplier%", turns:"elemental weakness buff turns", hideprefix:true},
	{desc:"% Thunder Weakness DMG+", impact:"!thunder units do extra elemental weakness dmg||elemental weakness multiplier%", impact2:"elemental weakness multiplier%", turns:"elemental weakness buff turns", hideprefix:true},
	{desc:"% Light Weakness DMG+", impact:"!light units do extra elemental weakness dmg||elemental weakness multiplier%", impact2:"elemental weakness multiplier%", turns:"elemental weakness buff turns", hideprefix:true},
	{desc:"% Dark Weakness DMG+", impact:"!dark units do extra elemental weakness dmg||elemental weakness multiplier%", impact2:"elemental weakness multiplier%", turns:"elemental weakness buff turns", hideprefix:true},
	{desc:"% DoT DMG", impact:"dot atk%", turns:"dot turns (71)"},
	{desc:"% Enemy HP DMG", impact:"hp% damage low", impact2:"hp% damage high", chance:"hp% damage chance%"},
	{desc:"BC TurnFill", impact:"increase bb gauge gradual", turns:"increase bb gauge gradual turns (37)"},
	{desc:"BC InstaFill", impact:"increase bb gauge"},
	{desc:"% BB Fill", impact:"bb bc fill%"},
	{desc:"% OD Fill", impact:"increase od gauge%"},
	{desc:"% BC+", impact:"bc drop rate% buff (10)", turns:"drop rate buff turns"},
	{desc:"% BC Fill+", impact:"bb gauge fill rate% buff", turns:"buff turns (77)"},
	{desc:"BC Fill on ATKed", impact:"bc fill when attacked low", impact2:"bc fill when attacked high", chance:"bc fill when attacked%", turns:"bc fill when attacked turns (38)"},
	{desc:"BC Fill on Spark", impact:"bc fill on spark low", impact2:"bc fill on spark high", chance:"bc fill on spark%", turns:"bc fill on spark buff turns (111)"},
	{desc:"% Item+", impact:"item drop rate% buff (11)", turns:"drop rate buff turns"},
	{desc:"% Reduce DMG", impact:"dmg% reduction", turns:"dmg% reduction turns (36)"},
	{desc:"% Reduce Fire DMG", impact:"mitigate fire attacks", impact2:"dmg% mitigation for elemental attacks", turns:"dmg% mitigation for elemental attacks buff turns", hideprefix:true},
	{desc:"% Reduce Water DMG", impact:"mitigate water attacks", impact2:"dmg% mitigation for elemental attacks", turns:"dmg% mitigation for elemental attacks buff turns", hideprefix:true},
	{desc:"% Reduce Earth DMG", impact:"mitigate earth attacks", impact2:"dmg% mitigation for elemental attacks", turns:"dmg% mitigation for elemental attacks buff turns", hideprefix:true},
	{desc:"% Reduce Thunder DMG", impact:"mitigate thunder attacks", impact2:"dmg% mitigation for elemental attacks", turns:"dmg% mitigation for elemental attacks buff turns", hideprefix:true},
	{desc:"% Reduce Light DMG", impact:"mitigate light attacks", impact2:"dmg% mitigation for elemental attacks", turns:"dmg% mitigation for elemental attacks buff turns", hideprefix:true},
	{desc:"% Reduce Dark DMG", impact:"mitigate dark attacks", impact2:"dmg% mitigation for elemental attacks", turns:"dmg% mitigation for elemental attacks buff turns", hideprefix:true},
	{desc:"HP Shield", impact:"elemental barrier element", impact2:"elemental barrier hp"},
	{desc:"Elemental Shield", impact:"shield element", turns:"shield turns (10002)", criteria:["shield hp","shield def"]},
	{desc:"% ATK-Down to ATK", impact:"inflict atk% debuff (2)", chance:"inflict atk% debuff chance% (74)", turns:"stat% debuff turns"},
	{desc:"% DEF-Down to ATK", impact:"inflict def% debuff (4)", chance:"inflict def% debuff chance% (75)", turns:"stat% debuff turns"},
	{desc:"% ATK-Down", impact:"buff #", chance:"proc chance%", turns:"buff turns"},
	{desc:"% DEF-Down", impact:"buff #", chance:"proc chance%", turns:"buff turns"},
	{desc:"% Sick", impact:"sick%"},
	{desc:"% Weaken", impact:"weaken%"},
	{desc:"% Injury", impact:"injury%"},
	{desc:"% Curse", impact:"curse%"},
	{desc:"% Paralysis", impact:"paralysis%"},
	{desc:"% Poison", impact:"poison%"},
	{desc:"% Sick Buff", impact:"sick% buff", turns:"buff turns"},
	{desc:"% Weaken Buff", impact:"weaken% buff", turns:"buff turns"},
	{desc:"% Injury Buff", impact:"injury% buff", turns:"buff turns"},
	{desc:"% Curse Buff", impact:"curse% buff", turns:"buff turns"},
	{desc:"% Paralysis Buff", impact:"paralysis% buff", turns:"buff turns"},
	{desc:"% Poison Buff", impact:"poison% buff", turns:"buff turns"},
	{desc:"% Counter-Sick", impact:"counter inflict sick% (80)", turns:"counter inflict ailment turns"},
	{desc:"% Counter-Weaken", impact:"counter inflict weaken% (79)", turns:"counter inflict ailment turns"},
	{desc:"% Counter-Injury", impact:"counter inflict injury% (81)", turns:"counter inflict ailment turns"},
	{desc:"% Counter-Curse", impact:"counter inflict curse% (82)", turns:"counter inflict ailment turns"},
	{desc:"% Counter-Paralysis", impact:"counter inflict paralysis% (83)", turns:"counter inflict ailment turns"},
	{desc:"% Counter-Poison", impact:"counter inflict poison% (78)", turns:"counter inflict ailment turns"},
	{desc:"Taunt", impact:"taunt turns (10000)", turns:"taunt turns (10000)", criteria:["def% buff"], hideprefix:true},
	{desc:"Stealth", impact:"stealth turns (10001)", turns:"stealth turns (10001)", criteria:["atk% buff", "crit% buff"], hideprefix:true},
];

/*Escape regex string*/
function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

/*Check filedate*/
function checkUpdate(fileURL,localDate) {
    $.ajax({
    	type: "Head",
        dataType: "json",
        contentType: "text/plain; charset=UTF-8",
        url: fileURL,
        success: function(data, textStatus, request) {
    		lastModified = request.getResponseHeader("Last-Modified");
    		if (Date.parse(lastModified) > Date.parse(localDate))
    			$("#alertmodal").modal("show")
 	}
    })
}

/*Reset Local Storage*/
function resetLocalData(serverStr, corrupted) {
	/*LocalStorage Delete and Refresh*/
	if (corrupted)
		alert("Corrupted data detected or Data structure has changed. Proceed to Fix.");
	localStorage.removeItem(serverStr);
	localStorage.removeItem(serverStr+"date");
	location.replace(location.href);
}

/*JQ Param handling*/
function urlParam(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return '';
    }
    else{
       return decodeURIComponent(results[1]) || '';
    }
}

/*nest obj check*/
function nestedChk(nestedStr,parentObj) {
	/*Parse nested string*/
	var nestedArray=nestedStr.split('.');
	var nestedO=parentObj;
	for (var x in nestedArray)
		if (nestedArray[x] in nestedO)
			nestedO=nestedO[nestedArray[x]];
		else
			return false;
	return nestedO;
}

/*JP Onlu*/
function JPOnlyRun() {
	var outputHTML=[];
	var starLimit=6;
	for (var i in rawParseObj) {
		if (rawParseObj[i].rarity>=starLimit) {
		    if (rawParseObj[i].name.indexOf("(")==-1)
		        outputHTML.push('<div class="col-xs-3 col-sm-3 col-md-2 col-lg-2"><img src="'+rawParseObj[i].img+'" data-unitid="'+i+'" class="unitFound" title="ADD to Squad - '+rawParseObj[i].name+" "+rawParseObj[i].rarity+"*"+'" /><kbd class="fRarity">'+rawParseObj[i].rarity+'<i class="fa fa-star"></i></kbd></div>');
		}
	}
	/*Joins array and replace HTML*/
	$(rawTable).html(outputHTML.join(' '));
	/*Google analytics*/
	ga('send', 'pageview', {
  		'page': '/vurl/squadguide_SearchID',
  		'title': 'Brave Frontier PROs - Squad Guide SearchID'
	});
}

/*Search by Unit ID*/
function searchIdRun() {
    var sVal=$('#searchIdBox').val();
    if (sVal.length <1) {
        $(rawTable).html('<h3 class="text-danger"><i class="fa fa-exclamation-triangle"></i> Minimum 1 character required. Please try again.</h3>')
    } else {
	var outputHTML=[];
	for (i=0;i<rawParseObj.length;i++) {
	    /*compares lowercase string*/
	    if ( rawParseObj[i]['id']==sVal) {
	        outputHTML.push('<div class="col-xs-3 col-sm-3 col-md-2 col-lg-2"><img src="'+rawParseObj[i].img+'" data-unitid="'+i+'" class="unitFound" title="ADD to Squad - '+rawParseObj[i].name+" "+rawParseObj[i].rarity+"*"+'" /><kbd class="fRarity">'+rawParseObj[i].rarity+'<i class="fa fa-star"></i></kbd></div>');
	        break;
	    }
	}
	/*Joins array and replace HTML*/
	$(rawTable).html(outputHTML.join(' '));
    }
	/*Google analytics*/
	ga('send', 'pageview', {
  		'page': '/vurl/squadguide_SearchID',
  		'title': 'Brave Frontier PROs - Squad Guide SearchID'
	});
}

/*Search by Unit Name*/
function searchNameRun() {
    var sVal=escapeRegExp($('#searchNameBox').val()).toLowerCase();
    var outputHTML=[];
    if (sVal.length<2)
        $(rawTable).html('<h4 class="text-danger"><i class="fa fa-exclamation-triangle"></i> Minimum 2 characters required. Please try again.</h4>')
    else {
	for (i in rawParseObj)
	    /*compares lowercase string*/
	    if ( rawParseObj[i].name.toLowerCase().search(sVal)!=-1)
	        outputHTML.push('<div class="col-xs-3 col-sm-3 col-md-2 col-lg-2"><img src="'+rawParseObj[i].img+'" data-unitid="'+i+'" class="unitFound" title="ADD to Squad - '+rawParseObj[i].name+" ("+rawParseObj[i].rarity+"*"+')" /><kbd class="fRarity">'+rawParseObj[i].rarity+'<i class="fa fa-star"></i></kbd></div>');
    	/*Joins array and replace HTML*/
	$(rawTable).html('<h5 class="text-success"><i class="fa fa-search"></i> '+outputHTML.length+' unit(s) found.</h5>'+outputHTML.join(' '));
	/*Google analytics*/
	ga('send', 'pageview', {
  		'page': '/vurl/squadguide_SearchName',
  		'title': 'Brave Frontier PROs - Squad Guide SearchName'
	});
	}
}

function resetBtns(classBtns) {
	$(classBtns).each( function() {
		$(this).find(".badge").remove();
		$(this).removeAttr("data-found");
		$(this).removeAttr("data-top");
		$(this).attr("disabled","disabled");
		if ($(this).hasClass("btn-success"))
			$(this).toggleClass("btn-default btn-success");
	})
}

/*load badges on dupe skills*/
function badgeRun(classBtns) {
	$(classBtns).each( function() {
		if ($(this).attr("data-found")) {
			var countDupes=$(this).attr("data-found").split(',').length;
			if (countDupes>1)
				$(this).prepend('<span class="badge">'+countDupes+'</span>')
		}
	})
}

function recommendSkills(skillDesc,skillType,mapArray) {
	/*skillType are ls,bb,sbb,es,ubb in array*/
	var minRarity=7;
	var matchUnits=[];
	/*identify the skill*/
	for (var i in mapArray) {
		if (skillDesc==mapArray[i].desc) {
			var mapKey=i;
			break;
		}
	}
	for (var i in rawParseObj)
		if (rawParseObj[i].rarity>=minRarity) {
			/*scan skillType*/
			for (var j in skillType) {
				if (rawParseObj[i][skillType[j]]!="none") {
					var scanArray=rawParseObj[i][skillType[j]].effects;
					/*add ES triggered Effects to BB and SBB*/
					if (skillType[j]=="es") {
						var esTriggered=false;
						for (m in scanArray)
							if (scanArray[m].hasOwnProperty("triggered effect")) {
								scanArray=scanArray[m]["triggered effect"];
								esTriggered=true;
								break;
							}
					}
					if (skillType[j]!="es" || esTriggered) {
						/*skills scan*/
						for (var k in scanArray) {
							/*nested and multi-criteria*/
							if (mapArray[mapKey].impact.charAt(0)=="!") {
								var chkScope=mapArray[mapKey].impact.substr(1).split('||');
								var zChkArray=[];
								for (var z in chkScope)
									if (chkScope[z].indexOf('.')>=0) {
										if (nestedChk(chkScope[z],scanArray[k]))
											zChkArray.push(true);
										else
											zChkArray.push(false);
									} else {
										if (scanArray[k].hasOwnProperty(chkScope[z]))
											zChkArray.push(true);
										else
											zChkArray.push(false);
									}
								var zChk=true;
								for (var y in zChkArray) {
									if (!zChkArray[y])
										zChk=false;
								};
								/*if all criteria checks true*/
								if (zChk) {
									if (matchUnits.indexOf(i)==-1)
										matchUnits.push(i)
								}
							} else {
								/*normal scope*/
								if (scanArray[k].hasOwnProperty(mapArray[mapKey].impact)) {
									if (matchUnits.indexOf(i)==-1)
										matchUnits.push(i)
									break; /*performance*/
								}
							}
							/*elemental breakup scan*/
							if (mapArray[mapKey].impact=="elements dummy") {
								if (scanArray[k].hasOwnProperty("elements added")) {
									/*split string for 2nd word*/
									var skillElement=skillDesc.split(" ");
									if (scanArray[k]["elements added"].indexOf(skillElement[1])!=-1) {
										if (matchUnits.indexOf(i)==-1)
											matchUnits.push(i)
									}
								}
							}
							/*ATK Down buff scan*/
							if (skillDesc=="% ATK-Down") {
								if (scanArray[k].hasOwnProperty("buff #1"))
									if (scanArray[k]["buff #1"].hasOwnProperty("atk% buff (2)")) {
										if (matchUnits.indexOf(i)==-1)
											matchUnits.push(i)
									}
								if (scanArray[k].hasOwnProperty("buff #2"))
									if (scanArray[k]["buff #2"].hasOwnProperty("atk% buff (2)")) {
										if (matchUnits.indexOf(i)==-1)
											matchUnits.push(i)
									}
							}
							/*DEF Down buff scan*/
							if (skillDesc=="% DEF-Down") {
								if (scanArray[k].hasOwnProperty("buff #1"))
									if (scanArray[k]["buff #1"].hasOwnProperty("def% buff (4)")) {
										if (matchUnits.indexOf(i)==-1)
											matchUnits.push(i)
									}
								if (scanArray[k].hasOwnProperty("buff #2"))
									if (scanArray[k]["buff #2"].hasOwnProperty("def% buff (4)")) {
										if (matchUnits.indexOf(i)==-1)
											matchUnits.push(i)
									}
							}
						}
					}
				}				
			}
		}
	/*show results*/
	var skillsHTML=[];
	if (matchUnits.length!=0)
		for (i in matchUnits)
			skillsHTML.push('<div class="col-xs-3 col-sm-3 col-md-2 col-lg-2"><img src="'+rawParseObj[matchUnits[i]].img+'" data-unitid="'+matchUnits[i]+'" class="unitRecommend" title="ADD to Squad - '+rawParseObj[matchUnits[i]].name+" ("+rawParseObj[matchUnits[i]].rarity+"*"+')" /><kbd class="fRarity">'+rawParseObj[matchUnits[i]].rarity+'<i class="fa fa-star"></i></kbd></div>');
		else
			skillsHTML.push('<h4>No 7<i class="fa fa-star-o"></i> unit with matching skill.</h4>');
	$("#rTitle").html('<span class="text-danger">'+skillDesc+'</span> in <span class="text-danger">'+skillType.join(', ').toUpperCase()+'</span>');
	$("#rBody").html(skillsHTML);
}

function isNumber(o) {
  return ! isNaN (o-0) && o !== null && o !== "" && typeof o !== "boolean";
}
	
function scanSkills(classBtns,scanScope) {
	resetBtns(classBtns);
	/*iterate thru selected units*/
	$( ".unitBox .dragBox .unitSelected" ).each( function() {
		var selectUnit=$(this).attr("data-unitid");
		/*variables for coping with inconsistent data structure*/
		var ATKdown=false;
		var DEFdown=false;
		var breakElements={"fire":false,"water":false,"earth":false,"thunder":false,"light":false,"dark":false};
		for (i in scanScope) {
			if (rawParseObj[selectUnit][scanScope[i]] != "none") {
				var scanArray=rawParseObj[selectUnit][scanScope[i]].effects;
				/*add ES triggered Effects to BB and SBB*/
				if (scanScope[i]=="es") {
					var esTriggered=false;
					for (m in scanArray)
						if (scanArray[m].hasOwnProperty("triggered effect")) {
							scanArray=scanArray[m]["triggered effect"];
							esTriggered=true;
							break;
						}
				}
				if (scanScope[i]!="es" || esTriggered) {
					/*Scan mapping*/
					for (j in scanArray) {
						for (k in bbMap) {
							var skillMatched=false;
							if (bbMap[k].impact.charAt(0)=="!") {
								var chkScope=bbMap[k].impact.substr(1).split('||');
								var zChkArray=[];
								for (var z in chkScope)
									if (chkScope[z].indexOf('.')>=0) {
										if (nestedChk(chkScope[z],scanArray[j]))
											zChkArray.push(true);
										else
											zChkArray.push(false);
									} else {
										if (scanArray[j].hasOwnProperty(chkScope[z]))
											zChkArray.push(true);
										else
											zChkArray.push(false);
									}
								var zChk=true;
								for (var y in zChkArray) {
									if (!zChkArray[y])
										zChk=false;
								};
								skillMatched=zChk;
							} else if (scanArray[j].hasOwnProperty(bbMap[k].impact))
								skillMatched=true;
							/*match exist*/
							if (skillMatched) {
								$(classBtns).each( function() {
									if ($(this).text()==bbMap[k].desc) {
										/*create list of units with skills*/
										if ($(this).attr("data-found")) {
											if ($(this).attr("data-found").search(selectUnit)==-1) {
												$(this).attr("data-found", $(this).attr("data-found")+","+selectUnit);
											}
											/*build TOPval*/
											if (bbMap[k].impact.charAt(0)!="!") {
												if ($(this).attr("data-top") && isNumber(scanArray[j][bbMap[k].impact])) {
													if ($(this).attr("data-top")<scanArray[j][bbMap[k].impact])
														$(this).attr("data-top", scanArray[j][bbMap[k].impact]);
												}
											} else {
												var nestedArray=bbMap[k].impact.substr(1).split("||");
												var getNestedVal=nestedChk(nestedArray[1],scanArray[j]);
												if ($(this).attr("data-top") && isNumber(getNestedVal)) {
													if ($(this).attr("data-top")<getNestedVal)
														$(this).attr("data-top", getNestedVal);
												}
											}
										}
										else {
											$(this).attr("data-found",selectUnit);
											/*build TOPval*/
											if (bbMap[k].impact.charAt(0)!="!") {
												if (isNumber(scanArray[j][bbMap[k].impact]))
													$(this).attr("data-top",scanArray[j][bbMap[k].impact]);
											} else {
												var nestedArray=bbMap[k].impact.substr(1).split("||");
												var getNestedVal=nestedChk(nestedArray[1],scanArray[j]);
												if (isNumber(getNestedVal))
													$(this).attr("data-top",getNestedVal);
											}
										}
										$(this).removeAttr("disabled");
										if ($(this).hasClass("btn-default"))
											$(this).toggleClass("btn-default btn-success");
										return; /*reduce cycle*/
									}
								})
							}
						}
						/*Break up Element ADD*/
						if (scanArray[j].hasOwnProperty("elements added")) {
							for (x in breakElements) {
								if (scanArray[j]["elements added"].indexOf(x)!=-1)
									breakElements[x]=true
							}
						}
						for (x in breakElements) {
							$(classBtns).each( function() {
								var elementMatchStr="Add "+x+" to ATK";
								if ($(this).text()==elementMatchStr && breakElements[x]) {
									/*create list of units with skills*/
									if ($(this).attr("data-found")) {
										if ($(this).attr("data-found").search(selectUnit)==-1)
											$(this).attr("data-found", $(this).attr("data-found")+","+selectUnit)
									}
									else
										$(this).attr("data-found",selectUnit)
									$(this).removeAttr("disabled");
									if ($(this).hasClass("btn-default"))
										$(this).toggleClass("btn-default btn-success");
								}
							})
						}
						/*ATK/DEF Down Inconsistency*/
						if (scanArray[j].hasOwnProperty("buff #1")) {
							if (scanArray[j]["buff #1"].hasOwnProperty("atk% buff (2)"))
								ATKdown=true;
							if (scanArray[j]["buff #1"].hasOwnProperty("def% buff (4)"))
								DEFdown=true;
						}
						if (scanArray[j].hasOwnProperty("buff #2")) {
							if (scanArray[j]["buff #2"].hasOwnProperty("atk% buff (2)"))
								ATKdown=true;
							if (scanArray[j]["buff #2"].hasOwnProperty("def% buff (4)"))
								DEFdown=true;
						}
						if (ATKdown) {
							$(classBtns).each( function() {
								if ($(this).text()=="% ATK-Down") {
									/*create list of units with skills*/
									if ($(this).attr("data-found")) {
										if ($(this).attr("data-found").search(selectUnit)==-1)
											$(this).attr("data-found", $(this).attr("data-found")+","+selectUnit)
									}
									else
										$(this).attr("data-found",selectUnit)
									$(this).removeAttr("disabled");
									if ($(this).hasClass("btn-default"))
										$(this).toggleClass("btn-default btn-success");
								}
							})
						}
						if (DEFdown) {
							$(classBtns).each( function() {
								if ($(this).text()=="% DEF-Down") {
									/*create list of units with skills*/
									if ($(this).attr("data-found")) {
										if ($(this).attr("data-found").search(selectUnit)==-1)
											$(this).attr("data-found", $(this).attr("data-found")+","+selectUnit)
									}
									else
										$(this).attr("data-found",selectUnit)
									$(this).removeAttr("disabled");
									if ($(this).hasClass("btn-default"))
										$(this).toggleClass("btn-default btn-success");
								}
							})
						}
					} /*End For Loop*/
				}
			}
		}
	})
	badgeRun(classBtns);
}

function scanLeaderSkills(classBtns,scanScope) {
	resetBtns(classBtns);
	var addedSkills=[];
	/*iterate thru leader spots and selected unit images*/
	$("#unitA .dragBox .unitSelected,#unitB .dragBox .unitSelected").each(function() {
		var selectUnit=$(this).attr("data-unitid");
		addedSkills=[];
		for (i in scanScope) {
			if (rawParseObj[selectUnit][scanScope[i]] != "none") {
				var scanArray=rawParseObj[selectUnit][scanScope[i]].effects;
				/*Scan mapping*/
				for (j in scanArray) {
					for (k in lsMap) {
						var skillMatched=false;
						if (lsMap[k].impact.charAt(0)=="!") {
							var chkScope=lsMap[k].impact.substr(1).split('||');
							var zChkArray=[];
							for (var z in chkScope)
								if (chkScope[z].indexOf('.')>=0) {
									if (nestedChk(chkScope[z],scanArray[j]))
										zChkArray.push(true);
									else
										zChkArray.push(false);
								} else {
									if (scanArray[j].hasOwnProperty(chkScope[z]))
										zChkArray.push(true);
									else
										zChkArray.push(false);
								}
							var zChk=true;
							for (var y in zChkArray) {
								if (!zChkArray[y])
									zChk=false;
							};
							skillMatched=zChk;
						} else if (scanArray[j].hasOwnProperty(lsMap[k].impact))
							skillMatched=true;
						/*match exist*/
						if (skillMatched) {
							$(classBtns).each( function() {
								if ($(this).text()==lsMap[k].desc) {
									/*create list of units with skills*/
									if ($(this).attr("data-found")) {
										if (addedSkills.indexOf(lsMap[k].desc)==-1) {
											/*stop dupe skills w/ criteria*/
											$(this).attr("data-found", $(this).attr("data-found")+","+selectUnit);
											addedSkills.push(lsMap[k].desc);
										}
										/*build TOPval*/
										if ($(this).attr("data-top")) {
											if (!lsMap[k].stack) {
												if (lsMap[k].impact.charAt(0)!="!") {
													if ($(this).attr("data-top")<scanArray[j][lsMap[k].impact] && isNumber(scanArray[j][lsMap[k].impact]))
														$(this).attr("data-top", scanArray[j][lsMap[k].impact]);
												} else {
													var nestedArray=lsMap[k].impact.substr(1).split("||");
													var getNestedVal=nestedChk(nestedArray[1],scanArray[j]);
													if ($(this).attr("data-top")<getNestedVal && isNumber(getNestedVal))
														$(this).attr("data-top", getNestedVal);
												}
											} else {
												if (lsMap[k].impact.charAt(0)!="!") {
													 if (isNumber(scanArray[j][lsMap[k].impact]))
														$(this).attr("data-top", parseInt($(this).attr("data-top"))+parseInt(scanArray[j][lsMap[k].impact]));
												}
												else {
													var nestedArray=lsMap[k].impact.substr(1).split("||");
													var getNestedVal=nestedChk(nestedArray[1],scanArray[j]);
													if (isNumber(getNestedVal))
														$(this).attr("data-top", parseInt($(this).attr("data-top"))+parseInt(getNestedVal));
												}
											}
										}
									}
									else {
										$(this).attr("data-found",selectUnit);
										addedSkills.push(lsMap[k].desc);
										/*build TOPval*/
										if (lsMap[k].impact.charAt(0)!="!") {
											if (isNumber(scanArray[j][lsMap[k].impact]))
												$(this).attr("data-top",scanArray[j][lsMap[k].impact]);
										} else {
											var nestedArray=lsMap[k].impact.substr(1).split("||");
											var getNestedVal=nestedChk(nestedArray[1],scanArray[j]);
											if (isNumber(getNestedVal))
												$(this).attr("data-top", getNestedVal);
										}
									}
									$(this).removeAttr("disabled");
									if ($(this).hasClass("btn-default"))
										$(this).toggleClass("btn-default btn-success");
									return;
								}
							})
						}
					}
				}
			}
		}
	})
	badgeRun(classBtns);
}

/*show unit bb skills on skill click*/
function showSkills(e,scanScope) {
	var unitIDs=e.attr("data-found").split(",");
	var skillDesc=e.children(".btnDesc").text();
	var skillsHTML="";
	/*identify the skill*/
	for (i in bbMap) {
		if (skillDesc==bbMap[i].desc) {
			var bbMapKey=i;
			break;
		}
	}
	/*Scan unit details*/
	for (l in unitIDs) {
		var selectUnit=unitIDs[l];
		skillsHTML+='<img src="'+rawParseObj[selectUnit].img+'"/><h4><b>'+rawParseObj[selectUnit].name+' ('+rawParseObj[selectUnit].rarity+'*)</b></h4>';
		for (i in scanScope) {
			if (rawParseObj[selectUnit][scanScope[i]] != "none") {
				var scanArray=rawParseObj[selectUnit][scanScope[i]].effects;
				/*add ES triggered Effects to BB and SBB*/
				if (scanScope[i]=="es") {
					var esTriggered=false;
					for (m in scanArray)
						if (scanArray[m].hasOwnProperty("triggered effect")) {
							scanArray=scanArray[m]["triggered effect"];
							esTriggered=true;
							break;
						}
				}
				if (scanScope[i]!="es" || esTriggered) {
					/*Scan mapping*/
					for (j in scanArray) {
						var skillMatched=false;
						if (bbMap[bbMapKey].impact.charAt(0)=="!") {
							var chkScope=bbMap[bbMapKey].impact.substr(1).split('||');
							var zChkArray=[];
							for (var z in chkScope)
								if (chkScope[z].indexOf('.')>=0) {
									if (nestedChk(chkScope[z],scanArray[j]))
										zChkArray.push(true);
									else
										zChkArray.push(false);
								} else {
									if (scanArray[j].hasOwnProperty(chkScope[z]))
										zChkArray.push(true);
									else
										zChkArray.push(false);
								}
							var zChk=true;
							for (var y in zChkArray) {
								if (!zChkArray[y])
									zChk=false;
							}
							skillMatched=zChk;
						} else if (scanArray[j].hasOwnProperty(bbMap[bbMapKey].impact))
							skillMatched=true;
						/*match*/
						if (skillMatched) {
							skillsHTML+='<b>'+scanScope[i].toUpperCase()+': </b>';
							if (bbMap[bbMapKey].chance)
								skillsHTML+=scanArray[j][bbMap[bbMapKey].chance]+' % Chance ';
							if (!bbMap[bbMapKey].hideprefix)
								skillsHTML+=scanArray[j][bbMap[bbMapKey].impact]+' ';
							if (bbMap[bbMapKey].impact2)
								skillsHTML+='('+scanArray[j][bbMap[bbMapKey].impact2]+') ';
							skillsHTML+=bbMap[bbMapKey].desc;
							if (bbMap[bbMapKey].turns)
								skillsHTML+=' '+scanArray[j][bbMap[bbMapKey].turns]+'Turns'
							if (scanArray[j]["target area"]) {
								skillsHTML+=' <kbd>'+scanArray[j]["target area"].toUpperCase();
								if (scanArray[j]["target type"])
									skillsHTML+='/'+scanArray[j]["target type"].toUpperCase();
								skillsHTML+='</kbd>';
							}
							if (bbMap[bbMapKey].criteria) {
								for (m in bbMap[bbMapKey].criteria)
									if (scanArray[j][bbMap[bbMapKey].criteria[m]])
										skillsHTML+='<h5 style="margin:2px;" class="text-danger"><i>('+bbMap[bbMapKey].criteria[m]+': '+scanArray[j][bbMap[bbMapKey].criteria[m]]+')</i></h5>'
							}
							skillsHTML+='<br>';
						}
						/*Element add breakdown*/
						if (bbMap[bbMapKey].impact=="elements dummy") {
							if (scanArray[j].hasOwnProperty("elements added")) {
								skillsHTML+='<b>'+scanScope[i].toUpperCase()+': </b>';
								skillsHTML+='Add '+scanArray[j]["elements added"]+' to ATK '+scanArray[j][bbMap[bbMapKey].turns]+'Turns';
								skillsHTML+=' <kbd>'+scanArray[j]["target area"].toUpperCase()+'/'+scanArray[j]["target type"].toUpperCase()+'</kbd>';
								skillsHTML+='<br>';
							}
						}
						/*ATK Down Inconsistency*/
						if (bbMap[bbMapKey].desc=="% ATK-Down") {
							if (scanArray[j].hasOwnProperty("buff #1"))
								if (scanArray[j]["buff #1"]["atk% buff (2)"]) {
									skillsHTML+='<b>'+scanScope[i].toUpperCase()+': </b>';
									skillsHTML+=scanArray[j]["buff #1"][bbMap[bbMapKey].chance]+' % Chance ';
									skillsHTML+=scanArray[j]["buff #1"]["atk% buff (2)"]+bbMap[bbMapKey].desc+' '+scanArray[j][bbMap[bbMapKey].turns]+'Turns';
									skillsHTML+=' <kbd>'+scanArray[j]["target area"].toUpperCase()+'/'+scanArray[j]["target type"].toUpperCase()+'</kbd>';
									skillsHTML+='<br>';
								}
							if (scanArray[j].hasOwnProperty("buff #2"))
								if (scanArray[j]["buff #2"]["atk% buff (2)"]) {
									skillsHTML+='<b>'+scanScope[i].toUpperCase()+': </b>';
									skillsHTML+=scanArray[j]["buff #2"][bbMap[bbMapKey].chance]+' % Chance ';
									skillsHTML+=scanArray[j]["buff #2"]["atk% buff (2)"]+bbMap[bbMapKey].desc+' '+scanArray[j][bbMap[bbMapKey].turns]+'Turns';
									skillsHTML+=' <kbd>'+scanArray[j]["target area"].toUpperCase()+'/'+scanArray[j]["target type"].toUpperCase()+'</kbd>';
									skillsHTML+='<br>';
							} 
						}
						/*DEF Down Inconsistency*/
						if (bbMap[bbMapKey].desc=="% DEF-Down") {
							if (scanArray[j].hasOwnProperty("buff #1"))
								if (scanArray[j]["buff #1"]["def% buff (4)"]) {
									skillsHTML+='<b>'+scanScope[i].toUpperCase()+': </b>';
									skillsHTML+=scanArray[j]["buff #1"][bbMap[bbMapKey].chance]+' % Chance ';
									skillsHTML+=scanArray[j]["buff #1"]["def% buff (4)"]+bbMap[bbMapKey].desc+' '+scanArray[j][bbMap[bbMapKey].turns]+'Turns';
									skillsHTML+=' <kbd>'+scanArray[j]["target area"].toUpperCase()+'/'+scanArray[j]["target type"].toUpperCase()+'</kbd>';
									skillsHTML+='<br>';
								}
							if (scanArray[j].hasOwnProperty("buff #2"))
								if (scanArray[j]["buff #2"]["def% buff (4)"]) {
									skillsHTML+='<b>'+scanScope[i].toUpperCase()+': </b>';
									skillsHTML+=scanArray[j]["buff #2"][bbMap[bbMapKey].chance]+' % Chance ';
									skillsHTML+=scanArray[j]["buff #2"]["def% buff (4)"]+bbMap[bbMapKey].desc+' '+scanArray[j][bbMap[bbMapKey].turns]+'Turns';
									skillsHTML+=' <kbd>'+scanArray[j]["target area"].toUpperCase()+'/'+scanArray[j]["target type"].toUpperCase()+'</kbd>';
									skillsHTML+='<br>';
								}
						}
					} /* End FOR Loop */
				}
			}
		}
		skillsHTML+='<hr>';
	}
	/*load dom*/
	$('#showSkillBody').html(skillsHTML);
	if (scanScope.indexOf("ubb")!=-1) {
		$('#moreUnitsBtn').attr("data-skillType","ubb");
		$('#moreUnitsBtn').attr("data-skill",skillDesc);
	} else {
		$('#moreUnitsBtn').attr("data-skillType","bb");
		$('#moreUnitsBtn').attr("data-skill",skillDesc);
	}
	$('#moreUnitsBtn').text("More units with "+skillDesc);
	$('#showSkillModal').modal('show')
}

/*show unit leader skills on skill click*/
function showLeaderSkills(e,scanScope) {
	var unitIDs=e.attr("data-found").split(",");
	var skillDesc=e.children(".btnDesc").text();
	var skillsHTML="";
	/*identify the skill*/
	for (i in lsMap) {
		if (skillDesc==lsMap[i].desc) {
			var lsMapKey=i;
			break;
		}
	}
	/*Scan unit details*/
	for (l in unitIDs) {
		var selectUnit=unitIDs[l];
		skillsHTML+='<img src="'+rawParseObj[selectUnit].img+'"/><h4><b>'+rawParseObj[selectUnit].name+' ('+rawParseObj[selectUnit].rarity+'*)</b></h4>';
		for (i in scanScope) {
			if (rawParseObj[selectUnit][scanScope[i]] != "none") {
				var scanArray=rawParseObj[selectUnit][scanScope[i]].effects;
				/*Scan mapping*/
				for (j in scanArray) {
						var skillMatched=false;
						if (lsMap[lsMapKey].impact.charAt(0)=="!") {
							var chkScope=lsMap[lsMapKey].impact.substr(1).split('||');
							var zChkArray=[];
							for (var z in chkScope)
								if (chkScope[z].indexOf('.')>=0) {
									if (nestedChk(chkScope[z],scanArray[j]))
										zChkArray.push(true);
									else
										zChkArray.push(false);
								} else {
									if (scanArray[j].hasOwnProperty(chkScope[z]))
										zChkArray.push(true);
									else
										zChkArray.push(false);
								}
							var zChk=true;
							for (var y in zChkArray) {
								if (!zChkArray[y])
									zChk=false;
							}
							skillMatched=zChk;
						} else if (scanArray[j].hasOwnProperty(lsMap[lsMapKey].impact))
							skillMatched=true;
						/*match*/
						if (skillMatched) {
							skillsHTML+='<b>'+scanScope[i].toUpperCase()+': </b>';
							if (lsMap[lsMapKey].chance)
								skillsHTML+=scanArray[j][lsMap[lsMapKey].chance]+' % Chance ';
							if (!lsMap[lsMapKey].hideprefix)
								skillsHTML+=scanArray[j][lsMap[lsMapKey].impact]+' ';
							if (lsMap[lsMapKey].impact2)
								if (lsMap[lsMapKey].impact2.charAt(0)!="!")
									skillsHTML+='('+scanArray[j][lsMap[lsMapKey].impact2]+') ';
								else {
									var nestedSTR=lsMap[lsMapKey].impact2.substr('1');
									if (nestedChk(nestedSTR,scanArray[j]))
										skillsHTML+='('+nestedChk(nestedSTR,scanArray[j])+') ';
								}
							skillsHTML+=lsMap[lsMapKey].desc;
							if (lsMap[lsMapKey].turns) {
								if (lsMap[lsMapKey].turns.charAt(0)!="!")
									skillsHTML+=' '+scanArray[j][lsMap[lsMapKey].turns]+'Turns';
								else {
									/*remove !*/
									var nestedSTR=lsMap[lsMapKey].turns.substr('1');
									if (nestedChk(nestedSTR,scanArray[j]))
										skillsHTML+=' '+nestedChk(nestedSTR,scanArray[j])+'Turns';
								}
							}
							if (lsMap[lsMapKey].criteria) {
								for (m in lsMap[lsMapKey].criteria)
									if (scanArray[j][lsMap[lsMapKey].criteria[m]])
										skillsHTML+='<h5 style="margin:2px;" class="text-danger"><i>('+lsMap[lsMapKey].criteria[m]+': '+scanArray[j][lsMap[lsMapKey].criteria[m]]+')</i></h5>'
							}
							skillsHTML+='<br>';
						}
				}
				
			}
		}
		skillsHTML+='<hr>';
	}
	/*load dom*/
	$('#showSkillBody').html(skillsHTML);
	$('#moreUnitsBtn').attr("data-skillType","ls");
	$('#moreUnitsBtn').attr("data-skill",skillDesc);
	$('#moreUnitsBtn').text("More units with "+skillDesc);
	$('#showSkillModal').modal('show')
}

function generateBtns(btnclass,dest,mapArray) {
/*generate skills buttons*/
    var bbString="";
    for (i in mapArray) {
    	bbString+='<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">';
    	bbString+='<a href="#" class="btn '+btnclass+' btn-sm btn-default" disabled="disabled"><span class="btnDesc">'+mapArray[i].desc+'</span></a>';
    	bbString+='</div>';
    }
    $(dest).append(bbString);
}

function getTop(btnclass,btnDesc) {
	var returnVal=0
	$(btnclass+" .btnDesc").each( function() {
		var lsKey=$(this).text();
		if (lsKey==btnDesc) {
			if ($(this).parent(".btn-success").attr("data-top")){
				returnVal=parseInt($(this).parent(".btn-success").attr("data-top"));
				return;
			}
			else {
				returnVal=0;
				return;
			}
		}
	});
	return returnVal;
}

/*refreshURLParam*/
function refreshParam(statePush) {
	if (statePush===undefined)
		statePush=false;
	var sParam=[];
	var typeParam=[];
	var sphereParam=[];
	var extraParam=[];
	/*build param*/
	$(".unitBox .dragBox .unitSelected").each(function(){
		var selectUnit=$(this).attr("data-unitid");
		/*builds id array*/
		var unitX=$(this).parents(".unitBox").attr("id").slice(-1);
		sParam.push(unitX+rawParseObj[selectUnit].id);
		/*builds type param*/
		typeParam.push(unitX+$("#TYPEHEADER_"+unitX).text());
		/*builds sphere param*/
		for (x=1;x<3;x++) {
			var tVal=$("#sphere"+x+"_"+unitX).val();
			if (tVal!="none") {
				sphereParam.push(x+"_"+unitX+tVal);
			}
		};
		/*builds ex param*/
		var extraVal=$("#extra_"+unitX).val();
		if (extraVal!="none") {
			extraParam.push(unitX+extraVal);
		}
	})
	/*update state*/
	var fullParam="?squad="+encodeURIComponent(sParam.join())+"&type="+encodeURIComponent(typeParam.join())+"&sphere="+encodeURIComponent(sphereParam.join())+"&exs="+encodeURIComponent(extraParam.join());
	var state = { stateSquad: fullParam };
	if (statePush) {
		history.pushState(state, "squad state", fullParam );
	} else {
		history.replaceState(state, "squad state", fullParam );
	}
}

/*generate squad summary*/
function generateSummary() {
	var sCost=0;
	var bbSpam={"MAX BB DC":0,"BB Cost":0,"MAX SBB DC":0,"SBB Cost":0};
	var sElement={fire:0,water:0,earth:0,thunder:0,light:0,dark:0};
	var sElementCount=0;
	var sHTML="";
	var sParam=[];
	var typeParam=[];
	var sphereParam=[];
	/*build param*/
	$(".unitBox .dragBox .unitSelected").each(function(){
		var selectUnit=$(this).attr("data-unitid");
		/*totals cost*/
		if ($(this).parents(".unitBox").attr("id")!="unitB")
			sCost+=parseInt(rawParseObj[selectUnit].cost);
		/*BBSBB Spam cost*/
		if (rawParseObj[selectUnit]["bbdc"])
			bbSpam["MAX BB DC"]+=rawParseObj[selectUnit]["bbdc"];
		if (rawParseObj[selectUnit]["bbcost"])
			bbSpam["BB Cost"]+=rawParseObj[selectUnit]["bbcost"];
		if (rawParseObj[selectUnit]["sbbdc"])
			bbSpam["MAX SBB DC"]+=rawParseObj[selectUnit]["sbbdc"];
		if (rawParseObj[selectUnit]["sbbcost"])
			bbSpam["SBB Cost"]+=rawParseObj[selectUnit]["sbbcost"];
		/*builds element*/
		sElement[rawParseObj[selectUnit].element]+=1;
		/*builds id array*/
		var unitX=$(this).parents(".unitBox").attr("id").slice(-1);
		sParam.push(unitX+rawParseObj[selectUnit].id);
		/*builds type param*/
		typeParam.push(unitX+$("#TYPEHEADER_"+unitX).text());
		/*builds sphere param*/
		for (x=1;x<3;x++) {
			var tVal=$("#sphere"+x+"_"+unitX).val();
			if (tVal!="none") {
				sphereParam.push(x+"_"+unitX+tVal);
			}
		}
	})
	/*counts element*/
	for (var key in sElement)
		if (sElement[key]!=0)
			sElementCount+=1;
	/*New LS Summary*/
	var lsHP=["% HP"];
	var lsATK=["% ATK","% ATK+ by HP","% ATK+ on X DMG Dealt","% ATK+ Turn after CRIT","% ATK+ First Turns","% DMG+ to Ailed Enemy"];
	var lsDEF=["% DEF","% DEF+ by HP","% DEF+ First Turns"];
	var lsREC=["% REC"];
	var lsHPTotal=0;
	var lsATKTotal=0;
	var lsDEFTotal=0;
	var lsRECTotal=0;
	for (var i in lsHP)
		lsHPTotal+=getTop(".lsBtns",lsHP[i]);
	for (var i in lsATK)
		lsATKTotal+=getTop(".lsBtns",lsATK[i]);
	for (var i in lsDEF)
		lsDEFTotal+=getTop(".lsBtns",lsDEF[i]);
	for (var i in lsREC)
		lsRECTotal+=getTop(".lsBtns",lsREC[i]);
	var lsHTML=lsHPTotal+'% <b>HP</b><br>';
	lsHTML+=lsATKTotal+'% <b>ATK</b><br>';
	lsHTML+=lsDEFTotal+'% <b>DEF</b><br>';
	lsHTML+=lsRECTotal+'% <b>REC</b>';
	refreshSpheres();
	refreshBonus();
	/*spark summary*/
	var sparkLS=["% Spark DMG+","% Spark DMG Debuff","% Spark DMG+ on SparkCount"];
	var sparkBB=["% Spark DMG+","% Spark DMG Debuff"];
	var sparkUBB=["% Spark DMG+","% Spark DMG Debuff"];
	var sparkLSTotal=0;
	var sparkBBTotal=0;
	var sparkUBBTotal=0;
	for (var i in sparkLS)
		sparkLSTotal+=getTop(".lsBtns",sparkLS[i]);
	for (var i in sparkBB)
		sparkBBTotal+=getTop(".bbBtns",sparkBB[i]);
	for (var i in sparkLS)
		sparkUBBTotal+=getTop(".ubbBtns",sparkUBB[i]);
	squadSparkDMG=+sparkLSTotal + +sparkBBTotal + +sparkUBBTotal;
	var sparkHTML='<span class="text-success"><b>TOTAL '+ squadSparkDMG +'%</b></span><br>';
	sparkHTML+="LS <b>"+sparkLSTotal+"%</b><br>";
	sparkHTML+="BB/SBB <b>"+sparkBBTotal+"%</b><br>";
	sparkHTML+="UBB <b>"+sparkUBBTotal+"%</b>";
	/*crit summary*/
	var critLS=["% CRIT DMG+"];
	var critBB=["% CRIT DMG+"];
	var critUBB=["% CRIT DMG+"];
	var critLSTotal=0;
	var critBBTotal=0;
	var critUBBTotal=0;
	for (var i in critLS)
		critLSTotal+=getTop(".lsBtns",critLS[i]);
	for (var i in critBB)
		critBBTotal+=getTop(".bbBtns",critBB[i]);
	for (var i in critUBB)
		critUBBTotal+=getTop(".ubbBtns",critUBB[i]);
	squadCritDMG=+critLSTotal + +critBBTotal + +critUBBTotal;
	var critHTML='<span class="text-success"><b>TOTAL '+ squadCritDMG +'%</b></span><br>';
	critHTML+="LS <b>"+critLSTotal+"%</b><br>";
	critHTML+="BB/SBB <b>"+critBBTotal+"%</b><br>";
	critHTML+="UBB <b>"+critUBBTotal+"%</b>";
	/*BB ATK% summary*/
	var bbatkLS=["% BB ATK%+","% BB ATK%+ on SparkCount","% BB ATK%+ on X DMG Dealt","% BB ATK%+ on X DMG Taken"];
	var bbatkBB=["% BB ATK%+"];
	var bbatkUBB=["% BB ATK%+"];
	var bbatkLSTotal=0;
	var bbatkBBTotal=0;
	var bbatkUBBTotal=0;
	for (var i in bbatkLS)
		bbatkLSTotal+=getTop(".lsBtns",bbatkLS[i]);
	for (var i in critBB)
		bbatkBBTotal+=getTop(".bbBtns",bbatkBB[i]);
	for (var i in critUBB)
		bbatkUBBTotal+=getTop(".ubbBtns",bbatkUBB[i]);
	squadBBDMG=+bbatkLSTotal + +bbatkBBTotal + +bbatkUBBTotal;
	var bbatkHTML='<span class="text-success"><b>TOTAL '+ squadBBDMG +'%</b></span><br>';
	bbatkHTML+="LS <b>"+bbatkLSTotal+"%</b><br>";
	bbatkHTML+="BB/SBB <b>"+bbatkBBTotal+"%</b><br>";
	bbatkHTML+="UBB <b>"+bbatkUBBTotal+"%</b>";
	/*ATK summary*/
	var atkBB=["% ATK+","% DMG+ to Ailed Enemy"];
	var atkUBB=["% ATK+"];
	var atkBBTotal=0;
	var atkUBBTotal=0;
	for (var i in atkBB)
		atkBBTotal+=getTop(".bbBtns",atkBB[i]);
	for (var i in atkUBB)
		atkUBBTotal+=getTop(".ubbBtns",atkUBB[i]);
	squadATKBUFF=+atkBBTotal + +atkUBBTotal;
	var atkHTML='<span class="text-success"><b>TOTAL '+ squadATKBUFF +'%</b></span><br>';
	atkHTML+="BB/SBB <b>"+atkBBTotal+"%</b><br>";
	atkHTML+="UBB <b>"+atkUBBTotal+"%</b>";
	/*DEF summary*/
	var defBB=["% DEF+"];
	var defUBB=["% DEF+"];
	var defBBTotal=0;
	var defUBBTotal=0;
	for (var i in defBB)
		defBBTotal+=getTop(".bbBtns",defBB[i]);
	for (var i in defUBB)
		defUBBTotal+=getTop(".ubbBtns",defUBB[i]);
	var defHTML='<span class="text-success"><b>TOTAL '+ (+defBBTotal + +defUBBTotal) +'%</b></span><br>';
	defHTML+="BB/SBB <b>"+defBBTotal+"%</b><br>";
	defHTML+="UBB <b>"+defUBBTotal+"%</b>";
	/*Elemental weakness*/
	var fireWk="% Fire Weakness DMG+";
	var waterWk="% Water Weakness DMG+";
	var thunderWk="% Thunder Weakness DMG+";
	var earthWk="% Earth Weakness DMG+";
	var lightWk="% Light Weakness DMG+";
	var darkWk="% Dark Weakness DMG+";
	var elementWk=[fireWk,waterWk,earthWk,thunderWk,lightWk,darkWk];
	var elementTotal=[0,0,0,0,0,0];
	for (var i in elementWk) {
		elementTotal[i]+=getTop(".lsBtns",elementWk[i]);
		elementTotal[i]+=getTop(".bbBtns",elementWk[i]);
		elementTotal[i]+=getTop(".ubbBtns",elementWk[i]);
	}
	squadElementDMG=Math.max.apply(Math, elementTotal);
	var elementWkHTML="Fire <b>"+elementTotal[0]+"%</b><br>";
	elementWkHTML+="Water <b>"+elementTotal[1]+"%</b><br>";
	elementWkHTML+="Earth <b>"+elementTotal[2]+"%</b><br>";
	elementWkHTML+="Thunder <b>"+elementTotal[3]+"%</b><br>";
	elementWkHTML+="Light <b>"+elementTotal[4]+"%</b><br>";
	elementWkHTML+="Dark <b>"+elementTotal[5]+"%</b><br>";
	/*generate bbspam strings*/
	var bbSpamHTML=[];
	if (bbSpam["SBB Cost"]!=0)
		bbSpam["SBB Cost"]+=bbSpam["BB Cost"];
	for (var key in bbSpam) {
		if (bbSpam[key]!=0)
			bbSpamHTML.push(key+" <b>"+bbSpam[key]+"</b>");
	}
	if (bbSpamHTML.length==0)
		bbSpamHTML.push("No Units Added")
	/*Update multiplier*/
	lsBonus=[lsHPTotal/100,lsATKTotal/100,lsDEFTotal/100,lsRECTotal/100,squadCritDMG,squadSparkDMG,squadElementDMG,squadBBDMG,squadATKBUFF];
	/*generate HTML*/
	sHTML+='<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center htfixed2"><span id="share_this_icon"></span><h5 style="margin-top:4px;">Share Squad</h5></div>';
	sHTML+='<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center htfixed2"><i class="fa fa-link fa-2x sumIcon" title="Squad Link"></i><h5 id="shareURL"><a href="#" role="button" id="getShort" class="btn btn-sm btn-default">Get short URL</a></h5></div>';
	sHTML+='<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center htfixed2"><i class="fa fa-reddit-alien fa-2x sumIcon" title="Squad Link"></i><h5><a href="#" role="button" id="getReddit" class="btn btn-sm btn-default">Reddit Markdown</a></h5></div>';
	sHTML+='<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center htfixed2"><h4 class="bbspam sumIcon" style="margin-top:0;" title="Squad DMG Estimation"><b>SQUAD<br>DMG</b></h4><h5><a href="#" role="button" id="calculateDMG" class="btn btn-md btn-danger">Calculate</a></h5></div>';
	sHTML+='<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center htfixed2"><i class="fa fa-dollar fa-2x sumIcon" title="Unit Cost (less Ally)"></i><h5>'+sCost+' Cost</h5></div>';
	sHTML+='<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center htfixed2"><i class="fa fa-users fa-2x sumIcon" title="Unique Elements"></i><h5>'+sElementCount+' Unique<br>Element(s)</h5></div>';
	sHTML+='<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center htfixed2"><i class="fa fa-dashboard fa-3x sumIcon" title="Leader STATS Potential"></i><h6>'+lsHTML+' </h6></div>';
	sHTML+='<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center htfixed2"><h4 class="bbspam sumIcon" style="margin-top:0;" title="ATK Buff Potential"><b>ATK<br>BUFF</b></h4><h6>'+atkHTML+'</h6></div>';
	sHTML+='<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center htfixed2"><h4 class="bbspam sumIcon" style="margin-top:0;" title="DEF Buff Potential"><b>DEF<br>BUFF</b></h4><h6>'+defHTML+'</h6></div>';
	sHTML+='<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center htfixed2"><h4 class="bbspam sumIcon" style="margin-top:0;" title="Spark DMG Potential"><b>SPARK<br>DMG</b></h4><h6>'+sparkHTML+'</h6></div>';
	sHTML+='<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center htfixed2"><h4 class="bbspam sumIcon" style="margin-top:0;" title="CRIT DMG Potential"><b>CRIT<br>DMG</b></h4><h6>'+critHTML+'</h6></div>';
	sHTML+='<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center htfixed2"><h4 class="bbspam sumIcon" style="margin-top:0;" title="BB ATK%+ Buff Potential"><b>BB ATK%<br>BUFF</b></h4><h6>'+bbatkHTML+'</h6></div>';
	sHTML+='<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center htfixed2"><h4 class="bbspam sumIcon" style="margin-top:0;" title="Elemental Weakness Potential (LS, BB, SBB, UBB Total)"><b>Elemental<br>Weakness</b></h4><h6>'+elementWkHTML+'</h6></div>';
	sHTML+='<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center htfixed2"><h4 class="bbspam sumIcon" style="margin-top:0;" title="BB Spam"><b>BB<br>SPAM</b></h4><h6>'+bbSpamHTML.join("<br>")+'</h6></div>';
	$("#SummarySpace").html(sHTML);
	refreshParam(true);
	/*load sharethis buttons*/
	stWidget.addEntry({
		"service":"sharethis",
		"element":document.getElementById('share_this_icon'),
		"url":window.location.href,
		"title":"BFPROs - Squad Builder / My Squad",
		"type":"large",
		"text":"You gotta <3 my squad!" ,
		"image":"http://w.sharethis.com/images/sharethis_32.png",
		"summary":"Check out the squad i built with Squad Builder by Brave Frontier PROs."   
	});
}

/*fill squad box*/
function parseUnit(slot,rawID) {
	var insertHTML="";
	var uRef=slot.slice(-1);
	$(slot).html('<div class="dragBox"><img src="'+rawParseObj[rawID].img+'" data-unitid="'+rawID+'" class="unitSelected" title="'+rawParseObj[rawID].name+" ("+rawParseObj[rawID].rarity+'*)" /><kbd class="sRarity">'+rawParseObj[rawID].rarity+'<i class="fa fa-star"></i></kbd></div>');
	insertHTML+='<h4 id="TYPEHEADER_'+uRef+'">LORD</h4>';
	insertHTML+='<button type="button" class="btn btn-sm btn-default typeBtn" data-unitid="'+rawID+'" data-unitbox="'+uRef+'" title="lord">L</button>';
	insertHTML+='<button type="button" class="btn btn-sm btn-default typeBtn" data-unitid="'+rawID+'" data-unitbox="'+uRef+'" title="anima">A</button>';
	insertHTML+='<button type="button" class="btn btn-sm btn-default typeBtn" data-unitid="'+rawID+'" data-unitbox="'+uRef+'" title="breaker">B</button>';
	insertHTML+='<button type="button" class="btn btn-sm btn-default typeBtn" data-unitid="'+rawID+'" data-unitbox="'+uRef+'" title="guardian">G</button>';
	insertHTML+='<button type="button" class="btn btn-sm btn-default typeBtn" data-unitid="'+rawID+'" data-unitbox="'+uRef+'" title="oracle">O</button>';
	insertHTML+='<ul class="list-unstyled">';
	insertHTML+='<li><b>HP:</b> <span id="HP_'+uRef+'">'+rawParseObj[rawID].lord.hp+'</span></li>';
	insertHTML+='<li><b>ATK:</b> <span id="ATK_'+uRef+'">'+rawParseObj[rawID].lord.atk+'</span></li>';
	insertHTML+='<li><b>DEF:</b> <span id="DEF_'+uRef+'">'+rawParseObj[rawID].lord.def+'</span></li>';
	insertHTML+='<li><b>REC:</b> <span id="REC_'+uRef+'">'+rawParseObj[rawID].lord.rec+'</span></li>';
	insertHTML+='<li><b class="text-danger">ATKbuff:</b> <span id="ATKBUFF_'+uRef+'">'+squadATKBUFF+'</span></li>';
	insertHTML+='<li><b class="text-danger">CRITmod:</b> <span id="CRIT_'+uRef+'">'+squadCritDMG+'</span></li>';
	insertHTML+='<li><b class="text-danger">SPARKmod:</b> <span id="SPARK_'+uRef+'">'+squadSparkDMG+'</span></li>';
	insertHTML+='<li><b class="text-danger">ELEMENTmod:</b> <span id="ELEMENT_'+uRef+'">'+squadElementDMG+'</span></li>';
	insertHTML+='<li><b class="text-danger">BBmod:</b> <span id="BB_'+uRef+'">'+squadBBDMG+'</span></li>';
	insertHTML+='</ul><h6 class="pimptxt"><i class="fa fa-exclamation-circle"></i> stats are max pimped</h6>';
	$("#stats"+uRef).html(insertHTML);
}

function refreshALL() {
	scanLeaderSkills(".lsBtns",["ls"]);
	scanSkills(".bbBtns",["bb", "sbb", "es"]);
	scanSkills(".ubbBtns",["ubb"]);
	$(".unitBox").each( function(){
		if ($(this).find(".unitSelected").length) {
			var boxRef=$(this).attr("id");
			if ($("#TYPEHEADER_"+boxRef.slice(-1)).text()=="") {
				var unitID=$(this).find(".unitSelected").attr("data-unitid");
				parseUnit($(this).attr("id"), unitID);
				console.log("reparsing?")
			}
		}
	});
	generateSummary();
}

function refreshSpheres(){
	var unitRun=["A","B","C","D","E","F"];
	$.each( unitBonus, function( key, bonus ) {
		var extraBonus=$("#extra_"+key+" option:selected").attr("data-val").split(",");
		var sphere1Bonus=$("#sphere1_"+key+" option:selected").attr("data-val").split(",");
		var sphere2Bonus=$("#sphere2_"+key+" option:selected").attr("data-val").split(",");
		unitBonus[key]=[
			1 + +sphere1Bonus[0] + +sphere2Bonus[0] + +lsBonus[0] + +extraBonus[0],
			1 + +sphere1Bonus[1] + +sphere2Bonus[1] + +lsBonus[1] + +extraBonus[1],
			1 + +sphere1Bonus[2] + +sphere2Bonus[2] + +lsBonus[2] + +extraBonus[2],
			1 + +sphere1Bonus[3] + +sphere2Bonus[3] + +lsBonus[3] + +extraBonus[3],
			+sphere1Bonus[4]*100 + +sphere2Bonus[4]*100 + +lsBonus[4],
			+sphere1Bonus[5]*100 + +sphere2Bonus[5]*100 + +lsBonus[5],
			+sphere1Bonus[6]*100 + +sphere2Bonus[6]*100 + +lsBonus[6],
			+sphere1Bonus[7]*100 + +sphere2Bonus[7]*100 + +lsBonus[7],
			+sphere1Bonus[8]*100 + +sphere2Bonus[8]*100 + +lsBonus[8]
		];
	})
}

function refreshBonus(){
	/*Process for Each Unit*/
	$.each( unitBonus, function( key, bonus ) {
		if ($("#unit"+key+" .unitSelected").length) {
			var unitID=$("#unit"+key+" .unitSelected").attr("data-unitid");
			var unitType=$("#TYPEHEADER_"+key).text().toLowerCase();
			$("#HP_"+key).text(parseInt(+rawParseObj[unitID][unitType].hp * +bonus[0]));
			$("#ATK_"+key).text(parseInt(+rawParseObj[unitID][unitType].atk * +bonus[1]));
			$("#DEF_"+key).text(parseInt(+rawParseObj[unitID][unitType].def * +bonus[2]));
			$("#REC_"+key).text(parseInt(+rawParseObj[unitID][unitType].rec * +bonus[3]));
			$("#ATKBUFF_"+key).text(bonus[8]+"%");
			$("#CRIT_"+key).text(bonus[4]+"%");
			$("#SPARK_"+key).text(bonus[5]+"%");
			$("#ELEMENT_"+key).text(bonus[6]+"%");
			$("#BB_"+key).text(bonus[7]+"%");
		}
	})
}

function loadSquad() {
	/*load squad from param*/
	var sParam=urlParam('squad');
	var sParamValid=false;
	var tParam=urlParam('type');
	var sphereParam=urlParam('sphere');
	var extraParam=urlParam('exs');
	if (sParam != "") {
	    	var squadList=sParam.split(',');
	    	if (squadList.length>6)
	    		alert("OOPS! URL structure has changed to fix unit to spots OR URL is corrupted. Pls rebuild your squad/ Sorry!")
	    	else {
	    		if (!squadList[0].match(/[a-z]/i))
			    alert("OOPS! URL structure has changed to fix unit to spots OR URL is corrupted. Pls rebuild your squad/ Sorry!")
			else {
				sParamValid=true;
			    	for (var i in squadList) {
			    		for (var j in rawParseObj)
			    			if (rawParseObj[j].id==parseInt(squadList[i].substr(1))) {
			    				parseUnit("#unit"+squadList[i].charAt(0), j);
			    				break;
			    			}
			    	}
			}
			refreshALL();
			dragActivate()
	    	}
	}
	/*sphere load*/
	if (sphereParam!="" && sParamValid) {
		var sphereRef=sphereParam.split(',');
		for (var i in sphereRef) {
			var sNick=sphereRef[i].substr(3);
			$("#sphere"+sphereRef[i].substr(0,3)+" option").filter(function() { 
    				return ($(this).val()==sNick);
			}).attr("selected", true);
		}
	};
	/*ES load*/
	if (extraParam!="" && sParamValid) {
		var extraRef=extraParam.split(',');
		for (var i in extraRef) {
			var sNick=extraRef[i].substr(1);
			$("#extra_"+extraRef[i].charAt(0)+" option").filter(function() { 
    				return ($(this).val()==sNick);
			}).attr("selected", true);
		}
	};
	refreshSpheres();
	/*type load*/
	if (tParam !="" && sParamValid) {
		var typeList=tParam.split(',');
		for (var i in typeList) {
			$("#TYPEHEADER_"+typeList[i].charAt(0)).text(typeList[i].substr(1).toUpperCase());
		}
	}
	refreshBonus();
	if (sParamValid) {
		refreshParam();
	}
}

/*Calculate Squad DMG*/
function showDMG() {
	var squadTotalBB=0;
	var squadTotalSBB=0;
	var squadTotalUBB=0;
	var unitHTMLArray=[];
	/*Process for Each Unit*/
	$(".unitBox .dragBox .unitSelected").each( function(){
		var selectUnit=$(this).attr("data-unitid");
		var unitX=$(this).parents(".unitBox").attr("id").slice(-1);
		var unitT=$("#TYPEHEADER_"+unitX).text().toLowerCase();
		var unitHTML='<div class="col-xs-6 col-sm-4 col-md-4">';
		unitHTML+='<img src="'+rawParseObj[selectUnit].img+'" class="imgDMG"/>';
		/*{ [ (Unit ATK+Pimp) x (1+BaseMod+BBATK%+BB Mod) ]+FlatATK } x (1.5+CritMod) x (1.5+SparkMod) x (1.5+WeaknessMod)*/
		if (+rawParseObj[selectUnit].bbdmg!=0)
			var unitBBDMG=(+rawParseObj[selectUnit][unitT].atk * (2 + +unitBonus[unitX][1] + +unitBonus[unitX][8]/100 + +rawParseObj[selectUnit].bbdmg/100 + +unitBonus[unitX][7]/100) + +rawParseObj[selectUnit].bbflat) * (1.5 + +unitBonus[unitX][4]/100) * (1.5 + +unitBonus[unitX][5]/100) * (1.5 + +unitBonus[unitX][6]/100);
		else
			var unitBBDMG=0;
		if (+rawParseObj[selectUnit].sbbdmg!=0)
			var unitSBBDMG=(+rawParseObj[selectUnit][unitT].atk * (2 + +unitBonus[unitX][1] + +unitBonus[unitX][8]/100 + +rawParseObj[selectUnit].sbbdmg/100 + +unitBonus[unitX][7]/100) + +rawParseObj[selectUnit].sbbflat) * (1.5 + +unitBonus[unitX][4]/100) * (1.5 + +unitBonus[unitX][5]/100) * (1.5 + +unitBonus[unitX][6]/100);
		else
			var unitSBBDMG=0;
		if (+rawParseObj[selectUnit].ubbdmg!=0)
			var unitUBBDMG=(+rawParseObj[selectUnit][unitT].atk * (2 + +unitBonus[unitX][1] + +unitBonus[unitX][8]/100 + +rawParseObj[selectUnit].ubbdmg/100 + +unitBonus[unitX][7]/100) + +rawParseObj[selectUnit].ubbflat) * (1.5 + +unitBonus[unitX][4]/100) * (1.5 + +unitBonus[unitX][5]/100) * (1.5 + +unitBonus[unitX][6]/100);
		else
			var unitUBBDMG=0;
		console.log("first part " + (+rawParseObj[selectUnit][unitT].atk * (2 + +unitBonus[unitX][1] + +rawParseObj[selectUnit].bbdmg/100 + +unitBonus[unitX][7]/100) + " unit BB: "+ +rawParseObj[selectUnit].bbdmg/100));
		console.log("CRIT part "+(1.5 * +unitBonus[unitX][4]/100));
		console.log("SPARK part "+(1.5 * +unitBonus[unitX][5]/100));
		console.log("WEAKNESS part "+(1.5 * +unitBonus[unitX][6]/100));
		console.log("AGGREGATE "+ (1.5 + +unitBonus[unitX][4]/100) * (1.5 + +unitBonus[unitX][5]/100) * (1.5 + +unitBonus[unitX][6]/100));
		squadTotalBB+= +unitBBDMG;
		squadTotalSBB+= +unitSBBDMG;
		squadTotalUBB+= +unitUBBDMG;
		unitHTML+='<h5><b>BB:</b> '+(unitBBDMG/1000000).toFixed(2)+'m</h5>';
		unitHTML+='<h5><b class="text-warning">SBB:</b> '+(unitSBBDMG/1000000).toFixed(2)+'m</h5>';
		unitHTML+='<h5><b class="text-danger">UBB:</b> '+(unitUBBDMG/1000000).toFixed(2)+'m</h5>';
		unitHTML+='</div>';
		unitHTMLArray.push(unitHTML);
	});
	/*total*/
	var totalHTML='<div class="col-xs-12 col-md-12"><hr><h3><b class="text-center">Squad Total</b></h3>';
	totalHTML+='<h4><b>BB: </b>'+ +(squadTotalBB/1000000).toFixed(2) + 'm</h4>';
	totalHTML+='<h4><b class="text-warning">SBB: </b>'+ +(squadTotalSBB/1000000).toFixed(2) + 'm</h4>';
	totalHTML+='<h4><b class="text-danger">UBB: </b>'+ +(squadTotalUBB/1000000).toFixed(2) + 'm</h4><hr>';
	totalHTML+='<h5 class="text-danger"><b>*NOTE*</b> Excludes conversion buffs, Unit ES Buffs for now. Unit stats are max pimped. Assume ignore DEF, All Hits Spark, All Hits CRIT and ATK+ items used. Highest available elemental weakness is assumed active regardless of element for now. DMG calculated based on best case, all UBB DMG effects activated. DMG shown is for 1x Enemy and expressed in (m)illions.</h5>';
	totalHTML+='</div>';
	$("#unitDmgBox").html(unitHTMLArray.join(" ")+totalHTML);
}

/*POP state*/
$(window).on('popstate', function(e) {
	var state = e.originalEvent.state;
	/*squad state*/
	if (state.stateSquad) {
		loadSquad()
	}
})

/*select redditshare*/
$('#redditShare').click(function() {
    $(this).select();
});

/*expand all*/
$('#expandAll').click(function() {
    $("[id^=stats]").collapse("toggle");
    $("[id^=spheres]").collapse("toggle");
});

/*popover hide after 2s*/
$('.unitBox').on('shown.bs.popover', function () {
    var $pop = $(this);
    setTimeout(function () {
        $pop.popover('hide');
    }, 1000);
});

/*Drag Activate*/
function dragActivate(){
	$('.dragBox:not(.ui-draggable)').draggable({
    		scope:"squadunits",
    		snap:".unitBox",
    		snapMode:"inner",
    		snapTolerance:30,
    		stack:".dragBox",
    		revert:true,
    		zIndex:500,
    		cursor:"move",
    		start: function( event, ui ) {
    			unitProcessing="#"+$(this).parents(".unitBox").attr("id");
    		}
	});
}

/*Drop Event*/
$(".unitBox").on( "drop", function(e, ui) {
	if ($(this).children(".dragBox").length>0) {
		/*Exist Unit*/
		$(this).children(".dragBox").detach().appendTo(unitProcessing);
		$(ui.draggable).detach().css({top:"",left:""}).appendTo($(this));
		refreshALL();
		refreshSpheres();
		refreshBonus()
	} else {
		/*Empty*/
		$(this).html($(ui.draggable).detach().css({top:"",left:""}));
		$(unitProcessing).html(trashStr);
		$("#stats"+unitProcessing.slice(-1)).html("");
		refreshALL();
		refreshSpheres();
		refreshBonus()
	}
});

/*Calculate BTN*/
$(document).on("click", '#calculateDMG', function(e){
	e.preventDefault();
	showDMG();
	$("#damageModal").modal("show");
})

/*MoveinActive skills*/
$(document).on("click", '#moveInactive', function(e){
	e.preventDefault();
	$(".lsBtns,.bbBtns,.ubbBtns").each( function() {
		if (!$(this).hasClass("btn-success"))
			$(this).parent("div").appendTo("#inactiveSpace")
	})
	window.scrollTo(0,0);
})

/*Reset buttons*/
$(document).on("click", '#resetInactive', function(e){
	e.preventDefault();
	$(".lsBtns").each( function() {
		$(this).parent("div").appendTo("#lsSpace")
	})
	$(".bbBtns").each( function() {
		$(this).parent("div").appendTo("#bbSpace")
	})
	$(".ubbBtns").each( function() {
		$(this).parent("div").appendTo("#ubbSpace")
	})
	window.scrollTo(0,0);
})

/*Reset buttons*/
$(document).on("click", '.typeBtn', function(e){
	e.preventDefault();
	$("#TYPEHEADER_"+$(this).attr("data-unitbox")).text($(this).attr("title").toUpperCase());
	refreshSpheres();
	refreshBonus();
	refreshParam();
})

/*Trash Unit*/
$(document).on("change", '[id^=extra_],[id^=sphere1_],[id^=sphere2_]', function(e){
	e.preventDefault();
	refreshSpheres();
	refreshBonus();
	refreshParam();
})

/*Trash Unit*/
$(document).on("click", '#trashBtn', function(e){
	e.preventDefault();
	$(unitProcessing).html(trashStr);
	$("#stats"+unitProcessing.slice(-1)).html("");
	$('#searchModal').modal('hide');
	refreshALL();
	refreshSpheres();
	refreshBonus()
})

/*Quick Trash Unit*/
$(document).on("click", '.qkTrash', function(e){
	e.preventDefault();
	var tgtBox=$(this).attr("data-box").slice(-1);
	$("#unit"+tgtBox).html(trashStr);
	$("#stats"+tgtBox).html("");
	$('#searchModal').modal('hide');
	refreshALL();
	refreshSpheres();
	refreshBonus()
})

/*clearSquad*/
$(document).on("click", '#clearSquad', function(e){
	e.preventDefault();
	$(".unitBox").each( function(){
		$(this).html(trashStr);
	})
	refreshALL();
	window.scrollTo(0,0);
})

/*SearchModal Trigger*/
$(document).on("click", '.unitBox', function(e){
	e.preventDefault();
	unitProcessing="#"+$(this).attr("id");
	$('#searchModal').modal('show')
})

/*BB Btn Click*/
$(document).on("click", '.bbBtns', function(e){
	e.preventDefault();
	if ($(this).hasClass("btn-success"))
		showSkills($(this),["bb", "sbb", "es"])
	else {
		$("#recommendModal").modal('show');
		recommendSkills($(this).children(".btnDesc").text(),["bb", "sbb", "es"],bbMap)
	}
})

/*UBB Btn Click*/
$(document).on("click", '.ubbBtns', function(e){
	e.preventDefault();
	if ($(this).hasClass("btn-success"))
		showSkills($(this),["ubb"])
	else {
		$("#recommendModal").modal('show');
		recommendSkills($(this).children(".btnDesc").text(),["ubb"],bbMap)
	}
})

/*LS Btn Click*/
$(document).on("click", '.lsBtns', function(e){
	e.preventDefault();
	if ($(this).hasClass("btn-success"))
		showLeaderSkills($(this),["ls"])
	else {
		$("#recommendModal").modal('show');
		recommendSkills($(this).children(".btnDesc").text(),["ls"],lsMap)
	}
})

/*Recommend on Modal*/
$(document).on("click", '#moreUnitsBtn', function(e){
	e.preventDefault();
	var thisSkillType=$(this).attr("data-skillType");
	var thisSkill=$(this).attr("data-skill");
	console.log(thisSkill+" "+thisSkillType);
	$("#showSkillModal").modal('hide');
	if (thisSkillType=="ls")
		recommendSkills(thisSkill,["ls"],lsMap);
	else if (thisSkillType=="bb")
		recommendSkills(thisSkill,["bb", "sbb", "es"],bbMap);
	else if (thisSkillType=="ubb")
		recommendSkills(thisSkill,["ubb"],bbMap);
})

/*short url Btn Click*/
$(document).on("click", '#getShort', function(e){
	e.preventDefault();
	/*build sharing url*/
	var sParam=urlParam('squad');
	var tParam=urlParam('type');
	var sphereParam=urlParam('sphere');
	gooShorten(location.protocol + '//' + location.host + location.pathname + "?squad=" + encodeURIComponent(sParam)+"&type=" + encodeURIComponent(tParam)+"&sphere=" + encodeURIComponent(sphereParam), $('#shareURL') );
})

/*Reddit Btn Click*/
$(document).on("click", '#getReddit', function(e){
	e.preventDefault();
	var shareTxt="[View my Squad]";
	/*build reddit markdown*/
	$("#redditShare").html(shareTxt+"("+window.location.href+")");
	$("#redditModal").modal("show");
})

/*update unitspace*/
$(document).on("click", '.unitFound', function(e){
	e.preventDefault();
	$('#searchModal').modal('hide');
	parseUnit(unitProcessing, $(this).attr("data-unitid"));
	dragActivate();
	refreshALL();
	refreshSpheres();
	refreshBonus();
})

/*update unitspace by recommendation*/
$(document).on("click", '.unitRecommend', function(e){
https://github.com/touchandswipe/bravefrontier	e.preventDefault();
	var slotAdd="#unit"+$('input:radio[name="unitPos"]:checked').val();
	parseUnit(slotAdd, $(this).attr("data-unitid"));
	$('#recommendModal').modal('hide');
	dragActivate();
	refreshALL();
	refreshSpheres();
	refreshBonus()
})

/*JP Only*/
$(document).on("click", '#JPOnly', function(e){
	e.preventDefault();
	JPOnlyRun();
	dragActivate();
	refreshALL();
	refreshSpheres();
	refreshBonus()
})

/*Build DATABASE IN MEMORY*/
function buildDB(unit) {
countVar=0; /*reset count*/
/*JP Mapping*/
mapJPnames=false;
if (typeof mappedNames !== 'undefined') {
    mapJPnames=true;
}
    /*Process for Each Unit*/
    $.each( unit, function( unitKey, valObj ) {
    	/*Extract needed data*/
    	unitObj={};
        unitObj.img=imgPrePath+'unit/img/unit_ills_thum_'+valObj.id+'.png';
        /*process for JP only*/
        if (mapJPnames) {
        	strName=String(unitKey);
        	if (mappedNames.hasOwnProperty(strName))
        		unitObj.name=mappedNames[strName]+" ("+valObj.name+")";
        	else
        		unitObj.name=valObj.name;
        } else
        	unitObj.name=valObj.name;
        unitObj.cost=valObj.cost;
        unitObj.element=valObj.element;
        unitObj.id=valObj.guide_id;
        unitObj.rarity=valObj.rarity;
        if (valObj["leader skill"])
        	unitObj.ls=valObj["leader skill"];
        else
        	unitObj.ls="none";
	unitObj.bbdmg=0;
	unitObj.bbflat=0;
	if (valObj["bb"]) {
		if (valObj["bb"]["levels"]) {
			if (valObj["bb"]["levels"][9]) {
		        	unitObj.bb=valObj["bb"]["levels"][9];
		        	unitObj.bbcost=valObj["bb"]["levels"][9]["bc cost"];
		        	unitObj.bbdc=valObj["bb"]["max bc generated"];
		        	if (valObj["bb"]["levels"][9]["effects"]) {
		        		for (var k in valObj["bb"]["levels"][9]["effects"]) {
		        			if (unitObj.bbdmg==0)
    							unitObj.bbdmg=(valObj.bb.levels[9].effects[k]['bb atk%']) ? valObj.bb.levels[9].effects[k]['bb atk%'] : 0 ;
    						if (unitObj.bbflat==0)
    							unitObj.bbflat=(valObj.bb.levels[9].effects[k]['bb flat atk']) ? valObj.bb.levels[9].effects[k]['bb flat atk'] : 0;
		        		}
		        	}
			}
		};
	}
        else
        	unitObj.bb="none";
	unitObj.sbbdmg=0;
	unitObj.sbbflat=0;
	if (valObj["sbb"]) {
		if (valObj["sbb"]["levels"]) {
			if (valObj["sbb"]["levels"][9]) {
		        	unitObj.sbb=valObj["sbb"]["levels"][9];
		        	unitObj.sbbcost=valObj["sbb"]["levels"][9]["bc cost"];
		        	unitObj.sbbdc=valObj["sbb"]["max bc generated"];
		        	if (valObj["sbb"]["levels"][9]["effects"]) {
		        		for (var k in valObj["sbb"]["levels"][9]["effects"]) {
		        			if (unitObj.sbbdmg==0) {
    							unitObj.sbbdmg=(valObj.sbb.levels[9].effects[k]['bb atk%']) ? valObj.sbb.levels[9].effects[k]['bb atk%'] : 0 ;
    							unitObj.sbbdmg=(valObj.sbb.levels[9].effects[k]['bb added atk% based on hp']) ? +valObj.sbb.levels[9].effects[k]['bb base atk%'] + +valObj.sbb.levels[9].effects[k]['bb added atk% based on hp'] : unitObj.sbbdmg;
    							unitObj.sbbdmg=(valObj.sbb.levels[9].effects[k]['bb atk% inc per use']) ? +valObj.sbb.levels[9].effects[k]['bb base atk%'] + +(+valObj.sbb.levels[9].effects[k]['bb atk% inc per use'] * +valObj.sbb.levels[9].effects[k]['bb atk% max number of inc']) : unitObj.sbbdmg;
		        			}
    						if (unitObj.sbbflat==0)
    							unitObj.sbbflat=(valObj.sbb.levels[9].effects[k]['bb flat atk']) ? valObj.sbb.levels[9].effects[k]['bb flat atk'] : 0;
		        		}
		        	}
			}
		}
	}
        else
        	unitObj.sbb="none";
        unitObj.ubbdmg=0;
	unitObj.ubbflat=0;
        if (valObj["ubb"]) {
        	if (valObj["ubb"]["levels"]) {
	        	if (valObj["ubb"]["levels"][9])
	        		unitObj.ubb=valObj["ubb"]["levels"][9];
		        	if (valObj["ubb"]["levels"][9]["effects"]) {
		        		for (var k in valObj["ubb"]["levels"][9]["effects"]) {
		        			if (unitObj.ubbdmg==0) {
    							unitObj.ubbdmg=(valObj.ubb.levels[9].effects[k]['bb atk%']) ? valObj.ubb.levels[9].effects[k]['bb atk%'] : 0 ;
    							unitObj.ubbdmg=(valObj.ubb.levels[9].effects[k]['bb added atk% based on hp']) ? +valObj.ubb.levels[9].effects[k]['bb base atk%'] + +valObj.ubb.levels[9].effects[k]['bb added atk% based on hp'] : unitObj.ubbdmg;
    							unitObj.ubbdmg=(valObj.ubb.levels[9].effects[k]['bb atk% inc per use']) ? +valObj.ubb.levels[9].effects[k]['bb base atk%'] + +(+valObj.ubb.levels[9].effects[k]['bb atk% inc per use'] * +valObj.ubb.levels[9].effects[k]['bb atk% max number of inc']) : unitObj.ubbdmg;
		        			}
    						if (unitObj.ubbflat==0)
    							unitObj.ubbflat=(valObj.ubb.levels[9].effects[k]['bb flat atk']) ? valObj.ubb.levels[9].effects[k]['bb flat atk'] : 0;
		        		}
		        	}
        	}
	}
        else
        	unitObj.ubb="none";
        if (valObj["extra skill"])
        	unitObj.es=valObj["extra skill"];
        else
        	unitObj.es="none";
        /*stats - lordonly*/
        if (valObj.stats) {
        	if (valObj.stats._lord) {
        		if (valObj.imp) {
        			unitObj.lord={};
        			unitObj.lord.hp=+valObj.stats._lord.hp + +valObj.imp["max hp"];
        			unitObj.lord.atk=+valObj.stats._lord.atk + +valObj.imp["max atk"];
        			unitObj.lord.def=+valObj.stats._lord.def + +valObj.imp["max def"];
        			unitObj.lord.rec=+valObj.stats._lord.rec + +valObj.imp["max rec"];
        		} else {
        			unitObj.lord=valObj.stats._lord;
        		}
        	}
		if (valObj.stats.anima) {
        		if (valObj.imp) {
        			unitObj.anima={};
        			unitObj.anima.hp=parseInt((+valObj.stats.anima["hp max"] + +valObj.stats.anima["hp min"])/2) + +valObj.imp["max hp"];
        			unitObj.anima.atk=+valObj.stats.anima.atk + +valObj.imp["max atk"];
        			unitObj.anima.def=+valObj.stats.anima.def + +valObj.imp["max def"];
        			unitObj.anima.rec=parseInt((+valObj.stats.anima["rec max"] + +valObj.stats.anima["rec min"])/2) + +valObj.imp["max rec"];
        		}
        	}
		if (valObj.stats.breaker) {
        		if (valObj.imp) {
        			unitObj.breaker={};
        			unitObj.breaker.atk=parseInt((+valObj.stats.breaker["atk max"] + +valObj.stats.breaker["atk min"])/2) + +valObj.imp["max atk"];
        			unitObj.breaker.hp=+valObj.stats.breaker.hp + +valObj.imp["max hp"];
        			unitObj.breaker.rec=+valObj.stats.breaker.rec + +valObj.imp["max rec"];
        			unitObj.breaker.def=parseInt((+valObj.stats.breaker["def max"] + +valObj.stats.breaker["def min"])/2) + +valObj.imp["max def"];
        		}
        	}
		if (valObj.stats.oracle) {
        		if (valObj.imp) {
        			unitObj.oracle={};
        			unitObj.oracle.def=parseInt((+valObj.stats.oracle["def max"] + +valObj.stats.oracle["def min"])/2) + +valObj.imp["max def"];
        			unitObj.oracle.atk=+valObj.stats.oracle.atk + +valObj.imp["max atk"];
        			unitObj.oracle.hp=+valObj.stats.oracle.hp + +valObj.imp["max hp"];
        			unitObj.oracle.rec=parseInt((+valObj.stats.oracle["rec max"] + +valObj.stats.oracle["rec min"])/2) + +valObj.imp["max rec"];
        		}
        	}
		if (valObj.stats.guardian) {
        		if (valObj.imp) {
        			unitObj.guardian={};
        			unitObj.guardian.def=parseInt((+valObj.stats.guardian["def max"] + +valObj.stats.guardian["def min"])/2) + +valObj.imp["max def"];
        			unitObj.guardian.hp=+valObj.stats.guardian.hp + +valObj.imp["max hp"];
        			unitObj.guardian.atk=+valObj.stats.guardian.atk + +valObj.imp["max atk"];
        			unitObj.guardian.rec=parseInt((+valObj.stats.guardian["rec max"] + +valObj.stats.guardian["rec min"])/2) + +valObj.imp["max rec"];
        		}
        	}
        }
	/*Parse into MEMORY DB*/
        rawParseObj.push(unitObj);
        countVar+=1;
    }); /*Each record*/
    
	var aheadNameRead = new Bloodhound({
		datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
		queryTokenizer: Bloodhound.tokenizers.whitespace,
		local: $.map(rawParseObj, function(uName) { return { value: uName.name }; })
	});
	aheadNameRead.initialize();
	$('#searchNameBox').typeahead({
		hint: true,
		highlight: true,
		minLength: 1
	},
	{
		displayKey: 'value',
		source: aheadNameRead.ttAdapter()
	});
    
    $("#unitCount").html(countVar);
    /*Preload SphereList*/
    for (var i in sphereList) {
    	$(".input-sphere").append('<option value="'+sphereList[i].nick+'" data-val="'+sphereList[i].stats+'">'+sphereList[i].name+'</option>');
    };
    /*Preload ExtraSkill*/
    for (var i in extraList) {
    	$(".input-extra").append('<option value="'+extraList[i].nick+'" data-val="'+extraList[i].stats+'">'+extraList[i].name+'</option>');
    };
    $('#progressModal').modal('hide');
}

/*execute typeahead on selection*/
$('#searchNameBox').on('typeahead:select', function(ev, suggestion) {
	searchNameRun()
});

/*check valid json*/
function isValidJSON(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

/*AJAX Call to Google URL Shortener API*/
function gooShorten(URLtoShort,linkAsset) {
    $.ajax({
	    type: 'POST',
	    async: false,
	    url: 'https://www.googleapis.com/urlshortener/v1/url?fields=id&key='+gKey,
	    contentType: 'application/json; charset=utf-8',
	    data: '{ longUrl: "'+ URLtoShort +'"}',
		success : function(text)
	         {
	             	linkAsset.html('<a href="'+text.id+'">'+text.id+'</a>');
	         }
	})
}

/*Update URL based on search filters*/
$(document).on("click", '#searchIdBtn', function(e){
    e.preventDefault();
	searchIdRun()
})

/*Update URL based on search filters*/
$(document).on("click", '#searchNameBtn', function(e){
    e.preventDefault();
	searchNameRun()
})

/*Binds Enter KEY to BOX*/
$( "#searchIdBox" ).keypress( function( event ) {
  if ( event.which == 13 ) {
     searchIdRun()
  }
})

/*Binds Enter KEY to BOX*/
$( "#searchNameBox" ).keypress( function( event ) {
  if ( event.which == 13 ) {
     searchNameRun();
     $('#searchNameBox').typeahead("close")
  }
})
