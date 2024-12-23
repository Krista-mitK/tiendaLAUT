const express = require('express');
const app = express();
const port = 3000;

// Sirve archivos estáticos desde el directorio actual
app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
