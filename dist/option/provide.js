"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = exports.decorator = void 0;
const utils_1 = require("../utils");
exports.decorator = (0, utils_1.optoinNullableMemberDecorator)(function (proto, name, option) {
    const slot = (0, utils_1.obtainSlot)(proto);
    const map = slot.obtainMap('provide');
    const opt = Object.assign({}, option !== null && option !== void 0 ? option : {});
    map.set(name, opt);
});
function build(cons, optionBuilder) {
    const slot = (0, utils_1.obtainSlot)(cons.prototype);
    const names = slot.obtainMap('provide');
    if (names) {
        optionBuilder.provide = function () {
            const map = {};
            names.forEach((opt, name) => {
                const key = (opt.key || name).toString();
                map[key] = this[name];
            });
            return map;
        };
    }
}
exports.build = build;
//# sourceMappingURL=provide.js.map