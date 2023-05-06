import { obtainSlot } from '../utils'
import { compatibleMemberDecorator } from '../deco3/utils'
type Creator = { (options: any, key: string): void }
export interface Record {
    key: string
    creator: Creator
    preserve: boolean
}

export function createDecorator(creator: Creator, opt?: {
    preserve?: boolean
}) {
    return compatibleMemberDecorator(function (proto: any, key: string) {
        const slot = obtainSlot(proto)
        const map = slot.obtainMap('customDecorator')
        map.set(key, {
            key,
            creator,
            preserve: !!opt?.preserve
        })
    })
}


