"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = exports.decorator = void 0;
const utils_1 = require("../utils");
exports.decorator = (0, utils_1.optoinNullableMemberDecorator)(function (proto, name, option) {
    const slot = (0, utils_1.obtainSlot)(proto);
    const map = slot.obtainMap('inject');
    const opt = Object.assign({}, option !== null && option !== void 0 ? option : {});
    map.set(name, opt);
});
function build(cons, optionBuilder) {
    var _a;
    (_a = optionBuilder.inject) !== null && _a !== void 0 ? _a : (optionBuilder.inject = {});
    const slot = (0, utils_1.obtainSlot)(cons.prototype);
    const names = slot.obtainMap('inject');
    if (names) {
        names.forEach((value, name) => {
            optionBuilder.inject[name] = value;
        });
    }
}
exports.build = build;
//# sourceMappingURL=inject.js.map