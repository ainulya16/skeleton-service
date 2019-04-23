import express from 'express';
import smsController from '../Controllers/SMS';

const routes = express.Router();

routes.post('/sms', smsController);
routes.get('/', (req, res) => res.status(200).json({ message: 'hello' }));
export default routes;
