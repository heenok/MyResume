function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.row = Ti.UI.createTableViewRow({
        id: "row"
    });
    $.addTopLevelView($.__views.row);
    $.__views.__alloyId29 = Ti.UI.createView({
        borderWidth: 0.3,
        borderColor: "#d6d6d6",
        font: {
            fontFamily: "Helvetica Neue"
        },
        backgroundColor: "#ebebeb",
        top: 0,
        id: "__alloyId29"
    });
    $.__views.row.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createLabel({
        color: "#3d3d3d",
        left: 10,
        top: 15,
        font: {
            fontSize: 13,
            fontWeight: "bold",
            fontFamily: "Helvetica Neue"
        },
        text: "Latests apps",
        id: "__alloyId30"
    });
    $.__views.__alloyId29.add($.__views.__alloyId30);
    $.__views.scrollView = Ti.UI.createScrollView({
        top: 30,
        height: 120,
        width: "100%",
        layout: "Horizontal",
        id: "scrollView"
    });
    $.__views.__alloyId29.add($.__views.scrollView);
    $.__views.__alloyId31 = Ti.UI.createView({
        borderWidth: 0,
        borderColor: "#d6d6d6",
        font: {
            fontFamily: "Helvetica Neue"
        },
        top: 10,
        left: "10",
        width: 80,
        height: 110,
        id: "__alloyId31"
    });
    $.__views.scrollView.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createImageView({
        top: 0,
        left: 0,
        image: "third/retro.png",
        id: "__alloyId32"
    });
    $.__views.__alloyId31.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createLabel({
        top: 60,
        height: 20,
        width: 70,
        left: 0,
        color: "#3c3c3c",
        font: {
            fontSize: 10,
            fontWeight: "bold",
            "undefined": undefined
        },
        text: "Retro icons",
        id: "__alloyId33"
    });
    $.__views.__alloyId31.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createLabel({
        top: 75,
        color: "#646464",
        height: 20,
        width: 70,
        left: 0,
        font: {
            fontSize: 9
        },
        text: "iPhone",
        id: "__alloyId34"
    });
    $.__views.__alloyId31.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createView({
        borderWidth: 0,
        borderColor: "#d6d6d6",
        font: {
            fontFamily: "Helvetica Neue"
        },
        top: 10,
        left: 0,
        width: 80,
        height: 110,
        id: "__alloyId35"
    });
    $.__views.scrollView.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createImageView({
        top: 0,
        left: 0,
        image: "third/delta.png",
        id: "__alloyId36"
    });
    $.__views.__alloyId35.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createLabel({
        top: 60,
        height: 20,
        width: 70,
        left: 0,
        color: "#3c3c3c",
        font: {
            fontSize: 10,
            fontWeight: "bold",
            "undefined": undefined
        },
        text: "Delta FM",
        id: "__alloyId37"
    });
    $.__views.__alloyId35.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createLabel({
        top: 75,
        color: "#646464",
        height: 20,
        width: 70,
        left: 0,
        font: {
            fontSize: 9
        },
        text: "iPhone/Android",
        id: "__alloyId38"
    });
    $.__views.__alloyId35.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createView({
        borderWidth: 0,
        borderColor: "#d6d6d6",
        font: {
            fontFamily: "Helvetica Neue"
        },
        top: 10,
        left: 0,
        width: 80,
        height: 110,
        id: "__alloyId39"
    });
    $.__views.scrollView.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createImageView({
        top: 0,
        left: 0,
        image: "third/calendar.png",
        id: "__alloyId40"
    });
    $.__views.__alloyId39.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createLabel({
        top: 60,
        height: 20,
        width: 70,
        left: 0,
        color: "#3c3c3c",
        font: {
            fontSize: 10,
            fontWeight: "bold",
            "undefined": undefined
        },
        text: "Cycling Cal.",
        id: "__alloyId41"
    });
    $.__views.__alloyId39.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createLabel({
        top: 75,
        color: "#646464",
        height: 20,
        width: 70,
        left: 0,
        font: {
            fontSize: 9
        },
        text: "iPhone",
        id: "__alloyId42"
    });
    $.__views.__alloyId39.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createView({
        borderWidth: 0,
        borderColor: "#d6d6d6",
        font: {
            fontFamily: "Helvetica Neue"
        },
        top: 10,
        left: 0,
        width: 80,
        height: 110,
        id: "__alloyId43"
    });
    $.__views.scrollView.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createImageView({
        top: 0,
        left: 0,
        image: "third/privatesms.png",
        id: "__alloyId44"
    });
    $.__views.__alloyId43.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createLabel({
        top: 60,
        height: 20,
        width: 70,
        left: 0,
        color: "#3c3c3c",
        font: {
            fontSize: 10,
            fontWeight: "bold",
            "undefined": undefined
        },
        text: "Private sms",
        id: "__alloyId45"
    });
    $.__views.__alloyId43.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createLabel({
        top: 75,
        color: "#646464",
        height: 20,
        width: 70,
        left: 0,
        font: {
            fontSize: 9
        },
        text: "iPhone",
        id: "__alloyId46"
    });
    $.__views.__alloyId43.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createView({
        borderWidth: 0,
        borderColor: "#d6d6d6",
        font: {
            fontFamily: "Helvetica Neue"
        },
        top: 10,
        left: 0,
        width: 80,
        height: 110,
        id: "__alloyId47"
    });
    $.__views.scrollView.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createImageView({
        top: 0,
        left: 0,
        image: "third/smstranslator.png",
        id: "__alloyId48"
    });
    $.__views.__alloyId47.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createLabel({
        top: 60,
        height: 20,
        width: 70,
        left: 0,
        color: "#3c3c3c",
        font: {
            fontSize: 10,
            fontWeight: "bold",
            "undefined": undefined
        },
        text: "Sms translator",
        id: "__alloyId49"
    });
    $.__views.__alloyId47.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createLabel({
        top: 75,
        color: "#646464",
        height: 20,
        width: 70,
        left: 0,
        font: {
            fontSize: 9
        },
        text: "iPhone",
        id: "__alloyId50"
    });
    $.__views.__alloyId47.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createView({
        borderWidth: 0,
        borderColor: "#d6d6d6",
        font: {
            fontFamily: "Helvetica Neue"
        },
        top: 10,
        left: 0,
        width: 80,
        height: 110,
        id: "__alloyId51"
    });
    $.__views.scrollView.add($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createImageView({
        top: 0,
        left: 0,
        image: "third/cyclingquiz.png",
        id: "__alloyId52"
    });
    $.__views.__alloyId51.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createLabel({
        top: 60,
        height: 20,
        width: 70,
        left: 0,
        color: "#3c3c3c",
        font: {
            fontSize: 10,
            fontWeight: "bold",
            "undefined": undefined
        },
        text: "Cycling quiz",
        id: "__alloyId53"
    });
    $.__views.__alloyId51.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createLabel({
        top: 75,
        color: "#646464",
        height: 20,
        width: 70,
        left: 0,
        font: {
            fontSize: 9
        },
        text: "iPhone",
        id: "__alloyId54"
    });
    $.__views.__alloyId51.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createView({
        borderWidth: 0,
        borderColor: "#d6d6d6",
        font: {
            fontFamily: "Helvetica Neue"
        },
        top: 10,
        left: 0,
        width: 80,
        height: 110,
        id: "__alloyId55"
    });
    $.__views.scrollView.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createImageView({
        top: 0,
        left: 0,
        image: "third/3suisses.png",
        id: "__alloyId56"
    });
    $.__views.__alloyId55.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createLabel({
        top: 60,
        height: 20,
        width: 70,
        left: 0,
        color: "#3c3c3c",
        font: {
            fontSize: 10,
            fontWeight: "bold",
            "undefined": undefined
        },
        text: "3 Suisses",
        id: "__alloyId57"
    });
    $.__views.__alloyId55.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createLabel({
        top: 75,
        color: "#646464",
        height: 20,
        width: 70,
        left: 0,
        font: {
            fontSize: 9
        },
        text: "iPhone/Android",
        id: "__alloyId58"
    });
    $.__views.__alloyId55.add($.__views.__alloyId58);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;