function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.row = Ti.UI.createTableViewRow({
        id: "row"
    });
    $.addTopLevelView($.__views.row);
    $.__views.__alloyId59 = Ti.UI.createView({
        borderWidth: 0.3,
        borderColor: "#d6d6d6",
        top: 0,
        height: 95,
        backgroundColor: "#ebebeb",
        id: "__alloyId59"
    });
    $.__views.row.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createLabel({
        width: "100%",
        color: "#3c3c3c",
        left: 10,
        top: 15,
        font: {
            fontSize: 14,
            fontWeight: "bold",
            fontFamily: "Helvetica Neue"
        },
        text: "Facebook",
        id: "__alloyId60"
    });
    $.__views.__alloyId59.add($.__views.__alloyId60);
    $.__views.facebook_img = Ti.UI.createImageView({
        left: 10,
        top: 45,
        image: "second/facebook.png",
        id: "facebook_img"
    });
    $.__views.__alloyId59.add($.__views.facebook_img);
    $.__views.facebook_txt = Ti.UI.createLabel({
        color: "#505050",
        width: 180,
        height: "auto",
        left: 40,
        top: 40,
        font: {
            fontSize: 13,
            fontFamily: "Helvetica Neue"
        },
        id: "facebook_txt",
        text: "Be the first of your friends to win a beer"
    });
    $.__views.__alloyId59.add($.__views.facebook_txt);
    $.__views.facebook_like = Ti.UI.createImageView({
        right: 10,
        top: 35,
        width: 89,
        height: 36,
        image: "second/like.png",
        id: "facebook_like"
    });
    $.__views.__alloyId59.add($.__views.facebook_like);
    $.__views.__alloyId61 = Ti.UI.createView({
        borderWidth: 0.3,
        borderColor: "#d6d6d6",
        height: 150,
        top: 95,
        backgroundColor: "#f5f5f5",
        id: "__alloyId61"
    });
    $.__views.row.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createLabel({
        width: "100%",
        color: "#3c3c3c",
        left: 10,
        top: 15,
        font: {
            fontSize: 14,
            fontWeight: "bold",
            fontFamily: "Helvetica Neue"
        },
        text: "Tech. Skills Rankings",
        id: "__alloyId62"
    });
    $.__views.__alloyId61.add($.__views.__alloyId62);
    $.__views.rankings_img = Ti.UI.createImageView({
        left: 0,
        top: 45,
        width: 320,
        height: 89,
        image: "second/skills.png",
        id: "rankings_img"
    });
    $.__views.__alloyId61.add($.__views.rankings_img);
    $.__views.__alloyId63 = Ti.UI.createView({
        borderWidth: 0.3,
        borderColor: "#d6d6d6",
        top: 235,
        height: 60,
        backgroundColor: "#ebebeb",
        id: "__alloyId63"
    });
    $.__views.row.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createLabel({
        width: "100%",
        color: "#3c3c3c",
        left: 10,
        top: 15,
        font: {
            fontSize: 14,
            fontWeight: "bold",
            fontFamily: "Helvetica Neue"
        },
        text: "Mobile Developer / Project Manager",
        id: "__alloyId64"
    });
    $.__views.__alloyId63.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createLabel({
        width: "100%",
        color: "#646464",
        left: 10,
        textAlign: "Justify",
        top: 35,
        font: {
            fontSize: 13,
            fontFamily: "Helvetica Neue"
        },
        text: "Odysys. 2011-2012",
        id: "__alloyId65"
    });
    $.__views.__alloyId63.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createView({
        borderWidth: 0.3,
        borderColor: "#d6d6d6",
        top: 295,
        height: 60,
        backgroundColor: "#f5f5f5",
        id: "__alloyId66"
    });
    $.__views.row.add($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createLabel({
        width: "100%",
        color: "#3c3c3c",
        left: 10,
        top: 15,
        font: {
            fontSize: 14,
            fontWeight: "bold",
            fontFamily: "Helvetica Neue"
        },
        text: "Web, Mobile Developer / Project Manager",
        id: "__alloyId67"
    });
    $.__views.__alloyId66.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createLabel({
        width: "100%",
        color: "#646464",
        left: 10,
        textAlign: "Justify",
        top: 35,
        font: {
            fontSize: 13,
            fontFamily: "Helvetica Neue"
        },
        text: "Kanga. 2018-2011",
        id: "__alloyId68"
    });
    $.__views.__alloyId66.add($.__views.__alloyId68);
    $.__views.__alloyId69 = Ti.UI.createView({
        borderWidth: 0.3,
        borderColor: "#d6d6d6",
        top: 355,
        height: 60,
        backgroundColor: "#ebebeb",
        id: "__alloyId69"
    });
    $.__views.row.add($.__views.__alloyId69);
    $.__views.__alloyId70 = Ti.UI.createLabel({
        width: "100%",
        color: "#3c3c3c",
        left: 10,
        top: 15,
        font: {
            fontSize: 14,
            fontWeight: "bold",
            fontFamily: "Helvetica Neue"
        },
        text: "Web Developer",
        id: "__alloyId70"
    });
    $.__views.__alloyId69.add($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createLabel({
        width: "100%",
        color: "#646464",
        left: 10,
        textAlign: "Justify",
        top: 35,
        font: {
            fontSize: 13,
            fontFamily: "Helvetica Neue"
        },
        text: "AFG. 2017-2008",
        id: "__alloyId71"
    });
    $.__views.__alloyId69.add($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createView({
        borderWidth: 0.3,
        borderColor: "#d6d6d6",
        top: 415,
        height: 60,
        backgroundColor: "#f5f5f5",
        id: "__alloyId72"
    });
    $.__views.row.add($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createLabel({
        width: "100%",
        color: "#3c3c3c",
        left: 10,
        top: 15,
        font: {
            fontSize: 14,
            fontWeight: "bold",
            fontFamily: "Helvetica Neue"
        },
        text: "Web Developer",
        id: "__alloyId73"
    });
    $.__views.__alloyId72.add($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createLabel({
        width: "100%",
        color: "#646464",
        left: 10,
        textAlign: "Justify",
        top: 35,
        font: {
            fontSize: 13,
            fontFamily: "Helvetica Neue"
        },
        text: "CheetahMail. 2006-2007",
        id: "__alloyId74"
    });
    $.__views.__alloyId72.add($.__views.__alloyId74);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.facebook_like.addEventListener("click", function(e) {
        e.source.image = "second/like-beer.png";
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;