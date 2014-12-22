/*Global Variable*/
serverChoice="";

/*check valid json*/
function isValidJSON(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
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
    		if (lastModified > localDate)
    			$("#alertmodal").modal("show")
 	}
    })
}

/*Reset Local Storage*/
function resetLocalData(corrupted) {
	if (corrupted)
		alert("Corrupted data detected or Data structure has changed. Proceed to Fix.");
		
	/*LocalStorage Delete and Refresh*/
    if (serverChoice.search('/jp/')==-1)
    	var localServerSelect="skillsguideglobal";
    else
    	var localServerSelect="skillsguidejapan";
  /*Resets*/
  localStorage.removeItem(localServerSelect);
  localStorage.removeItem(localServerSelect+"date");
  history.pushState(null, null, location.pathname);
  location.reload();
}

/*Sync New Button*/
$(document).on("click", '#syncNewBtn', function(e){
  /*Resets data*/
	resetLocalData(false)
})

/*Refresh data*/
$(document).on("click", '#refreshData', function(e){
    /*Init loader*/
    $('#progressModal').modal({
    	keyboard:false,
    	backdrop:'static',
    	toggle:true
    });
  resetLocalData(false)
})
