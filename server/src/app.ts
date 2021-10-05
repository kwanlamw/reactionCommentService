import express from 'express';
// import mongoose from 'mongoose';


//configure mongoose
// mongoose.connect('mongodb;//localhost:27017/commentDB',{usedNewUrlParser:true,useUnitfiedTopology:true})


const app = express();
const port = 4000;


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

// app.get( "/", ( req, res ) => {
//   res.send( "Hello world!" );
// } );

app.get('/', (req, res) => {
    res.json({ message: 'test get' });
});

app.post('/', (req, res) => {
    res.json({ message: 'test post' });
});

app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});