const { Router } = require("express");

const OngController = require("./controllers/OngController");

const IncidentController = require("./controllers/IncidentControlller");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = Router();

routes.post("/sessions", SessionController.create);

// list
routes.get("/ongs", OngController.index);

// criando o cadastro da ONG
routes.post("/ongs", OngController.create);
// List dos cadastro de um OMG SÓ.
routes.get("/profile", ProfileController.index);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes;
