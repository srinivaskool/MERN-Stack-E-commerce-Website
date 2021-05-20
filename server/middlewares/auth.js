const User = require("../models/user");
const admin = require("../firebase/index");

//next is similar to call back ro send to next file

exports.authCheck = async (req, res, next) => {
  try {
    const firebaseUser = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken);
    // need to send this user ro the controller so we will be adding it to req
    // req is avaible in router,contollers,middlewares
    req.user = firebaseUser;
    next();
  } catch (error) {
    res.status(401).json({
      err: "Invalid or expired token",
    });
  }
};

exports.adminCheck = async (req, res, next) => {
  const { email } = req.user;
  // first auth is donr so there always exisit a valid user
  const adminUser = await User.findOne({ email: email }).exec();
  if (adminUser.role !== "admin") {
    res.status(403).json({ err: "Admin resource. Access Denied." });
  } else {
    next();
  }
};
