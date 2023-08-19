let btn = document.querySelectorAll(".btn")
let equals = document.querySelector(".equals")
let signs = document.querySelectorAll(".signs")
let clear = document.querySelector(".C")
let del = document.querySelector(".B")
let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let four = document.querySelector(".four")
let five = document.querySelector(".five")
let six = document.querySelector(".one")
let seven = document.querySelector(".seven")
let eight = document.querySelector(".eight")
let nine = document.querySelector(".nine")
let zero = document.querySelector(".zero")
let resultBox = document.querySelector(".result")

let arr = [], result = '', temp = [];

function pushIntoArr(elem){
    arr.push(elem)
}
function clearAll(){
    arr.length = 0
    resultBox.innerHTML = `${arr.join('')}`
}
function deleteLast(){
    arr.pop()
    resultBox.innerHTML = `${arr.join('')}`
}
function addition(arg1, arg2){
    return arg1 + arg2
}
function subtraction(arg1, arg2){
    return arg1 - arg2
}
function multiplication(arg1, arg2){
    return arg1 * arg2
}
function division(arg1, arg2){
    return arg1 / arg2
}
function compute(arr){
    for (i = 0; i < arr.length;  i++) {
        if (typeof arr[i] == 'number') {
            temp.push(arr[i])
        } else {
            temp = [temp] + [arr[i]]
        }
    }
    console.log(typeof temp, (temp))
    console.log(temp)
    // resultBox.innerHTML = `${result}`
    let arg1 = '', arg2 = '';
    for (i = 0; i < temp.length; i++){
        if (typeof Number(temp[i]) == 'number'){
            
        }
    }
}
console.log(Number(""))
btn.forEach(element => {
    element.addEventListener("click", () => {
        if (element.value !== ''){
            pushIntoArr(element.value)
            if (element.value == "*"){
                resultBox.innerHTML += `×`
            } else if (element.value == "/") {
                resultBox.innerHTML += `÷`
            } else {
                resultBox.innerHTML += `${element.value}`
                console.log(arr)
            }
        }
    })
});
clear.addEventListener('click', clearAll)
del.addEventListener('click', deleteLast)
equals.addEventListener('click', () => {
    compute(arr)
})
array = [3, 6, 9]