import { Growdever3Entity } from "../database/entities/growdever.entity";
import { pgHelper } from "../database/pg-helper";
import { v4 as uuid } from 'uuid'

export class Groedever3Repository {

    // salvar um novo growdever no DB
    async createGrowdever(name: string): Promise<Growdever3Entity> {
        const manager = pgHelper.client.manager;
        const novoGrowdever = manager.create(Growdever3Entity, {
            uuid: uuid(),
            name,
            createdAt: new Date(),
        })

        return await manager.save(novoGrowdever)
    }

    // obter growdever por ID
    async getById(uuid: string): Promise<Growdever3Entity | null> {
        const manager = pgHelper.client.manager;

        const growdever = await manager.findOne(Growdever3Entity, {
            where: { uuid }
        })

        return growdever;
    }

}