const http = require('http');

const PORT = 3000;

const clientes = [
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
];

const server = http.createServer((req, res) => {

  if (req.url === '/clientes') {
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8'
    });

    res.end(JSON.stringify(clientes));
    return;
  }

  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8'
  });

  res.end('Servidor activo');
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});