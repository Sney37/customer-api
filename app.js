//init
const express = require('express');
const mongoose = require('mongoose');
const customerRoute = require('./Route/customerRoute')
const cors = require('cors')
require('dotenv/config')

//decl
const app = express()

//middleware
app.use(express.json())

app.use(cors())

//default route
app.get('/',(req,res)=>{
    res.send('this is home')
})

//main route
app.use('/api/customer',customerRoute)

app.listen(process.env.PORT,()=>{
    console.log('running on 5000 port');
})

async function db() {
    try {
        const res = await mongoose.connect(process.env.DB)
        const data = await res.default;
        console.log(data.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}
db()