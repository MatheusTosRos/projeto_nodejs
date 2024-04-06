import { Router } from "express";
import taskController from "./tasks/controllers/task.controllers";

const routes = Router()

routes.post("/tasks", taskController.create);
routes.get("/tasks", taskController.findAll);
routes.get("/tasks/:id", taskController.findById);
routes.put("/tasks/:id", taskController.update);
routes.delete("/tasks/:id", taskController.deleteById);

export{
    routes
}