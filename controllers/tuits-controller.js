import * as tuitsDao from './tuits/tuits-dao.js'


const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.username = "Jose Annunziato";
    newTuit.handle = "jannunzi";
    newTuit.time = "3h";
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}

const findTuits  = async (req, res) => {
    const tuits = await tuitsDao.findTuits().exec();
    res.json(tuits);
}

const updateTuit = async (req, res) => {
    const tuitIdToUpdate = req.params.tid;
    const updates = req.body;
    const status = await tuitsDao.updateTuit(tuitIdToUpdate, updates);
    res.json(status);
}

const deleteTuit = async (req, res) => {
    const tuitIdToDelete = req.params["tid"];
    await tuitsDao.deleteTuit(tuitIdToDelete);
    res.sendStatus(200);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
