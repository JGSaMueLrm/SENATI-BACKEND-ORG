const app = require("./src/app");
const sequelize = require("./src/settings/db");

const PORT = 3000;

async function start() {
    try {
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log("Iniciando Servidor Express en puerto", PORT);
        });
    } catch (err) {
        console.error("Error al iniciar el servidor: ", err);
    }
}

start();