const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

const port = process.env.PORT || 8080;


mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_URL)
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on PORT ${port}`);
        })
    })

    .catch(error => {
        console.log(error.message)
    })