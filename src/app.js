const express = require("express");
const app = express();
const session = require('express-session')
const loggedMiddleware = require('./middlewares/loggedMiddleware');
const PORT = process.env.PORT || 3007;
const cookie = require('cookie-parser'); 

const path = require("path");

const methodOverride = require('method-override');

const mainRouters = require("./routes/mainRouters");
const productRoutes = require('./routes/productsRoutes');
const userRoutes = require('./routes/userRoutes');
const moviesRoutes = require('./routes/moviesRoutes');
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

app.use(session({
    secret: 'Esto es un secreto',
    resave: false,
    saveUninitialized : false
}));

app.use(cookie('SHHHHHH'));

app.use(loggedMiddleware);

app.use(mainRouters);

app.use(userRoutes);

app.use(moviesRoutes);

app.use('/products', productRoutes);


app.listen(PORT, function () {
    console.log(`Server running on http://localhost:${PORT}`);
});

