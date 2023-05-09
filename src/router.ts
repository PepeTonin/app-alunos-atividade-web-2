import { Router } from 'express';
import { listAlunos } from './app/useCases/listAlunos';
import { createNewAluno } from './app/useCases/createNewAluno';
import path from 'node:path';

export const router = Router();

//List categories
router.get('/alunos', listAlunos);

//Create category
router.post('/alunos', createNewAluno);

