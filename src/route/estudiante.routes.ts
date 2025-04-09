import { Router} from 'express';
import { getEstudiantes,getEstudiante,createEstudiante,updateEstudiante,deleteEstudiante } from '../controllers/estudiante.controller';

const router = Router();


router.get('/', getEstudiantes);
router.get('/:id', getEstudiante);
router.post('/', getEstudiante);
router.put('/:id', getEstudiante);
router.delete('/:id', getEstudiante)

export default router;

