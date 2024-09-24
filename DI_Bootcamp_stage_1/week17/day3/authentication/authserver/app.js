const express= require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

app.use(express.json())
app.use(cookieParser())
app.use(cors());

const { PORT } = process.env

app.listen(PORt || 5000, () => {
    console.log(`running on ${PORT || 5000}`);
    
})