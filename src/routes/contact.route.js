const {Router} = require("express");
const isAdmin = require("../middlewares/isAdmin.middleware");
const { 
  getAllContacts,
  getASingleContact,
  addContact,
  updateContact,
  deleteContact
  } = require("../controllers/contact.controller");

const router = Router();

router.get('/admin/contacts', isAdmin, getAllContacts);
router.get('/admin/contact', isAdmin, getASingleContact);
router.post('/contact', addContact);
router.get('/admin/contact/:id', updateContact);
router.get('/admin/deletecontact/:id', isAdmin, deleteContact);

module.exports = router;
