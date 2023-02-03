import express from 'express'
import {products,validate} from '../utilities.js'

const prodPath = express.Router()

prodPath.get('/products',validate,(req,res)=>{
    res.send(products)
})

prodPath.post('/products/:id',validate,(req,res)=>{
    const prod = req.params['id']
    res.send(prod)
})

prodPath.get('/products/:id',validate,(req,res)=>{
    let id = req.params['id']
    res.send(products[id])
})

export default prodPath;


