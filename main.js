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
    operation.innerHTML = `${process.innerHTML} ${operator}` 
    process.innerHTML= '0'
}

function resolve (){
    process.innerHTML = eval(`${operation.innerHTML} ${process.innerHTML}`)
    operation.innerHTML = ''
}

function changeSign (){
    process.innerHTML = (parseInt(process.innerHTML))*-1
}

function porcentaje (){
    
}

function unoSobreX (){
    
}

function elevarAlCuadrado (){
    
}

function raizCuadrada (){
    
}




function borrarParcial (){

}

function borrarTotal (){

}

