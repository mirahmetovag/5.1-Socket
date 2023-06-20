const jwt = require('jsonwebtoken');

const key = process.env.JWT_SECRET_KEY;

const sign = (payload) => jwt.sign(payload, key);
const verify = (token) => jwt.verify(token, key);

module.exports = {
    sign,
    verify,
}