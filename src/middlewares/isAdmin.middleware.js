const jwt = require("../utils/jwt");
const Io = require('../utils/Io');
const Admins = new Io('./db/admins.json');

const isAdmin= async (req,res,next) => {
  try {
    const {token} = req.cookies;
    if (!token) return res.redirect("/adminlogin");
    const {userId} = jwt.verify(token);
    const admins = await Admins.read();
    const findAdmin = admins.find(admin => admin.id === userId);
    if (findAdmin) {
      next()
    } else {
      return res.redirect("/adminlogin");
    } 
  } catch (error) {
    res.redirect("/adminlogin");
  }
};

module.exports = isAdmin;