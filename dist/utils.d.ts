import type { BaseTypeIdentify } from './index';
import type { InjectConfig } from "./option/inject";
import type { EmitConfig } from "./option/emit";
import type { PropsConfig } from "./option/props";
import type { HookConfig } from "./option/methodsAndHooks";
import type { VModelConfig } from "./option/vmodel";
import type { WatchConfig } from "./option/watch";
import type { SetupConfig } from './option/setup';
import type { ProvideConfig } from './option/provide';
import type { RefConfig } from './option/ref';
export type SlotMapTypes = {
    vanilla: Map<string, boolean>;
    computed: Map<string, boolean>;
    provide: Map<string, ProvideConfig>;
    inject: Map<string, InjectConfig>;
    emit: Map<string, EmitConfig>;
    emits: Map<string, boolean>;
    props: Map<string, PropsConfig>;
    hooks: Map<string, HookConfig>;
    'v-model': Map<string, VModelConfig>;
    watch: Map<string, WatchConfig | WatchConfig[]>;
    ref: Map<string, RefConfig>;
    setup: Map<string, SetupConfig>;
};
declare class Slot {
    master: any;
    constructor(master: any);
    names: Map<string, SlotMapTypes[keyof SlotMapTypes]>;
    obtainMap<T extends keyof SlotMapTypes>(name: T): SlotMapTypes[T];
    inComponent: boolean;
    cachedVueComponent: any;
}
export declare function makeSlot(obj: any): Slot;
export declare function getSlot(obj: any): Slot | undefined;
export declare function obtainSlot(obj: any): Slot;
export declare function makeObject(names: string[], obj: any): Record<string, any>;
export declare function toComponentReverse(obj: any): any[];
export declare function getSuperSlot(obj: any): Slot | null;
export declare function excludeNames(names: string[], slot: Slot): string[];
export declare function getValidNames(obj: any, filter: (des: PropertyDescriptor, name: string) => boolean): string[];
export declare function optoinNullableMemberDecorator<T>(handler: {
    (proto: any, name: string, option?: T): any;
}): {
    (option?: T): any;
    (proto: BaseTypeIdentify, name: any): any;
};
export {};
//# sourceMappingURL=utils.d.ts.map