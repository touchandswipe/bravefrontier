countVar=0;
unitProcessing="";
trashStr='<i class="fa fa-plus fa-5x"></i>';
gKey = 'AIzaSyCyF9yZ9Lyl57HAQXtzrd3yONewk4-fGSg';
rawParseObj=[];
lsMap=[
	{desc:"% HP", impact:"hp% buff",criteria:["elements buffed","unique elements required","bb gauge above % buff requirement","hp above % buff requirement","hp below % buff requirement","gender required"]},
	{desc:"% ATK", impact:"atk% buff",criteria:["elements buffed","unique elements required","bb gauge above % buff requirement","hp above % buff requirement","hp below % buff requirement","gender required"]},
	{desc:"% DEF", impact:"def% buff",criteria:["elements buffed","unique elements required","bb gauge above % buff requirement","hp above % buff requirement","hp below % buff requirement","gender required"]},
	{desc:"% REC", impact:"rec% buff",criteria:["elements buffed","unique elements required","bb gauge above % buff requirement","hp above % buff requirement","hp below % buff requirement","gender required"]},
	{desc:"% ATK+ by HP", impact:"atk% base buff", impact2:"atk% extra buff based on hp", criteria:["buff proportional to hp"]},
	{desc:"% DEF+ by HP", impact:"def% base buff", impact2:"def% extra buff based on hp", criteria:["buff proportional to hp"]},
	{desc:"% ATK+ on X DMG Dealt", impact:"!damage dealt threshold buff activation||buff.atk% buff (1)", impact2:"!buff.atk% buff (1)", turns:"!buff.buff turns (1)", criteria:["damage dealt threshold buff activation"], hideprefix:true},
	{desc:"% ATK+ Turn after CRIT", impact:"!on crit activation chance%||buff.atk% buff (1)", impact2:"!buff.atk% buff (1)", turns:"!buff.buff turns (1)", criteria:["on crit activation chance%"], hideprefix:true},
	{desc:"% ATK+ First Turns", impact:"first x turns atk% (1)", criteria:["first x turns"]},
	{desc:"% DEF+ First Turns", impact:"first x turns def% (3)", criteria:["first x turns"]},
	{desc:"% CRIT+", impact:"crit% buff"},
	{desc:"% Spark DMG+", impact:"damage% for spark",stack:true},
	{desc:"% Spark DMG Debuff", impact:"spark debuff%",chance:"spark debuff chance%",criteria:["spark debuff turns"]},
	{desc:"% Spark DMG+ on SparkCount",stack:true, impact:"!spark count buff activation||buff.spark dmg% buff", impact2:"!buff.spark dmg% buff", turns:"!buff turns (40)",criteria:["spark count buff activation"], hideprefix:true},
	{desc:"% DMG+ to Ailed Enemy", impact:"atk% buff when enemy has ailment"},
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

function recommendSkills(e,skillType,mapArray) {
	/*skillType are ls,bb,sbb,es,ubb in array*/
	var minRarity=7;
	var matchUnits=[];
	/*scan for skill*/
	var skillDesc=e.children(".btnDesc").text();
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
	var leadCount=0;
	/*iterate thru leader spots and selected unit images*/
	$("#unitA .dragBox .unitSelected,#unitB .dragBox .unitSelected").each(function() {
		var selectUnit=$(this).attr("data-unitid");
		leadCount+=1;
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
										if ($(this).attr("data-found").split(',').length<leadCount) {
										/*stop dupe skills w/ criteria*/
											$(this).attr("data-found", $(this).attr("data-found")+","+selectUnit)
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
							skillsHTML+='<br/>';
						}
						/*Element add breakdown*/
						if (bbMap[bbMapKey].impact=="elements dummy") {
							if (scanArray[j].hasOwnProperty("elements added")) {
								skillsHTML+='<b>'+scanScope[i].toUpperCase()+': </b>';
								skillsHTML+='Add '+scanArray[j]["elements added"]+' to ATK '+scanArray[j][bbMap[bbMapKey].turns]+'Turns';
								skillsHTML+=' <kbd>'+scanArray[j]["target area"].toUpperCase()+'/'+scanArray[j]["target type"].toUpperCase()+'</kbd>';
								skillsHTML+='<br/>';
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
									skillsHTML+='<br/>';
								}
							if (scanArray[j].hasOwnProperty("buff #2"))
								if (scanArray[j]["buff #2"]["atk% buff (2)"]) {
									skillsHTML+='<b>'+scanScope[i].toUpperCase()+': </b>';
									skillsHTML+=scanArray[j]["buff #2"][bbMap[bbMapKey].chance]+' % Chance ';
									skillsHTML+=scanArray[j]["buff #2"]["atk% buff (2)"]+bbMap[bbMapKey].desc+' '+scanArray[j][bbMap[bbMapKey].turns]+'Turns';
									skillsHTML+=' <kbd>'+scanArray[j]["target area"].toUpperCase()+'/'+scanArray[j]["target type"].toUpperCase()+'</kbd>';
									skillsHTML+='<br/>';
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
									skillsHTML+='<br/>';
								}
							if (scanArray[j].hasOwnProperty("buff #2"))
								if (scanArray[j]["buff #2"]["def% buff (4)"]) {
									skillsHTML+='<b>'+scanScope[i].toUpperCase()+': </b>';
									skillsHTML+=scanArray[j]["buff #2"][bbMap[bbMapKey].chance]+' % Chance ';
									skillsHTML+=scanArray[j]["buff #2"]["def% buff (4)"]+bbMap[bbMapKey].desc+' '+scanArray[j][bbMap[bbMapKey].turns]+'Turns';
									skillsHTML+=' <kbd>'+scanArray[j]["target area"].toUpperCase()+'/'+scanArray[j]["target type"].toUpperCase()+'</kbd>';
									skillsHTML+='<br/>';
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
							skillsHTML+='</br>';
						}
				}
				
			}
		}
		skillsHTML+='<hr>';
	}
	/*load dom*/
	$('#showSkillBody').html(skillsHTML);
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

/*generate squad summary*/
function generateSummary() {
	var sCost=0;
	var bbSpam={"MAX BB DC":0,"BB Cost":0,"MAX SBB DC":0,"SBB Cost":0};
	var sElement={fire:0,water:0,earth:0,thunder:0,light:0,dark:0};
	var sElementCount=0;
	var sStats=["% HP","% ATK","% DEF","% REC"];
	var sTotalStats={"% HP":0,"% ATK":0,"% DEF":0,"% REC":0};
	var sHTML="";
	var sParam=[];
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
		sParam.push($(this).parents(".unitBox").attr("id").slice(-1)+rawParseObj[selectUnit].id);
	})
	/*counts element*/
	for (var key in sElement)
		if (sElement[key]!=0)
			sElementCount+=1
	/*generate LS stats total*/
	for (i in sStats) {
		$(".lsBtns .btnDesc").each( function() {
			lsKey=$(this).text();
			if (lsKey==sStats[i]) {
				/*match desired skill to summarise*/
				for (m in lsMap)
					if (lsKey==lsMap[m].desc) {
						var lsMapKey=m;
						break;
					}
				/*match*/
				if ($(this).parent().attr("data-found")) {
					var tArray=$(this).parent().attr("data-found").split(',');
					for (j in tArray) {
						var scanArray=rawParseObj[tArray[j]].ls.effects;
						for (k in scanArray)
							if (scanArray[k].hasOwnProperty([lsMap[lsMapKey].impact])) {
								sTotalStats[lsKey]+=parseInt(scanArray[k][lsMap[lsMapKey].impact]);
								/*break; Removal to support dupe skills stacks */
							}
					}
				} else
					sTotalStats[lsKey]+=0;
				return false; /*break each loop*/
			}
		})
	}
	/*generate LS Stats Summary*/
	var lsStatsHTML=[];
	for (var key in sTotalStats) {
		if (sTotalStats[key]!=0)
			lsStatsHTML.push(sTotalStats[key]+"<b>"+key+"</b>");
	}
	if (lsStatsHTML.length==0)
		lsStatsHTML.push("No STATS Bonus")
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
	var sparkHTML='<span class="text-success"><b>TOTAL '+ (+sparkLSTotal + +sparkBBTotal + +sparkUBBTotal) +'%</b></span><br/>';
	sparkHTML+="LS <b>"+sparkLSTotal+"%</b><br/>";
	sparkHTML+="BB/SBB <b>"+sparkBBTotal+"%</b><br/>";
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
	var critHTML='<span class="text-success"><b>TOTAL '+ (+critLSTotal + +critBBTotal + +critUBBTotal) +'%</b></span><br/>';
	critHTML+="LS <b>"+critLSTotal+"%</b><br/>";
	critHTML+="BB/SBB <b>"+critBBTotal+"%</b><br/>";
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
	var bbatkHTML='<span class="text-success"><b>TOTAL '+ (+bbatkLSTotal + +bbatkBBTotal + +bbatkUBBTotal) +'%</b></span><br/>';
	bbatkHTML+="LS <b>"+bbatkLSTotal+"%</b><br/>";
	bbatkHTML+="BB/SBB <b>"+bbatkBBTotal+"%</b><br/>";
	bbatkHTML+="UBB <b>"+bbatkUBBTotal+"%</b>";
	/*ATK summary*/
	var atkLS=["% ATK+"];
	var atkBB=["% ATK+"];
	var atkUBB=["% ATK+"];
	var atkLSTotal=0;
	var atkBBTotal=0;
	var atkUBBTotal=0;
	for (var i in atkLS)
		atkLSTotal+=getTop(".lsBtns",atkLS[i]);
	for (var i in atkBB)
		atkBBTotal+=getTop(".bbBtns",atkBB[i]);
	for (var i in atkUBB)
		atkUBBTotal+=getTop(".ubbBtns",atkUBB[i]);
	var atkHTML='<span class="text-success"><b>TOTAL '+ (+atkLSTotal + +atkBBTotal + +atkUBBTotal) +'%</b></span><br/>';
	atkHTML+="LS <b>"+atkLSTotal+"%</b><br/>";
	atkHTML+="BB/SBB <b>"+atkBBTotal+"%</b><br/>";
	atkHTML+="UBB <b>"+atkUBBTotal+"%</b>";
	/*DEF summary*/
	var defLS=["% DEF+"];
	var defBB=["% DEF+"];
	var defUBB=["% DEF+"];
	var defLSTotal=0;
	var defBBTotal=0;
	var defUBBTotal=0;
	for (var i in defLS)
		defLSTotal+=getTop(".lsBtns",defLS[i]);
	for (var i in defBB)
		defBBTotal+=getTop(".bbBtns",defBB[i]);
	for (var i in defUBB)
		defUBBTotal+=getTop(".ubbBtns",defUBB[i]);
	var defHTML='<span class="text-success"><b>TOTAL '+ (+defLSTotal + +defBBTotal + +defUBBTotal) +'%</b></span><br/>';
	defHTML+="LS <b>"+defLSTotal+"%</b><br/>";
	defHTML+="BB/SBB <b>"+defBBTotal+"%</b><br/>";
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
	var elementWkHTML="Fire <b>"+elementTotal[0]+"%</b><br/>";
	elementWkHTML+="Water <b>"+elementTotal[1]+"%</b><br/>";
	elementWkHTML+="Earth <b>"+elementTotal[2]+"%</b><br/>";
	elementWkHTML+="Thunder <b>"+elementTotal[3]+"%</b><br/>";
	elementWkHTML+="Light <b>"+elementTotal[4]+"%</b><br/>";
	elementWkHTML+="Dark <b>"+elementTotal[5]+"%</b><br/>";
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
	/*generate HTML*/
	sHTML+='<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center htfixed2"><span id="share_this_icon"></span><h5 style="margin-top:4px;">Share Squad</h5></div>';
	sHTML+='<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center htfixed2"><i class="fa fa-link fa-2x sumIcon" title="Squad Link"></i><h5 id="shareURL"><a href="#" role="button" id="getShort" class="btn btn-sm btn-default">Get short URL</a></h5></div>';
	sHTML+='<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center htfixed2"><i class="fa fa-reddit-alien fa-2x sumIcon" title="Squad Link"></i><h5><a href="#" role="button" id="getReddit" class="btn btn-sm btn-default">Reddit Markdown</a></h5></div>';
	sHTML+='<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center htfixed2"><i class="fa fa-dollar fa-2x sumIcon" title="Unit Cost (less Ally)"></i><h5>'+sCost+' Cost</h5></div>';
	sHTML+='<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center htfixed2"><i class="fa fa-users fa-2x sumIcon" title="Unique Elements"></i><h5>'+sElementCount+' Unique</br>Element(s)</h5></div>';
	sHTML+='<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center htfixed2"><i class="fa fa-dashboard fa-3x sumIcon" title="Leader STATS Potential"></i><h6>'+lsStatsHTML.join("</br>")+' </h6></div>';
	sHTML+='<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center htfixed2"><h4 class="bbspam sumIcon" style="margin-top:0;" title="ATK Buff Potential"><b>ATK<br/>BUFF</b></h4><h6>'+atkHTML+'</h6></div>';
	sHTML+='<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center htfixed2"><h4 class="bbspam sumIcon" style="margin-top:0;" title="DEF Buff Potential"><b>DEF<br/>BUFF</b></h4><h6>'+defHTML+'</h6></div>';
	sHTML+='<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center htfixed2"><h4 class="bbspam sumIcon" style="margin-top:0;" title="Spark DMG Potential"><b>SPARK<br/>DMG</b></h4><h6>'+sparkHTML+'</h6></div>';
	sHTML+='<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center htfixed2"><h4 class="bbspam sumIcon" style="margin-top:0;" title="CRIT DMG Potential"><b>CRIT<br/>DMG</b></h4><h6>'+critHTML+'</h6></div>';
	sHTML+='<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center htfixed2"><h4 class="bbspam sumIcon" style="margin-top:0;" title="BB ATK%+ Buff Potential"><b>BB ATK%<br/>BUFF</b></h4><h6>'+bbatkHTML+'</h6></div>';
	sHTML+='<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center htfixed2"><h4 class="bbspam sumIcon" style="margin-top:0;" title="Elemental Weakness Potential (LS, BB, SBB, UBB Total)"><b>Elemental<br/>Weakness DMG</b></h4><h6>'+elementWkHTML+'</h6></div>';
	sHTML+='<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center htfixed2"><h4 class="bbspam sumIcon" style="margin-top:0;" title="BB Spam"><b>BB<br/>SPAM</b></h4><h6>'+bbSpamHTML.join("<br/>")+'</h6></div>';
	$("#SummarySpace").html(sHTML);
	/*update state*/
	var state = { stateSquad: sParam.join() };
	history.pushState(state, "squad state", "?squad="+encodeURIComponent(sParam.join()) );
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

function refreshALL() {
	scanLeaderSkills(".lsBtns",["ls"]);
	scanSkills(".bbBtns",["bb", "sbb", "es"]);
	scanSkills(".ubbBtns",["ubb"]);
	generateSummary();
}

function loadSquad() {
	/*load squad from param*/
	var sParam=urlParam('squad');
	if (sParam != "") {
	    	var squadList=sParam.split(',');
	    	//var squadElements=["#unitA","#unitB","#unitC","#unitD","#unitE","#unitF"];
	    	if (squadList.length>6)
	    		alert("OOPS! URL structure has changed to fix unit to spots OR URL is corrupted. Pls rebuild your squad/ Sorry!")
	    	else {
	    		if (!squadList[0].match(/[a-z]/i))
			    alert("OOPS! URL structure has changed to fix unit to spots OR URL is corrupted. Pls rebuild your squad/ Sorry!")
			else {
			    	for (i in squadList) {
			    		for (j in rawParseObj)
			    			if (rawParseObj[j].id==parseInt(squadList[i].substr(1))) {
			    				$("#unit"+squadList[i].charAt(0)).html('<div class="dragBox"><img src="'+rawParseObj[j].img+'" data-unitid="'+j+'" class="unitSelected" title="'+rawParseObj[j].name+" ("+rawParseObj[j].rarity+'*)" /><kbd class="sRarity">'+rawParseObj[j].rarity+'<i class="fa fa-star"></i></kbd></div>');
			    				break;
			    			}
			    	}
		    		refreshALL();
		    		dragActivate()
			}
	    	}
	}
}

/*POP state*/
$(window).on('popstate', function(e) {
	var state = e.originalEvent.state;
	/*squad state*/
	if (state.stateSquad) {
		loadSquad()
	}
})

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
	} else {
		/*Empty*/
		$(this).html($(ui.draggable).detach().css({top:"",left:""}));
		$(unitProcessing).html(trashStr);
		refreshALL();
	}
});

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

/*Trash Unit*/
$(document).on("click", '#trashBtn', function(e){
	e.preventDefault();
	$(unitProcessing).html(trashStr);
	$('#searchModal').modal('hide');
	refreshALL();
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
		recommendSkills($(this),["bb", "sbb", "es"],bbMap)
	}
})

/*UBB Btn Click*/
$(document).on("click", '.ubbBtns', function(e){
	e.preventDefault();
	if ($(this).hasClass("btn-success"))
		showSkills($(this),["ubb"])
	else {
		$("#recommendModal").modal('show');
		recommendSkills($(this),["ubb"],bbMap)
	}
})

/*LS Btn Click*/
$(document).on("click", '.lsBtns', function(e){
	e.preventDefault();
	if ($(this).hasClass("btn-success"))
		showLeaderSkills($(this),["ls"])
	else {
		$("#recommendModal").modal('show');
		recommendSkills($(this),["ls"],lsMap)
	}
})

/*short url Btn Click*/
$(document).on("click", '#getShort', function(e){
	e.preventDefault();
	/*build sharing url*/
	var sParam=urlParam('squad');
	gooShorten(location.protocol + '//' + location.host + location.pathname + "?squad=" + encodeURIComponent(sParam), $('#shareURL') );
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
	$(unitProcessing).html('<div class="dragBox"><img src="'+rawParseObj[$(this).attr("data-unitid")].img+'" data-unitid="'+$(this).attr("data-unitid")+'" class="unitSelected" title="'+rawParseObj[$(this).attr("data-unitid")].name+" ("+rawParseObj[$(this).attr("data-unitid")].rarity+'*)" /><kbd class="sRarity">'+rawParseObj[$(this).attr("data-unitid")].rarity+'<i class="fa fa-star"></i></kbd></div>');
	dragActivate();
	refreshALL();
})

/*update unitspace by recommendation*/
$(document).on("click", '.unitRecommend', function(e){
https://github.com/touchandswipe/bravefrontier	e.preventDefault();
	var slotAdd="#unit"+$('input:radio[name="unitPos"]:checked').val();
	$(slotAdd).html('<div class="dragBox"><img src="'+rawParseObj[$(this).attr("data-unitid")].img+'" data-unitid="'+$(this).attr("data-unitid")+'" class="unitSelected" title="'+rawParseObj[$(this).attr("data-unitid")].name+" ("+rawParseObj[$(this).attr("data-unitid")].rarity+'*)" /><kbd class="sRarity">'+rawParseObj[$(this).attr("data-unitid")].rarity+'<i class="fa fa-star"></i></kbd></div>');
	$('#recommendModal').modal('hide');
	dragActivate();
	refreshALL();
})

/*JP Only*/
$(document).on("click", '#JPOnly', function(e){
	e.preventDefault();
	JPOnlyRun();
	dragActivate();
	refreshALL();
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
	if (valObj["bb"]) {
		if (valObj["bb"]["levels"]) {
			if (valObj["bb"]["levels"][9]) {
		        	unitObj.bb=valObj["bb"]["levels"][9];
		        	unitObj.bbcost=valObj["bb"]["levels"][9]["bc cost"];
		        	unitObj.bbdc=valObj["bb"]["max bc generated"];
			}
		}
	}
        else
        	unitObj.bb="none";
	if (valObj["sbb"]) {
		if (valObj["sbb"]["levels"]) {
			if (valObj["sbb"]["levels"][9]) {
		        	unitObj.sbb=valObj["sbb"]["levels"][9];
		        	unitObj.sbbcost=valObj["sbb"]["levels"][9]["bc cost"];
		        	unitObj.sbbdc=valObj["sbb"]["max bc generated"];
			}
		}
	}
        else
        	unitObj.sbb="none";
        if (valObj["ubb"]) {
        	if (valObj["ubb"]["levels"]) {
	        	if (valObj["ubb"]["levels"][9])
	        		unitObj.ubb=valObj["ubb"]["levels"][9];
        	}
	}
        else
        	unitObj.ubb="none";
        if (valObj["extra skill"])
        	unitObj.es=valObj["extra skill"];
        else
        	unitObj.es="none";
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
     searchNameRun()
  }
})
