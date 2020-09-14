const { should, expect } = require('chai')
const { it } = require('lodash')

log = console.log
expect = require('chai').expect
should = require('chai').should()
_ = require('lodash')

 const {
     alwaysTrue,
     legitString
 } = require('./index')
describe('mocha basics', ()=>
{
    //unit test are here
     it('true should be true',()=>
     {
         true.should.be.true;
     });
     it('i expect true to be true', ()=>
     {
         expect(true).to.be.false;
     });
});
describe('#alwaysTrue',()=>
    {
        it('should always return true',()=>
        {
            alwaysTrue().should.be.true
        });
        it('it  expect it to alwasy be true',()=>
        {
            expect(alwaysTrue()).to.be.true
        });
        it('should not be false',()=>
        {
            alwaysTrue().should.not.be.false
        })
    }) ;
describe('#legitString',()=>
    {
        it("should detect 'cow' as alegit string", ()=>
        {
            legitString('cow').should.be.true
        })
        it("undefined should not be true",()=>
        {
            legitString(undefined).should.be.false
        })
    });