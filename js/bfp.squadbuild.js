countVar=0;
rawParseObj=[];
bbMap=[
	{desc:"% ATK+", impact:"atk% buff (1)", turns:"buff turns"},
	{desc:"% DEF+", impact:"def% buff (3)", turns:"buff turns"},
	{desc:"% REC+", impact:"rec% buff (5)", turns:"buff turns"},
	{desc:"% HP+", impact:"max hp% increase", turns:"buff turns"},
	{desc:"Gradual Heal", impact:"gradual heal low", impact2:"gradual heal high", turns:"gradual heal turns (8)"},
	{desc:"Heal", impact:"heal low", impact2:"heal high"},
	{desc:"% Convert to ATK", impact:"atk% buff (46)", impact2:"converted attribute", turns:"% converted turns"},
	{desc:"% Convert to DEF", impact:"def% buff (47)", impact2:"converted attribute", turns:"% converted turns"},
	{desc:"Cure Ails", impact:"ailments cured"},
	{desc:"Null Ails", impact:"resist poison% (30)", turns:"resist status ails turns", hideprefix: true},
	{desc:"Null Stats Down", impact:"atk down resist% (120)", turns:"stat down immunity buff turns", hideprefix: true},
	{desc:"% Ignore DEF", impact:"defense% ignore", turns:"defense% ignore turns (39)"},
	{desc:"% Spark DMG+", impact:"spark dmg% buff (40)", turns:"buff turns"},
	{desc:"% CRIT+", impact:"crit% buff (7)", turns:"buff turns"},
	{desc:"% CRIT DMG+", impact:"crit multiplier%", turns:"buff turns (84)"},
	{desc:"Add Elements", impact:"elements added", turns:"elements added turns"},
	{desc:"% Weakness DMG+ (Light)", impact:"light units do extra elemental weakness dmg", impact2:"elemental weakness multiplier%", turns:"elemental weakness buff turns"},
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
	{desc:"% Reduce Fire DMG", impact:"mitigate fire attacks", impact2:"dmg% mitigation for elemental attacks", turns:"dmg% reduction turns (36)"},
	{desc:"% Reduce Water DMG", impact:"mitigate water attacks", impact2:"dmg% mitigation for elemental attacks", turns:"dmg% reduction turns (36)"},
	{desc:"% Reduce Earth DMG", impact:"mitigate earth attacks", impact2:"dmg% mitigation for elemental attacks", turns:"dmg% reduction turns (36)"},
	{desc:"% Reduce Thunder DMG", impact:"mitigate thunder attacks", impact2:"dmg% mitigation for elemental attacks", turns:"dmg% reduction turns (36)"},
	{desc:"% Reduce Light DMG", impact:"mitigate light attacks", impact2:"dmg% mitigation for elemental attacks", turns:"dmg% reduction turns (36)"},
	{desc:"% Reduce Dark DMG", impact:"mitigate dark attacks", impact2:"dmg% mitigation for elemental attacks", turns:"dmg% reduction turns (36)"},
];

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

/*Build DATABASE IN MEMORY*/
function buildDB(unit) {
countVar=0; /*reset count*/
    /*Process for Each Unit*/
    $.each( unit, function( unitKey, valObj ) {
    	/*Extract needed data*/
    	unitObj={};
        unitObj.img=imgPrePath+'unit/img/unit_ills_thum_'+valObj.id+'.png';
        unitObj.name=valObj.name;
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
        	unitObj.es=valObj["extra skill"]["effects"];
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
    
    /*check for card param*/
    var searchParam=urlParam('unitid');
    if (searchParam != "") {
        /*sets searchbox value then execute*/
        $('#searchIdBox').val(searchParam);
        searchIdRun();
    }
    /*check for card param*/
    var searchParam=urlParam('query');
    if (searchParam != "") {
        /*sets searchbox value then execute*/
        $('#searchNameBox').val(searchParam);
        searchNameRun();
    }
}

/*check valid json*/
function isValidJSON(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

/*Update URL based on bb filters*/
$(document).on("click", '.skillEffect', function(e){
    e.preventDefault();
	skillRun($(this).text());
})

/*Update URL based on sbb filters*/
$(document).on("click", '.skillEffect2', function(e){
    e.preventDefault();
	skillRun2($(this).text());
})

/*Update URL based on rarity filters*/
$(document).on("click", '.raritySelect', function(e){
    e.preventDefault();
	rarityRun($(this).text().charAt(0));
})

/*Update URL based on ls filters*/
$(document).on("click", '.lsEffect', function(e){
    e.preventDefault();
	lsRun($(this).text());
})

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

