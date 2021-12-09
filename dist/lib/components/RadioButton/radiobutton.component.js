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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioButton = void 0;
var react_1 = __importStar(require("react"));
var radiobutton_style_1 = require("./radiobutton.style");
var RadioButton = function (props) {
    var _a = (0, react_1.useState)(props.value), checkedValue = _a[0], setCheckedValue = _a[1];
    var onChangeValue = function (evt) {
        setCheckedValue(evt.target.value);
        if (props.onChange)
            props.onChange(evt.target.value);
    };
    var ref = (0, react_1.useRef)();
    return (react_1.default.createElement("div", null, props.options &&
        (props.options.map(function (value, index) {
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(radiobutton_style_1.Label, __assign({}, props, { key: index, htmlFor: value.title, disabled: props.disabled, onColor: props.onColor, className: props.disabled ? 'disabled' : '' }),
                    value.title,
                    react_1.default.createElement(radiobutton_style_1.Box, { id: value.title, name: props.name, ref: ref, value: value.value, checked: checkedValue === value.value, disabled: props.disabled, onChange: onChangeValue }),
                    react_1.default.createElement(radiobutton_style_1.Mark, { onColor: props.onColor, disabled: props.disabled, className: props.disabled ? 'disabled' : '' })),
                react_1.default.createElement(radiobutton_style_1.Spacer, null)));
        }))));
};
exports.RadioButton = RadioButton;
