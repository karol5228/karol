const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Servidor activo");
});

app.get("/clientes", (req, res) => {
    res.json([
        {
            id: 1,
            nombre: "Karol",
            correo: "karol@gmail.com",
            telefono: "3001234567",
            ciudad: "Ipiales",
            edad: 20
        },
        {
            id: 2,
            nombre: "Juan",
            correo: "juan@gmail.com",
            telefono: "3011234567",
            ciudad: "Pasto",
            edad: 22
        }
    ]);
});

app.listen(3000, () => {
    console.log("Servidor activo en el puerto 3000");
});