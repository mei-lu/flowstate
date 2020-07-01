const Joi = require('@hapi/joi');

const signUpValidation = (dataBody) => {
    const accountValidationSchema = Joi.object().keys({
        name: Joi.string().min(3).required(),
        email: Joi.string().min(6).required().email(),
        // One uppercase, one lowercase, one number
        password: Joi.string().min(6).max(16).required(),
        repeat_password: Joi.ref('password'),
    });

    return accountValidationSchema.validate(dataBody);
}

module.exports.signUpValidation = signUpValidation;

const loginValidation = (dataBody) => {
    const loginValidationSchema = Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().required(),
    })
    return loginValidationSchema.validate(dataBody);
}

module.exports.loginValidation = loginValidation;