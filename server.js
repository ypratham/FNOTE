require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const corsOption = {
    origin: true
}

app.use(cors(corsOption));

app.use(express.json())

require("./models/note.model.js");

app.set(bodyParser.json({ urlencoded: true }));



mongoose.Promise = global.Promise;
const uri = `mongodb+srv://admin:${process.env.MONGODB_ADMIN_PASSWORD}@cluster0.hnhfy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connect = mongoose.connection;
connect.once('open', () => {
    console.log('MONGODB database connection established');
});


app.use("/api", require("./routes/Home.route"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});