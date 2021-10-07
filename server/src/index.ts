import express from 'express';
import bodyParser from 'body-parser';
// import cors from 'cors';
// import routes from './routes';
import connect from './connect';

const app = express();
const port = 5000;

// app.use(cors());
//body-parser config;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// const API_VERSION = '/api/v1';
import { routes } from './routes';
// app.use(API_VERSION, routes);
app.use(routes);

app.get('/', (req, res) => {
    res.json({ message: 'test get' });
});

app.post('/', (req, res) => {
    res.json({ message: 'test post' });
});

app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});

const db = 'mongodb://localhost:27017/commentDB';
connect({db});
// routes({  app });
