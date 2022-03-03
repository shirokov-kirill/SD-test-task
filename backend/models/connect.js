const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGOOSE_URL,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).
then((con) => {
    console.log(`DB connection successful ${con}`);
});