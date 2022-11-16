require('./database')
const express = require('express');
const res = require('express/lib/response');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

//Configuraciones
app.set('port', 3000);
app.set('json spaces', 2);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//Rutas
app.use('/api/servicios', require('./routes/ruta'));

//inicio de servidor
app.listen(app.get('port'));
console.log("Iniciado");
