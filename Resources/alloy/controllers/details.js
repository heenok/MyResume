function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.row = Ti.UI.createTableViewRow({
        id: "row"
    });
    $.addTopLevelView($.__views.row);
    var __alloyId0 = [];
    $.__views.view1 = Ti.UI.createView({
        borderWidth: 0,
        borderColor: "#d6d6d6",
        top: 10,
        width: 250,
        id: "view1"
    });
    __alloyId0.push($.__views.view1);
    $.__views.promo = Ti.UI.createImageView({
        width: 200,
        height: 300,
        top: 0,
        image: "first/promo.png",
        id: "promo"
    });
    $.__views.view1.add($.__views.promo);
    $.__views.scrollableView = Ti.UI.createScrollableView({
        height: 330,
        top: 0,
        backgroundColor: "#ebebeb",
        views: __alloyId0,
        id: "scrollableView",
        showPagingControl: "false"
    });
    $.__views.row.add($.__views.scrollableView);
    $.__views.description = Ti.UI.createWebView({
        top: 330,
        height: 180,
        backgroundColor: "#f5f5f5",
        id: "description",
        touchEnabled: "false"
    });
    $.__views.row.add($.__views.description);
    $.__views.__alloyId1 = Ti.UI.createView({
        borderWidth: 0.5,
        borderColor: "#d6d6d6",
        top: 510,
        height: 70,
        backgroundColor: "#ebebeb",
        id: "__alloyId1"
    });
    $.__views.row.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        color: "#3c3c3c",
        left: 10,
        top: 15,
        font: {
            fontSize: 14,
            fontWeight: "bold",
            fontFamily: "Helvetica Neue"
        },
        text: "What's New",
        id: "__alloyId2"
    });
    $.__views.__alloyId1.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        color: "#646464",
        left: 10,
        textAlign: "Justify",
        top: 35,
        font: {
            fontSize: 13,
            fontFamily: "Helvetica Neue"
        },
        text: "- Adding new apps in related section",
        id: "__alloyId3"
    });
    $.__views.__alloyId1.add($.__views.__alloyId3);
    $.__views.informations = Ti.UI.createView({
        borderWidth: 0.5,
        borderColor: "#d6d6d6",
        top: 580,
        height: 200,
        layout: "Vertical",
        backgroundColor: "#f5f5f5",
        id: "informations"
    });
    $.__views.row.add($.__views.informations);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        color: "#3c3c3c",
        left: 10,
        top: 15,
        font: {
            fontSize: 14,
            fontWeight: "bold",
            fontFamily: "Helvetica Neue"
        },
        text: "Information",
        id: "__alloyId4"
    });
    $.__views.informations.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        color: "#6a6a6a",
        width: 79,
        height: 20,
        top: "10",
        left: 7,
        textAlign: "right",
        font: {
            fontSize: 12,
            fontFamily: "Helvetica Neue",
            fontWeight: "bold"
        },
        text: "Developer",
        id: "__alloyId5"
    });
    $.__views.informations.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        color: "#000",
        width: "200",
        height: 20,
        top: "-20",
        left: 105,
        textAlign: "left",
        font: {
            fontSize: 12,
            fontFamily: "Helvetica Neue"
        },
        text: "Cyril Sénicourt",
        id: "__alloyId6"
    });
    $.__views.informations.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        color: "#6a6a6a",
        width: 79,
        height: 20,
        top: 0,
        left: 7,
        textAlign: "right",
        font: {
            fontSize: 12,
            fontFamily: "Helvetica Neue",
            fontWeight: "bold"
        },
        text: "Category",
        id: "__alloyId7"
    });
    $.__views.informations.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        color: "#000",
        width: "200",
        height: 20,
        top: -19,
        left: 105,
        textAlign: "left",
        font: {
            fontSize: 12,
            fontFamily: "Helvetica Neue"
        },
        text: "Business",
        id: "__alloyId8"
    });
    $.__views.informations.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        color: "#6a6a6a",
        width: 79,
        height: 20,
        top: 0,
        left: 7,
        textAlign: "right",
        font: {
            fontSize: 12,
            fontFamily: "Helvetica Neue",
            fontWeight: "bold"
        },
        text: "Updated",
        id: "__alloyId9"
    });
    $.__views.informations.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        color: "#000",
        width: "200",
        height: 20,
        top: -19,
        left: 105,
        textAlign: "left",
        font: {
            fontSize: 12,
            fontFamily: "Helvetica Neue"
        },
        text: "19.09.1984",
        id: "__alloyId10"
    });
    $.__views.informations.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        color: "#6a6a6a",
        width: 79,
        height: 20,
        top: 0,
        left: 7,
        textAlign: "right",
        font: {
            fontSize: 12,
            fontFamily: "Helvetica Neue",
            fontWeight: "bold"
        },
        text: "Version",
        id: "__alloyId11"
    });
    $.__views.informations.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        color: "#000",
        width: "200",
        height: 20,
        top: -19,
        left: 105,
        textAlign: "left",
        font: {
            fontSize: 12,
            fontFamily: "Helvetica Neue"
        },
        text: "28.5",
        id: "__alloyId12"
    });
    $.__views.informations.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        color: "#6a6a6a",
        width: 79,
        height: 20,
        top: 0,
        left: 7,
        textAlign: "right",
        font: {
            fontSize: 12,
            fontFamily: "Helvetica Neue",
            fontWeight: "bold"
        },
        text: "Size",
        id: "__alloyId13"
    });
    $.__views.informations.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        color: "#000",
        width: "200",
        height: 20,
        top: -19,
        left: 105,
        textAlign: "left",
        font: {
            fontSize: 12,
            fontFamily: "Helvetica Neue"
        },
        text: "1.80",
        id: "__alloyId14"
    });
    $.__views.informations.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        color: "#6a6a6a",
        width: 79,
        height: 20,
        top: 0,
        left: 7,
        textAlign: "right",
        font: {
            fontSize: 12,
            fontFamily: "Helvetica Neue",
            fontWeight: "bold"
        },
        text: "Rating",
        id: "__alloyId15"
    });
    $.__views.informations.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        color: "#000",
        width: "200",
        height: 20,
        top: -19,
        left: 105,
        textAlign: "left",
        font: {
            fontSize: 12,
            fontFamily: "Helvetica Neue"
        },
        text: "18+",
        id: "__alloyId16"
    });
    $.__views.informations.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        color: "#6a6a6a",
        width: 79,
        height: 20,
        top: 0,
        left: 7,
        textAlign: "right",
        font: {
            fontSize: 12,
            fontFamily: "Helvetica Neue",
            fontWeight: "bold"
        },
        text: "Requires",
        id: "__alloyId17"
    });
    $.__views.informations.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        color: "#000",
        width: "200",
        height: 20,
        top: -19,
        left: 105,
        textAlign: "left",
        font: {
            fontSize: 12,
            fontFamily: "Helvetica Neue"
        },
        text: "Great projects",
        id: "__alloyId18"
    });
    $.__views.informations.add($.__views.__alloyId18);
    $.__views.developer = Ti.UI.createView({
        borderWidth: 0.5,
        borderColor: "#d6d6d6",
        top: 780,
        height: 50,
        backgroundColor: "#ebebeb",
        id: "developer"
    });
    $.__views.row.add($.__views.developer);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        color: "#3c3c3c",
        left: 10,
        top: 15,
        font: {
            fontSize: 14,
            fontWeight: "bold",
            fontFamily: "Helvetica Neue"
        },
        text: "Developer Info",
        id: "__alloyId19"
    });
    $.__views.developer.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createLabel({
        color: "#646464",
        left: "120",
        textAlign: "Justify",
        top: "16",
        font: {
            fontSize: 13,
            fontFamily: "Helvetica Neue"
        },
        text: "senicyril@gmail.com",
        id: "__alloyId20"
    });
    $.__views.developer.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createView({
        borderWidth: 0.5,
        borderColor: "#d6d6d6",
        top: 830,
        height: 50,
        backgroundColor: "#f5f5f5",
        id: "__alloyId21"
    });
    $.__views.row.add($.__views.__alloyId21);
    $.__views.copyright = Ti.UI.createLabel({
        color: "#646464",
        left: 10,
        textAlign: "Justify",
        top: 15,
        font: {
            fontSize: 9,
            fontFamily: "Helvetica Neue"
        },
        id: "copyright",
        text: "© Cyril Sénicourt - UI Elements : Itunes & App Store by Christophe Béghin - Titanium 3.0.0 GA / Alloy"
    });
    $.__views.__alloyId21.add($.__views.copyright);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.description.url = "html/description.html";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;