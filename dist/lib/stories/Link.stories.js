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
exports.Disabled = exports.WithIcon = exports.OnColor = exports.Default = void 0;
var react_1 = __importDefault(require("react"));
var __1 = require("..");
exports.default = {
    title: 'Components/Link',
    component: __1.Link,
};
var Template = function (args) { return react_1.default.createElement(__1.Link, __assign({}, args)); };
exports.Default = Template.bind({});
exports.Default.args = {
    onClick: function () { return false; },
    children: 'Link'
};
exports.OnColor = Template.bind({});
exports.OnColor.args = {
    onClick: function () { return false; },
    OnColor: true,
    children: 'Link OnColor'
};
exports.OnColor.parameters = {
    backgrounds: {
        default: 'figma',
    },
};
exports.WithIcon = Template.bind({});
exports.WithIcon.args = {
    onClick: function () { return false; },
    children: 'Link with Icon',
    icon: 'chevronRight'
};
exports.Disabled = Template.bind({});
exports.Disabled.args = {
    onClick: function () { return false; },
    children: 'Link Disabled',
    disabled: true,
};
