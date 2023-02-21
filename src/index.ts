import express from 'express';
import appRoutes from './routes';
import { pgHelper } from './database/pg-helper';

const app = express();

app.use(express.json());

appRoutes(app);

pgHelper.connect().then(() => {
    app.listen(process.env.PORT || 8080, () => {
        console.log('Servidor rodando na porta', process.env.PORT)
    });
}).catch((error) => console.log(error));
