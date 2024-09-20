const express = require('express');
const userRoutes = require('./server/routes/userRoutes')
require('dotenv').config();

const app = express();
app.use(express.urlencoded({extended:true}))


app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});