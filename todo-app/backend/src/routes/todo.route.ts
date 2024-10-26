import { Router } from 'express';
import todoController from '../controllers/todo.controller';

// Users layout Route
const todoRoute = Router();
todoRoute.post('', todoController.createTodo);
todoRoute.get('', todoController.getTodos);
todoRoute.get('/:todoid', todoController.getTodo);
todoRoute.delete('/:todoid', todoController.deleteTodo);
todoRoute.put('/:todoid', todoController.updateTodo);

export default todoRoute;