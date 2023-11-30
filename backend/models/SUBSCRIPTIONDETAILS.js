import mongoose from "mongoose";
import MasterSubscriptionDetails from "./MASTERSUBSCRIPTIONDETAILS.js";

const SubDeatail = new mongoose.Schema({
    deviceId:{
        type:String,
        required:true
    },
masterSubscriptionId:{
    type:ObjectID(MasterSubscriptionDetails)
},
isActive:{
    type:Boolean,
    required:true
} 

},
{timestamps:true})

const SUBSCRIPTIONDETAILS = mongoose.model('SD',SubDeatail);
export default SUBSCRIPTIONDETAILS;