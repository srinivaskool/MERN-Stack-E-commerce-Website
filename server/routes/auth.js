const express = require("express");

const router = express.Router();

const { authCheck, adminCheck } = require("../middlewares/auth");

// Error: Route.get() requires a callback function but got a [object Object]
// means u are not exporting or importing correctly .... here dneed to do destructoring

//import controllers
const { createOrUpdateUser, currentUser } = require("../controllers/auth.js");

// before the controller the authcheck runs as it is middleware
router.post("/create-or-update-user", authCheck, createOrUpdateUser);
// for getting the curent user from our own database
// can use get also but used post because get can be done by typing url
router.post("/current-user", authCheck, currentUser);
// checking for admin
router.post("/current-admin", authCheck, adminCheck, currentUser);

module.exports = router;
