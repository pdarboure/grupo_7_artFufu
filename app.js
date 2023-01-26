const express = require("express");
const app = express();
const PORT = process.env.PORT || 3007;

const path = require("path");

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    let htmlPath = path.resolve(__dirname,'./views/home.html')
    res.sendFile(htmlPath);
}); 

app.get("/detalleproducto", (req, res) => {
    let htmlPath = path.resolve(__dirname,'./views/detalleproducto.html')
    res.sendFile(htmlPath);
}); 

app.get("/login", (req, res) => {
    let htmlPath = path.resolve(__dirname,'./views/login.html')
    res.sendFile(htmlPath);
}); 

app.get("/register", (req, res) => {
    let htmlPath = path.resolve(__dirname,'./views/register.html')
    res.sendFile(htmlPath);
}); 

app.get("/carritoDeCompras", (req, res) => {
    let htmlPath = path.resolve(__dirname,'./views/carritoDeCompras.html')
    res.sendFile(htmlPath);
}); 

app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(PORT, function () {
    console.log(`Server running on http://localhost:${PORT}`);
});
