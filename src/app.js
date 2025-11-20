const express = require("express");
const sequelize = require("./settings/db");
const personasRoutes = require("./routes/personas.routes");

const app = express();
app.use(express.json());

app.use("/api/personas", personasRoutes);

sequelize.authenticate()
    .then(() => console.log("Conectando a la DB"))
    .catch(err => console.error("Error ", err));

module.exports = app;
