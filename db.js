const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://Doormonk:Tleklu0wPvqOjuSG@doormonk.ajlmam6.mongodb.net/";
// const mongoURI = "mongodb://0.0.0.0:27017/doormonk";

const connectToMongo = () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 10000 })
    .then(console.log("Connected To Mongo Successfully"));
    // mongoose.connect(mongoURI)
}




module.exports = connectToMongo;