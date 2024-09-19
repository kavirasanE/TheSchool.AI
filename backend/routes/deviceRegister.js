import express from "express";
import DEVICESREGISTRATION from "../models/DEVICESREGISTRATION.js";
import MASTERSUBSCRIPTIONDETAILS from "../models/MASTERSUBSCRIPTIONDETAILS.js";

s.k.vkmsd;kvmsdkvmsdvmskdvmsd;klksfvlksvlsklvlkvmsvk
const router = express.Router();
//Registeration
router.post("/registersystem", async (req, res) => {
  try {
    const duplicate = await DEVICESREGISTRATION.findOne({
      deviceId: req.body.deviceId,
    });
    if (duplicate) {
      return res.status(400).send("ALready registered device");
    }
    const newDevice = {
      deviceId: req.body.deviceId,
      shopName: req.body.shopName,
      email: req.body.email,
      mobile: req.body.mobile,
      isGSTAvailable: req.body.isGSTAvailable,
      shopAddress: req.body.shopAddress,
      shopType: req.body.shopType,
      GSTNumber: req.body.GSTNumber,
      GSTPercentage: req.body.GSTPercentage,
    };
    const device = await DEVICESREGISTRATION.create(newDevice);
    return res.status(200).send(device);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
});
//update
router.put("/updatecredentials/:id", async (req, res) => {
  try {
    const data = {
      deviceId: req.body.deviceId,
      userName: req.body.userName,
      password: req.body.password,
    };
    const { id } = req.params;
    const update = await DEVICESREGISTRATION.findByIdAndUpdate(id, data);
    if (!update) {
      return res.status(400).send({ message: "device not found" });
    }
    return res.status(500).send({ messgae: "device Updated" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message });
  }
});
//getuserinfo
router.get("/getuserinfo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getDevice = await DEVICESREGISTRATION.findById(id);
    const userinfo =await MASTERSUBSCRIPTIONDETAILS.findById({deviceId: id});
    if (!getDevice || !userinfo) {
      return res.status(400).send({ message: "device not found" });
    }
    const data = {
      deviceId: getDevice.deviceId,
      shopName: getDevice.shopName,
      mobile: getDevice.mobile,
      GSTNumber:getDevice.GSTNumber,
      subscriptionPeriod:userinfo.subscriptionPeriod,
      subscriptionStartDate:userinfo.subscriptionStartDate,
      subscriptionEndDate:userinfo.subscriptionEndDate
  };
    return res.status(500).send(data);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message });
  }
});
export default router;
