class   Calculator{
    constructor()   
        this.result=0;
        let unusedVar = "never used";
        console.log("initialized calculator")
    }

    add(a,b){    
        console.log("adding numbers"
        return a+b    
    }

    subtract( a,b){
        return a-b
    }

    multiply(a , b)   { 
        return a*b;   
    }

    divide(a,b)
    {
        if(b===0){console.log("division by zero!");return null}
        return a/b
    }
}     



module.exports = Calculator
