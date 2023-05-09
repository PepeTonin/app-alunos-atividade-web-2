import { Request, Response } from 'express';
import { Aluno } from '../models/Aluno';

export async function createNewAluno(req: Request, res: Response) {
	const { nome, sobrenome, email, dataNascimento, matricula } = req.body;
	const aluno = await Aluno.create({ nome, sobrenome, email, dataNascimento, matricula });
	res.json(aluno);
}