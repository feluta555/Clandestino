const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/images/delivery-products/productosDelivery')
       cb(null, './dashboard/src/assets/images/delivery-products/productosDelivery'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  })

  const uploadFile = multer({storage});

  module.exports = uploadFile;