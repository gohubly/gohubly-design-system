"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
var react_1 = __importDefault(require("react"));
var icon_style_1 = require("./icon.style");
var search_svg_1 = require("../../assets/svg/search.svg");
var camera_svg_1 = require("../../assets/svg/camera.svg");
var file1_svg_1 = require("../../assets/svg/file1.svg");
var file2_svg_1 = require("../../assets/svg/file2.svg");
var helpCircle_svg_1 = require("../../assets/svg/helpCircle.svg");
var lock_svg_1 = require("../../assets/svg/lock.svg");
var pen_svg_1 = require("../../assets/svg/pen.svg");
var settings_svg_1 = require("../../assets/svg/settings.svg");
var loading_svg_1 = require("../../assets/svg/loading.svg");
var block_svg_1 = require("../../assets/svg/block.svg");
var brench2_svg_1 = require("../../assets/svg/brench2.svg");
var calendar_svg_1 = require("../../assets/svg/calendar.svg");
var clock_svg_1 = require("../../assets/svg/clock.svg");
var drag_svg_1 = require("../../assets/svg/drag.svg");
var eye_svg_1 = require("../../assets/svg/eye.svg");
var eyeSlash_svg_1 = require("../../assets/svg/eyeSlash.svg");
var informationTriangle_svg_1 = require("../../assets/svg/informationTriangle.svg");
var link_svg_1 = require("../../assets/svg/link.svg");
var loading_svg_2 = require("../../assets/svg/loading.svg");
var bell_svg_1 = require("../../assets/svg/bell.svg");
var brench1_svg_1 = require("../../assets/svg/brench1.svg");
var home_svg_1 = require("../../assets/svg/home.svg");
var image_svg_1 = require("../../assets/svg/image.svg");
var information_svg_1 = require("../../assets/svg/information.svg");
var login_svg_1 = require("../../assets/svg/login.svg");
var trash_svg_1 = require("../../assets/svg/trash.svg");
var user2_svg_1 = require("../../assets/svg/user2.svg");
var X_svg_1 = require("../../assets/svg/X.svg");
var default_svg_1 = require("../../assets/svg/default.svg");
var moreHorizontal_svg_1 = require("../../assets/svg/moreHorizontal.svg");
var chevronUp_svg_1 = require("../../assets/svg/chevronUp.svg");
var linkedin_svg_1 = require("../../assets/svg/linkedin.svg");
var starEmpty_svg_1 = require("../../assets/svg/starEmpty.svg");
var starFilled_svg_1 = require("../../assets/svg/starFilled.svg");
var list_svg_1 = require("../../assets/svg/list.svg");
var minus_svg_1 = require("../../assets/svg/minus.svg");
var truck_svg_1 = require("../../assets/svg/truck.svg");
var envelope_svg_1 = require("../../assets/svg/envelope.svg");
var moreVertical_svg_1 = require("../../assets/svg/moreVertical.svg");
var twitter_svg_1 = require("../../assets/svg/twitter.svg");
var facebook_svg_1 = require("../../assets/svg/facebook.svg");
var user1_svg_1 = require("../../assets/svg/user1.svg");
var globe_svg_1 = require("../../assets/svg/globe.svg");
var phone_svg_1 = require("../../assets/svg/phone.svg");
var youtube_svg_1 = require("../../assets/svg/youtube.svg");
var grid_svg_1 = require("../../assets/svg/grid.svg");
var pinLocation_svg_1 = require("../../assets/svg/pinLocation.svg");
var chevronLeft_svg_1 = require("../../assets/svg/chevronLeft.svg");
var hamburguer_svg_1 = require("../../assets/svg/hamburguer.svg");
var play_svg_1 = require("../../assets/svg/play.svg");
var chevronRight_svg_1 = require("../../assets/svg/chevronRight.svg");
var heart_svg_1 = require("../../assets/svg/heart.svg");
var plus_svg_1 = require("../../assets/svg/plus.svg");
var instagram_svg_1 = require("../../assets/svg/instagram.svg");
var check_svg_1 = require("../../assets/svg/check.svg");
var shield_svg_1 = require("../../assets/svg/shield.svg");
var cashSign_svg_1 = require("../../assets/svg/cashSign.svg");
var chevronDown_svg_1 = require("../../assets/svg/chevronDown.svg");
var bag_svg_1 = require("../../assets/svg/bag.svg");
var ICON_SIZE_BY_SIZE = {
    MD: '32px',
    SM: '24px',
};
var SVG_COMPONENT = function (_props) {
    var props = __assign(__assign({}, _props), { width: ICON_SIZE_BY_SIZE[(_props === null || _props === void 0 ? void 0 : _props.size) || 'MD'], height: ICON_SIZE_BY_SIZE[(_props === null || _props === void 0 ? void 0 : _props.size) || 'MD'] });
    return {
        search: react_1.default.createElement(search_svg_1.ReactComponent, __assign({}, props)),
        camera: react_1.default.createElement(camera_svg_1.ReactComponent, __assign({}, props)),
        file1: react_1.default.createElement(file1_svg_1.ReactComponent, __assign({}, props)),
        file2: react_1.default.createElement(file2_svg_1.ReactComponent, __assign({}, props)),
        helpCircle: react_1.default.createElement(helpCircle_svg_1.ReactComponent, __assign({}, props)),
        lock: react_1.default.createElement(lock_svg_1.ReactComponent, __assign({}, props)),
        pen: react_1.default.createElement(pen_svg_1.ReactComponent, __assign({}, props)),
        settings: react_1.default.createElement(settings_svg_1.ReactComponent, __assign({}, props)),
        tiktok: react_1.default.createElement(loading_svg_1.ReactComponent, __assign({}, props)),
        block: react_1.default.createElement(block_svg_1.ReactComponent, __assign({}, props)),
        brench2: react_1.default.createElement(brench2_svg_1.ReactComponent, __assign({}, props)),
        calendar: react_1.default.createElement(calendar_svg_1.ReactComponent, __assign({}, props)),
        clock: react_1.default.createElement(clock_svg_1.ReactComponent, __assign({}, props)),
        drag: react_1.default.createElement(drag_svg_1.ReactComponent, __assign({}, props)),
        eye: react_1.default.createElement(eye_svg_1.ReactComponent, __assign({}, props)),
        eyeSlash: react_1.default.createElement(eyeSlash_svg_1.ReactComponent, __assign({}, props)),
        informationTriangle: react_1.default.createElement(informationTriangle_svg_1.ReactComponent, __assign({}, props)),
        link: react_1.default.createElement(link_svg_1.ReactComponent, __assign({}, props)),
        loading: react_1.default.createElement(loading_svg_2.ReactComponent, __assign({}, props)),
        bell: react_1.default.createElement(bell_svg_1.ReactComponent, __assign({}, props)),
        brench1: react_1.default.createElement(brench1_svg_1.ReactComponent, __assign({}, props)),
        home: react_1.default.createElement(home_svg_1.ReactComponent, __assign({}, props)),
        information: react_1.default.createElement(information_svg_1.ReactComponent, __assign({}, props)),
        image: react_1.default.createElement(image_svg_1.ReactComponent, __assign({}, props)),
        login: react_1.default.createElement(login_svg_1.ReactComponent, __assign({}, props)),
        trash: react_1.default.createElement(trash_svg_1.ReactComponent, __assign({}, props)),
        user2: react_1.default.createElement(user2_svg_1.ReactComponent, __assign({}, props)),
        X: react_1.default.createElement(X_svg_1.ReactComponent, __assign({}, props)),
        moreHorizontal: react_1.default.createElement(moreHorizontal_svg_1.ReactComponent, __assign({}, props)),
        chevronUp: react_1.default.createElement(chevronUp_svg_1.ReactComponent, __assign({}, props)),
        linkedin: react_1.default.createElement(linkedin_svg_1.ReactComponent, __assign({}, props)),
        starEmpty: react_1.default.createElement(starEmpty_svg_1.ReactComponent, __assign({}, props)),
        starFilled: react_1.default.createElement(starFilled_svg_1.ReactComponent, __assign({}, props)),
        list: react_1.default.createElement(list_svg_1.ReactComponent, __assign({}, props)),
        default: react_1.default.createElement(default_svg_1.ReactComponent, __assign({}, props)),
        minus: react_1.default.createElement(minus_svg_1.ReactComponent, __assign({}, props)),
        truck: react_1.default.createElement(truck_svg_1.ReactComponent, __assign({}, props)),
        envelope: react_1.default.createElement(envelope_svg_1.ReactComponent, __assign({}, props)),
        moreVertical: react_1.default.createElement(moreVertical_svg_1.ReactComponent, __assign({}, props)),
        twitter: react_1.default.createElement(twitter_svg_1.ReactComponent, __assign({}, props)),
        facebook: react_1.default.createElement(facebook_svg_1.ReactComponent, __assign({}, props)),
        user1: react_1.default.createElement(user1_svg_1.ReactComponent, __assign({}, props)),
        globe: react_1.default.createElement(globe_svg_1.ReactComponent, __assign({}, props)),
        phone: react_1.default.createElement(phone_svg_1.ReactComponent, __assign({}, props)),
        youtube: react_1.default.createElement(youtube_svg_1.ReactComponent, __assign({}, props)),
        grid: react_1.default.createElement(grid_svg_1.ReactComponent, __assign({}, props)),
        pinLocation: react_1.default.createElement(pinLocation_svg_1.ReactComponent, __assign({}, props)),
        hamburguer: react_1.default.createElement(hamburguer_svg_1.ReactComponent, __assign({}, props)),
        play: react_1.default.createElement(play_svg_1.ReactComponent, __assign({}, props)),
        chevronRight: react_1.default.createElement(chevronRight_svg_1.ReactComponent, __assign({}, props)),
        heart: react_1.default.createElement(heart_svg_1.ReactComponent, __assign({}, props)),
        plus: react_1.default.createElement(plus_svg_1.ReactComponent, __assign({}, props)),
        instagram: react_1.default.createElement(instagram_svg_1.ReactComponent, __assign({}, props)),
        check: react_1.default.createElement(check_svg_1.ReactComponent, __assign({}, props)),
        shield: react_1.default.createElement(shield_svg_1.ReactComponent, __assign({}, props)),
        cashSign: react_1.default.createElement(cashSign_svg_1.ReactComponent, __assign({}, props)),
        chevronDown: react_1.default.createElement(chevronDown_svg_1.ReactComponent, __assign({}, props)),
        chevronLeft: react_1.default.createElement(chevronLeft_svg_1.ReactComponent, __assign({}, props)),
        bag: react_1.default.createElement(bag_svg_1.ReactComponent, __assign({}, props)),
    };
};
var Icon = function (_a) {
    var iconId = _a.iconId, props = __rest(_a, ["iconId"]);
    if (!iconId)
        return null;
    return (react_1.default.createElement(icon_style_1.IconWrapper, __assign({}, props), SVG_COMPONENT(props)[iconId]));
};
exports.Icon = Icon;
