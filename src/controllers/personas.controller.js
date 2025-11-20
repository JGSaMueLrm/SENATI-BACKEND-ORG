const Persona = require("../models/personas");

// CRUD PERSONAS

module.exports = {
    // GET - Listar todas las personas
    async listPersonas(req, res) {
        const personas = await Persona.findAll();
        res.json(personas);
    },

    // POST - Crear nueva persona
    async createPersona(req, res) {
        const { nombres, apellidos, dni, fecha_nac } = req.body;
        const persona_new = await Persona.create({ nombres, apellidos, dni, fecha_nac });
        res.status(201).json(persona_new);
    },

    // PUT - Actualizar persona
    async updatePersona(req, res) {
        const { id } = req.params;
        const { nombres, apellidos, dni, fecha_nac } = req.body;
        await Persona.update({ nombres, apellidos, dni, fecha_nac }, { where: { id } });
        res.json({ mensaje: "Persona actualizada" });
    },

    // DELETE - Eliminar persona
    async destroyPersona(req, res) {
        const { id } = req.params;
        await Persona.destroy({ where: { id } });
        res.json({ mensaje: "Persona eliminada" });
    },
};