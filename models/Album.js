import mongoose from "mongoose";

const Scheme = mongoose.Schema;

const AlbumScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    artist: {
        type: Scheme.Types.ObjectId,
        ref: 'Artist',
        required: true 
    },
    
    date: {
        type: Number,
        required: true
    },
    image: String,
   
})

const Album = mongoose.model('Album', AlbumScheme);

export default Album;