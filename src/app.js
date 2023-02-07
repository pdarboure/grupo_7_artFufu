const express = require("express");
const app = express();

const PORT = process.env.PORT || 3007;

const path = require("path");

app.use(express.static('public'));

const mainController = require("./routes/mainRouters");

// Error 404
// app.use((req, res, next) => {
//     res.status(404).render('error');
// });

app.use(mainController);

app.set("view engine", "ejs"); 

app.set('views', path.resolve(__dirname, 'views'));

app.listen(PORT, function () {
    console.log(`Server running on http://localhost:${PORT}`);
});
