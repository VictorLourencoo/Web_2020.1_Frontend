const express = require("express");

const app = express();

//Rotas
const disciplina = require("./routes/routes");

//conectando com o banco de dados
require("./Config/database");

//body parser
app.use(express.json());

app.use("/", disciplina);

module.exports = app;
