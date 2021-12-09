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
exports.Input = void 0;
var react_1 = __importStar(require("react"));
var hooks_1 = require("../../hooks");
var input_style_1 = require("./input.style");
var Input = function (props) {
    var _a;
    var dropdownRef = (0, react_1.useRef)(null);
    var _b = (0, react_1.useState)(false), dropdownOpened = _b[0], setDropdownOpened = _b[1];
    var _c = (0, react_1.useState)(props.value || props.defaultValue || ''), inputValue = _c[0], setInputValue = _c[1];
    (0, react_1.useEffect)(function () {
        var _a;
        setInputValue((_a = props.value) !== null && _a !== void 0 ? _a : '');
    }, [props.value]);
    (0, hooks_1.useClickOutside)(function () {
        if (dropdownOpened)
            setDropdownOpened(false);
    }, [dropdownRef, dropdownOpened]);
    var onInputChange = function (evt) {
        if (props.onChange)
            props.onChange(evt);
        else
            setInputValue(evt.target.value);
    };
    var onClickDropdownItem = function (itemValue) {
        setDropdownOpened(false);
        setInputValue(itemValue);
    };
    var onFocusInput = function (evt) {
        if (props.onFocus)
            props.onFocus(evt);
        if (!dropdownOpened)
            setDropdownOpened(true);
    };
    return (react_1.default.createElement(input_style_1.Label, { htmlFor: props === null || props === void 0 ? void 0 : props.name, "data-has-error": props === null || props === void 0 ? void 0 : props.error },
        (props === null || props === void 0 ? void 0 : props.label) &&
            react_1.default.createElement(input_style_1.LabelText, { OnColor: props.OnColor }, props.label),
        react_1.default.createElement(input_style_1.RelativeContainer, null,
            props.iconLeft && react_1.default.createElement(input_style_1.LeftIcon, { iconId: props.iconLeft }),
            props.prefix && !props.iconLeft && react_1.default.createElement(input_style_1.PrefixText, { "data-has-error": props === null || props === void 0 ? void 0 : props.error }, props.prefix),
            react_1.default.createElement(input_style_1.Input, __assign({}, props, { value: inputValue, "data-has-error": !!(props === null || props === void 0 ? void 0 : props.error), onChange: onInputChange, onFocus: onFocusInput, autoComplete: props.autoComplete || props.dropdown && 'off', contentLeft: !!props.iconLeft || !!props.prefix, contentRight: !!props.iconRight || !!props.suffix })),
            props.iconRight && react_1.default.createElement(input_style_1.RightIcon, { iconId: props.iconRight }),
            props.suffix && !props.iconRight && react_1.default.createElement(input_style_1.SuffixText, { "data-has-error": !!(props === null || props === void 0 ? void 0 : props.error) }, props.suffix),
            ((_a = props.dropdown) === null || _a === void 0 ? void 0 : _a.length) && (react_1.default.createElement(input_style_1.DropdownWrapper, { opened: dropdownOpened, ref: dropdownRef }, props.dropdown.map(function (dropdownItem, index) { return (react_1.default.createElement(input_style_1.DropdownItem, { onClick: function () { return onClickDropdownItem(dropdownItem.value); }, key: "input-dropdown-item-".concat(dropdownItem.value, "-").concat(index), active: dropdownItem.value === inputValue }, dropdownItem.value)); })))),
        (props === null || props === void 0 ? void 0 : props.helperText) &&
            react_1.default.createElement(input_style_1.HelperText, { "data-has-error": props === null || props === void 0 ? void 0 : props.error, OnColor: props.OnColor }, props.helperText)));
};
exports.Input = Input;
