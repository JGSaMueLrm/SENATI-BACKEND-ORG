const { DataTypes } = require("sequelize");
const sequelize = require("../settings/db");

const Persona = sequelize.define(
    "persona",
    {
        nombres: { type: DataTypes.STRING, allowNull: false },
        apellidos: { type: DataTypes.STRING, allowNull: false },
        dni: { type: DataTypes.STRING, allowNull: false, unique: true },
        fecha_nac: { type: DataTypes.DATEONLY, allowNull: false }
    },
    {
        tableName: "personas",
        timestamps: false
    }
);

module.exports = Persona;