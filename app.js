const FormData=[
    { id : 1 , head:"rahul", dis:"hi", date:"11-01-2012"},
    { id : 2 , head:"rahul", dis:"hi", date:"11-01-2012"}
]

const getFull = (req , res ) => {
    res.send(FormData)
}
const getdata=(req,res)=>{
    const i = req.params.id;
    const data =  FormData.find((index) => index.id == i )
    if(data){
         res.send(data)
    }else{
        res.status(404).send("not found")
    }
    
}

const postdata=(req,res)=>{
    if( req.body.head ){
    const json = req.body;
    const data = FormData.find((todo) => todo.id == req.body.id )
    if(data){
        res.status(400).json({
            message: "id found"
        })
    }else{
        FormData.push(json);
    res.send(FormData)
    }}
    else{
        res.status(400).json({
            message: "id not found"
        })
    }}

const putdata=(req,res)=>{
    const i= req.params.id;
    const data= req.body;
    const index = FormData.findIndex((index) => index.id == i )
    if(index != -1 ){
        FormData[index] = data;
        res.send(FormData)
    }else{
        res.status(404).json({
            message:"not found "
        })
    }
}

const deletedata=(req,res)=>{
    const i = req.params.id;
    const data =  FormData.findIndex((index) => index.id == i )
    if(data != -1 ){
        FormData.splice(data,1)
        res.send(FormData)
    }else{
        res.status(404).send("not found")
    }

    

}


module.exports={
    getFull,
    getdata,
    postdata,
    putdata,
    deletedata
}