import { model, Schema } from 'mongoose';

export const Aluno = model('Aluno', new Schema({
    nome: {
        type: String,
        required: true,
    },
    sobrenome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    dataNascimento: {
        type: Date,
        required: true,
    },
    matricula: {
        type: Number,
        required: true,
    }
}));