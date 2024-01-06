const { Router } = require("express");
const UsersController = require("../controllers/UsersController");
const ValidatedUsersController = require("../controllers/ValidatedUsersController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router();

const usersController = new UsersController();
const validatedUsersController = new ValidatedUsersController();

usersRoutes.post("/", usersController.create);
usersRoutes.get("/validated", ensureAuthenticated, validatedUsersController.index);

module.exports = usersRoutes;