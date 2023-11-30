import mongoose from "mongoose";

const MasterSubDetail = new mongoose.Schema(
  {
    subscriptionPeriod: {
      type: Number,
     
    },
    price: {
      type: String,
     
    },
    subscriptionStartDate : {
type:String,
    },
    subscriptionEndDate:{
type:String,
    },
    isActive: {
      type: Boolean,
     
    },

    createdBy: {
      type: String,
     
    },
    updatedBy: {
      type: String,
     
    },
  },
  {
    timestamps: true,
  }
);

 const MASTERSUBSCRIPTIONDETAILS =mongoose.model('MSD',MasterSubDetail);

 export default MASTERSUBSCRIPTIONDETAILS