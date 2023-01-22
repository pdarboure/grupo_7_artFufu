let express = require("express");

let app = express()

let path = require("path")

const PORT = process.env.PORT || 3007;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, function () {
    console.log("Levantando un servidor con Express");
})

app.get("/", (req, res) => {
    let htmlPath = path.resolve(__dirname,'./views/home.html')
    res.sendFile(htmlPath);
}); 

app.get("/detalleproducto", (req, res) => {
    let htmlPath = path.resolve(__dirname,'./views/detail2.html')
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
