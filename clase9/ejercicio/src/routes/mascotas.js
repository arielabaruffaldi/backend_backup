import express from 'express';

let mascotas = [];

const router = express.Router()

router.get('/listar', (req, res) => {
    return res.json({ mascotas })
})

router.post('/guardar', (req, res) => {
    const body = req.body;
    if (body.nombre && body.raza && body.edad) {
        mascotas.push(body)
        return res.json({ mascotas })
    } else {
        return res.json({ error: "Faltó introducir algún dato" })
    }
})


export default router;