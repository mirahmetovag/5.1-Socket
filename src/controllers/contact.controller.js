const Io = require ('../utils/Io');
const Contacts = new Io('./db/contacts.json');
const Contact = require ('../models/contact.js');
const contactValidation = require('../validations/contact.validation');
const {v4: uuid} = require('uuid');

const getAllContacts = async (req,res) => {
    const contacts = await Contacts.read();
    res.status(200).json(contacts);
}

const getASingleContact = async (req,res) => {
    const contacts = await Contacts.read();
    const {id} = req.body;
    const findContact = contacts.find((contact) => contact.id === id);
    if(!findContact){
        return res.status(404).json({message: 'Not Found'});
    }
    res.status(200).json(findContact);
}

const addContact = async (req,res) => {
    const contacts = await Contacts.read();
    const {name, number, email, message} = req.body;
    const error = contactValidation({name, number, email, message});
    if (error) return res.status(400).json({message: error});
    const findUser = contacts.find(user => user.name == name && user.number == number);
    console.log(findUser);
    let userId;
    if (findUser) {
        userId = findUser.userId;
    } else {
        userId = uuid();
    }
    const newContact = new Contact (name, number, email, message, userId);
    const data = contacts.length? [...contacts, newContact] : [newContact];
    await Contacts.write(data);
    // res.status(201).json({message: 'Contact created'});
    res.redirect('/contact');
}

const updateContact = async (req, res) => {
    const contacts = await Contacts.read();
    const {id} = req.params;
    const findContact = contacts.find(contact => contact.id === id);
    if (!findContact) return res.status(404).json({message:'Not found'});
    const {name, number, email, message} = req.body;
    if (name) {
        findContact.name = name;
      }
    if (number) {
        findContact.number = number;
      }
    if (email) {
        findContact.email = email;
      }
    if (message) {
        findContact.message = message;
      }
    await Contacts.write(contacts);
    res.status(200).json({message: 'Successfully updated'});
}

const deleteContact = async (req,res) => {
    const contacts = await Contacts.read();
    const {id} = req.params;
    const findContact = contacts.find(contact => contact.id === id);
    if (!findContact) return res.status(404).json({message:'Not found'});
    const newData = contacts.filter(contact => contact.id != id);
    await Contacts.write(newData);
    // res.status(200).json({message: 'Successfully deleted'});
    res.redirect('/admincontacts')
}

module.exports = {
    getAllContacts,
    getASingleContact,
    addContact,
    updateContact,
    deleteContact
}