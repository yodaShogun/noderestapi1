import express from 'express'
import {products,validate} from '../utilities.js'

const brandPath = express.Router()

brandPath.get('/brands',validate,(req,res)=>{
    let brand = '';
    for(let i =0; i<products.length; i++){
        brand += products[i].brand +"\n"
    }
    res.send(brand)
}) 

export default brandPath