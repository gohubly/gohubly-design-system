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
exports.WithoutProgressBar = exports.Ghost = exports.Secondary = exports.Primary = void 0;
var react_1 = __importDefault(require("react"));
var Stepper_1 = require("../components/Stepper");
exports.default = {
    title: 'Components/Stepper',
    component: Stepper_1.Stepper,
};
var Template = function (args) { return react_1.default.createElement(Stepper_1.Stepper, __assign({ currentStep: 1 }, args)); };
exports.Primary = Template.bind({});
exports.Primary.args = {
    children: 'Default',
    hierarchy: 'primary',
    steps: 5
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    children: 'Default',
    hierarchy: 'secondary',
    steps: 5
};
exports.Ghost = Template.bind({});
exports.Ghost.args = {
    children: 'Default',
    hierarchy: 'ghost',
    steps: 5
};
exports.WithoutProgressBar = Template.bind({});
exports.WithoutProgressBar.args = {
    children: 'Default',
    hierarchy: 'primary',
    steps: 5,
    hasProgressBar: false
};
