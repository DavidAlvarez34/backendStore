const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const sequelize = require("./connection_db/connection_sqlserver");
const view_store_crud = require("./view/view_store_crud");
app.use(express.json());
app.use(cors());
async function serverStart() {
  try {
    await sequelize.authenticate();
    app.listen(process.env.PORT, function () {
      console.log(
        `System start http://${process.env.HOST}:${process.env.PORT}`
      );
    });
  } catch (error) {
    console.error("DB conexion error:", error);
  }
}
serverStart();
view_store_crud(app);
