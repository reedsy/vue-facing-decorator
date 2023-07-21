import { obtainSlot, optoinNullableMemberDecorator } from '../utils';
export const decorator = optoinNullableMemberDecorator(function (proto, name, option) {
    const slot = obtainSlot(proto);
    const map = slot.obtainMap('provide');
    const opt = Object.assign({}, option !== null && option !== void 0 ? option : {});
    map.set(name, opt);
});
export function build(cons, optionBuilder) {
    const slot = obtainSlot(cons.prototype);
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
//# sourceMappingURL=provide.js.map