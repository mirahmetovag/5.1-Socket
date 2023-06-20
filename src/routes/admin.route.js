const {Router} = require("express");
const {
  adminContacts,
  adminPage,
  adminLogin,
  login,
  logout
} = require("../controllers/admin.controller");

const isAdmin = require("../middlewares/isAdmin.middleware");

const router = Router();

router.get('/admincontacts', adminContacts)
router.get('/admin',isAdmin, adminPage);
router.get('/adminlogin', adminLogin);
router.post('/login', login);
router.get('/logout', logout);


module.exports = router;