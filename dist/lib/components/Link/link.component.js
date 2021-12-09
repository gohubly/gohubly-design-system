"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
var react_1 = __importDefault(require("react"));
var Icon_1 = require("../Icon");
var link_style_1 = require("./link.style");
var Link = function (_a) {
    var children = _a.children, onClick = _a.onClick, OnColor = _a.OnColor, disabled = _a.disabled, icon = _a.icon;
    var handleClick = function () {
        if (disabled)
            return;
        onClick && onClick();
    };
    return (react_1.default.createElement(link_style_1.Wrapper, { onClick: handleClick, OnColor: OnColor, "data-disabled": disabled },
        react_1.default.createElement(link_style_1.Link, null, children),
        react_1.default.createElement(Icon_1.Icon, { iconId: icon, OnColor: OnColor })));
};
exports.Link = Link;
