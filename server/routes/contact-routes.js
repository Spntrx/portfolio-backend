import express from 'express';
import Contact from '../models/contact-model.js';
import { createCrudController } from '../controllers/crud-controller.js';

const router = express.Router();
const controller = createCrudController(Contact);

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

export default router;