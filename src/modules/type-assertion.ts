let hudai :any

hudai ="Next level development" ;

(hudai as string).length

function kgToGram (params :string |number ):string|number |undefined{
    if(typeof params ==="string"){
        const value = parseFloat(params) * 1000
        return `the converted value is ${value} gram`
    } 
    if(typeof params ==="number"){
        const value = params * 1000
        return value
    } 
}

const resultNUmber  = kgToGram(10000) as number
// or 
const resultNUmbers  = <number> kgToGram(10000) 
const resultToString   = kgToGram("10000") as string

console.log({resultNUmber,resultToString});

