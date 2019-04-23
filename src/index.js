import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import getenv from 'getenv';
import queryParser from 'express-query-parser';
import routes from './routes';
import Logger from './Utils/Logger';

dotenv.config();

const port = getenv.int('PORT', 8080);
const app = express();

app.use(bodyParser.json());
app.use(
  queryParser({
    parseNull: true,
    parseBoolean: true
  })
);
app.use(cors());
app.use(Logger);
app.use('/api/', routes);
app.listen(port, () => console.log(`App running on port:${port}`));

export default app;
