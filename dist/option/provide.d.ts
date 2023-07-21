import type { InjectionKey } from 'vue';
import type { Cons } from '../component';
import type { OptionBuilder } from '../optionBuilder';
export interface ProvideConfig {
    key?: string | symbol | Symbol | InjectionKey<any>;
}
export declare const decorator: {
    (option?: ProvideConfig | undefined): any;
    (proto: import("..").BaseTypeIdentify, name: any): any;
};
export declare function build(cons: Cons, optionBuilder: OptionBuilder): void;
//# sourceMappingURL=provide.d.ts.map