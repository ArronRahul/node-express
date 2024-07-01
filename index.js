const express= require('express')
const app=express()
app.use(ex)
const port=3001
var getall= require('./app')


app.get('/', getall.getdata)

app.post('/', getall.postdata)

app.put('/', getall.putdata)

app.delete('/', getall.deletedata)

app.listen(3001,()=>{
    console.log("server is running on port ",port)
})