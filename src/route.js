import express from 'express';
import smsController from './Controllers/SMS';

const route = express.Router();

route.post('/sms/send', smsController);
export default route;
