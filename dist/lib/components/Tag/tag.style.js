"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var BACKGROUND_COLOR_BY_HIERARCHY = {
    primary: 'primaryLightest',
    success: 'successLight',
    alert: 'helperLight',
    warning: 'warningLight',
};
var COLOR_BY_HIERARCHY = {
    primary: 'neutralLowDark',
    success: 'neutralLowDark',
    alert: 'neutralLowDark',
    warning: 'neutralLowDark',
};
var HOVER_BACKGROUND_BY_HIERARCHY = {
    primary: 'primary',
    success: 'successMedium',
    alert: 'helperMedium',
    warning: 'warningMedium',
};
var HOVER_COLOR_BY_HIERARCHY = __assign(__assign({}, COLOR_BY_HIERARCHY), { primary: 'white', success: 'white', alert: 'white' });
var HOVER_BACKGROUND_ON_COLOR_BY_HIERARCHY = __assign(__assign({}, HOVER_BACKGROUND_BY_HIERARCHY), { primary: 'primaryLight' });
var HOVER_ON_COLOR_BY_HIERARCHY = __assign(__assign({}, HOVER_COLOR_BY_HIERARCHY), { primary: 'neutralLowDark' });
exports.Tag = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n  transition: background-color .3s linear;\n  padding: 4px 8px;\n\n  color: ", ";\n  background-color: ", ";\n\n  cursor: ", ";\n\n  border: 0;\n  border-radius: ", ";\n\n  &:hover:not(:disabled) {\n    color: ", ";\n    background-color: ", ";\n  }\n"], ["\n  width: ", ";\n  transition: background-color .3s linear;\n  padding: 4px 8px;\n\n  color: ", ";\n  background-color: ", ";\n\n  cursor: ", ";\n\n  border: 0;\n  border-radius: ", ";\n\n  &:hover:not(:disabled) {\n    color: ", ";\n    background-color: ", ";\n  }\n"])), function (_a) {
    var fluid = _a.fluid;
    return fluid ? '100%' : 'fit-content';
}, function (_a) {
    var theme = _a.theme, hierarchy = _a.hierarchy;
    return hierarchy && theme.colors[COLOR_BY_HIERARCHY[hierarchy]];
}, function (_a) {
    var theme = _a.theme, hierarchy = _a.hierarchy;
    return hierarchy && theme.colors[BACKGROUND_COLOR_BY_HIERARCHY[hierarchy]];
}, function (_a) {
    var onClick = _a.onClick;
    return onClick ? 'pointer' : 'initial';
}, function (_a) {
    var theme = _a.theme;
    return theme.borderRadius.Pill;
}, function (_a) {
    var theme = _a.theme, hierarchy = _a.hierarchy, OnColor = _a.OnColor;
    return hierarchy && theme.colors[OnColor ? HOVER_ON_COLOR_BY_HIERARCHY[hierarchy] : HOVER_COLOR_BY_HIERARCHY[hierarchy]];
}, function (_a) {
    var theme = _a.theme, hierarchy = _a.hierarchy, OnColor = _a.OnColor;
    return hierarchy && theme.colors[OnColor ? HOVER_BACKGROUND_ON_COLOR_BY_HIERARCHY[hierarchy] : HOVER_BACKGROUND_BY_HIERARCHY[hierarchy]];
});
var templateObject_1;
