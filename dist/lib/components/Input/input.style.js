"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
exports.DropdownItem = exports.DropdownWrapper = exports.PrefixText = exports.SuffixText = exports.RelativeContainer = exports.RightIcon = exports.LeftIcon = exports.Label = exports.Input = exports.HelperText = exports.LabelText = void 0;
var styled_components_1 = __importStar(require("styled-components"));
var Icon_1 = require("../Icon");
exports.LabelText = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  letter-spacing: -0.005em;\n  font-size: 14px;\n\n  color: ", ";\n"], ["\n  letter-spacing: -0.005em;\n  font-size: 14px;\n\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme, OnColor = _a.OnColor;
    return OnColor ? theme.colors.neutralHigh : theme.colors.neutralLowDark;
});
exports.HelperText = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 12px;\n  font-weight: 500;\n\n  color: ", ";\n\n  &[data-has-error=true] {\n    color: ", ";\n  }\n"], ["\n  font-size: 12px;\n  font-weight: 500;\n\n  color: ", ";\n\n  &[data-has-error=true] {\n    color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme, OnColor = _a.OnColor;
    return OnColor
        ? theme.colors.primaryLight
        : theme.colors.neutralLowMedium;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.helper;
});
exports.Input = styled_components_1.default.input(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 100%;\n  background: ", ";\n\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  border-radius: 8px;\n  letter-spacing: -0.005em;\n  \n  color: ", ";\n\n  padding: 12px 16px;\n  padding-left: ", ";\n  padding-right: ", ";\n\n  ", "\n  \n  &:hover {\n    border: 1px solid ", ";\n  }\n\n  &:focus {\n    border: 1px solid ", ";\n  }\n \n  &::placeholder {\n    // placeholder\n  }\n\n  &:disabled {\n    border: 1px solid ", ";\n    background: ", ";\n  }\n\n  &[data-has-error=true] {\n    border: 1px solid ", ";\n    \n    &:hover, &:focus {\n      border: 1px solid ", ";\n    }\n  }\n  \n  /* transition: all 0.1s linear; */\n"], ["\n  width: 100%;\n  background: ", ";\n\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  border-radius: 8px;\n  letter-spacing: -0.005em;\n  \n  color: ", ";\n\n  padding: 12px 16px;\n  padding-left: ", ";\n  padding-right: ", ";\n\n  ", "\n  \n  &:hover {\n    border: 1px solid ", ";\n  }\n\n  &:focus {\n    border: 1px solid ", ";\n  }\n \n  &::placeholder {\n    // placeholder\n  }\n\n  &:disabled {\n    border: 1px solid ", ";\n    background: ", ";\n  }\n\n  &[data-has-error=true] {\n    border: 1px solid ", ";\n    \n    &:hover, &:focus {\n      border: 1px solid ", ";\n    }\n  }\n  \n  /* transition: all 0.1s linear; */\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.neutralHigh;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.neutralLowLight;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.neutralLowMedium;
}, function (_a) {
    var contentLeft = _a.contentLeft;
    return contentLeft ? '46px' : '16px';
}, function (_a) {
    var contentRight = _a.contentRight;
    return contentRight ? '46px' : '16px';
}, function (_a) {
    var OnColor = _a.OnColor;
    return OnColor && (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    border-width: 0px;\n  "], ["\n    border-width: 0px;\n  "])));
}, function (_a) {
    var theme = _a.theme, OnColor = _a.OnColor;
    return OnColor ? theme.colors.primaryDark : theme.colors.primary;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.neutralLowLight;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.neutralHighLight;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.helper;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.helper;
});
exports.Label = styled_components_1.default.label(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"], ["\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"])));
var IconCss = (0, styled_components_1.css)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n\n  path {\n    stroke: ", ";\n  }\n"], ["\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n\n  path {\n    stroke: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primaryDark;
});
exports.LeftIcon = (0, styled_components_1.default)(Icon_1.Icon)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  ", ";\n  left: 7px; \n"], ["\n  ", ";\n  left: 7px; \n"])), IconCss);
exports.RightIcon = (0, styled_components_1.default)(Icon_1.Icon)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  ", ";\n  right: 7px; \n"], ["\n  ", ";\n  right: 7px; \n"])), IconCss);
exports.RelativeContainer = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var PrefixAndSuffixCommons = (0, styled_components_1.css)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  \n  height: calc(100% - 2px);\n  width: 38px;\n\n  border-radius: 8px;\n  font-size: 16px;\n  line-height: 24px;\n\n  letter-spacing: -0.005em;\n\n  background: ", ";\n  color: ", ";\n\n  &[data-has-error=true] {\n    background: ", ";\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  \n  height: calc(100% - 2px);\n  width: 38px;\n\n  border-radius: 8px;\n  font-size: 16px;\n  line-height: 24px;\n\n  letter-spacing: -0.005em;\n\n  background: ", ";\n  color: ", ";\n\n  &[data-has-error=true] {\n    background: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primaryLightest;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.neutralLowDark;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.helperLight;
});
exports.SuffixText = styled_components_1.default.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  ", ";\n  \n  right: 1px;\n  border-bottom-left-radius: 0px;\n  border-top-left-radius: 0px;\n"], ["\n  ", ";\n  \n  right: 1px;\n  border-bottom-left-radius: 0px;\n  border-top-left-radius: 0px;\n"])), PrefixAndSuffixCommons);
exports.PrefixText = styled_components_1.default.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  ", ";\n\n  left: 1px;\n  border-bottom-right-radius: 0px;\n  border-top-right-radius: 0px;\n"], ["\n  ", ";\n\n  left: 1px;\n  border-bottom-right-radius: 0px;\n  border-top-right-radius: 0px;\n"])), PrefixAndSuffixCommons);
exports.DropdownWrapper = styled_components_1.default.div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  position: absolute;\n  top: calc(100% + 8px);\n  left: 0;\n\n  width: 100%;\n  max-height: 450px;\n  overflow-y: auto;\n\n  display: flex;\n  flex-direction: column;\n  \n  background: ", ";\n\n  box-shadow: ", ";\n  border-radius: 8px;\n\n  opacity: ", ";\n  pointer-events: ", ";\n\n  transition: opacity 0.1s linear;\n"], ["\n  position: absolute;\n  top: calc(100% + 8px);\n  left: 0;\n\n  width: 100%;\n  max-height: 450px;\n  overflow-y: auto;\n\n  display: flex;\n  flex-direction: column;\n  \n  background: ", ";\n\n  box-shadow: ", ";\n  border-radius: 8px;\n\n  opacity: ", ";\n  pointer-events: ", ";\n\n  transition: opacity 0.1s linear;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.neutralHigh;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadow.Level4;
}, function (_a) {
    var opened = _a.opened;
    return opened ? 1 : 0;
}, function (_a) {
    var opened = _a.opened;
    return opened ? 'all' : 'none';
});
exports.DropdownItem = styled_components_1.default.div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  padding: 12px 16px;\n  letter-spacing: -0.005em;\n\n  background: ", ";\n  border-left: 1px solid ", ";\n  border-right: 1px solid ", ";\n\n  &:first-of-type {\n    border-top: 1px solid ", ";\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n  }\n\n  &:last-of-type {\n    border-bottom: 1px solid ", ";\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n  }\n\n  &:hover {\n    background: ", ";\n  }\n\n  ", "\n\n  cursor: pointer;\n  transition: background 0.1s linear;\n"], ["\n  padding: 12px 16px;\n  letter-spacing: -0.005em;\n\n  background: ", ";\n  border-left: 1px solid ", ";\n  border-right: 1px solid ", ";\n\n  &:first-of-type {\n    border-top: 1px solid ", ";\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n  }\n\n  &:last-of-type {\n    border-bottom: 1px solid ", ";\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n  }\n\n  &:hover {\n    background: ", ";\n  }\n\n  ", "\n\n  cursor: pointer;\n  transition: background 0.1s linear;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.neutralHighMedium;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.neutralHighMedium;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.neutralHighMedium;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.neutralHighMedium;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primaryLightest;
}, function (_a) {
    var active = _a.active;
    return active && (0, styled_components_1.css)(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n    background: ", ";\n  "], ["\n    background: ", ";\n  "])), function (_a) {
        var theme = _a.theme;
        return theme.colors.primaryLightest;
    });
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;
