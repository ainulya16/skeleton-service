import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import queryParser from 'express-query-parser';
import route from './route';
import Logger from './Utils/Logger';

const server = express();

server.use(bodyParser.json());
server.use(
  queryParser({
    parseNull: true,
    parseBoolean: true
  })
);
server.use(cors());
server.use(Logger);

server.routes('/api', route);
server.start();

export default server;
