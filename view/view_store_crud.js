const storeController = require("../controller/view_store_controller");

module.exports = (app) => {
  app.get("/getProductsStore", async (req, res) => {
    try {
      res.send(await storeController.listStore());
    } catch (err) {
      res.status(400).send("products not found");
    }
  });

  app.post("/insertProductsStore", async (req, res) => {
    try {
      const dataInsertProducts = req.body;
      const resultinsert = await storeController.insertStore(
        dataInsertProducts
      );
      res.send(resultinsert);
    } catch (err) {
      console.log(err);
      res.status(400).send("products not insert");
    }
  });

  app.post("/updateProductsStore", async (req, res) => {
    try {
      const storeUpdateProd = req.body;
      console.log(storeUpdateProd);
      const resultUpdate = await storeController.updateStore(storeUpdateProd);
      res.send(resultUpdate);
    } catch (err) {
      console.log(err);
      res.status(400).send("products not updated");
    }
  });
  app.post("/deleteProductsStore", async (req, res) => {
    try {
      const deleteProducts = req.body;
      console.log("Hola que tal ", deleteProducts);
      const resultDelete = await storeController.deleteStoreProduct(
        deleteProducts
      );
      res.send(resultDelete);
    } catch (err) {
      res.status(400).send("products not deleted");
    }
  });
};
