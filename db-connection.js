const mongoose = require("mongoose");
const DB_CONNECTION_STRING = process.env.DB_CONNECTION;

mongoose.set('strictQuery', false);
mongoose.connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(DB => console.log('Connection string attached'))
    .catch(error => console.log(`Error ${error} occurred!`));