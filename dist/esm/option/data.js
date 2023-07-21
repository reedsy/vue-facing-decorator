import { makeObject, obtainSlot, excludeNames, getValidNames } from '../utils';
export function build(cons, optionBuilder, vueInstance, _propNames) {
    var _a;
    (_a = optionBuilder.data) !== null && _a !== void 0 ? _a : (optionBuilder.data = {});
    const sample = new cons(optionBuilder, vueInstance);
    let names = getValidNames(sample, (des, name) => {
        var _a;
        return !!des.enumerable && !((_a = optionBuilder.methods) === null || _a === void 0 ? void 0 : _a[name]);
    });
    const slot = obtainSlot(cons.prototype);
    names = excludeNames(names, slot);
    Object.assign(optionBuilder.data, makeObject(names, sample));
}
//# sourceMappingURL=data.js.map