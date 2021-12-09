"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useClickOutside = void 0;
var react_1 = require("react");
var useClickOutside = function (handleClickOutside, _a) {
    var ref = _a[0], refs = _a.slice(1);
    (0, react_1.useEffect)(function () {
        function onClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target))
                handleClickOutside();
        }
        // Bind the event listener
        document.addEventListener('mousedown', onClickOutside);
        return function () {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', onClickOutside);
        };
    }, __spreadArray([handleClickOutside, ref], refs, true));
};
exports.useClickOutside = useClickOutside;
