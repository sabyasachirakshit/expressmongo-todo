const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://${process.env.MONGODB_DATABASE_USERNAME}:${process.env.MONGODB_DATABASE_PASSWORD}@cluster0.ds9qbjs.mongodb.net/`)
    .then(() => {
        console.log('Database Successfully Connected');
    })
    .catch((error) => {
        console.log('error ==> ', error);
    });

