import { Router } from 'express';
import todoRoute from './todo.route';

// Index
const indexRoute = Router();

indexRoute.get('', async (req, res) => {
    res.json({ message: 'Welcome User' });
});

indexRoute.use('/todos', todoRoute);

export default indexRoute;