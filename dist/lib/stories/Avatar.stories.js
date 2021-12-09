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
exports.LargeWithImage = exports.OnColor = exports.WithBadge = exports.Default = void 0;
var react_1 = __importDefault(require("react"));
var __1 = require("..");
exports.default = {
    title: 'Components/Avatar',
    component: __1.Avatar,
};
var Template = function (args) { return react_1.default.createElement(__1.Avatar, __assign({}, args)); };
exports.Default = Template.bind({});
exports.Default.args = {
    name: 'Default',
};
exports.WithBadge = Template.bind({});
exports.WithBadge.args = {
    name: 'Badge',
    badge: true,
};
exports.OnColor = Template.bind({});
exports.OnColor.args = {
    OnColor: true,
    name: "On Color",
};
exports.OnColor.parameters = {
    backgrounds: {
        default: 'figma',
    },
};
exports.LargeWithImage = Template.bind({});
exports.LargeWithImage.args = {
    size: 'LG',
    image: 'https://www.wikileaf.com/thestash/wp-content/uploads/2020/09/screen-shot-2014-06-20-at-1-11-15-pm.png'
};
