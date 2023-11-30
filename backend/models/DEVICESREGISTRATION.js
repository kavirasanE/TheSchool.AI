import mongoose from "mongoose";

const deviceReg = new mongoose.Schema(
  {
    deviceId: {
      type: String,
      required: true,
    },

    shopName: {
      type: String,
      
    },
    shopAddress: {
      type: String,
      
    },
    shopType: {
      type: String,
      
    },

    email: {
      type: String,
      
    },
    mobile: {
      type: Number,
      
    },
    userName: {
      type: String,
      default:"admin"
    },

    password: {
      type: String,
      default:'admin123'
      
    },
    isGSTAvailable: {
      type: Boolean,
      
    },
    GSTNumber: {
      type: String,
      
    },
    GSTPercentage: {
      type: String,
      
    },
    isApproved: {
      type: Boolean,
      
    },
    approvedBy: {
      type: String,
     
    },

    subscriptionId: {
      type: String,
      
    },
    isActive: {
      type: Boolean,
     
    },
  },
  {
    timestamps: true,
  }
);

const DEVICESREGISTRATION = mongoose.model("DR", deviceReg);
export default DEVICESREGISTRATION

