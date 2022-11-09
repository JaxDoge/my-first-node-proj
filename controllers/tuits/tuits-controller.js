import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.username = "Jose Annunziato";
    newTuit.handle = "jannunzi";
    newTuit.time = "3h";
    newTuit._id = (new Date()).getTime();
    tuits.push(newTuit);
    res.json(newTuit);
}

const findTuits  = (req, res) => {
    res.json(tuits);
}

const updateTuit = (req, res) => {
    const tuitIdToUpdate = parseInt(req.params.tid);
    const updates = req.body;
    const tuitUpdateIdx = tuits.findIndex((t) => t._id === tuitIdToUpdate);
    tuits[tuitUpdateIdx] = {
        ...tuits[tuitUpdateIdx],
        ...updates
    }
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const tuitIdToDelete = parseInt(req.params["tid"]);
    tuits = tuits.filter((t) => t["_id"] !== tuitIdToDelete);
    res.sendStatus(200);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
