import { Request, Response } from "express";
import { connection } from "../../connection";


export default async function buscarEstudantePorId(req: Request, res: Response): Promise<void> {

    try {
        const { id } = req.params

        const result = await connection("estudantes")

            .select(" data_de_nascimento, DATEDIFF(YY, data_de_nascimento, GETDATE())")//não estou conseguindo pegar a idadeeeeeee
            .where({ id })

        res.send(result)

    } catch (error) {

    }

}