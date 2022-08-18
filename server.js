import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import album from "./routes/album.js";
import artist from './routes/artist.js';
import track from './routes/track.js';

const app = express();
const PORT = 8000;

app.use(express.static('public'));
app.use(express.json());
app.use(cors());
app.use('/album', album);
app.use('/artist', artist);
app.use('/track', track);

const run = async() => {
    mongoose.connect('mongodb://localhost/shop', {useNewUrlParser: true});


    app.listen(PORT, () => {
        console.log(`Server started at http://localhost:${PORT}/`);
    })

    process.on("exit", () => {
        mongoose.disconnect();
    })
}

run().catch(console.error);