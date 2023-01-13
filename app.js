let express = require("express");

let app = express()

let path = require("path")

app.use(express.static(path.join(__dirname, 'public')));

app.listen(8000, function () {
    console.log("Levantando un servidor con Express");
})

app.get("/detalleproducto", (req, res) => {
    let htmlPath = path.resolve(__dirname,'./views/detalleproducto.html')
    res.sendFile(htmlPath);
}); 

app.use(express.static(path.resolve(__dirname, 'public')));
