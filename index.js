const dotenv = require("dotenv").config()
const express = require("express")
const cors = require('cors')
const app = express()
const port = process.env.PORT || 9000

app.use(cors())
app.use(express.json())

app.use("/api/", (_, res)=>{
    res.json({data:"API is accounted for"}) //api used will be put here
})

app.listen(port, ()=>{
    console.log('listening on port:', port);
} )

// console.log('its alive');
// console.log(__dirname);
// console.log(__filename);
// console.log(process.env.USERNAME);
// console.log(process.env.PORT);
// console.log(process.env.FOOD);
// console.log(process.env.GREET);