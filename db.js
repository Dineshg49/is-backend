const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const DB_NAME = "myDB"


const centersRouter = require('./APIs/centers');
const technologyRouter = require('./APIs/technologies')
const patentRouter = require('./APIs/patents')
const facultyRouter = require('./APIs/faculties')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(`mongodb+srv://Developer:Bahubhashak@bahubhashaak-project.ascwu.mongodb.net/TTO-Dev?retryWrites=true&w=majority`, { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

app.use("/center", centersRouter);
app.use("/tech", technologyRouter);
app.use("/patents", patentRouter);
app.use("/faculty", facultyRouter);


// const app = express();
// const port = 3000;

// const {
//   createCenter,
//   readCenter,
//   updateCenter,
//   deleteCenter,
//   readCenters
// } = require('./collections/centers');

// // app.use('/api', centersRouter);

// app.post('/api/users', async (req, res) => {
//   try {
//     const center = await createCenter("Test");
//     res.json(center);
//     res.send(center);
//   } catch (error) {
//     res.send(error);
//   }
//   // res.send("messg");
// });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = db;

// 6463b9f1a726875ef6e8e1f7
// "_id": "6463db281e108f39ed5b61b6",
// 6463fc8f99d7a523f841ddc1