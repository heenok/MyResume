//Switch Menus
function doChange(e) {
	var choice = e.source.id;
    var row,left;
    // Reset Labels Backgrounds
    $.details.backgroundImage = '';
    $.reviews.backgroundImage = '';
    $.related.backgroundImage = '';
    //Reset Labels Color
    $.details.color = '#6a6a6a';
    $.reviews.color = '#6a6a6a';
    $.related.color = '#6a6a6a';
    // Switching View
    switch(choice) {
    	case 'details' :
    		row = Alloy.createController('details', {title:'title'}).getView();
    		e.source.backgroundImage = 'first/label_selected.png';
    		e.source.color = '#3d3d3d';
    		left = 85;
    		break;
		case 'reviews' :
    		row = Alloy.createController('reviews', {title:'title'}).getView();
    		e.source.backgroundImage = 'first/label_selected.png';
    		e.source.color = '#3d3d3d';
    		left = 160;
    		break;
    	case 'related' :
    		row = Alloy.createController('related', {title:'title'}).getView();
    		e.source.backgroundImage = 'first/label_selected.png';
    		e.source.color = '#3d3d3d';
    		left = 235;
    		break;	 
    }
    //Updating
    $.arrow.left = left;
  	$.table.updateRow(1,row);
}
//Click Event: Price
$.price.addEventListener('click',function(e) {
	e.source.applyProperties({text:'Contacting',opacity:0.5});
	//Opening the Email Dialog
	Alloy.Globals.sendEMAIL('Contact','senicyril@gmail.com',' ',e.source);	
});
//Click Event: Tab Bar
$.tabbar.addEventListener('click',function(e) {
	alert('Sorry, you\'re not on the real appstore');	
});

//Click Event: Share Button
$.share.addEventListener('click', function(e) {
	var optionsDialogOpts = {
		options : ['Email', 'Sms', 'Cancel'],
		destructive : 2,
		cancel : 2,
		title : 'Share by...'
	};
	
	var dialog = Titanium.UI.createOptionDialog(optionsDialogOpts);
	
	dialog.addEventListener('click', function(f) {
		if (f.index == 0) {
			Alloy.Globals.sendEMAIL('Resume Sharing', '', Alloy.Globals.messageSHARE, '');
		} else {
			Alloy.Globals.sendSMS(Alloy.Globals.messageSHARE);
		}
	});
	dialog.show();
});
//Open The Window
$.index.open();