import joi from 'joi' 

export const signupSchema = joi.object({
    name:joi.string().alphanum().required().messages({
        'string.empty':"name can't be empty"
    }),
    email:joi.string().email({minDomainSegments:2,maxDomainSegments:3,tlds:{allow:['com','net']}}).required(),
    password:joi.string().pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)).required(),
    age:joi.number().integer().min(15).max(79).required(),
    gender:joi.string().valid('male','female').required() ,
    favsubj:joi.array().items(joi.object({
        name:joi.string().required(),
        hours:joi.number().required(),
        case:joi.string().required()
    }).required()).length(3).required()
}).required()