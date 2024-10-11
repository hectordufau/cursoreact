import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/todo');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
    // we're connected!
    console.log('Connected to the database.');
});