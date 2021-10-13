import express, { Request, Response } from 'express';
import productsRouter from './routes/products.route';
import path from 'path'
const cors = require('cors');

const port = 8080;
const app = express();

const server = app.listen(port, () => {
    console.log('server up en puerto', port)
})

server.on('error', (err) => {
    console.log('ERROR =>', err);
});

app.use(cors());

const publicPath = path.resolve(__dirname, '../public')
app.use(express.static(publicPath))

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/productos', productsRouter)