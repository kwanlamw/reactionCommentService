import express from 'express';

const app = express();
const port = 3000;


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