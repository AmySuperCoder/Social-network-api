import { Router } from "express";   
const router = Router();
import { getThoughts, getSingleThought, createThought, deleteThought } from '../../controllers/thoughtController.js';   

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought);  

export default router;