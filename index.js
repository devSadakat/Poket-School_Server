const express = require('express');
const cors = require('cors');
require('dotenv');

const app = express();

const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    res.send("Poket School is running")
});

app.listen(port, () => {
    console.log(`Pocket School Server Is Runnig On port ${port}`);
})