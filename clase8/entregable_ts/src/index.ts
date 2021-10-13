import express, { Request, Response } from 'express';
import Products from "./Products";

const port = 8080;
const app = express();

const server = app.listen(port, () => {
    console.log('server up en puerto', port)
})

server.on('error', (err) => {
    console.log('ERROR =>', err);
});

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


const products = new Products([])


app.get('/api/productos/listar', (req: Request, res: Response) => {
    const response = products.getProducts()

    res.json(response)
});

app.get('/api/productos/listar/:id', (req: Request, res: Response) => {
    const { id } = req.params
    const response = products.getProductById(Number(id));
    if (!response) {
        return res.status(400).json({
            error: 'no existe el id ' + id
        })
    }
    res.json(response)
});

app.post('/api/productos/guardar', (req: Request, res: Response) => {
    const { name, price } = req.body;
    if (!name || !price) {
        return res.status(400).json({
            error: 'Deben ingresar name y price'
        })
    }
    products.addProduct(name, price)
    return res.json(
        products
    );
});