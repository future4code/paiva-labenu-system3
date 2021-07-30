import { Request, Response } from "express";
import { connection } from "../../connection";

export default async function novoHobbie(req:Request, res:Response
    ):Promise<void> {
        try {
            const {nome} = req.body 
            await connection ("hobbies")
            .insert(nome)
        res.status(201).end()
            
        } catch (error) {
            res.status(500).end()
        }
    
}