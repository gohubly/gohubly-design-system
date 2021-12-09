"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = exports.Pointer = exports.Wrapper = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var PADDING_BY_SIZE = {
    LG: '8px 12px',
    SM: '4px 8px'
};
var FONT_SIZE_BY_SIZE = {
    LG: '14px',
    SM: '12px'
};
var WRAPPER_POSITION_BY_POSITION = {
    up: 'bottom: 140%;',
    down: 'top: 140%;',
    left: 'left: 110%; top: 0px;',
    right: 'right: 110%; top: 0px;',
};
var POINTER_SIZE_BY_SIZE = {
    SM: '8px',
    LG: '10px',
};
exports.Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  width: fit-content;\n\n  ", "\n\n  background: ", ";\n  padding: ", ";\n\n  opacity: 1;\n  pointer-events: none;\n\n  &:hover {\n    opacity: 1;\n  }\n\n  border-radius: 8px;\n  box-shadow: ", ";\n\n  span {\n    font-weight: 500;\n    font-size: ", ";\n    line-height: 16px;\n    \n    color: ", ";\n  }\n\n  transition: opacity 0.1s linear;\n"], ["\n  position: absolute;\n  width: fit-content;\n\n  ", "\n\n  background: ", ";\n  padding: ", ";\n\n  opacity: 1;\n  pointer-events: none;\n\n  &:hover {\n    opacity: 1;\n  }\n\n  border-radius: 8px;\n  box-shadow: ", ";\n\n  span {\n    font-weight: 500;\n    font-size: ", ";\n    line-height: 16px;\n    \n    color: ", ";\n  }\n\n  transition: opacity 0.1s linear;\n"])), function (_a) {
    var position = _a.position;
    return WRAPPER_POSITION_BY_POSITION[position];
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.neutralLowDark;
}, function (_a) {
    var size = _a.size;
    return PADDING_BY_SIZE[size];
}, function (_a) {
    var theme = _a.theme, shadow = _a.shadow;
    return shadow ? theme.shadow.Level1 : '';
}, function (_a) {
    var size = _a.size;
    return FONT_SIZE_BY_SIZE[size];
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.neutralHigh;
});
var POINTER_ABSOLUTE_POSITION_BY_ORIENTATION_POSITION = {
    up: {
        center: "bottom: 85%; left: 50%; transform: translateX(-50%) rotate(45deg)",
        left: "bottom: 85%; left: 8px; transform: rotate(45deg)",
        right: "bottom: 85%; right: 8px; transform: rotate(45deg)",
    },
    down: {
        center: "top: 95%; left: 50%; transform: rotate(45deg) translateX(-50%);",
        left: "top: 85%; left: 8px; transform: rotate(45deg)",
        right: "top: 85%; right: 8px; transform: rotate(45deg)",
    },
    left: {
        center: "right: 96%; top: 50%; transform: rotate(45deg) translateY(-50%);",
        left: "right: 96%; top: 8px; transform: rotate(45deg)",
        right: "right: 96%; bottom: 8px; transform: rotate(45deg)",
    },
    right: {
        center: "left: 95%; top: 50%; transform: rotate(45deg) translateY(-50%);",
        left: "left: 96%; top: 8px; transform: rotate(45deg)",
        right: "left: 96%; bottom: 8px; transform: rotate(45deg)",
    },
};
exports.Pointer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n\n  width: ", ";\n  height: ", ";\n\n  ", ";\n\n  background: ", ";\n  border-radius: 0px;\n"], ["\n  position: absolute;\n\n  width: ", ";\n  height: ", ";\n\n  ", ";\n\n  background: ", ";\n  border-radius: 0px;\n"])), function (_a) {
    var size = _a.size;
    return POINTER_SIZE_BY_SIZE[size];
}, function (_a) {
    var size = _a.size;
    return POINTER_SIZE_BY_SIZE[size];
}, function (_a) {
    var pointerOrientation = _a.pointerOrientation, pointerPosition = _a.pointerPosition;
    return POINTER_ABSOLUTE_POSITION_BY_ORIENTATION_POSITION[pointerOrientation][pointerPosition];
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.neutralLowDark;
});
exports.Container = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n\n  &:hover {\n    ", " {\n      opacity: 1;\n    }\n  }\n"], ["\n  position: relative;\n\n  &:hover {\n    ", " {\n      opacity: 1;\n    }\n  }\n"])), exports.Wrapper);
var templateObject_1, templateObject_2, templateObject_3;
