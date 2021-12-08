const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('error', (err) => {
    console.error(`Database Connection Error: ${err}`);
})

mongoose.connection.on('connected', () => {
    console.info("Succesfully connected to MongoDB Database");
})