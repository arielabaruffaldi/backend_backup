import express from 'express';
import {getItems, getRandomItem, getVisitas} from "./controllers/products.controller"

const port = 8080;

const app = express();

const server = app.listen(port, () => {
    console.log('server up en puerto', port)
})

server.on('error', (err) => {
    console.log('ERROR =>', err);
});


app.get('/items', getItems);
app.get('/item-random', getRandomItem);
app.get('/visitas', getVisitas);

