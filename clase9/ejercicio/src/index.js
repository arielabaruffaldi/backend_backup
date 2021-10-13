import express from 'express';
import routerPersonas from './routes/personas';
import routerMascotas from './routes/mascotas';
import path from 'path';


const port = 8080;

const app = express();

const server = app.listen(port, () => {
    console.log('server up en puerto', port)
})

server.on('error', (err) => {
    console.log('ERROR =>', err);
});

const publicPath = path.resolve(__dirname, '../public')
app.use(express.static(publicPath))

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.use('/personas', routerPersonas)
app.use('/mascotas', routerMascotas)
