"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepWrapper = exports.ProgressBar = exports.Container = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var BACKGROUND_COLOR_BY_HIERARCHY = {
    primary: 'primary',
    ghost: 'transparent',
    secondary: 'primaryLightest'
};
var COLOR_BY_HIERARCHY = {
    primary: 'white',
    ghost: 'primary',
    secondary: 'primary'
};
var BORDER_COLOR_BY_HIERARCHY = {
    primary: 'transparent',
    ghost: 'primary',
    secondary: 'transparent'
};
var PROGRESS_BAR_WIDTH_BY_STATE = {
    completed: '100%',
    active: '50%',
    initial: '0%'
};
exports.Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  \n  display: flex;\n  align-items: center;\n"], ["\n  position: relative;\n  \n  display: flex;\n  align-items: center;\n"])));
exports.ProgressBar = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  top: 50%;\n  left: 0%;\n  width: 124px;\n  margin: 0 6px;\n  height: 3px;\n  flex: 1;\n  z-index: 0;\n  border-radius: 100px;\n  background: ", ";\n\n  &::before {\n    content: '';\n\n    position: absolute;\n    left: 0;\n    top: 0;\n\n    height: 100%;\n    width: ", ";\n\n    border-radius: 100px;\n    background-color: ", ";\n  }\n"], ["\n  position: relative;\n  top: 50%;\n  left: 0%;\n  width: 124px;\n  margin: 0 6px;\n  height: 3px;\n  flex: 1;\n  z-index: 0;\n  border-radius: 100px;\n  background: ", ";\n\n  &::before {\n    content: '';\n\n    position: absolute;\n    left: 0;\n    top: 0;\n\n    height: 100%;\n    width: ", ";\n\n    border-radius: 100px;\n    background-color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primaryLightest;
}, function (_a) {
    var completed = _a.completed, active = _a.active;
    return PROGRESS_BAR_WIDTH_BY_STATE[completed ? 'completed' : active ? 'active' : 'initial'];
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
exports.StepWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  height: 40px;\n  width: 40px;\n  \n  border-radius: 100px;\n  border: 1px solid ", ";\n\n  background-color: ", ";\n\n  margin: ", ";\n\n  & > span {\n    color: ", ";\n  }\n  \n  & path {\n    stroke: ", ";\n  }\n  \n  z-index: 1;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  height: 40px;\n  width: 40px;\n  \n  border-radius: 100px;\n  border: 1px solid ", ";\n\n  background-color: ", ";\n\n  margin: ", ";\n\n  & > span {\n    color: ", ";\n  }\n  \n  & path {\n    stroke: ", ";\n  }\n  \n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme, hierarchy = _a.hierarchy;
    return theme.colors[BORDER_COLOR_BY_HIERARCHY[hierarchy]];
}, function (_a) {
    var theme = _a.theme, hierarchy = _a.hierarchy;
    return theme.colors[BACKGROUND_COLOR_BY_HIERARCHY[hierarchy]];
}, function (_a) {
    var hasProgressBar = _a.hasProgressBar;
    return "0px ".concat(!hasProgressBar ? '8px' : '0px');
}, function (_a) {
    var theme = _a.theme, hierarchy = _a.hierarchy;
    return theme.colors[COLOR_BY_HIERARCHY[hierarchy]];
}, function (_a) {
    var theme = _a.theme, hierarchy = _a.hierarchy;
    return theme.colors[COLOR_BY_HIERARCHY[hierarchy]];
});
var templateObject_1, templateObject_2, templateObject_3;
