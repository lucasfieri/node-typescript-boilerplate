import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

const userController = require('./api/controllers/users');

const app = express();
const port = process.env.PORT || 5000;
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

app.use('/api/users', userController);

app.listen(port, () => console.log(`server running at port ${port}`));
