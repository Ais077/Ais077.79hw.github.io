import mongoose from "mongoose";

const Scheme = mongoose.Schema;

const TrackScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true 
    }, 

    album: {
        type: Scheme.Types.ObjectId,
        ref: 'Album',
        required: true 
    }, 
    duration: {
        type: String,
        required: true,
    }
})

const Track = mongoose.model('Track', TrackScheme);

export default Track;