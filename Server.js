import express from 'express';
import cors from 'cors'
import {products,validate,trustOrigin} from './utilities.js';
let brand = ''


const server = express()
server.use(cors({
    origin:trustOrigin,
    methods:m['GET']
}))

server.get('/',validate,(req,res)=>{
    res.send(JSON.stringify('Welcome To my First node api'))
})

server.get('/products',validate,(req,res)=>{
    res.send(products)
})

server.post('/products/:id',validate,(req,res)=>{
    const prod = req.params['id']
    res.send(prod)
})

server.get('/products/:id',validate,(req,res)=>{
    let id = req.params['id']
    res.send(products[id])
}) 

server.get('/brands',validate,(req,res)=>{
    for(let i =0; i<products.length; i++){
        brand += products[i].brand +"\n"
    }
    res.send(brand)
})

server.listen(3000)