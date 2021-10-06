import express from 'express';
import bodyParser from 'body-parser';
// import routes from './routes';
import connect from './connect';

// const UserSchema: Schema = new Schema({
//   email: { type: String, required: true, unique: true },
//   firstName: { type: String, required: true },
//   lastName: { type: String, required: true }
// });

// export default mongoose.model('User', UserSchema);


const app = express();
const port = 8080;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// mongodb connection

// mongoose
//   .connect('mongodb://localhost:27017/commentDB', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//   })
//   .then((con) => {
//     console.log("connected to db");
//   });




// import Knex from 'knex';
// const knexConfig = require('./knexfile');

// const commentService = new CommentService(knex);
// export const commentController = new CommentController(commentService);
// const reactionService = new ReactionService(knex);
// export const reactionController = new ReactionController(reactionService);

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
connect({ db });
// routes({   app });
