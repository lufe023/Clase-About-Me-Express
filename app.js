const express = require('express');

const app = express();

app.get('/me', (request, response) =>{
console.log(request.method)
response.status(200).json({
    nombre:'Luis Fernando Gomez',
    age:32,
    country: 'Dominican Republic'
})
})

app.post('/metas', (request, response) =>{
    console.log(request.method)
    response.status(200).json([{
    hobbies:['eat', 'drive','rinding bike'],
    verb: request.method}])
    })

    
app.patch('/metas', (request, response) =>{
    console.log(request.method)
    response.status(200).json([{
    metas:['aprender node', 'hacerme full stack'],
    verb: request.method}])
    })

app.put('/business', (request, response) =>{
    console.log(request.method)
    response.status(200).json([{
    empresas:['google', 'facebook', 'amazon'],
    verb: request.method}])
    })   
app.listen(8000, ()=> {
    console.log('Server started at port 8000')
})