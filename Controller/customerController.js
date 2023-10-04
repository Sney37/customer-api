const Customer = require('../Model/Customer');

//getData
exports.getData = async (req,res)=>{
    try {
        const data = await Customer.find();
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

//postData
exports.postData = async (req,res)=>{
    try {
        const data = await Customer.create(req.body);
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

//updateData
exports.updateData = async (req,res)=>{
    try {
        const data = await Customer.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.json({errors:false,data:data}) 
    } catch (error) {
       return res.status(400).json({errors:true,message:error.msg}) 
    }
}

//deleteData
exports.deleteData = async (req,res)=>{
    try {
        const data = await Customer.findByIdAndDelete(req.params.id);
        return res.json({errors:false,data:data}) 
    } catch (error) {
       return res.status(400).json({errors:true,message:error.msg}) 
    }
}
