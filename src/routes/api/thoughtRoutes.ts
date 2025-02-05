import { Router } from "express";   
const router = Router();
import { getThoughts, getSingleThought, createThought, deleteThought, addReaction, removeReaction, updateThought } from '../../controllers/thoughtController.js';   

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);  

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

export default router;