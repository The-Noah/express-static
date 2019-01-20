const express = require("express");
const app = express();

const port = parseInt(process.env.PORT) || 80;

app.use(express.static("public"));

app.listen(port, () => console.log(`Webserver running on port ${port}!`));