const mongoose = require('mongoose');
const uri = 'mongodb+srv://eliasemon:Lenovo017@edubridge.usrdgou.mongodb.net/EduBridge?retryWrites=true&w=majority';

// Connect to the MongoDB cluster

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB Atlas');
});

mongoose.set('strictQuery', false)
module.exports = mongoose