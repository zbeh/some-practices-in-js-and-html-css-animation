function ingExtractor(str){
    let string = str.replace(/\.|\,|\?|!|\+|\*\^|@|#|\$|[0-9]|&/g,"")
    let array = string.split(" ")
    const re = /ing\b/g
    let check
    let result = []
    for(let i in array){
        if(array[i].length>4){
           check = array[i].match(re)
            if(check){
              result.push(array[i])
            }
        }
    }
    return result
}
console.log(ingExtractor("coming brringing Letting sing"))
console.log(ingExtractor("going Ping, king sHrink dOing"))
console.log(ingExtractor("zing went ring, ding wing SINk"))