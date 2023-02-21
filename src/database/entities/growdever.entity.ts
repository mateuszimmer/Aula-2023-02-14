import { Column, Entity, PrimaryColumn } from "typeorm";

// Entidade para respresentar o Growdever do banco aqui no node
// Decorators: são os itens com @. Servem para o typeorm conseguir identificar os itens do DB.

@Entity({ name: 'growdever3' })
export class Growdever3Entity {
    @PrimaryColumn()
    uuid!: string;

    @Column({ name: 'name'}) // redundante passar, pois a coluna tem o mesmo nome (name)
    name!: string;

    @Column({ name: 'created_at' })
    createdAt!: Date;

    @Column({ name: 'updated_at' })
    updatedAd?: Date;
}