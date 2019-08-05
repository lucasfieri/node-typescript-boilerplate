import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express';
import * as dotenv from 'dotenv';
const userController = require('./api/controllers/users');

dotenv.config({
  path: '.env.development',
});

const app = express();
const port = process.env.PORT || 5000;

const swaggerDefinition = {
  info: {
    title: 'Node-typescript-boilerplate',
    version: '1.0.0',
    description: 'A easy boilerplate using nodejs, express and typescript',
  },
  host: `localhost:${port}`,
  basePath: '/api',
  securityDefinitions: {
    ApiKeyAuth: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ['./api/controllers/*/*.ts', './api/models/*.ts'],
};

const swaggerSpec = swaggerJsdoc(options);

app.set('etag', false);
app.set('x-powered-by', false);
app.enable('trust proxy');

app.use(compression());

app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

app.get('/swagger.json', (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerSpec));
app.use('/api/users', userController);

app.listen(port, () => console.log(`server running at port ${port}`));
