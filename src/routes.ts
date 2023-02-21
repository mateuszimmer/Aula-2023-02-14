import { Express } from 'express'
import { Growdever3Controller } from './controllers/growdever3.controller';

export default (app: Express) => {
    app.get('/', (req, res) => res.send('Está Funcionando'));

    const growdeverController = new Growdever3Controller();

    app.post('/growdever3', growdeverController.create);
    
};