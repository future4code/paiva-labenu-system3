import { Request, Response } from "express";
import { connection } from "../../connection";

export default async function novoEstudante(req:Request, res:Response
    ): Promise<void> {
        try {
            const {nome, email, data_de_nascimento, turma } = req.body
            await connection("estudantes")
            .insert({nome, email, data_de_nascimento, turma})

            res.status(201).end()
            
        } catch (error) {
            res.status(500).end()
        }
    
}