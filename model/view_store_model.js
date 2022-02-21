const sequelize = require("../connection_db/connection_sqlserver");

module.exports = class crudStoreModel {
  async listStore() {
    let result = await sequelize.query("SELECT * FROM products");

    return result;
  }

  async insertStore(datainsert) {
    console.log(datainsert);
    let result = await sequelize.query(
      `INSERT INTO products(name_product,comments,description_product,category,status_product)
      VALUES ('${datainsert.nameCreateProducts}','${datainsert.commentsCreateProducts}','${datainsert.descriptionCreatedProducts}','${datainsert.categoryCreatedProducts}','${datainsert.statusCreateProducts}')`
    );

    if (result[0].length == 0) {
      return result;
    } else {
      return false;
    }
  }
  async updateStore(dataUpdate) {
    console.log(dataUpdate.statusProducts);
    let result = await sequelize.query(
      `UPDATE products SET name_product = '${dataUpdate.nameProducts}', comments = '${dataUpdate.commentsProducts}' , description_product = '${dataUpdate.descriptionProducts}', category = '${dataUpdate.categoryProducts}',status_product = '${dataUpdate.statusProducts}' WHERE id_product = '${dataUpdate.idProducts}' `
    );
    if (result[0].length == 0) {
      return result;
    } else {
      return false;
    }
  }
  async deleteStore(dataDelete) {
    let result = await sequelize.query(
      "DELETE FROM products WHERE id_product =" + dataDelete.idProducts
    );
    if (result[0].length == 0) {
      return result;
    } else {
      return false;
    }
  }
};
