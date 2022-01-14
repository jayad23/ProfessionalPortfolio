import { Data } from '../DataStore/Data'

const numitems = Data.academic.length;

test('Number of items = 5', ()=>{
    expect (numitems).toBe(5);
   });
test('Number of items <= 12', ()=>{
    expect (numitems).toBeLessThanOrEqual(12);
})

const dataTest = Data.academic[0].degree;

test('Bacherlor Degree in Education in Theology', ()=>{
    expect(dataTest).toMatch(/Education/)
})

const secondText = Data.academic[2].degree;
test('secondText contains learning', ()=>{
    expect(secondText).toContain('Learning')
})

const institutes = Data.academic.map(institute => institute.institute)

test('list of institutes', ()=>{
    expect(institutes).toEqual(expect.arrayContaining(institutes))
})