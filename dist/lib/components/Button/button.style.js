"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = exports.IconStyled = void 0;
var styled_components_1 = __importStar(require("styled-components"));
var helpers_1 = require("../../helpers");
var theme_1 = __importDefault(require("../../theme/theme"));
var Icon_1 = require("../Icon");
var BACKGROUND_COLOR_BY_HIERARCHY = {
    primary: 'primary',
    ghost: 'transparent',
    secondary: 'transparent'
};
var HOVER_COLOR_BY_HIERARCHY = {
    primary: 'primaryMedium',
    ghost: 'primaryLightest',
    secondary: 'primaryLightest'
};
var COLOR_BY_HIERARCHY = {
    primary: 'white',
    ghost: 'primary',
    secondary: 'primary'
};
var DISABLED_BACKGROUND_COLOR_BY_HIERARCHY = {
    primary: 'neutralHighLight',
    ghost: 'transparent',
    secondary: 'neutralHighLight'
};
var BORDER_COLOR_BY_HIERARCHY = {
    primary: 'transparent',
    ghost: 'transparent',
    secondary: 'primary'
};
var HELPER_BACKGROUND_BY_HIERARCHY = {
    primary: 'helper',
    ghost: 'transparent',
    secondary: 'transparent'
};
var HELPER_COLOR_BY_HIERARCHY = {
    primary: 'white',
    ghost: 'helper',
    secondary: 'helper'
};
var HELPER_BORDER_BY_HIERARCHY = {
    primary: 'transparent',
    ghost: 'transparent',
    secondary: 'helper'
};
var ICON_COLOR_BY_HIERARCHY = {
    primary: 'primaryLight',
    secondary: 'primary',
    ghost: 'primary',
};
var BACKGROUND_ON_COLOR_BY_HIERARCHY = __assign(__assign({}, BACKGROUND_COLOR_BY_HIERARCHY), { primary: 'primaryDark', secondary: 'transparent' });
var COLOR_ON_HIERARCHY = __assign(__assign({}, COLOR_BY_HIERARCHY), { primary: 'white', secondary: 'white' });
var HOVER_ON_COLOR_BY_HIERARCHY = __assign(__assign({}, HOVER_COLOR_BY_HIERARCHY), { primary: 'primaryMedium', secondary: 'primaryMedium' });
var BORDER_ON_COLOR_BY_HIERARCHY = __assign(__assign({}, BORDER_COLOR_BY_HIERARCHY), { secondary: 'white' });
var HOVER_BORDER_ON_COLOR_BY_HIERARCHY = __assign(__assign({}, BORDER_ON_COLOR_BY_HIERARCHY), { secondary: 'primaryDark' });
var DISABLED_BACKGROUND_ON_COLOR_BY_HIERARCHY = __assign(__assign({}, DISABLED_BACKGROUND_COLOR_BY_HIERARCHY), { primary: 'primaryMedium', secondary: 'primaryMedium' });
var HELPER_COLOR_ON_COLOR_BY_HIERARCHY = __assign(__assign({}, HELPER_COLOR_BY_HIERARCHY), { secondary: 'white' });
var ICON_ON_COLOR_BY_HIERARCHY = __assign(__assign({}, ICON_COLOR_BY_HIERARCHY), { primary: 'primaryLight', secondary: 'primaryLight' });
exports.IconStyled = (0, styled_components_1.default)(Icon_1.Icon)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-right: 10px;\n  path {\n    stroke: ", ";\n  }\n"], ["\n  margin-right: 10px;\n  path {\n    stroke: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme, hierarchy = _a.hierarchy, OnColor = _a.OnColor;
    if (hierarchy === 'primary') {
        // return theme.colors[ICON_COLOR_BY_HIERARCHY[hierarchy]]
        return (0, helpers_1.hexToRgb)(theme.colors[ICON_COLOR_BY_HIERARCHY[hierarchy]], {
            alpha: 0.8,
            asCSS: true
        });
    }
    return OnColor ? theme.colors[ICON_ON_COLOR_BY_HIERARCHY[hierarchy]] : theme.colors[ICON_COLOR_BY_HIERARCHY[hierarchy]];
});
exports.Button = styled_components_1.default.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: ", ";\n\n  border: ", ";\n  border-radius: ", ";\n\n  cursor: pointer;\n  transition: background-color 0.3s;\n\n  padding: 12px 24px;\n  color: ", ";\n  background-color: ", ";\n\n  &:hover:not(:disabled) {\n    border: ", ";\n    background-color: ", ";\n  }\n\n  &:focus:not(:disabled) {\n    border-color: ", ";\n    animation: ", " 0.8s linear;\n    \n    animation-fill-mode: forwards;\n    -webkit-animation-fill-mode: forwards;\n    -moz-animation-fill-mode: forwards;\n    -o-animation-fill-mode: forwards;\n  }\n\n  &[data-has-error=true] {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n\n    &:hover:not(:disabled) {\n      background-color: ", ";\n      border-color: ", ";\n      color: ", ";\n    }\n\n    & > ", " {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    border-color: transparent;\n    background-color: ", ";\n    color: ", ";\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: ", ";\n\n  border: ", ";\n  border-radius: ", ";\n\n  cursor: pointer;\n  transition: background-color 0.3s;\n\n  padding: 12px 24px;\n  color: ", ";\n  background-color: ", ";\n\n  &:hover:not(:disabled) {\n    border: ", ";\n    background-color: ", ";\n  }\n\n  &:focus:not(:disabled) {\n    border-color: ", ";\n    animation: ", " 0.8s linear;\n    \n    animation-fill-mode: forwards;\n    -webkit-animation-fill-mode: forwards;\n    -moz-animation-fill-mode: forwards;\n    -o-animation-fill-mode: forwards;\n  }\n\n  &[data-has-error=true] {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n\n    &:hover:not(:disabled) {\n      background-color: ", ";\n      border-color: ", ";\n      color: ", ";\n    }\n\n    & > ", " {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    border-color: transparent;\n    background-color: ", ";\n    color: ", ";\n  }\n"])), function (_a) {
    var fluid = _a.fluid;
    return fluid ? '100%' : 'auto';
}, function (_a) {
    var theme = _a.theme, OnColor = _a.OnColor, hierarchy = _a.hierarchy;
    return hierarchy && "1.5px solid ".concat(theme.colors[OnColor ? BORDER_ON_COLOR_BY_HIERARCHY[hierarchy] : BORDER_COLOR_BY_HIERARCHY[hierarchy]]);
}, function (_a) {
    var radius = _a.radius, theme = _a.theme;
    return radius && theme.borderRadius[radius];
}, function (_a) {
    var hierarchy = _a.hierarchy, OnColor = _a.OnColor, theme = _a.theme;
    return hierarchy && theme.colors[OnColor ? COLOR_ON_HIERARCHY[hierarchy] : COLOR_BY_HIERARCHY[hierarchy]];
}, function (_a) {
    var hierarchy = _a.hierarchy, OnColor = _a.OnColor, theme = _a.theme;
    return hierarchy && theme.colors[OnColor ? BACKGROUND_ON_COLOR_BY_HIERARCHY[hierarchy] : BACKGROUND_COLOR_BY_HIERARCHY[hierarchy]];
}, function (_a) {
    var theme = _a.theme, OnColor = _a.OnColor, hierarchy = _a.hierarchy;
    return hierarchy && "1.5px solid ".concat(theme.colors[OnColor ? HOVER_BORDER_ON_COLOR_BY_HIERARCHY[hierarchy] : BORDER_COLOR_BY_HIERARCHY[hierarchy]]);
}, function (_a) {
    var hierarchy = _a.hierarchy, OnColor = _a.OnColor, theme = _a.theme;
    return hierarchy && theme.colors[OnColor ? HOVER_ON_COLOR_BY_HIERARCHY[hierarchy] : HOVER_COLOR_BY_HIERARCHY[hierarchy]];
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.helper;
}, function (_a) {
    var theme = _a.theme, OnColor = _a.OnColor, hierarchy = _a.hierarchy;
    return (0, styled_components_1.keyframes)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      100% {\n        border: ", ";\n      }\n    "], ["\n      100% {\n        border: ", ";\n      }\n    "])), hierarchy && "1.5px solid ".concat(theme.colors[OnColor ? BORDER_ON_COLOR_BY_HIERARCHY[hierarchy] : BORDER_COLOR_BY_HIERARCHY[hierarchy]]));
}, function (_a) {
    var hierarchy = _a.hierarchy, theme = _a.theme;
    return hierarchy && theme.colors[HELPER_BACKGROUND_BY_HIERARCHY[hierarchy]];
}, function (_a) {
    var hierarchy = _a.hierarchy, theme = _a.theme;
    return hierarchy && theme.colors[HELPER_BORDER_BY_HIERARCHY[hierarchy]];
}, function (_a) {
    var hierarchy = _a.hierarchy, theme = _a.theme, OnColor = _a.OnColor;
    return hierarchy && theme.colors[OnColor ? HELPER_COLOR_ON_COLOR_BY_HIERARCHY[hierarchy] : HELPER_COLOR_BY_HIERARCHY[hierarchy]];
}, function (_a) {
    var hierarchy = _a.hierarchy, theme = _a.theme;
    return hierarchy && theme.colors[HELPER_BACKGROUND_BY_HIERARCHY[hierarchy]];
}, function (_a) {
    var hierarchy = _a.hierarchy, theme = _a.theme;
    return hierarchy && theme.colors[HELPER_BORDER_BY_HIERARCHY[hierarchy]];
}, function (_a) {
    var hierarchy = _a.hierarchy, theme = _a.theme, OnColor = _a.OnColor;
    return hierarchy && theme.colors[OnColor ? HELPER_COLOR_ON_COLOR_BY_HIERARCHY[hierarchy] : HELPER_COLOR_BY_HIERARCHY[hierarchy]];
}, exports.IconStyled, function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var hierarchy = _a.hierarchy, OnColor = _a.OnColor, theme = _a.theme;
    return hierarchy &&
        // theme.colors[OnColor ? DISABLED_BACKGROUND_ON_COLOR_BY_HIERARCHY[hierarchy] : DISABLED_BACKGROUND_COLOR_BY_HIERARCHY[hierarchy]]
        (0, helpers_1.hexToRgb)(theme.colors[OnColor ? DISABLED_BACKGROUND_ON_COLOR_BY_HIERARCHY[hierarchy] : DISABLED_BACKGROUND_COLOR_BY_HIERARCHY[hierarchy]], {
            alpha: OnColor ? 0.8 : 1,
            asCSS: true
        });
}, function (_a) {
    var OnColor = _a.OnColor;
    return OnColor ? theme_1.default.colors.primaryLight : theme_1.default.colors.neutralLowLight;
});
var templateObject_1, templateObject_2, templateObject_3;
