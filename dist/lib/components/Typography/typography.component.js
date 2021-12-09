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
exports.Typography = void 0;
var react_1 = __importDefault(require("react"));
var typography_style_1 = require("./typography.style");
var Typography = function (_a) {
    var _b = _a.as, as = _b === void 0 ? 'span' : _b, size = _a.size, fontWeight = _a.fontWeight, lineHeight = _a.lineHeight, children = _a.children, color = _a.color;
    var props = {
        as: as,
        children: children,
        size: size,
        fontWeight: fontWeight,
        lineHeight: lineHeight,
        color: color,
    };
    switch (as || size) {
        case 'p':
            return react_1.default.createElement(typography_style_1.Paragraph, __assign({}, props), children);
        case 'span':
            return react_1.default.createElement(typography_style_1.Span, __assign({}, props), children);
    }
};
exports.Typography = Typography;
