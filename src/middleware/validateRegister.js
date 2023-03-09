const {check}= require('express-validator');
const path = require('path');


let validateRegister = [
    check('nombre')
        .notEmpty().withMessage('Tienes que escribir un nombre'),
    check('apellido')
        .notEmpty().withMessage('Tienes que escribir el apellido'),
    check('email')
        .notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
        .isEmail().withMessage('Tienes que escribir un mail válido'),    
    check('password')
        .notEmpty().withMessage('Tienes que escribir una contraseña'),
    check('categoria')
        .notEmpty().withMessage('Tienes que escoger una categoria'),
    check('userImage').custom((value, {req}) => {
        let file = req.file; 
        let acceptedExtensions = ['.jpg', '.png', '.gif'];
        if (!file) {
            throw new Error ('Tienes que elegir una imagen'); 
        }else{
            let fileExtension = path.extname(file.originalname);
        if (!acceptedExtensions.includes(fileExtension)) {
            throw new Error (`La extensión del archivo permitida es ${acceptedExtensions.join(', ')}`) 
        }
        return true;
    }
    })  
]
module.exports = validateRegister;