module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductsCart';
    let cols = {
        sale_id: {
            type: dataTypes.BIGINT(10),
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: dataTypes.STRING(10),
            allowNull: false
        }
    };
    
    let config = {
        tableName: "productscart",
        timestamps: false
    }
    const ProductsCart = sequelize.define(alias, cols, config); 

    //Aquí debes realizar lo necesario para crear las relaciones con el modelo (Movie)
 
    return ProductsCart
};