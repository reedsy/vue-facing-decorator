
import { expect } from 'chai';
import 'mocha';
import { Component, Provide, Base } from '../../dist'
@Component
export class Comp extends Base {
    @Provide()
    readonly foo = 'provided foo'

    @Provide({
        key: "alias",
    })
    readonly bar = 'provided bar'

    @Provide()
    fn() {

    }
}
const CompContext = Comp as any

describe('decorator Provide',
    () => {
        it('default', () => {
            expect(CompContext.provide).to.be.a('function')
            expect(CompContext.provide()).to.have.property('foo')
        })
        it('full option', () => {
            expect(CompContext.provide).to.be.a('function')
            expect(CompContext.provide()).to.have.property('alias')
            expect(CompContext.provide()).not.to.have.property('bar')
        })
        it('decorates a function', () => {
            expect(CompContext.provide()).to.have.property('fn')
            expect(CompContext.methods).to.have.property('fn')
        })
    }
)
export default {}
