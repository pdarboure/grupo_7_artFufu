const express = require("express");
const app = express();

const PORT = process.env.PORT || 3007;

const path = require("path");

app.use(express.static('public'));

const mainController = require("./routes/mainRouters");

app.use(mainController);

app.listen(PORT, function () {
    console.log(`Server running on http://localhost:${PORT}`);
});
