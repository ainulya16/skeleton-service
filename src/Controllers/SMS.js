import { send as SendSMS } from '../Services/SMS';
import Validator from '../Utils/Validator';

export default async (req, res) => {
  Validator(req.body)
    .then(SendSMS)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      res.status(400).json({ code: '400', message: error.message || error });
    });
};
