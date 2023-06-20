const {v4: uuid} = require('uuid');

class Contact {
    constructor (name, number, email, message, userId) {
        this.id = uuid();
        this.name = name;
        this.number = number;
        this.email = email;
        this.message = message;
        this.userId = userId;
        this.created = new Date();
        this.status = "new"
    }
}

module.exports = Contact;