function Controller() {
    function doChange(e) {
        var choice = e.source.id, row, left;
        $.details.backgroundImage = "";
        $.reviews.backgroundImage = "";
        $.related.backgroundImage = "";
        $.details.color = "#6a6a6a";
        $.reviews.color = "#6a6a6a";
        $.related.color = "#6a6a6a";
        switch (choice) {
          case "details":
            row = Alloy.createController("details", {
                title: "title"
            }).getView();
            e.source.backgroundImage = "first/label_selected.png";
            e.source.color = "#3d3d3d";
            left = 85;
            break;
          case "reviews":
            row = Alloy.createController("reviews", {
                title: "title"
            }).getView();
            e.source.backgroundImage = "first/label_selected.png";
            e.source.color = "#3d3d3d";
            left = 160;
            break;
          case "related":
            row = Alloy.createController("related", {
                title: "title"
            }).getView();
            e.source.backgroundImage = "first/label_selected.png";
            e.source.color = "#3d3d3d";
            left = 235;
        }
        $.arrow.left = left;
        $.table.updateRow(1, row);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "index"
    });
    $.addTopLevelView($.__views.index);
    $.__views.__alloyId23 = Ti.UI.iOS.createToolbar({
        barColor: "#000",
        top: 0,
        id: "__alloyId23"
    });
    $.__views.index.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createView({
        backgroundColor: "transparent",
        id: "__alloyId24"
    });
    $.__views.__alloyId23.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        font: {
            fontSize: 20,
            fontWeight: "bold"
        },
        color: "#fff",
        text: "Info",
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    $.__views.share = Ti.UI.createButton({
        right: 10,
        top: 5,
        width: 45,
        height: 29,
        title: "",
        backgroundImage: "common/shareButton.png",
        backgroundSelectedImage: "common/shareButtonPushed.png",
        id: "share"
    });
    $.__views.__alloyId24.add($.__views.share);
    $.__views.header = Ti.UI.createTableViewRow({
        backgroundColor: "#f5f5f5",
        height: 100,
        background: "#f5f5f5",
        id: "header"
    });
    var __alloyId26 = [];
    __alloyId26.push($.__views.header);
    $.__views.icon = Ti.UI.createImageView({
        image: "first/icon.png",
        width: 67,
        height: 67,
        top: 10,
        left: 10,
        id: "icon"
    });
    $.__views.header.add($.__views.icon);
    $.__views.title = Ti.UI.createLabel({
        font: {
            fontSize: 13,
            fontWeight: "bold"
        },
        width: 120,
        color: "#3d3d3d",
        top: 10,
        left: 80,
        id: "title",
        text: "Cyril SÉNICOURT"
    });
    $.__views.header.add($.__views.title);
    $.__views.subtitle = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        width: 150,
        top: 25,
        left: 80,
        id: "subtitle",
        text: "Mobile & Web Ltd"
    });
    $.__views.header.add($.__views.subtitle);
    $.__views.stars = Ti.UI.createImageView({
        image: "first/stars.png",
        width: 75,
        height: 16,
        top: 61,
        left: 80,
        id: "stars"
    });
    $.__views.header.add($.__views.stars);
    $.__views.price = Ti.UI.createLabel({
        font: {
            fontSize: 13,
            fontWeight: "bold"
        },
        backgroundImage: "first/price.png",
        color: "#6a6a6a",
        text: "Available",
        width: 73,
        height: 25,
        top: 52,
        right: 15,
        textAlign: "center",
        id: "price"
    });
    $.__views.header.add($.__views.price);
    $.__views.__alloyId27 = Ti.UI.createTableViewSection({
        id: "__alloyId27"
    });
    __alloyId26.push($.__views.__alloyId27);
    $.__views.menu = Ti.UI.createView({
        backgroundColor: "#f5f5f5",
        height: 45,
        top: 0,
        borderWidth: 0,
        bakckgroundColor: "#f5f5f5",
        id: "menu"
    });
    $.__views.details = Ti.UI.createLabel({
        font: {
            fontSize: 13,
            fontWeight: "bold"
        },
        color: "#6a6a6a",
        height: 30,
        top: 5,
        width: 65,
        textAlign: "center",
        backgroundImage: "first/label_selected.png",
        text: "Details",
        id: "details",
        left: "60"
    });
    $.__views.menu.add($.__views.details);
    doChange ? $.__views.details.addEventListener("click", doChange) : __defers["$.__views.details!click!doChange"] = !0;
    $.__views.reviews = Ti.UI.createLabel({
        font: {
            fontSize: 13,
            fontWeight: "bold"
        },
        color: "#6a6a6a",
        height: 30,
        top: 5,
        width: 65,
        textAlign: "center",
        text: "Reviews",
        id: "reviews",
        left: "135"
    });
    $.__views.menu.add($.__views.reviews);
    doChange ? $.__views.reviews.addEventListener("click", doChange) : __defers["$.__views.reviews!click!doChange"] = !0;
    $.__views.related = Ti.UI.createLabel({
        font: {
            fontSize: 13,
            fontWeight: "bold"
        },
        color: "#6a6a6a",
        height: 30,
        top: 5,
        width: 65,
        textAlign: "center",
        text: "Related",
        id: "related",
        left: "210"
    });
    $.__views.menu.add($.__views.related);
    doChange ? $.__views.related.addEventListener("click", doChange) : __defers["$.__views.related!click!doChange"] = !0;
    $.__views.arrow_background = Ti.UI.createImageView({
        image: "first/arrow_background.png",
        width: 320,
        height: 13,
        top: 35,
        left: 0,
        id: "arrow_background"
    });
    $.__views.menu.add($.__views.arrow_background);
    $.__views.arrow = Ti.UI.createImageView({
        image: "first/arrow.png",
        width: 15,
        height: 13,
        top: 35,
        left: 85,
        zIndex: 52,
        id: "arrow"
    });
    $.__views.menu.add($.__views.arrow);
    $.__views.__alloyId27.headerView = $.__views.menu;
    $.__views.require = Alloy.createController("details", {
        id: "require"
    });
    __alloyId26.push($.__views.require.getViewEx({
        recurse: !0
    }));
    $.__views.table = Ti.UI.createTableView({
        allowsSelection: !0,
        selectionStyle: "none",
        top: 40,
        height: 370,
        separatorStyle: "none",
        backgroundColor: "#f5f5f5",
        data: __alloyId26,
        id: "table"
    });
    $.__views.index.add($.__views.table);
    $.__views.tabbar = Ti.UI.createImageView({
        bottom: 0,
        image: "common/tabbar.png",
        id: "tabbar"
    });
    $.__views.index.add($.__views.tabbar);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.price.addEventListener("click", function(e) {
        e.source.applyProperties({
            text: "Contacting",
            opacity: 0.5
        });
        Alloy.Globals.sendEMAIL("Contact", "senicyril@gmail.com", " ", e.source);
    });
    $.tabbar.addEventListener("click", function(e) {
        alert("Sorry, you're not on the real appstore");
    });
    $.share.addEventListener("click", function(e) {
        var optionsDialogOpts = {
            options: [ "Email", "Sms", "Cancel" ],
            destructive: 2,
            cancel: 2,
            title: "Share by..."
        }, dialog = Titanium.UI.createOptionDialog(optionsDialogOpts);
        dialog.addEventListener("click", function(f) {
            f.index == 0 ? Alloy.Globals.sendEMAIL("Resume Sharing", "", Alloy.Globals.messageSHARE, "") : Alloy.Globals.sendSMS(Alloy.Globals.messageSHARE);
        });
        dialog.show();
    });
    $.index.open();
    __defers["$.__views.details!click!doChange"] && $.__views.details.addEventListener("click", doChange);
    __defers["$.__views.reviews!click!doChange"] && $.__views.reviews.addEventListener("click", doChange);
    __defers["$.__views.related!click!doChange"] && $.__views.related.addEventListener("click", doChange);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;