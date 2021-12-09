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
exports.disabledUncheckedOnColor = exports.disabledCheckedOnColor = exports.CheckedBoxOnColor = exports.DisabledUncheckedBox = exports.DisabledCheckedBox = exports.CheckedBox = void 0;
var react_1 = __importDefault(require("react"));
var __1 = require("..");
exports.default = {
    title: 'Components/CheckBox',
    component: __1.CheckBox,
    argTypes: { onClick: { action: 'clicked' } },
    parameters: {
        backgrounds: {
            default: 'light',
        },
    },
};
var Template = function (args) { return react_1.default.createElement(__1.CheckBox, __assign({}, args)); };
exports.CheckedBox = Template.bind({});
exports.CheckedBox.args = {
    name: "checked",
    label: "CheckBox",
    checked: true,
    readOnly: false,
    disabled: false,
    onColor: false,
    onChange: function () { }
};
exports.CheckedBox.parameters = {
    backgrounds: {
        default: 'light',
    },
};
exports.DisabledCheckedBox = Template.bind({});
exports.DisabledCheckedBox.args = {
    name: "disabledBox",
    label: "Disabled CheckBox",
    checked: true,
    readOnly: false,
    disabled: true,
    onColor: false,
    onChange: function () { }
};
exports.DisabledCheckedBox.parameters = {
    backgrounds: {
        default: 'light',
    },
};
exports.DisabledUncheckedBox = Template.bind({});
exports.DisabledUncheckedBox.args = {
    name: "disabledBox",
    label: "Disabled CheckBox",
    checked: false,
    readOnly: false,
    disabled: true,
    onColor: false,
    onChange: function () { }
};
exports.DisabledUncheckedBox.parameters = {
    backgrounds: {
        default: 'light',
    },
};
exports.CheckedBoxOnColor = Template.bind({});
exports.CheckedBoxOnColor.args = {
    name: "checked",
    label: "CheckBox onColor",
    checked: true,
    readOnly: false,
    disabled: false,
    onColor: true,
    onChange: function () { }
};
exports.CheckedBoxOnColor.parameters = {
    backgrounds: {
        default: 'figma',
    },
};
exports.disabledCheckedOnColor = Template.bind({});
exports.disabledCheckedOnColor.args = {
    name: "disabledCheckedBoxOnColor",
    label: "Disabled Checked onColor",
    checked: true,
    readOnly: false,
    disabled: true,
    onColor: true,
    onChange: function () { }
};
exports.disabledCheckedOnColor.parameters = {
    backgrounds: {
        default: 'figma',
    },
};
exports.disabledUncheckedOnColor = Template.bind({});
exports.disabledUncheckedOnColor.args = {
    name: "disabledUncheckedOnColor",
    label: "Disabled Unchecked onColor",
    checked: false,
    readOnly: false,
    disabled: true,
    onColor: true,
    onChange: function () { }
};
exports.disabledUncheckedOnColor.parameters = {
    backgrounds: {
        default: 'figma',
    },
};
