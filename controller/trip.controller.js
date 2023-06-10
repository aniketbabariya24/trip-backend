const { TripModel } = require("../models/model.trip")

exports.addTrips=async (req,res)=>{
    try{
        const { name,email ,destination,members ,budget  }=req.body;

        if(name==undefined || email==undefined || destination==undefined || members==undefined ||budget==undefined ){
           return  res.status(501).send({"msg":"Enter all details"})
        }
        await TripModel.insertMany([{name,email ,destination,members ,budget }])
        return res.status(201).send({"msg":"Trip Added successfully"})
    }
    catch(err){
        return res.status(400).send(err.message)
    }

}


exports.allTrips=async( req, res )=>{
    try{
       const rest=await TripModel.find();
       return res.status(200).send(rest)
    }
    catch(err){
        return res.status(500).send({"msg":err.message})
    }
}

exports.fliterData=async( req, res )=>{
    try{


       const rest=await TripModel.find({ destination:req.query.destination });
       return res.status(200).send(rest)
    }
    catch(err){
        return res.status(500).send({"msg":err.message})
    }
}
exports.sortHigh=async( req, res )=>{
    try{
       const rest=await TripModel.find().sort({budget: -1});
       return res.status(200).send(rest)
    }
    catch(err){
        return res.status(500).send({"msg":err.message})
    }
}
exports.sortlow=async( req, res )=>{
    try{
       const rest=await TripModel.find().sort({budget: 1});
       return res.status(200).send(rest)
    }
    catch(err){
        return res.status(500).send({"msg":err.message})
    }
}

exports.updateTrip= async (req,res)=>{
    const payload= req.body;
    const id= req.params.id;

    try {
        await TripModel.findByIdAndUpdate({"_id":id}, payload);
        return res.status(201).send({"msg":"Trip Updated successfully"})
    } catch (error) {
        res.send("Error While Updating");
        console.log(error);
    }
}

exports.deleteTrip= async (req,res)=>{
    const id= req.params.id;
    try {
        await TripModel.findByIdAndDelete({"_id":id});
        return res.status(201).send({"msg":"Trip Deleted successfully"})

    } catch (error) {
        res.send("Error While DELETING");
        console.log(error);
    }
}