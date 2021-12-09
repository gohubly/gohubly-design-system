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
exports.IconWrapper = void 0;
var styled_components_1 = __importStar(require("styled-components"));
exports.IconWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  svg {\n    fill: ", ";\n    width: 24px;\n\n    ", "\n  }\n\n  path {\n    stroke: ", ";\n  }\n"], ["\n  svg {\n    fill: ", ";\n    width: 24px;\n\n    ", "\n  }\n\n  path {\n    stroke: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme, fill = _a.fill;
    return fill || theme.colors.transparent;
}, function (_a) {
    var fluid = _a.fluid;
    return fluid && (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      width: 100%;\n      height: auto;\n    "], ["\n      width: 100%;\n      height: auto;\n    "])));
}, function (_a) {
    var theme = _a.theme, OnColor = _a.OnColor, stroke = _a.stroke;
    return stroke || theme.colors[OnColor ? 'neutralHigh' : 'primary'];
});
var templateObject_1, templateObject_2;
