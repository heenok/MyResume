// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Mise en place du module sms
Alloy.Globals.sms = require('bencoding.sms').createSMSDialog({
	barColor : '#336699'
});
// Alloy.Globals.someGlobalFunction = function(){};
Alloy.Globals.messageSHARE = 'Sénicourt Cyril\'s resume on  ';
// Email dialog
Alloy.Globals.sendEMAIL = function(subject, recipient, message, price) {

	var emailDialog = Titanium.UI.createEmailDialog();

	if (!emailDialog.isSupported()) {
		Ti.UI.createAlertDialog({
			title : 'Error',
			message : 'Email not available'
		}).show();
		return;
	}
	emailDialog.setSubject(subject);
	emailDialog.setToRecipients([recipient]);
	emailDialog.setCcRecipients(['']);
	emailDialog.setBccRecipients(['']);

	emailDialog.addEventListener('complete', function(e) {
		if (!e.result == emailDialog.CANCELLED) {
			Ti.UI.createAlertDialog({
				title : 'Thank you for',
				message : 'your interest !'
			}).show();
		}
		if (price != '') {
			price.applyProperties({
				text : 'Available',
				opacity : 1
			});
		}

	});

	emailDialog.setMessageBody(message);
	emailDialog.setHtml(true);
	emailDialog.setBarColor('#000');

	emailDialog.open();

}

Alloy.Globals.sendSMS = function(message) {
	Alloy.Globals.sms.setMessageBody(message);
	Alloy.Globals.sms.setToRecipients([]);
	//Opens the SMS Message Dialog
	Alloy.Globals.sms.open();
}

