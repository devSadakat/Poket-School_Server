const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();

const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    res.send("Poket School is running")
});

// Conndect with mongodb



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster3.c7qjq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster3`;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();9
    }
}
run().catch(console.dir);



app.listen(port, () => {
    console.log(`Pocket School Server Is Runnig On port ${port}`);
})