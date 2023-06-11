const express=require("express");
const { addTrips, allTrips, updateTrip,deleteTrip, sortHigh,sortHigh2, sortlow2, sortlow, fliterData } = require("../controller/trip.controller");
const tripRouter=express.Router();

tripRouter.post('/add',addTrips)
tripRouter.get('',allTrips)
tripRouter.get('/budget/high',sortHigh)
tripRouter.get('/budget/low',sortlow)
tripRouter.get('/members/high',sortHigh2)
tripRouter.get('/members/low',sortlow2)
tripRouter.get('/filterdata',fliterData)
tripRouter.patch('/update/:id',updateTrip)
tripRouter.delete('/delete/:id',deleteTrip)

module.exports=tripRouter