import { Router } from "express";   
const router = Router();
import { getThoughts, getSingleThought, createThought, deleteThought, addReaction, removeReaction } from '../../controllers/thoughtController.js';   

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);  

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

export default router;