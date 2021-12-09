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
exports.WithDropdown = exports.WithSuffix = exports.WithPrefix = exports.WithIconRight = exports.WithIconLeft = exports.Disabled = exports.OnColor = exports.WithError = exports.Default = void 0;
var react_1 = __importDefault(require("react"));
var __1 = require("..");
exports.default = {
    title: 'Components/Input',
    component: __1.Input,
};
var Template = function (args) { return react_1.default.createElement(__1.Input, __assign({}, args)); };
exports.Default = Template.bind({});
exports.Default.args = {
    name: 'input-name',
    label: 'Label',
    placeholder: 'placeholder...',
};
exports.WithError = Template.bind({});
exports.WithError.args = {
    name: 'input-name',
    label: 'Label',
    placeholder: 'placeholder...',
    error: true,
};
exports.OnColor = Template.bind({});
exports.OnColor.args = {
    name: 'input-name',
    label: 'Label',
    placeholder: 'placeholder...',
    OnColor: true,
};
exports.OnColor.parameters = {
    backgrounds: {
        default: 'figma',
    },
};
exports.Disabled = Template.bind({});
exports.Disabled.args = {
    name: 'input-name',
    label: 'Label',
    placeholder: 'placeholder...',
    disabled: true,
};
exports.WithIconLeft = Template.bind({});
exports.WithIconLeft.args = {
    name: 'input-name',
    label: 'Label',
    placeholder: 'placeholder...',
    iconLeft: 'heart'
};
exports.WithIconRight = Template.bind({});
exports.WithIconRight.args = {
    name: 'input-name',
    label: 'Label',
    placeholder: 'placeholder...',
    iconRight: 'instagram'
};
exports.WithPrefix = Template.bind({});
exports.WithPrefix.args = {
    name: 'input-name',
    label: 'Label',
    placeholder: 'placeholder...',
    prefix: 'R$'
};
exports.WithSuffix = Template.bind({});
exports.WithSuffix.args = {
    name: 'input-name',
    label: 'Label',
    placeholder: 'placeholder...',
    suffix: 'kg'
};
exports.WithDropdown = Template.bind({});
exports.WithDropdown.args = {
    name: 'input-name',
    label: 'Label',
    placeholder: 'placeholder...',
    dropdown: [
        {
            value: 'value-label-1'
        },
        {
            value: 'value-label-2'
        },
        {
            value: 'value-label-3',
            tag: {
                background: 'warning',
                label: 'Tag'
            }
        },
    ]
};
