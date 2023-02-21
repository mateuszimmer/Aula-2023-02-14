import { Pool } from 'pg';

const pool = new Pool({
    connectionString: 'postgres://hufcrgij:Fm71NR9TcbDmtRNy2gpbfe8A3gc4kudu@babar.db.elephantsql.com/hufcrgij',
});

// Uma forma de rodar comandos nessa conexão

export default {
    query: async (sql: string, params?: any[]) => {
        // Conecta no servidor de Banco de Dados
        const client = await pool.connect();
        // Roda o comando e recebe um resultado
        const result = await pool.query(sql, params);
        // Libera a conexão
        client.release();

        // retorna o resultado para quem chamou
        return result;
    },
};