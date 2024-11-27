const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000

app.unsubscribe(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
    res.send("Hello From Express")
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost: ${PORT}`);
});
