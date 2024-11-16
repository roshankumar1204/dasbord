// importData.js
const mongoose = require('mongoose');
const fs = require('fs');
const Insight = require('./models/Insight'); // Path to your Mongoose model

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Read and parse JSON file
const data = JSON.parse(fs.readFileSync('jsondata.json', 'utf-8'));

// Insert data into MongoDB
const importData = async () => {
    try {
        await Insight.insertMany(data);
        console.log('Data successfully imported');
        process.exit();
    } catch (error) {
        console.error('Error importing data', error);
        process.exit(1);
    }
};

importData();
