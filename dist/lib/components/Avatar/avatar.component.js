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
exports.Avatar = void 0;
var react_1 = __importDefault(require("react"));
var avatar_style_1 = require("./avatar.style");
var Avatar = function (_a) {
    var badge = _a.badge, name = _a.name, image = _a.image, OnColor = _a.OnColor, _b = _a.size, size = _b === void 0 ? 'MD' : _b;
    var props = {
        badge: badge,
        image: image,
        OnColor: OnColor,
        size: size,
    };
    console.warn({ OnColor: OnColor });
    return (react_1.default.createElement(avatar_style_1.Wrapper, __assign({}, props),
        name && name.charAt(0).toUpperCase(),
        badge && react_1.default.createElement(avatar_style_1.Badge, null)));
};
exports.Avatar = Avatar;
