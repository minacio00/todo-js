const express = require('express');
const routes = express.Router();

const notesController = require('./controllers/notesController');
const UserController = require('./controllers/UserController');
const sessionController = require('./controllers/sessionController');

routes.post('/session',sessionController.create),
routes.post('/users', UserController.create);
routes.get('/users', UserController.index);

routes.post('/notes', notesController.create);
routes.get('/notes', notesController.index);
routes.get('/user_notes',notesController.show);
routes.delete('/deleteNotes/:id',notesController.deleteNotes);
routes.delete('/deleteUser/:name',UserController.delete);

module.exports = routes;
