import express from 'express';
import cors from 'cors'
import {validate,trustOrigin} from './utilities.js';
import prodPath from './routes/route_products.js'
import brandPath from './routes/route_brands.js'

const server = express()

server.use(cors({
    origin:trustOrigin,
    methods:['GET']
}))

server.use('/v1/prod',prodPath);
server.use('/v1/brand',brandPath);

server.get('/',validate,(req,res)=>{
    res.send(JSON.stringify('Welcome To my First node api'))
})

server.listen(3000,()=>{
    console.log();
})