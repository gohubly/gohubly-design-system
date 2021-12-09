"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = exports.Wrapper = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var AVATAR_DETAILS_WITH_ON_COLOR = {
    textColor: 'primaryLightest',
    background: 'primaryDark'
};
var AVATAR_DETAILS_WITHOUT_ON_COLOR = {
    textColor: 'primary',
    background: 'primaryLightest'
};
var AVATAR_SIZE_BASED_ON_SIZE = {
    LG: '64px',
    MD: '40px',
    SM: '24px',
};
var FONT_SIZE_SIZE_BASED_ON_SIZE = {
    LG: '32px',
    MD: '24px',
    SM: '16px',
};
exports.Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: ", ";\n  height: ", ";\n\n  color: red;\n  /* color: ", "; */\n  /* background-color: ", "; */\n\n  /* background-image: ", "; */\n  /* background-size: ", "; */\n  /* box-shadow: ", "; */\n\n  font-size: ", ";\n\n  border-radius: 2px;\n  /* border-radius: ", "; */\n\n  pointer-events: none;\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: ", ";\n  height: ", ";\n\n  color: red;\n  /* color: ", "; */\n  /* background-color: ", "; */\n\n  /* background-image: ", "; */\n  /* background-size: ", "; */\n  /* box-shadow: ", "; */\n\n  font-size: ", ";\n\n  border-radius: 2px;\n  /* border-radius: ", "; */\n\n  pointer-events: none;\n"])), function (_a) {
    var size = _a.size;
    return size && AVATAR_SIZE_BASED_ON_SIZE[size];
}, function (_a) {
    var size = _a.size;
    return size && AVATAR_SIZE_BASED_ON_SIZE[size];
}, function (_a) {
    var theme = _a.theme, OnColor = _a.OnColor;
    return theme.colors[OnColor ? AVATAR_DETAILS_WITH_ON_COLOR.textColor : AVATAR_DETAILS_WITHOUT_ON_COLOR.textColor];
}, function (_a) {
    var theme = _a.theme, OnColor = _a.OnColor;
    return theme.colors[OnColor ? AVATAR_DETAILS_WITH_ON_COLOR.background : AVATAR_DETAILS_WITHOUT_ON_COLOR.background];
}, function (_a) {
    var image = _a.image;
    return image && "url(".concat(image, ")");
}, function (_a) {
    var image = _a.image;
    return image && "cover";
}, function (_a) {
    var theme = _a.theme;
    return theme.shadow.Level1;
}, function (_a) {
    var size = _a.size;
    return size && FONT_SIZE_SIZE_BASED_ON_SIZE[size];
}, function (_a) {
    var theme = _a.theme;
    return theme.borderRadius.Circular;
});
exports.Badge = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 2px;\n  right: 2px;\n\n  width: 8px;\n  height: 8px;\n  /* border-radius: ", "; */\n  \n  background: red;\n  /* background: ", "; */\n"], ["\n  position: absolute;\n  top: 2px;\n  right: 2px;\n\n  width: 8px;\n  height: 8px;\n  /* border-radius: ", "; */\n  \n  background: red;\n  /* background: ", "; */\n"])), function (_a) {
    var theme = _a.theme;
    return theme.borderRadius.Circular;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.helper;
});
var templateObject_1, templateObject_2;
