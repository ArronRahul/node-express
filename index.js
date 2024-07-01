const express= require('express')
const app=express()
app.use(express.json())
const port=3001

var getall= require('./app')

app.get('/' , getall.getFull)

app.get('/:id', getall.getdata)

app.post('/', getall.postdata)

app.put('/:id', getall.putdata)

app.delete('/:id', getall.deletedata)

app.listen(port,()=>{
    console.log("server is running on port ",port)
})