const express=require("express");
const { addTrips, allTrips, updateTrip,deleteTrip, sortHigh, sortlow, fliterData } = require("../controller/trip.controller");
const tripRouter=express.Router();

tripRouter.post('/add',addTrips)
tripRouter.get('',allTrips)
tripRouter.get('/high',sortHigh)
tripRouter.get('/low',sortlow)
tripRouter.get('/filterdata',fliterData)
tripRouter.patch('/update/:id',updateTrip)
tripRouter.delete('/delete/:id',deleteTrip)

module.exports=tripRouter