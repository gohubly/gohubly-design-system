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
exports.Span = exports.Paragraph = void 0;
var styled_components_1 = __importStar(require("styled-components"));
var FONT_FAMILY_BASED_ON_WEIGHT = {
    medium: 'InterMedium',
    regular: 'InterRegular',
    semiBold: 'InterSemiBold'
};
var TextStyled = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: ", ";\n  line-height: ", ";\n\n  color: ", ";\n\n  font-family: ", ";\n"], ["\n  font-size: ", ";\n  line-height: ", ";\n\n  color: ", ";\n\n  font-family: ", ";\n"])), function (_a) {
    var size = _a.size, theme = _a.theme;
    return theme.fontSize[size || 'MD'];
}, function (_a) {
    var lineHeight = _a.lineHeight, theme = _a.theme;
    return theme.lineHeight[lineHeight || 'Default'];
}, function (_a) {
    var color = _a.color, theme = _a.theme;
    return theme.colors[color || 'white'];
}, function (_a) {
    var fontWeight = _a.fontWeight;
    return FONT_FAMILY_BASED_ON_WEIGHT[fontWeight || 'medium'];
});
exports.Paragraph = styled_components_1.default.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), TextStyled);
exports.Span = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), TextStyled);
var templateObject_1, templateObject_2, templateObject_3;
