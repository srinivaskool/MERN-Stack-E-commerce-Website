const User = require("../models/user");

exports.createOrUpdateUser = async (req, res) => {
  const { name, picture, email } = req.user;

  //works by checking email and if found then update the name and picture
  //new :true is because get new information immediately
  const user = await User.findOneAndUpdate(
    { email: email },
    { name: email.split("@")[0], picture: picture },
    { new: true }
  );

  if (user) {
    res.json(user);
    console.log("updated user", user);
  } else {
    const newUser = await new User({
      email: email,
      name: email.split("@")[0],
      picture: picture,
    }).save();
    res.json(newUser);
    console.log("newly added user", newUser);
  }
};

// middleware sent the user so we serach by email in our DB
exports.currentUser = async (req, res) => {
  User.findOne({ email: req.user.email }).exec((err, user) => {
    if (err) throw new Error(err);
    res.json(user);
  });
};
