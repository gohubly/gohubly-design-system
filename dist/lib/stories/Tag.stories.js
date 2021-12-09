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
exports.SuccessOnColor = exports.AlertOnColor = exports.WarningOnColor = exports.PrimaryOnColor = exports.Success = exports.Alert = exports.Warning = exports.Primary = void 0;
var react_1 = __importDefault(require("react"));
var __1 = require("..");
exports.default = {
    title: 'Components/Tag',
    component: __1.Tag,
};
var Template = function (args) { return react_1.default.createElement(__1.Tag, __assign({}, args)); };
exports.Primary = Template.bind({});
exports.Primary.args = {
    hierarchy: 'primary',
    children: 'Tag'
};
exports.Warning = Template.bind({});
exports.Warning.args = {
    hierarchy: 'warning',
    children: 'Tag'
};
exports.Alert = Template.bind({});
exports.Alert.args = {
    hierarchy: 'alert',
    children: 'Tag'
};
exports.Success = Template.bind({});
exports.Success.args = {
    hierarchy: 'success',
    children: 'Tag'
};
exports.PrimaryOnColor = Template.bind({});
exports.PrimaryOnColor.args = {
    hierarchy: 'primary',
    children: 'Tag',
    OnColor: true,
};
exports.PrimaryOnColor.parameters = {
    backgrounds: {
        default: 'figma',
    },
};
exports.WarningOnColor = Template.bind({});
exports.WarningOnColor.args = {
    hierarchy: 'warning',
    children: 'Tag',
    OnColor: true,
};
exports.WarningOnColor.parameters = {
    backgrounds: {
        default: 'figma',
    },
};
exports.AlertOnColor = Template.bind({});
exports.AlertOnColor.args = {
    hierarchy: 'alert',
    children: 'Tag',
    OnColor: true,
};
exports.AlertOnColor.parameters = {
    backgrounds: {
        default: 'figma',
    },
};
exports.SuccessOnColor = Template.bind({});
exports.SuccessOnColor.args = {
    hierarchy: 'success',
    children: 'Tag',
    OnColor: true,
};
exports.SuccessOnColor.parameters = {
    backgrounds: {
        default: 'figma',
    },
};
