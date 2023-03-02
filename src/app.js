const express = require("express");
const app = express();

const PORT = process.env.PORT || 3007;

const path = require("path");

const methodOverride = require('method-override');

const mainRouters = require("./routes/mainRouters");
const productRoutes = require('./routes/productsRoutes');
const userRoutes = require('./routes/userRoutes');
// Error 404
// app.use((req, res, next) => {
//     res.status(404).render('error');
// });

app.use(express.static(path.join(__dirname, '../public')));

app.use(express.urlencoded({ extended: false }));

app.set('views', path.resolve(__dirname, 'views'));

app.set("view engine", "ejs");

app.use(express.json());

app.use(methodOverride('_method'))

app.use(mainRouters);

app.use('/products', productRoutes);

app.use(userRoutes);

app.listen(PORT, function () {
    console.log(`Server running on http://localhost:${PORT}`);
});

