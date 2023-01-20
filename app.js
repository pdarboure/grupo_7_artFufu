let express = require("express");

let app = express()

let path = require("path")

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3007, function () {
    console.log("Levantando un servidor con Express");
})

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
