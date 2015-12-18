countVar=0;
collapseID=1;
rawParseObj=[];

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
        	unitObj.bb=valObj["bb"];
        else
        	unitObj.bb="none";
	if (valObj["sbb"])
        	unitObj.sbb=valObj["sbb"];
        else
        	unitObj.sbb="none";
        if (valObj["ubb"])
        	unitObj.ubb=valObj["ubb"];
        else
        	unitObj.ubb="none";
        if (valObj["extra skill"])
        	unitObj.es=valObj["extra skill"];
        else
        	unitObj.es="none";
	/*Parse into MEMORY DB*/
        rawParseObj.push(unitObj);
        countVar+=1;
        collapseID+=1;
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

