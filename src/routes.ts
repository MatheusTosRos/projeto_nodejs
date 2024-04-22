import { Router } from "express";
import taskController from "./tasks/controllers/task.controller";
import categoryController from "./category/controllers/category.controller";
import userController from "./users/controllers/user.controller";

const routes = Router()

routes.post("/tasks", taskController.create);
routes.post("/users", userController.create);
routes.post("/categorys", categoryController.create);

routes.get("/tasks", taskController.findAll);
routes.get("/users", userController.findAll);
routes.get("/categorys", categoryController.findAll);

routes.get("/tasks/:id", taskController.findById);
routes.get("/users/:id", userController.findById);
routes.get("/categorys/:id", categoryController.findById);

routes.put("/tasks/:id", taskController.update);
routes.put("/users/:id", userController.update);
routes.put("/categorys/:id", categoryController.update);

routes.delete("/tasks/:id", taskController.deleteById);
routes.delete("/users/:id", userController.deleteById);
routes.delete("/categorys/:id", categoryController.deleteById);

//ROTAS DE FILTROS



export{
    routes
}