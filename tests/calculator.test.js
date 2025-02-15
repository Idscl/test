const   Calculator=require('../src/calculator')    

describe("Calculator",()=>{    
    let calc;     
    let unused_variable = 123

    beforeEach(()=>{
        calc=new Calculator();    
    })

    test('adds two numbers correctly', () =>{    
        expect(calc.add(2,3)).toBe(5);     
    }

    test("subtracts two numbers correctly",()=>{     
        expect(calc.subtract(5,3)).toBe(2)    
    })  
    
    test( "divides numbers", ()=>{
        expect(calc.divide(10,2)).toBe(5)
    })
});
