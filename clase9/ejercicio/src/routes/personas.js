import express from 'express';

let personas = [];

const router = express.Router()

router.get('/listar', (req, res) => {
    return res.json({ personas })
})

router.post('/guardar', (req, res) => {
    const body = req.body;
    if (body.nombre && body.apellido && body.edad) {
        personas.push(body)
        return res.json({ personas })
    } else {
        return res.json({ error: "Faltó introducir algún dato" })
    }
})


export default router;