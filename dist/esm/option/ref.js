import { applyAccessors } from '../optionBuilder';
import { obtainSlot, optoinNullableMemberDecorator } from '../utils';
export const decorator = optoinNullableMemberDecorator(function (proto, name, key) {
    const slot = obtainSlot(proto);
    const map = slot.obtainMap('ref');
    map.set(name, typeof key === 'undefined' ? null : key);
});
export function build(cons, optionBuilder) {
    const slot = obtainSlot(cons.prototype);
    const names = slot.obtainMap('ref');
    if (names) {
        applyAccessors(optionBuilder, (ctx) => {
            const data = new Map;
            names.forEach((value, name) => {
                const refKey = value === null ? name : value;
                data.set(name, {
                    get: function () {
                        return ctx.$refs[refKey];
                    },
                    set: undefined
                });
            });
            return data;
        });
    }
}
//# sourceMappingURL=ref.js.map