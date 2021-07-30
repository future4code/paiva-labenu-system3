import { Request , Response} from "express";
import { connection } from "../../connection";

export default async function buscaEstudantes(
    req:Request,
    res:Response
    ):Promise<void> {   

    try {
        const result:any = await connection ("estudantes")
        .select("*")
        
       res.send(result[0]) 

    } catch (error) {        
       return 

    }


}

