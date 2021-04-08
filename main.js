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
    let cifra = process.innerHTML[process.innerHTML.length - 1]
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
    let calculate = (parseInt(process.innerHTML))*-1
    process.innerHTML = calculate.toString()
}

function oneOverX (){
    let x = process.innerHTML
    process.innerHTML = `${(1/parseInt(x)).toFixed(10)}`
}

function square (){
    let numberInScreen = parseInt(process.innerHTML)
    let calc = numberInScreen**2
    result(calc)
}

function squareRoot (){
    let numberInScreen = parseInt(process.innerHTML)
    let calc = Math.sqrt(numberInScreen)
    result(calc)
}

function porcentage (){
    let numberInScreen = parseInt(process.innerHTML)
    let calc = numberInScreen / 100
    result(calc)
    resolve()
}

//drawtablet
const drawArea = document.getElementById('drawArea')
const canvasArea = drawArea.getContext('2d')
const lineColor = '#154360'
const lineWidth = 2
let xStartPosition
let yStartPosition
let isDrawing = false

drawArea.addEventListener('pointerdown', startDraw)
drawArea.addEventListener('pointermove', draw)
window.addEventListener('pointerup', stopDraw)

function startDraw (mouse) {
    xStartPosition = mouse.offsetX
    yStartPosition = mouse.offsetY
    isDrawing = true
    console.log('start')
}

function draw (mouse) {
    if(isDrawing){
        let xMousePosition = mouse.offsetX
        let yMousePosition = mouse.offsetY
        drawLine(canvasArea, lineColor, lineWidth, xStartPosition, yStartPosition, xMousePosition, yMousePosition)
        xStartPosition = mouse.offsetX
        yStartPosition = mouse.offsetY
        console.log('draw')
    }
}

function stopDraw (mouse){
    if(isDrawing){
        let xMousePosition = mouse.offsetX
        let yMousePosition = mouse.offsetY
        drawLine(canvasArea, lineColor, lineWidth, xStartPosition, yStartPosition, xMousePosition, yMousePosition)
        xStartPosition = 0
        yStartPosition = 0
        isDrawing = false
        console.log('end')
    }
}

function drawLine (area, lineColor, lineWidth, xStart, yStart, xEnd, yEnd){
    area.beginPath()
    area.strokeStyle = lineColor
    area.lineWidth = lineWidth
    area.moveTo(xStart, yStart)
    area.lineTo(xEnd, yEnd)
    area.stroke()
    area.closePath();
}