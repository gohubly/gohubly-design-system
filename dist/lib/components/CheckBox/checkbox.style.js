"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mark = exports.Box = exports.Label = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = __importDefault(require("../../theme/theme"));
exports.Label = styled_components_1.default.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  position: relative;\n  padding-left: 28px;\n  line-height: 16px;\n  font-size: 14px;\n\n  padding-top: 2px;\n  padding-bottom: 2px;\n\n  cursor: ", ";\n  user-select: none;\n\n  color: ", ";\n  \n  &:hover {\n    color: ", ";\n  }\n\n  &:hover span,\n  input:checked ~ span {\n    background-color: ", ";\n    border: 2px solid ", ";\n  }\n\n  &:hover {\n    span {\n      background-color: ", ";\n      border: 2px solid ", ";\n    }\n  }\n  \n  &.disabled {\n    color: ", ";\n    \n    &:hover span,\n    input:checked ~ span {\n      background-color: ", ";\n      border: 2px solid ", ";\n      cursor: not-allowed;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  position: relative;\n  padding-left: 28px;\n  line-height: 16px;\n  font-size: 14px;\n\n  padding-top: 2px;\n  padding-bottom: 2px;\n\n  cursor: ", ";\n  user-select: none;\n\n  color: ", ";\n  \n  &:hover {\n    color: ", ";\n  }\n\n  &:hover span,\n  input:checked ~ span {\n    background-color: ", ";\n    border: 2px solid ", ";\n  }\n\n  &:hover {\n    span {\n      background-color: ", ";\n      border: 2px solid ", ";\n    }\n  }\n  \n  &.disabled {\n    color: ", ";\n    \n    &:hover span,\n    input:checked ~ span {\n      background-color: ", ";\n      border: 2px solid ", ";\n      cursor: not-allowed;\n    }\n  }\n"])), function (_a) {
    var disabled = _a.disabled;
    return disabled ? 'not-allowed' : 'pointer';
}, function (_a) {
    var onColor = _a.onColor, theme = _a.theme;
    return onColor ? theme.colors.neutralHigh : theme.colors.neutralLowDark;
}, function (_a) {
    var theme = _a.theme, onColor = _a.onColor;
    return onColor ? theme.colors.white : theme.colors.primary;
}, function (_a) {
    var onColor = _a.onColor, theme = _a.theme;
    return onColor ? theme.colors.white : theme.colors.primary;
}, function (_a) {
    var onColor = _a.onColor, theme = _a.theme;
    return onColor ? theme.colors.white : theme.colors.primary;
}, theme_1.default.colors.primaryLightest, function (_a) {
    var onColor = _a.onColor, theme = _a.theme;
    return onColor ? theme.colors.white : theme.colors.neutralLowDark;
}, function (_a) {
    var onColor = _a.onColor, theme = _a.theme;
    return onColor ? theme.colors.primaryLight : theme.colors.neutralLowMedium;
}, function (_a) {
    var onColor = _a.onColor, theme = _a.theme;
    return onColor ? 'transparent' : theme.colors.white;
}, function (_a) {
    var onColor = _a.onColor, theme = _a.theme;
    return onColor ? theme.colors.primaryLight : theme.colors.neutralLowMedium;
});
exports.Box = styled_components_1.default.input.attrs({
    type: 'checkbox',
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  cursor: pointer;\n  position: absolute;\n  opacity: 0;\n  height: 0;\n  width: 0;\n\n  &:checked ~ span:after {\n    display: block;\n  }\n"], ["\n  cursor: pointer;\n  position: absolute;\n  opacity: 0;\n  height: 0;\n  width: 0;\n\n  &:checked ~ span:after {\n    display: block;\n  }\n"])));
exports.Mark = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 16px;\n  width: 16px;\n  background-color: transparent;\n  border-radius: 4px;\n  border: 2px solid ", ";\n\n  &.disabled {\n    border: 2px solid ", ";\n  }\n\n  transition: 180ms ease-in-out;\n\n  &.disabled {\n    &:after {\n      content: '';\n      position: absolute;\n      display: none;\n  \n      left: 5px;\n      top: 2px;\n  \n      width: 4px;\n      height: 8px;\n  \n      border: solid ", ";\n      border-width: 0 2px 2px 0;\n  \n      transform: rotate(45deg);\n    }\n  }\n\n  &:after {\n    content: '';\n    position: absolute;\n    display: none;\n\n    left: 5px;\n    top: 2px;\n\n    width: 4px;\n    height: 8px;\n\n    border: solid ", ";\n    border-width: 0 2px 2px 0;\n\n    transform: rotate(45deg);\n  }\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 16px;\n  width: 16px;\n  background-color: transparent;\n  border-radius: 4px;\n  border: 2px solid ", ";\n\n  &.disabled {\n    border: 2px solid ", ";\n  }\n\n  transition: 180ms ease-in-out;\n\n  &.disabled {\n    &:after {\n      content: '';\n      position: absolute;\n      display: none;\n  \n      left: 5px;\n      top: 2px;\n  \n      width: 4px;\n      height: 8px;\n  \n      border: solid ", ";\n      border-width: 0 2px 2px 0;\n  \n      transform: rotate(45deg);\n    }\n  }\n\n  &:after {\n    content: '';\n    position: absolute;\n    display: none;\n\n    left: 5px;\n    top: 2px;\n\n    width: 4px;\n    height: 8px;\n\n    border: solid ", ";\n    border-width: 0 2px 2px 0;\n\n    transform: rotate(45deg);\n  }\n"])), function (_a) {
    var onColor = _a.onColor, theme = _a.theme;
    return onColor ? theme.colors.white : theme.colors.neutralLowDark;
}, function (_a) {
    var onColor = _a.onColor, theme = _a.theme;
    return onColor ? theme.colors.primaryLight : theme.colors.neutralLowMedium;
}, function (_a) {
    var onColor = _a.onColor, theme = _a.theme;
    return onColor ? theme.colors.primaryLight : theme.colors.neutralLowMedium;
}, function (_a) {
    var onColor = _a.onColor, theme = _a.theme;
    return onColor ? theme.colors.primary : theme.colors.white;
});
var templateObject_1, templateObject_2, templateObject_3;
