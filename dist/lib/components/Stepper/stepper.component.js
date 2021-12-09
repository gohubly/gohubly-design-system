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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stepper = void 0;
var react_1 = __importDefault(require("react"));
var __1 = require("..");
var stepper_style_1 = require("./stepper.style");
var Stepper = function (_a) {
    var _b = _a.currentStep, currentStep = _b === void 0 ? 0 : _b, _c = _a.steps, steps = _c === void 0 ? 0 : _c, _d = _a.hierarchy, hierarchy = _d === void 0 ? 'primary' : _d, _e = _a.hasProgressBar, hasProgressBar = _e === void 0 ? true : _e;
    var stepsArray = __spreadArray([], Array(steps), true);
    return (react_1.default.createElement(stepper_style_1.Container, null, stepsArray.map(function (_step, i) {
        var isCurrentStep = currentStep === i;
        var isNextStepActive = currentStep === i + 1;
        var isStepCompleted = currentStep > i;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(stepper_style_1.StepWrapper, { key: "step-wrapper-".concat(_step, "-").concat(i), hierarchy: hierarchy, hasProgressBar: hasProgressBar }, isStepCompleted
                ? react_1.default.createElement(__1.Icon, { iconId: "check" })
                : react_1.default.createElement(__1.Typography, { color: "primary", size: "MD" }, i + 1)),
            i + 1 !== stepsArray.length && hasProgressBar && react_1.default.createElement(stepper_style_1.ProgressBar, { isNextStepActive: isNextStepActive, completed: isStepCompleted, active: isCurrentStep })));
    })));
};
exports.Stepper = Stepper;
