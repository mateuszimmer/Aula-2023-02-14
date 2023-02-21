import { Request, Response } from "express";
import { Groedever3Repository } from "../repositories/growdever3.repository";

export class Growdever3Controller {
    async create(req: Request, res: Response) {
        const { name } = req.body

        const repository = new Groedever3Repository()

        const growdever = await repository.createGrowdever(name)

        return res.json(growdever)
    }
}