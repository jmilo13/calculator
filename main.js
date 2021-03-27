const screen = document.getElementById('screen')
const process = document.getElementById('process')
const operation = document.getElementById('operation')
const validOperator = ['+', '-', '*', '/']
let isDecimal = false

addEventListener('keydown', (event) => {
    switch (event.key){
        case '.':
            addDecimal(event.key)
            break
        case 'Backspace':
            delateDigit()
            break
        case 'Enter':
            resolve()
    }
})

addEventListener('keydown', (event) => {
    if(/\d/.test(event.key)){
        addNumber(event.key)
    }
    if(validOperator.includes(event.key)){
        operate(event.key)
    }
})

function delateProcess (){
    process.innerHTML = '0'
}

function delateOperation (){
    operation.innerHTML = ''
}

function totalDelate (){
    delateProcess()
    delateOperation() 
}

function result (calc) {
    let result = (calc%1) === 0 ? calc : parseFloat(calc.toFixed(4))
    return process.innerHTML = result.toString().length>15 ? result.toExponential(6) : result
}

function addNumber (element){
    const igualACero = process.innerHTML === '0'
    igualACero ? process.innerHTML=element : process.innerHTML=process.innerHTML+element
}

function addDecimal (element){
    if(!isDecimal){
        process.innerHTML=process.innerHTML+element
        isDecimal=true
    }

}

function delateDigit (){
    cifra = process.innerHTML[process.innerHTML.length - 1]
    if(cifra === '.'){
        isDecimal = false
    }
    process.innerHTML=process.innerHTML.slice(0, process.innerHTML.length-1)
}

function operate (operator){
    if(!operation.innerHTML){
        operation.innerHTML = `${process.innerHTML} ${operator}` 
    }else{
        operation.innerHTML = `${operation.innerHTML} ${operator}` 
    }
    delateProcess()
}

function resolve (){
    let equation = `${operation.innerHTML} ${process.innerHTML}`
    let calc = eval(equation)
    result(calc)
    operation.innerHTML = equation
}

function changeSign (){
    process.innerHTML = (parseInt(process.innerHTML))*-1
}

function oneOverX (){
    let x = process.innerHTML
    process.innerHTML = `${(1/parseInt(x)).toFixed(10)}`
}

function square (){
    let calc = process.innerHTML**2
    result(calc)
}

function squareRoot (){
    let calc = Math.sqrt(process.innerHTML)
    result(calc)
}

function porcentage (){
    let calc = process.innerHTML / 100
    result(calc)
    resolve()
}

