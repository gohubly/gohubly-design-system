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
exports.PrimaryOnColor = exports.WithIcon = exports.WithError = exports.Disabled = exports.Ghost = exports.Secondary = exports.Primary = void 0;
var react_1 = __importDefault(require("react"));
var __1 = require("..");
exports.default = {
    title: 'Components/Button',
    component: __1.Button,
};
var Template = function (args) { return react_1.default.createElement(__1.Button, __assign({}, args)); };
exports.Primary = Template.bind({});
exports.Primary.args = {
    children: 'Default',
    hierarchy: 'primary'
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    children: 'Secondary',
    hierarchy: 'secondary'
};
exports.Ghost = Template.bind({});
exports.Ghost.args = {
    children: 'Ghost',
    hierarchy: 'ghost'
};
exports.Disabled = Template.bind({});
exports.Disabled.args = {
    children: 'Disabled',
    disabled: true,
};
exports.WithError = Template.bind({});
exports.WithError.args = {
    error: true,
    children: 'Error'
};
exports.WithIcon = Template.bind({});
exports.WithIcon.args = {
    icon: 'information',
    children: 'With icon'
};
exports.PrimaryOnColor = Template.bind({});
exports.PrimaryOnColor.args = {
    OnColor: true,
    children: 'On Color'
};
exports.PrimaryOnColor.parameters = {
    backgrounds: {
        default: 'figma',
    },
};
