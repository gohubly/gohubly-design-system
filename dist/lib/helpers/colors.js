"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexToRgb = void 0;
var hexToRgb = function (hex, options) {
    var _a = options.alpha, alpha = _a === void 0 ? -1 : _a, asCSS = options.asCSS;
    var regex = /[0-9A-Fa-f]{6}/g;
    if (hex === 'transparent')
        return hex;
    if (alpha < 0)
        throw new Error('alpha should be between 0 and 1');
    var hexWithoutPound = hex.startsWith('#') ? hex.slice(1) : hex;
    if (!regex.test(hexWithoutPound))
        throw new Error('invalid hexadecimal');
    var _b = [
        parseInt(Number("0x".concat(hexWithoutPound.substr(0, 2))).toString(), 10),
        parseInt(Number("0x".concat(hexWithoutPound.substr(2, 2))).toString(), 10),
        parseInt(Number("0x".concat(hexWithoutPound.substr(4, 6))).toString(), 10),
    ], r = _b[0], g = _b[1], b = _b[2];
    if (asCSS) {
        return alpha ? "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(alpha, ")") : "".concat(r, ", ").concat(g, ", ").concat(b);
    }
    return [r, g, b, alpha];
};
exports.hexToRgb = hexToRgb;
