//ambil data dari html
const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) =>{
    number.addEventListener("click", (event) =>{
        updateScreen(event.target.value)
    })
    
})

let prevNumber =''
let calculationOperator = ''
let currentNumber ='0'

//input angka
const inputNumber = (number) => {
    if(currentNumber === '0'){
        currentNumber = number
    } else {
    currentNumber += number
    }
}
 
numbers.forEach((number) =>{
    number.addEventListener("click",(event) =>{
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

//input operator
const inputOperator = (operator) =>{
    if(calculationOperator === ''){
    prevNumber = currentNumber
}
    calculationOperator = operator
    currentNumber = '0'
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) =>{
    operator.addEventListener("click", (event) =>{
        inputOperator(event.target.value)
    })
})

//operasi kalkulasi
const calculate = () => {
    let result =''

    switch(calculationOperator){
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
            default:
            return
    }
    currentNumber = result
    calculationOperator = ''
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click',() => {
    calculate()
    updateScreen(currentNumber)
})

//fungsi ac 
const clearALL = () => {
    prevNumber =""
    calculationOperator=""
    currentNumber='0'
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click',() => {
    clearALL()
    updateScreen(currentNumber)
})

//DESIMAL
inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}

const decimal = document.querySelector('.decimal')

    decimal.addEventListener('click',(event) =>{
        inputDecimal(event.target.value)
        updateScreen(currentNumber)
    })

    