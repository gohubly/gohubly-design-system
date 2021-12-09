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
exports.CheckBox = void 0;
var react_1 = __importStar(require("react"));
var checkbox_style_1 = require("./checkbox.style");
var CheckBox = function (props) {
    var _a = (0, react_1.useState)(props.checked), checkedValue = _a[0], setCheckedValue = _a[1];
    var ref = (0, react_1.useRef)();
    var onChange = function (evt) {
        setCheckedValue(!checkedValue);
        if (props.onChange)
            props.onChange(evt.target.value);
    };
    return (react_1.default.createElement(checkbox_style_1.Label, __assign({}, props, { htmlFor: props.name, disabled: props.disabled, onColor: props.onColor, className: props.disabled ? 'disabled' : '' }),
        props.label,
        react_1.default.createElement(checkbox_style_1.Box, { id: props.name, ref: ref, checked: checkedValue, disabled: props.disabled, onChange: onChange }),
        react_1.default.createElement(checkbox_style_1.Mark, { onColor: props.onColor, disabled: props.disabled, className: props.disabled ? 'disabled' : '' })));
};
exports.CheckBox = CheckBox;
