"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrapper = exports.Link = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.Link = styled_components_1.default.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-decoration: underline;\n\n  &:visited {\n    color: inherit;\n  }\n"], ["\n  text-decoration: underline;\n\n  &:visited {\n    color: inherit;\n  }\n"])));
var LINK_COLOR = {
    default: 'primary',
    hover: 'neutralLowDark',
    disabled: 'neutralLowLight',
};
var LINK_ON_COLOR = {
    default: 'neutralHigh',
    hover: 'warningMedium',
    disabled: 'neutralLowLight',
};
exports.Wrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n\n  \n  transition: color 0.1s linear;\n  cursor: ", ";\n\n  ", " {\n    color: ", ";\n    cursor: ", ";\n  }\n\n  &:hover {\n    ", " {\n      color: ", ";\n    }\n\n    path {\n      stroke: ", ";\n    }\n  }\n\n  &[data-disabled=true] {\n    ", " {\n      color: ", ";\n    }\n\n    path {\n      stroke: ", ";\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n\n  \n  transition: color 0.1s linear;\n  cursor: ", ";\n\n  ", " {\n    color: ", ";\n    cursor: ", ";\n  }\n\n  &:hover {\n    ", " {\n      color: ", ";\n    }\n\n    path {\n      stroke: ", ";\n    }\n  }\n\n  &[data-disabled=true] {\n    ", " {\n      color: ", ";\n    }\n\n    path {\n      stroke: ", ";\n    }\n  }\n"])), function (_a) {
    var onClick = _a.onClick;
    return onClick ? 'pointer' : 'default';
}, exports.Link, function (_a) {
    var theme = _a.theme, OnColor = _a.OnColor;
    return theme.colors[OnColor ? LINK_ON_COLOR.default : LINK_COLOR.default];
}, function (_a) {
    var onClick = _a.onClick;
    return onClick ? 'pointer' : 'default';
}, exports.Link, function (_a) {
    var theme = _a.theme, OnColor = _a.OnColor;
    return theme.colors[OnColor ? LINK_ON_COLOR.hover : LINK_COLOR.hover];
}, function (_a) {
    var theme = _a.theme, OnColor = _a.OnColor;
    return theme.colors[OnColor ? LINK_ON_COLOR.hover : LINK_COLOR.hover];
}, exports.Link, function (_a) {
    var theme = _a.theme, OnColor = _a.OnColor;
    return theme.colors[OnColor ? LINK_ON_COLOR.disabled : LINK_COLOR.disabled];
}, function (_a) {
    var theme = _a.theme, OnColor = _a.OnColor;
    return theme.colors[OnColor ? LINK_ON_COLOR.disabled : LINK_COLOR.disabled];
});
var templateObject_1, templateObject_2;
