require("dotenv").config();
require('./db-connection');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')
const app = express();
const usersRouter = require('./routes/users');
const eventsRouter = require('./routes/events');

app.use(bodyParser.json());
app.use(cors());

app.use('/users', usersRouter);
app.use('/events', eventsRouter);

app.listen(5050, () => console.log('Server running on port 5050'));
