var express = require("express");
const ShipmentController = require("../controllers/ShipmentController");

var router = express.Router();

router.get("/shipmentStatistics", ShipmentController.shipmentStatistics);
router.get("/fetchShipments", ShipmentController.fetchShipments);
router.post("/createShipment", ShipmentController.createShipment);
router.get("/reviewShipment", ShipmentController.reviewShipment);
router.get("/verifyShipment", ShipmentController.verifyShipment);
router.post("/modifyShipment", ShipmentController.modifyShipment);


module.exports = router;

