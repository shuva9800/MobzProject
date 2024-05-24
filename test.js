exports.test = (req,res)=>{
    console.log("inside test" );
    console.log(req.body);

    return res.status(200).json({
        success:true,
        messsage:"test successful"
    })
}