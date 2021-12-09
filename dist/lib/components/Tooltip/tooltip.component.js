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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = void 0;
var react_1 = __importDefault(require("react"));
var tooltip_style_1 = require("./tooltip.style");
var Tooltip = function (_a) {
    var children = _a.children, pointerOrientation = _a.pointerOrientation, _b = _a.pointerPosition, pointerPosition = _b === void 0 ? 'center' : _b, _c = _a.size, size = _c === void 0 ? 'SM' : _c, position = _a.position, text = _a.text, shadow = _a.shadow;
    var props = {
        pointerOrientation: pointerOrientation,
        pointerPosition: pointerPosition,
        position: position,
        size: size,
        shadow: shadow,
        text: text,
    };
    return (react_1.default.createElement(tooltip_style_1.Container, null,
        children,
        react_1.default.createElement(tooltip_style_1.Wrapper, __assign({}, props),
            react_1.default.createElement("span", null, text),
            react_1.default.createElement(tooltip_style_1.Pointer, __assign({}, props)))));
};
exports.Tooltip = Tooltip;
