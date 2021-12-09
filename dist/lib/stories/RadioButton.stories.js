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
exports.DisabledRadioButtonOnColor = exports.RadioButtonGroupOnColor = exports.DisabledRadioButton = exports.RadioButtonGroup = void 0;
var react_1 = __importDefault(require("react"));
var __1 = require("..");
exports.default = {
    title: 'Components/RadioButton',
    component: __1.RadioButton,
    argTypes: { onClick: { action: 'clicked' } },
    parameters: {
        backgrounds: {
            default: 'light',
        },
    },
};
var Template = function (args) { return react_1.default.createElement(__1.RadioButton, __assign({}, args)); };
var options = [
    {
        value: '1',
        title: 'Option 1'
    },
    {
        value: '2',
        title: 'Option 2'
    },
];
exports.RadioButtonGroup = Template.bind({});
exports.RadioButtonGroup.args = {
    name: "RadioButtonGroup",
    label: "Radio Button",
    value: '1',
    readOnly: false,
    disabled: false,
    onColor: false,
    options: options,
    onChange: function () { }
};
exports.RadioButtonGroup.parameters = {
    backgrounds: {
        default: 'light',
    },
};
exports.DisabledRadioButton = Template.bind({});
exports.DisabledRadioButton.args = {
    name: "DisabledRadioButton",
    label: "Disabled Radio Button",
    value: '',
    readOnly: false,
    disabled: true,
    onColor: false,
    options: options,
    onChange: function () { }
};
exports.DisabledRadioButton.parameters = {
    backgrounds: {
        default: 'light',
    },
};
exports.RadioButtonGroupOnColor = Template.bind({});
exports.RadioButtonGroupOnColor.args = {
    name: "RadioButtonOnColor",
    label: "Radio Button onColor",
    value: '1',
    readOnly: false,
    disabled: false,
    onColor: true,
    options: options,
    onChange: function () { }
};
exports.RadioButtonGroupOnColor.parameters = {
    backgrounds: {
        default: 'figma',
    },
};
exports.DisabledRadioButtonOnColor = Template.bind({});
exports.DisabledRadioButtonOnColor.args = {
    name: "DisabledRadioButtonOnColor",
    label: "Disabled Radio Button onColor",
    value: '',
    readOnly: false,
    disabled: true,
    onColor: true,
    options: options,
    onChange: function () { }
};
exports.DisabledRadioButtonOnColor.parameters = {
    backgrounds: {
        default: 'figma',
    },
};
