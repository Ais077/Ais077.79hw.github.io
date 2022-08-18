import mongoose from "mongoose";


const ArtistScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    }, 
    image: String,

    information: {
            type: String,
            required: true,
        }
})

const Artist = mongoose.model('Artist', ArtistScheme);

export default Artist;