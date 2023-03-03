const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Lee el archivo index.html
  fs.readFile('index.html', (err, data) => {
    if (err) {
      // Si hay un error al leer el archivo, envía una respuesta de error
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Ha ocurrido un error interno.');
    } else {
      // Si el archivo se ha leído correctamente, envía el contenido como respuesta
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});

// Inicia el servidor en el puerto 3000
server.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000.');
});
