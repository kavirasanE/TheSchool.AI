import express from 'express'
import mongoose from 'mongoose';
import {PORT, MongoDBURL } from './config.js';
import deviceRegister from './routes/deviceRegister.js';


const app = express();
app.use(express.json());

app.use('/device',deviceRegister)

app.get('/home',(req,res)=> {
  console.log(req);
  return res.status(200).send("welcome back")
})
app.listen (PORT , ()  =>{
  console.log(`Server is listening at ${PORT}`);
});

mongoose.connect(MongoDBURL)
.then (()=> {
    console.log('MonogoDb connected');
})
.catch((error) => {
    console.log(error);
});