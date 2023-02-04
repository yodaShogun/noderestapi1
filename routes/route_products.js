import express from 'express'
import {products,validate} from '../utilities.js'
import {fetchUsers} from '../config/request.js'

const prodPath = express.Router()

prodPath.get('/products',validate,async (req,res)=>{
    const data = await fetchUsers()
    return res.status(200).json(data)
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


