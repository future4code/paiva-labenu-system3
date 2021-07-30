import { Request, Response } from "express";
import { connection } from "../../connection";

export default async function novaTurma(req:Request, res:Response
    ): Promise<void> {
        try {
            const {nome, data_de_inicio, data_de_termino, modulo  } = req.body
            await connection("turmas")
            .insert({nome, data_de_inicio, data_de_termino, modulo})

            res.status(201).end()
            
        } catch (error) {
            res.status(500).end()
        }
    
}