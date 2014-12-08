/*Global object variabled*/
var aheadName=[];
var deserialdata = {};
var ovdata2 = {};
var gURL = 'https://www.googleapis.com/fusiontables/v1/query';
var gKey = 'AIzaSyCyF9yZ9Lyl57HAQXtzrd3yONewk4-fGSg';
var gTable = '1C7oKd1ko3PvX2mcOkw6es4aYP2D5o_aMFgFwMN5Z';
var prevStatsMod=[0,0,0,0,0];
var sphereHTML='<option value="0,0.3,0.3,0.3">Alter Blade</option><option value="0,0.75,0,0">Angelic Foil</option><option value="0,0.3,0.3,0">Batootha</option><option value="0,0.15,0,0">Beast Blade</option><option value="0.1,0.1,0.1,0.1">Brave Crest</option><option value="0.1,0.1,0.1,0.1">Burny\'s Soul Stone</option><option value="0,0.1,0.1,0">Cordelicite</option><option value="0.3,0.3,0,0">Dandelga</option><option value="0,0.5,0.5,0.5">Divine Stone</option><option value="0.3,0,0.3,0">Drevas</option><option value="0,0,0.75,0">Exyl Shield</option><option value="0.1,0,0.1,0">Flesh Armor</option><option value="0,0,0.5,0.5">Gilded Pearl</option><option value="0.1,0,0.1,0">Goddess Seal</option><option value="0,0,0,0.15">Holy Cane</option><option value="0.15,0,0,0">Holy Robe</option><option value="0.1,0.05,0.1,0.05">Ihsir\'s Guise</option><option value="0.25,0.25,0.25,0.25">Legwand</option><option value="0.3,0,0,0.3">Lexida</option><option value="0.1,0,0.1,0.1">Limbo Stone</option><option value="0.3,0.3,0.3,0.3">Malice Jewel</option><option value="0,0.75,0.75,0">Masamune</option><option value="0.05,0.05,0.05,0.05">Mech Sword</option><option value="0.2,0.2,0.2,0.2">Medulla Gem</option><option value="0,0.5,0,0">Muramasa</option><option value="0.2,0.25,0.2,0.2">Providence Ring</option><option value="0,0,0.5,0">Royal Shield</option><option value="0.15,0.15,0.15,0.15">Sacred Jewel</option><option value="0,1,1,1">Wicked Blade</option>';
var hpModHTML='<option value="0.1">10%</option><option value="0.2">20%</option><option value="0.25">25%</option><option value="0.3">30%</option>';
var atkModHTML='<option value="0.2">20%</option><option value="0.25">25%</option><option value="0.3">30%</option><option value="0.5">50%</option><option value="0.65">65%</option><option value="0.75">75%</option>';
var defModHTML='<option value="-0.5">-50%</option><option value="0.05">5%</option><option value="0.1">10%</option><option value="0.2">20%</option><option value="0.25">25%</option><option value="0.5">50%</option>';
var recModHTML='<option value="0.1">10%</option><option value="0.05">5%</option><option value="0.1">10%</option><option value="0.2">20%</option><option value="0.25">25%</option><option value="0.5">50%</option>';

/*Escape regex string*/
function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

/*Recalculates everything based on leaderskill / allskill / sphere(s) */
function totalStatsMod() {
    var lsMod=[$('#lsHP').val(),$('#lsATK').val(),$('#lsDEF').val(),$('#lsREC').val()];
    var asMod=[$('#asHP').val(),$('#asATK').val(),$('#asDEF').val(),$('#asREC').val()];
    if ($('#pimpHP').length)
    	var pMod=[$('#pimpHP').text(),$('#pimpATK').text(),$('#pimpDEF').text(),$('#pimpREC').text()]
    else
    	var pMod=[0,0,0,0];
    var sphereA=$("#sphereA").val().split(",");
    var sphereB=$("#sphereB").val().split(",");
    var totalMod=[];
    /*Combines Modifiers*/
    for (i=0;i<4;i++) {
	tmp=parseFloat(lsMod[i])+parseFloat(asMod[i])+parseFloat(sphereA[i])+parseFloat(sphereB[i]);
	totalMod.push(tmp.toFixed(2));
    }
    if ($('#pimpBtn').val()=="true")
      totalMod.push(1)
    else
      totalMod.push(0)
    var pFlip=(totalMod[4]==prevStatsMod[4]) ? 0 : (totalMod[4]>prevStatsMod[4]) ? 1 : -1;
    /*Make changes*/
    $('.hpMod').each( function(){
	if ( $(this).text() != "-" ) {
	    bCalc=( parseInt($(this).text())/(1+parseFloat(prevStatsMod[0])) )+(parseInt(pMod[0])*pFlip);
	    $(this).text(Math.round( bCalc*(1+parseFloat(totalMod[0])))); }
	})
    
    $('.atkMod').each( function(){
	if ( $(this).text() != "-" ) {
	    bCalc=( parseInt($(this).text())/(1+parseFloat(prevStatsMod[1])) )+(parseInt(pMod[1])*pFlip);
	    $(this).text(Math.round( bCalc*(1+parseFloat(totalMod[1])))); }
	})
    
    $('.defMod').each( function(){
	if ( $(this).text() != "-" ) {
	    bCalc=( parseInt($(this).text())/(1+parseFloat(prevStatsMod[2])) )+(parseInt(pMod[2])*pFlip);
	    $(this).text(Math.round( bCalc*(1+parseFloat(totalMod[2])))); }
	})
    
    $('.recMod').each( function(){
	if ( $(this).text() != "-" ) {
	    bCalc=( parseInt($(this).text())/(1+parseFloat(prevStatsMod[3])) )+(parseInt(pMod[3])*pFlip);
	    $(this).text(Math.round( bCalc*(1+parseFloat(totalMod[3])))); }
	})
    
    /*Replace previous mod with current mod*/
    prevStatsMod=totalMod;
}

/*Bootstrap alerts*/
function bfpAlert(aTitle,aBody) {
    $("#alertSpace").html('<i class="fa fa-fire-extinguisher"></i> <strong>'+aTitle+':</strong> '+aBody);
    $("#alertmodal").modal("show");
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

/*returns position in json obj array*/
function findidloc(locobj,locval ) {
    for(var i=0; i < locobj.length; i++) {
	if (locobj[i]['id']==locval) {
	    return i;
	}
    }
}

/*2nd style convert of Google JSON REST*/
function sconvertJSON( serialObj ) {
    var s = serialObj || {};
    if( !s.columns && !s.rows )
    {
	console.error("sconvertJSON() >>  was not passed a serialized obj");
	return [];
    }
    var obj = [];
    //for(var i=0; i < s.rows.length; i++)
    for (i in s.rows)
    {
	var temp = {};
	for(var j=0; j < s.columns.length; j++)
	{ /*check for NaN values*/
	    if (isNaN(s.rows[i][j]) && ((s.columns[j].toLowerCase().search("range") != -1)||(s.columns[j].toLowerCase().search("hits") != -1)||(s.columns[j].toLowerCase().search("fill") != -1)||(s.columns[j].toLowerCase().search("zel") != -1)||(s.columns[j].toLowerCase().search("hp") != -1)||(s.columns[j].toLowerCase().search("atk") != -1)||(s.columns[j].toLowerCase().search("def") != -1)||(s.columns[j].toLowerCase().search("rec") != -1)||(s.columns[j].toLowerCase().search("cost") != -1))) {
		    temp[s.columns[j].toLowerCase()] = "-";
	    } else {
	    temp[s.columns[j].toLowerCase()] = s.rows[i][j];
	    }
	}
	obj.push(temp);
    }
    return obj;
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
                alert(text);
	             	linkAsset.html('<a href="'+text.id+'">'+text.id+'</a>');
	         }
	})
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

//Returns EvoIMG
function getEvoIMG(evoMat) {
    /*Evo IMG Array*/
var evoQuery = [
['Fire Nymph','icon171.png'],
['Water Nymph','icon172.png'],
['Earth Nymph','icon173.png'],
['Thunder Nymph','icon174.png'],
['Light Nymph','icon175.png'],
['Dark Nymph','icon176.png'],
['Fire Spirit','icon177.png'],
['Water Spirit','icon178.png'],
['Earth Spirit','icon179.png'],
['Thunder Spirit','icon180.png'],
['Light Spirit','icon181.png'],
['Dark Spirit','icon182.png'],
['Fire Idol','icon183.png'],
['Water Idol','icon184.png'],
['Earth Idol','icon185.png'],
['Thunder Idol','icon186.png'],
['Light Idol','icon187.png'],
['Dark Idol','icon188.png'],
['Fire Totem','icon189.png'],
['Water Totem','icon190.png'],
['Earth Totem','icon191.png'],
['Thunder Totem','icon192.png'],
['Light Totem','icon193.png'],
['Dark Totem','icon194.png'],
['Mimic','icon201.png'],
['Bat Mimic','icon202.png'],
['Dragon Mimic','icon305.png'],
['Fire Pot','icon306.png'],
['Water Pot','icon307.png'],
['Earth Pot','icon308.png'],
['Thunder Pot','icon309.png'],
['Light Pot','icon310.png'],
['Dark Pot','icon311.png'],
['Miracle Totem','icon332.png'],
['Metal Mimic','icon481.png'],
['Fire Ghost','icon254.png'],
['Water Ghost','icon257.png'],
['Earth Ghost','icon260.png'],
['Thunder Ghost','icon263.png'],
['Light Ghost','icon266.png'],
['Metal Ghost','icon198.png'],
['Metal King','icon199.png'],
['Metal God','icon200.png'],
['Fire Bulb','icon8037.png'],
['Water Bulb','icon8038.png'],
['Earth Bulb','icon8039.png'],
['Thunder Bulb','icon8040.png'],
['Light Bulb','icon8041.png'],
['Dark Bulb','icon8042.png'],
['Miracle Bulb','icon8043.png'],
['Soul Crystal','iconitem11010.png'],
['Turbo Cyclaw','icon8106.png'],
['None','iconblank.gif']];

	/*find match*/
	for(var i=0; i < evoQuery.length; i++) {
	    if ( evoQuery[i][0] == evoMat ) {
		return "https://googledrive.com/host/0B4hJr8BXxvFZZVVOZWswdnlnYTg/"+evoQuery[i][1];
	    }
	}
	return "https://googledrive.com/host/0B4hJr8BXxvFZZVVOZWswdnlnYTg/iconblank.gif";
} /*End getEvoIMG*/
