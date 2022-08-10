// code your solution here

function saturdayFun (hiking="roller-skate"){
   return `This Saturday, I want to ${hiking}!`;
}
console.log (saturdayFun())

function mondayWork(work='go to the office'){
    return `This Monday, I will ${work}.`

}
console.log (mondayWork())

function wrapAdjective (ast){
    return function active(wrap){
        return `You are ${ast}${wrap}${ast}!`

    }
    active('a hard worker')
    

}