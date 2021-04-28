//const { Router } = require('express');
import { Router } from 'express';

import mongoose from 'mongoose';

const routes = new Router();



routes.get('/', (req, res) => {
    res.send("Cesar");
})

routes.get('/contatos', (req, res) => {
    res.send("Cesar, Kelly, Jessica, Marcos");
})

//module.exports = routes;
export default routes;
