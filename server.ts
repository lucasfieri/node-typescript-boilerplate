
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express';
import { options } from './api/config/swagger';
import errorHandler from './api/middlewares/errorHandler';
//Setup .env
dotenv.config({
  path: '.env.development',
});

// Bind all Models to a knex instance using objection.
import { Model } from 'objection';
import knex from './api/services/database';
Model.knex(knex);

//Importing controllers
import userController from './api/controllers/users';

//Config Express
const app = express()
  .set('etag', false)
  .set('x-powered-by', false)
  .enable('trust proxy')
  .use(compression())
  .use(helmet())
  .use(cors())
  .use(morgan('dev'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: false}));

const port = process.env.PORT || 5000;
const swaggerSpec = swaggerJsdoc(options);

//Using controllers and define routes by path
app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerSpec));
app.use('/api/users', userController);

//Error handler
app.use(errorHandler);

//Start API
app.listen(port, () => console.log(`server running at port ${port}`));
