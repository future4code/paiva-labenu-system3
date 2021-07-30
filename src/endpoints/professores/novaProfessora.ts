import { Request, Response } from "express";
import { connection } from "../../connection";

export default async function novaProfessora(req:Request,res:Response 
    ):Promise<void> {
        try {
            const {nome, email, data_de_nascimento, especialidade} = req.body
            await connection("professores")
            .insert({nome, email, data_de_nascimento, especialidade})
            res.status(201).end()
            
        } catch (error) {
            res.status(500).end()
            
        }
    
}