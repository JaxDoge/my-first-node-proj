import mongoose from 'mongoose';

const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    dislikes: Number,
    disliked: Boolean,
    username: String,
    useravatar: String,
    handle: String,
    time: String,
}, {collection: 'tuits'});
export default schema;