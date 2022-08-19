import express from 'express';
import * as path from 'path';
import multer from 'multer';
import config from "../config.js";
import Album from '../models/Album.js';
import {nanoid} from "nanoid";


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
})

const upload = multer({storage});
const router = express.Router();

router.get('/:id?', upload.single('image'), async (req, res)=> {
    if(req.query.artist){
       try {

        const album = await Album.find({name: req.query.artist});
        res.send(album);

       } catch (error) {

         res.sendStatus(404);
       } 

    } else if(req.params.id){
        try {
            const album = await Album.findById(req.params.id);
            res.send(album);

        } catch (error) {
            res.sendStatus(404).send(e);
        }
    } else {
       try {
            const album = await Album.find();
            res.send(album);

       } catch (error) {

        res.sendStatus(500).send(e);

       }
    }

})


router.post('/', upload.single('image'), async (req, res) => {
    
    const body = {...req.body};

    if(req.file) {
        body.image = req.file.filename;
    }

    const album = new Album(body);

    try {

        await album.save();
        res.send(album);

    } catch (e) {

        res.status(400).send(e);
    }
})

export default router;
