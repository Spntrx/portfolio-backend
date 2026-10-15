import express from 'express';
import {
  createProject,
  deleteProject,
  getAllProjects,
  getProjectById,
  updateProject
} from '../controllers/projects-controllers.js';
import authMiddleware from '../middlewares/auth.js';

const router = express.Router();

// READs (Public)
router.get('/', getAllProjects);
router.get('/:id', getProjectById);

// Protected routes (Require valid JWT)
router.post('/', authMiddleware, createProject);
router.put('/:id', authMiddleware, updateProject);
router.delete('/:id', authMiddleware, deleteProject);

export default router;