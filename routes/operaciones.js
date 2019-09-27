const express = require('express')
const enrutador = express.Router()

enrutador.get('/suma/:num1/:num2', (request, response) => {
    // console.log(request)
    let num1 = request.params['num1']
    num1 = parseInt(num1)
    console.log(num1)

    let num2 = request.params['num2']
    num2 = parseInt(num2)
    console.log(num2)

    let suma = num1 + num2
    console.log (suma)

    let json = {info: "Hola desde calcular 2"}
    json.mum1 = num1
    json.num2 = num2
    json.suma = suma
    response.send(json)
})

enrutador.get('/resta/:num1/:num2', (request, response) => {
    let num1 = request.params['num1']
    num1 = parseInt(num1)
    console.log(num1)

    let num2 = request.params['num2']
    num2 = parseInt(num2)
    console.log(num2)

    let resta = num1 - num2
    console.log (resta)

    let json = {info: "resta"}
    json.mum1 = num1
    json.num2 = num2
    json.resta = resta
    response.send(json)
})

enrutador.get('/multiplicacion/:num1/:num2', (request, response) => {
    let num1 = request.params['num1']
    num1 = parseInt(num1)
    console.log(num1)

    let num2 = request.params['num2']
    num2 = parseInt(num2)
    console.log(num2)

    let multi = num1 * num2
    console.log (multi)

    let json = {info: "resta"}
    json.mum1 = num1
    json.num2 = num2
    json.multi = multi
    response.send(json)
})

enrutador.get('/division/:num1/:num2', (request, response) => {
    let num1 = request.params['num1']
    num1 = parseInt(num1)
    console.log(num1)

    let num2 = request.params['num2']
    num2 = parseInt(num2)
    console.log(num2)

    let div = 0
    if (num2 == 0) {
        
    } else {
        
    } 
    console.log (div)

    let json = {info: "resta"}
    json.mum1 = num1
    json.num2 = num2
    json.div = div
    response.send(json)
})


module.exports = enrutador