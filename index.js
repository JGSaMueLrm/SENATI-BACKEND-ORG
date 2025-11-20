// CONFIGURACIÓN BASE
const express = require("express");
const app = express();
const port = 3000;

// USANDO VARIABLES DE CONFIGURACIÓN
// Este middleware es esencial para parsear el cuerpo JSON de las peticiones (POST, PUT).
app.use(express.json());

// DATOS QUE EXPONDRÁ EL API
const personas = [
    { id: 1, nombre: "Ana", apellidos: "Pérez López", dni: "12345678", fecha_nac: "1998-05-10" },
    { id: 2, nombre: "Luis", apellidos: "Gómez Ruiz", dni: "87654321", fecha_nac: "2000-11-23" },
];

// GET - LISTAR PERSONAS
app.get('/personas/', (req, res) => {
    res.json(personas);
});

// POST - CREAR NUEVA PERSONA
app.post('/personas/new/', (req, res) => {
    // Validación básica para asegurar que se envían datos
    if (!req.body.nombre || !req.body.apellidos || !req.body.dni || !req.body.fecha_nac) {
        return res.status(400).json({ mensaje: "Faltan campos obligatorios para crear la persona." });
    }

    const nueva_persona = {
        id: personas.length + 1,
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        dni: req.body.dni,
        fecha_nac: req.body.fecha_nac
    };

    personas.push(nueva_persona);
    res.status(201).json(nueva_persona);
});

// PUT - ACTUALIZAR PERSONA
app.put('/personas/:id', (req, res) => {
    const id_edit = parseInt(req.params.id);
    const persona_edit = personas.find(p => p.id === id_edit);

    if (!persona_edit) {
        return res.status(404).json({ mensaje: "Persona no encontrada" });
    }

    // 💡 CORRECCIÓN CLAVE: Verificar que req.body existe.
    // Esto previene el "TypeError: Cannot read properties of undefined (reading 'nombre')"
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ mensaje: "Cuerpo de la solicitud vacío. Asegúrate de enviar 'Content-Type: application/json' y el JSON con los datos." });
    }

    // Actualizando solo los datos enviados
    persona_edit.nombre = req.body.nombre || persona_edit.nombre;
    persona_edit.apellidos = req.body.apellidos || persona_edit.apellidos;
    persona_edit.dni = req.body.dni || persona_edit.dni;
    persona_edit.fecha_nac = req.body.fecha_nac || persona_edit.fecha_nac;

    res.json(persona_edit);
});

// DELETE - BORRAR PERSONA
app.delete('/personas/:id', (req, res) => {
    const id_delete = parseInt(req.params.id);
    const index = personas.findIndex(p => p.id === id_delete);

    if (index === -1) {
        return res.status(404).json({ mensaje: "Persona no encontrada" });
    }

    personas.splice(index, 1);
    res.status(204).send();
});

// INICIALIZANDO SERVIDOR
app.listen(port, () => {
    console.log(`Servidor Express iniciado en puerto ${port}`);
});