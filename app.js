const FormData=[]


const getdata=(req,res)=>{
    res.send("hello getdata")
}

const postdata=(req,res)=>{
    res.send("hello postdata")
}

const putdata=(req,res)=>{
    res.send("hello putdata")
}

const deletedata=(req,res)=>{
    res.send("hello deletedata")
}

module.exports={
    getdata,
    postdata,
    putdata,
    deletedata
}