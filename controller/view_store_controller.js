const storeModel = require("../model/view_store_model");

module.exports.listStore = async () => {
  const response = new storeModel();
  const result = await response.listStore();
  return result;
};

module.exports.insertStore = async (dataInsertProd) => {
  let response = new storeModel();

  let result = await response.insertStore(dataInsertProd);
  return result;
};
module.exports.updateStore = async (dataUpdate) => {
  let response = new storeModel();
  let result = await response.updateStore(dataUpdate);
  return result;
};

module.exports.deleteStoreProduct = async (dataInsertPhoto) => {
  let response = new storeModel();
  let result = await response.deleteStore(dataInsertPhoto);
  return result;
};
