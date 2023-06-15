import type {InjectionKey} from 'vue'
import type {Cons} from '../component'
import type {OptionBuilder} from '../optionBuilder'
import {obtainSlot, optoinNullableMemberDecorator} from '../utils'

export interface ProvideConfig {
    key?: string | symbol | Symbol | InjectionKey<any>
}

export const decorator = optoinNullableMemberDecorator(function (proto: any, name: string, option?: ProvideConfig) {
    const slot = obtainSlot(proto)
    const map = slot.obtainMap('provide')
    const opt = Object.assign({}, option ?? {})
    map.set(name, opt)
})


export function build(cons: Cons, optionBuilder: OptionBuilder) {
    const slot = obtainSlot(cons.prototype)
    const names = slot.obtainMap('provide')
    if (names) {
        optionBuilder.provide = function() {
            const map: Record<string, any> = {}
            names.forEach((opt, name) => {
                const key = (opt.key || name).toString()
                map[key] = this[name]
            })
            return map
        }
    }

}
