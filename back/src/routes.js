//const { Router } = require('express');
import { Router } from 'express';

import mongoose from 'mongoose';

const routes = new Router();

mongoose.connect('mongodb://localhost/react', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => {
    console.log(" Conexão realizada com sucesso! ");
}).catch((erro) => {
    console.log(" Conexão não foi realizada!" + erro);
});

routes.get('/', (req, res) => {
    res.send("Cesar");
})

routes.get('/contatos', (req, res) => {
    res.send("Cesar, Kelly, Jessica, Marcos");
})

//module.exports = routes;
export default routes;
