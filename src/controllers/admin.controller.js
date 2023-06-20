const Contact = require('../models/contact');
const Io = require('../utils/Io');
const Admins = new Io ('./db/admins.json');
const Contacts = new Io ('./db/contacts.json')
const jwt = require('../utils/jwt');
// const bcrypt = require('bcrypt');

const adminContacts = async (req, res) => {
    const contacts = await Contacts.read();
    res.render('admincontacts', {contacts});
}

const adminPage = async (req, res) => {
    res.render('admin');
}

const adminLogin = async (req,res) => {
    res.render('adminlogin');
}

const login = async (req,res) => {
    const {username, password} = req.body;
    const admins = await Admins.read();
    const findAdmin = admins.find((admin) => admin.username === username && admin.password === password);
    if (!findAdmin) {
      return res.redirect("/adminlogin");
    }
    const token = jwt.sign({userId: findAdmin.id});
    res.cookie("token", token);
    res.redirect("/admin");
}

const logout = async (req, res) => {
    res.cookie("token", '');
    res.redirect("/adminlogin");
  };

module.exports = {
    adminContacts,
    adminPage,
    adminLogin,
    login,
    logout
}