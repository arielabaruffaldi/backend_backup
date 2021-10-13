var http = require("http")

const getRandom = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;

const obtenerMensaje = () => {
    const obj = {
        id: getRandom(1, 10),
        title: "Producto " + getRandom(1, 10),
        price: getRandom(0.999, 9999.99),
        thumbnail: "img " + getRandom(1, 10)
    }
    return JSON.stringify(obj);
}

var server = http.createServer(function (peticion, respuesta) {
    const mensaje = obtenerMensaje()
    respuesta.end(mensaje)
})

server.listen(8080, function () {
    console.log("localhost:" + this.address().port)
})