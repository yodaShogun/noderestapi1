import express from 'express';
import { products,validate } from './utilities.js';
const server = express()
let brand = ''

server.get('/',validate,(req,res)=>{
    res.set("Access-Control-Allow-Origin","*")
    res.send('Welcome To my First node api')
})

server.get('/products',validate,(req,res)=>{
    res.set("Access-Control-Allow-Origin","*")
    res.send(products)
})

server.get('/products/:id',validate,(req,res)=>{
    res.set("Access-Control-Allow-Origin","*")
    let id = req.params['id']
    res.send(products[id])
}) 

server.get('/brands',validate,(req,res)=>{
    res.set("Access-Control-Allow-Origin","*")
    for(let i =0; i<products.length; i++){
        brand += products[i].brand +"\n"
    }
    res.send(brand)
})

server.listen(3001)