const Joi = require("joi");

const contactValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        number: Joi.number().min(7).required(),
        email: Joi.string().email().required(),
        message: Joi.string().required()
    })

    const { error } = schema.validate(data);
    return error ? error.message : false;
}

module.exports = contactValidation;