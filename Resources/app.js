var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.sms = require("bencoding.sms").createSMSDialog({
    barColor: "#336699"
});

Alloy.Globals.messageSHARE = "Sénicourt Cyril's resume on  ";

Alloy.Globals.sendEMAIL = function(subject, recipient, message, price) {
    var emailDialog = Titanium.UI.createEmailDialog();
    if (!emailDialog.isSupported()) {
        Ti.UI.createAlertDialog({
            title: "Error",
            message: "Email not available"
        }).show();
        return;
    }
    emailDialog.setSubject(subject);
    emailDialog.setToRecipients([ recipient ]);
    emailDialog.setCcRecipients([ "" ]);
    emailDialog.setBccRecipients([ "" ]);
    emailDialog.addEventListener("complete", function(e) {
        !e.result == emailDialog.CANCELLED && Ti.UI.createAlertDialog({
            title: "Thank you for",
            message: "your interest !"
        }).show();
        price != "" && price.applyProperties({
            text: "Available",
            opacity: 1
        });
    });
    emailDialog.setMessageBody(message);
    emailDialog.setHtml(!0);
    emailDialog.setBarColor("#000");
    emailDialog.open();
};

Alloy.Globals.sendSMS = function(message) {
    Alloy.Globals.sms.setMessageBody(message);
    Alloy.Globals.sms.setToRecipients([]);
    Alloy.Globals.sms.open();
};

Alloy.createController("index");