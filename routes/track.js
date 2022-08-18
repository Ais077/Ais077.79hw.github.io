import express from 'express';
import Track from '../models/Track.js';


const router = express.Router();

router.get('/',  async (req, res)=> {

    try{
        const track = await Track.find();
        res.send(track);
    } catch{
        res.sendStatus(500);
    }
})


router.post('/', async (req, res) => {
    const trackData = {
        ...req.body
    }
    const track = new Track(trackData);

    try {
        await track.save();
        res.send(track);

    } catch (e) {
        res.status(400).send(e);
    }
})

export default router;