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
	{desc:"% ATK+ First Turns", impact:"first x turns atk% (1)", criteria:["first x turns"]},
	{desc:"% DEF+ First Turns", impact:"first x turns def% (3)", criteria:["first x turns"]},
	{desc:"% CRIT+", impact:"crit% buff"},
	{desc:"% Spark DMG+", impact:"damage% for spark"},
	{desc:"% CRIT DMG+", impact:"crit multiplier%"},
	{desc:"% BB ATK%+", impact:"bb atk% buff"},
	{desc:"% BB ATK%+ on SparkCount+", impact:"spark count buff activation", impact2:"!buff.bb atk% buff", criteria:["spark count buff activation"], hideprefix:true},
	{desc:"% BB ATK%+ on DMG", impact:"damage dealt threshold buff activation", impact2:"!buff.bb atk% buff", criteria:["damage dealt threshold buff activation"], hideprefix:true},
	{desc:"% BB ATK%+ on DMGed", impact:"damage threshold buff activation", impact2:"!buff.bb atk% buff", criteria:["damage threshold buff activation"], hideprefix:true},
	{desc:"% Ignore DEF", impact:"ignore def%"},
	{desc:"Null CRITs", impact:"crit chance base resist%",hideprefix:true},
	{desc:"Null Ails", impact:"poison resist%",hideprefix:true},
	{desc:"Null Element Weakness", impact:"strong base element damage resist%",hideprefix:true},
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
	{desc:"Heal Each Turn+", impact:"turn heal low", impact2:"turn heal high",criteria:["rec% added (turn heal)"]},
	{desc:"% HP Drain", impact:"hp drain% low", impact2:"hp drain% high",chance:"hp drain chance%"},
	{desc:"% HC Fill+", impact:"hc effectiveness%"},
	{desc:"% HP Heal on ATKed", impact:"dmg% to hp% when attacked low", impact2:"dmg% to hp% when attacked high", chance:"dmg% to hp% when attacked chance%"},
	{desc:"Heal on Guard", impact:"on guard activation chance%", impact2:"!buff.gradual heal low", hideprefix:true},
	{desc:"% Angel Idol", impact:"angel idol recover chance% low", impact2:"angel idol recover chance% high", criteria:["angel idol recover counts"]},
	{desc:"% OD Fill+", impact:"od fill rate%"},
	{desc:"% Reduce DMG", impact:"dmg reduction%", chance:"dmg reduction chance%"},
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
	{desc:"% Fire Weakness DMG+", impact:"fire units do extra elemental weakness dmg", impact2:"elemental weakness multiplier%", hideprefix:true},
	{desc:"% Water Weakness DMG+", impact:"water units do extra elemental weakness dmg", impact2:"elemental weakness multiplier%", hideprefix:true},
	{desc:"% Earth Weakness DMG+", impact:"earth units do extra elemental weakness dmg", impact2:"elemental weakness multiplier%", hideprefix:true},
	{desc:"% Thunder Weakness DMG+", impact:"thunder units do extra elemental weakness dmg", impact2:"elemental weakness multiplier%", hideprefix:true},
	{desc:"% Light Weakness DMG+", impact:"light units do extra elemental weakness dmg", impact2:"elemental weakness multiplier%", hideprefix:true},
	{desc:"% Dark Weakness DMG+", impact:"dark units do extra elemental weakness dmg", impact2:"elemental weakness multiplier%", hideprefix:true},
	{desc:"% EXP+", impact:"xp gained increase%"},
];
bbMap=[
	{desc:"% HP+", impact:"max hp% increase"},
	{desc:"% ATK+", impact:"atk% buff (1)", turns:"buff turns"},
	{desc:"% DEF+", impact:"def% buff (3)", turns:"buff turns"},
	{desc:"% REC+", impact:"rec% buff (5)", turns:"buff turns"},
	{desc:"% Elemental ATK+", impact:"atk% buff (13)", impact2:"element buffed", turns:"buff turns"},
	{desc:"Gradual Heal", impact:"gradual heal low", impact2:"gradual heal high", turns:"gradual heal turns (8)"},
	{desc:"Heal", impact:"heal low", impact2:"heal high"},
	{desc:"Angel Idol", impact:"angel idol buff (12)", hideprefix:true},
	{desc:"% Angel Idol", impact:"angel idol recover chance%", turns:"angel idol buff turns (91)"},
	{desc:"Revive Dead", impact:"revive unit hp%", chance:"revive unit chance%", hideprefix:true},
	{desc:"% Convert to ATK", impact:"atk% buff (46)", impact2:"converted attribute", turns:"% converted turns"},
	{desc:"% Convert to DEF", impact:"def% buff (47)", impact2:"converted attribute", turns:"% converted turns"},
	{desc:"Cure Ails", impact:"ailments cured", hideprefix:true},
	{desc:"Null Ails", impact:"resist poison% (30)", turns:"resist status ails turns", hideprefix:true},
	{desc:"Null Stats Down", impact:"atk down resist% (120)", turns:"stat down immunity buff turns", hideprefix:true},
	{desc:"Hitcount+", impact:"hit increase/hit", turns:"hit increase buff turns (50)"},
	{desc:"% Ignore DEF", impact:"defense% ignore", turns:"defense% ignore turns (39)"},
	{desc:"% BB ATK%+", impact:"bb atk% buff", turns:"buff turns (72)"},
	{desc:"% Spark DMG+", impact:"spark dmg% buff (40)", turns:"buff turns"},
	{desc:"% Spark DMG Debuff", impact:"spark dmg% received", chance:"spark dmg received apply%", turns:"spark dmg received debuff turns (94)"},
	{desc:"% CRIT+", impact:"crit% buff (7)", turns:"buff turns"},
	{desc:"% CRIT DMG+", impact:"crit multiplier%", turns:"buff turns (84)"},
	{desc:"Element(s) Add", impact:"elements added", turns:"elements added turns"},
	{desc:"% Weakness DMG+ (Fire)", impact:"fire units do extra elemental weakness dmg", impact2:"elemental weakness multiplier%", turns:"elemental weakness buff turns", hideprefix:true},
	{desc:"% Weakness DMG+ (Water)", impact:"water units do extra elemental weakness dmg", impact2:"elemental weakness multiplier%", turns:"elemental weakness buff turns", hideprefix:true},
	{desc:"% Weakness DMG+ (Earth)", impact:"earth units do extra elemental weakness dmg", impact2:"elemental weakness multiplier%", turns:"elemental weakness buff turns", hideprefix:true},
	{desc:"% Weakness DMG+ (Thunder)", impact:"thunder units do extra elemental weakness dmg", impact2:"elemental weakness multiplier%", turns:"elemental weakness buff turns", hideprefix:true},
	{desc:"% Weakness DMG+ (Light)", impact:"light units do extra elemental weakness dmg", impact2:"elemental weakness multiplier%", turns:"elemental weakness buff turns", hideprefix:true},
	{desc:"% Weakness DMG+ (Dark)", impact:"dark units do extra elemental weakness dmg", impact2:"elemental weakness multiplier%", turns:"elemental weakness buff turns", hideprefix:true},
	{desc:"BC TurnFill", impact:"increase bb gauge gradual", turns:"increase bb gauge gradual turns (37)"},
	{desc:"BC InstaFill", impact:"increase bb gauge"},
	{desc:"% BB Fill", impact:"bb bc fill%"},
	{desc:"% OD Fill", impact:"increase od gauge%"},
	{desc:"% BC+", impact:"bc drop rate% buff (10)", turns:"drop rate buff turns"},
	{desc:"% BC Fill+", impact:"bb gauge fill rate% buff", turns:"buff turns (77)"},
	{desc:"BC Fill on ATKed", impact:"bc fill when attacked low", impact2:"bc fill when attacked high", chance:"bc fill when attacked%", turns:"bc fill when attacked turns (38)"},
	{desc:"BC Fill on Spark", impact:"bc fill on spark low", impact2:"bc fill on spark high", chance:"bc fill on spark%", turns:"bc fill on spark buff turns (111)"},
	{desc:"% HC+", impact:"hc drop rate% buff (9)", turns:"drop rate buff turns"},
	{desc:"% Reduce DMG", impact:"dmg% reduction", turns:"dmg% reduction turns (36)"},
	{desc:"% Reduce Fire DMG", impact:"mitigate fire attacks", impact2:"dmg% mitigation for elemental attacks", turns:"dmg% mitigation for elemental attacks buff turns"},
	{desc:"% Reduce Water DMG", impact:"mitigate water attacks", impact2:"dmg% mitigation for elemental attacks", turns:"dmg% mitigation for elemental attacks buff turns"},
	{desc:"% Reduce Earth DMG", impact:"mitigate earth attacks", impact2:"dmg% mitigation for elemental attacks", turns:"dmg% mitigation for elemental attacks buff turns"},
	{desc:"% Reduce Thunder DMG", impact:"mitigate thunder attacks", impact2:"dmg% mitigation for elemental attacks", turns:"dmg% mitigation for elemental attacks buff turns"},
	{desc:"% Reduce Light DMG", impact:"mitigate light attacks", impact2:"dmg% mitigation for elemental attacks", turns:"dmg% mitigation for elemental attacks buff turns"},
	{desc:"% Reduce Dark DMG", impact:"mitigate dark attacks", impact2:"dmg% mitigation for elemental attacks", turns:"dmg% mitigation for elemental attacks buff turns"},
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
	        outputHTML.push('<div class="col-xs-3 col-sm-3 col-md-2 col-lg-2"><img src="'+rawParseObj[i].img+'" data-unitid="'+i+'" class="unitFound" title="ADD to Squad - '+rawParseObj[i].name+" "+rawParseObj[i].rarity+"*"+'" /></div>');
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
	        outputHTML.push('<div class="col-xs-3 col-sm-3 col-md-2 col-lg-2"><img src="'+rawParseObj[i].img+'" data-unitid="'+i+'" class="unitFound" title="ADD to Squad - '+rawParseObj[i].name+" ("+rawParseObj[i].rarity+"*"+')" /></div>');
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

function scanSkills(classBtns,scanScope) {
	resetBtns(classBtns);
	/*iterate thru selected units*/
	$( ".unitBox .unitSelected" ).each( function() {
		var selectUnit=$(this).attr("data-unitid");
		/*variables for coping with inconsistent data structure*/
		var ATKdown=false;
		var DEFdown=false;
		for (i in scanScope) {
			if (rawParseObj[selectUnit][scanScope[i]] != "none") {
				var scanArray=rawParseObj[selectUnit][scanScope[i]].effects;
				console.log(JSON.stringify(scanArray));
				/*add ES triggered Effects to BB and SBB*/
				if (scanScope[i]=="es") {
					var esTriggered=false;
					for (j in scanArray)
						if (scanArray[j].hasOwnProperty("triggered effect")) {
							scanArray=scanArray[j]["triggered effect"];
							esTriggered=true;
						}
				}
				if (scanScope[i]!="es" || esTriggered) {
					/*Scan mapping*/
					for (j in scanArray) {
						for (k in bbMap) {
							/*match exist*/
							if (scanArray[j][bbMap[k].impact]) {
								$(classBtns).each( function() {
									if ($(this).text()==bbMap[k].desc) {
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
	/*iterate thru leader spots and selected unit images*/
	$("#unitA .unitSelected,#unitB .unitSelected").each(function() {
		var selectUnit=$(this).attr("data-unitid");
		for (i in scanScope) {
			if (rawParseObj[selectUnit][scanScope[i]] != "none") {
				var scanArray=rawParseObj[selectUnit][scanScope[i]].effects;
				/*Scan mapping*/
				for (j in scanArray) {
					for (k in lsMap) {
						/*match exist*/
						if (scanArray[j].hasOwnProperty(lsMap[k].impact)) {
							$(classBtns).each( function() {
								if ($(this).text()==lsMap[k].desc) {
									/*create list of units with skills*/
									if ($(this).attr("data-found"))
										$(this).attr("data-found", $(this).attr("data-found")+","+selectUnit)
									else
										$(this).attr("data-found",selectUnit)
									$(this).removeAttr("disabled");
									if ($(this).hasClass("btn-default"))
										$(this).toggleClass("btn-default btn-success");
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
					for (j in scanArray)
						if (scanArray[j].hasOwnProperty("triggered effect")) {
							scanArray=scanArray[j]["triggered effect"];
							esTriggered=true;
						}
				}
				if (scanScope[i]!="es" || esTriggered) {
					/*Scan mapping*/
					for (j in scanArray) {
						/*match*/
						if (scanArray[j].hasOwnProperty(bbMap[bbMapKey].impact)) {
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
							skillsHTML+='</br>';
						}
						/*ATK Down Inconsistency*/
						if (bbMap[bbMapKey].desc=="% ATK-Down") {
							if (scanArray[j].hasOwnProperty("buff #1"))
								if (scanArray[j]["buff #1"]["atk% buff (2)"]) {
									skillsHTML+=scanArray[j]["buff #1"][bbMap[bbMapKey].chance]+' % Chance ';
									skillsHTML+=scanArray[j]["buff #1"]["atk% buff (2)"]+bbMap[bbMapKey].desc+' '+scanArray[j][bbMap[bbMapKey].turns]+'Turns';
									skillsHTML+=' <kbd>'+scanArray[j]["target area"].toUpperCase()+'/'+scanArray[j]["target type"].toUpperCase()+'</kbd>';
								}
							if (scanArray[j].hasOwnProperty("buff #2"))
								if (scanArray[j]["buff #2"]["atk% buff (2)"]) {
									skillsHTML+=scanArray[j]["buff #2"][bbMap[bbMapKey].chance]+' % Chance ';
									skillsHTML+=scanArray[j]["buff #2"]["atk% buff (2)"]+bbMap[bbMapKey].desc+' '+scanArray[j][bbMap[bbMapKey].turns]+'Turns';
									skillsHTML+=' <kbd>'+scanArray[j]["target area"].toUpperCase()+'/'+scanArray[j]["target type"].toUpperCase()+'</kbd>';
							} 
						}
						/*DEF Down Inconsistency*/
						if (bbMap[bbMapKey].desc=="% DEF-Down") {
							if (scanArray[j].hasOwnProperty("buff #1"))
								if (scanArray[j]["buff #1"]["def% buff (4)"]) {
									skillsHTML+=scanArray[j]["buff #1"][bbMap[bbMapKey].chance]+' % Chance ';
									skillsHTML+=scanArray[j]["buff #1"]["def% buff (4)"]+bbMap[bbMapKey].desc+' '+scanArray[j][bbMap[bbMapKey].turns]+'Turns';
									skillsHTML+=' <kbd>'+scanArray[j]["target area"].toUpperCase()+'/'+scanArray[j]["target type"].toUpperCase()+'</kbd>';
								}
							if (scanArray[j].hasOwnProperty("buff #2"))
								if (scanArray[j]["buff #2"]["def% buff (4)"]) {
									skillsHTML+=scanArray[j]["buff #2"][bbMap[bbMapKey].chance]+' % Chance ';
									skillsHTML+=scanArray[j]["buff #2"]["def% buff (4)"]+bbMap[bbMapKey].desc+' '+scanArray[j][bbMap[bbMapKey].turns]+'Turns';
									skillsHTML+=' <kbd>'+scanArray[j]["target area"].toUpperCase()+'/'+scanArray[j]["target type"].toUpperCase()+'</kbd>';
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
					/*match*/
					if (scanArray[j].hasOwnProperty(lsMap[lsMapKey].impact)) {
						skillsHTML+='<b>'+scanScope[i].toUpperCase()+': </b>';
						if (lsMap[lsMapKey].chance)
							skillsHTML+=scanArray[j][lsMap[lsMapKey].chance]+' % Chance ';
						if (!lsMap[lsMapKey].hideprefix)
							skillsHTML+=scanArray[j][lsMap[lsMapKey].impact]+' ';
						if (lsMap[lsMapKey].impact2)
							if (lsMap[lsMapKey].impact2.charAt(0)!="!")
								skillsHTML+='('+scanArray[j][lsMap[lsMapKey].impact2]+') '
							else {
								/*Parse nested string*/
								var nestedArray=lsMap[lsMapKey].impact2.substr(1).split('.');
								var nestedO=scanArray[j];
								for (m in nestedArray)
									if (nestedArray[m] in nestedO)
										nestedO=nestedO[nestedArray[m]]
								skillsHTML+='('+nestedO+') '
							}
						skillsHTML+=lsMap[lsMapKey].desc;
						if (lsMap[lsMapKey].turns)
							skillsHTML+=' '+scanArray[j][lsMap[lsMapKey].turns]+'Turns'
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

function generateSummary() {
/*generate squad summary*/
	var sCost=0;
	var sElement={fire:0,water:0,earth:0,thunder:0,light:0,dark:0};
	var sElementCount=0;
	var sStats=["% HP","% ATK","% DEF","% REC"];
	var sTotalStats={"% HP":0,"% ATK":0,"% DEF":0,"% REC":0};
	var sHTML="";
	var sParam=[];
	$(".unitBox .unitSelected").each(function(){
		var selectUnit=$(this).attr("data-unitid");
		/*totals cost*/
		if ($(this).parent().attr("id")!="unitB")
			sCost+=parseInt(rawParseObj[selectUnit].cost);
		/*builds element*/
		sElement[rawParseObj[selectUnit].element]+=1;
		/*builds id array*/
		sParam.push(rawParseObj[selectUnit].id);
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
				/*identify the skill*/
				for (m in lsMap)
					if (lsKey==lsMap[m].desc) {
						var lsMapKey=m;
						break;
					}
				if ($(this).parent().attr("data-found")) {
					var tArray=$(this).parent().attr("data-found").split(',');
					for (j in tArray) {
						var scanArray=rawParseObj[tArray[j]].ls.effects;
						for (k in scanArray)
							if (scanArray[k].hasOwnProperty([lsMap[lsMapKey].impact])) {
								sTotalStats[lsKey]+=parseInt(scanArray[k][lsMap[lsMapKey].impact]);
								break;
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
	/*generate HTML*/
	sHTML+='<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center htfixed2"><span id="share_this_icon"></span><h5 style="margin-top:4px;">Share Squad</h5></div>';
	sHTML+='<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center htfixed2"><i class="fa fa-link fa-2x sumIcon" title="Squad Link"></i><h5 id="shareURL"></h5></div>';
	sHTML+='<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center htfixed2"><i class="fa fa-dollar fa-2x sumIcon" title="Unit Cost (less Ally)"></i><h5>'+sCost+' Cost</h5></div>';
	sHTML+='<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center htfixed2"><i class="fa fa-users fa-2x sumIcon" title="Unique Elements"></i><h5>'+sElementCount+' Unique</br>Element(s)</h5></div>';
	sHTML+='<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center htfixed2"><i class="fa fa-dashboard fa-2x sumIcon" title="Leader STATS Potential"></i><h5>'+lsStatsHTML.join("</br>")+' </h5></div>';
	$("#SummarySpace").html(sHTML);
	/*update state*/
	var state = { stateSquad: sParam.join() };
	history.pushState(state, "squad state", "?squad="+encodeURIComponent(sParam.join()) );
	/*build sharing url*/
	gooShorten(location.protocol + '//' + location.host + location.pathname + "?squad=" + encodeURIComponent(sParam.join()), $('#shareURL') );
	/*load sharethis buttons*/
	stWidget.addEntry({
		"service":"sharethis",
		"element":document.getElementById('share_this_icon'),
		"url":"http://sharethis.com",
		"title":"sharethis",
		"type":"large",
		"text":"ShareThis" ,
		"image":"http://w.sharethis.com/images/sharethis_32.png",
		"summary":"Check out the squad i built with Squad Builder by Brave Frontier PROs."   
	});
}

function refreshALL() {
	scanLeaderSkills(".lsBtns",["ls"]);
	scanSkills(".bbBtns",["bb", "sbb", "es"]);
	//scanSkills(".ubbBtns",["ubb"]);
	generateSummary();
}

function loadSquad() {
	/*load squad from param*/
	var sParam=urlParam('squad');
	if (sParam != "") {
	    	var squadList=sParam.split(',');
	    	var squadElements=["#unitA","#unitB","#unitC","#unitD","#unitE","#unitF"];
	    	if (squadList.length>6)
	    		alert("Error: URL is corrupted.")
	    	else {
		    	for (i in squadList) {
		    		for (j in rawParseObj)
		    			if (rawParseObj[j].id==squadList[i]) {
		    				$(squadElements[i]).html('<img src="'+rawParseObj[j].img+'" data-unitid="'+j+'" class="unitSelected" title="'+rawParseObj[j].name+" ("+rawParseObj[j].rarity+'*)" />');
		    				break;
		    			}
		    	}
	    		refreshALL()
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

/*Sync New Button*/
$(document).on("click", '#syncNewBtn', function(e){
	e.preventDefault();
	resetLocalData("skillsguidejapan",false)
})

/*Trash Unit*/
$(document).on("click", '#trashBtn', function(e){
	e.preventDefault();
	$(unitProcessing).html(trashStr);
	$('#searchModal').modal('hide');
	refreshALL();
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
	showSkills($(this),["bb", "sbb", "es"])
})

/*UBB Btn Click*/
$(document).on("click", '.ubbBtns', function(e){
	e.preventDefault();
	showSkills($(this),["ubb"])
})

/*LS Btn Click*/
$(document).on("click", '.lsBtns', function(e){
	e.preventDefault();
	showLeaderSkills($(this),["ls"])
})

/*update unitspace*/
$(document).on("click", '.unitFound', function(e){
	e.preventDefault();
	$('#searchModal').modal('hide');
	$(unitProcessing).html('<img src="'+rawParseObj[$(this).attr("data-unitid")].img+'" data-unitid="'+$(this).attr("data-unitid")+'" class="unitSelected" title="'+rawParseObj[$(this).attr("data-unitid")].name+" ("+rawParseObj[$(this).attr("data-unitid")].rarity+'*)" />');
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
        		unitObj.name=mappedNames[strName];
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
	if (valObj["bb"])
        	unitObj.bb=valObj["bb"]["levels"][9];
        else
        	unitObj.bb="none";
	if (valObj["sbb"])
        	unitObj.sbb=valObj["sbb"]["levels"][9];
        else
        	unitObj.sbb="none";
        if (valObj["ubb"])
        	unitObj.ubb=valObj["ubb"]["levels"][9];
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
