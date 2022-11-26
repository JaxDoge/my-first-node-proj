import tuitsModel from './tuits-model.js';

export const findTuits = () => tuitsModel.find();
export const createTuit = (tuit) => tuitsModel.create(tuit);
export const deleteTuit = (tid) => tuitsModel.deleteOne({_id: tid});
export const updateTuit = (tid, tuit) => {
    return tuitsModel.findOneAndUpdate({_id: tid}, tuit)
}