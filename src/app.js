import express from 'express';
import dotenv from 'dotenv';
import './database/index';

//IMPORT ROUTES
import ContatosRoutes from './app/routes/contatosRoutes';
import EventosRoutes from './app/routes/eventosRoutes';
import GruposRoutes from './app/routes/gruposRoutes';

class App {
    constructor() {
        this.server = express();
        this.config();
        this.routers();

    }

    config() {
        this.server.use(express.json());

        dotenv.config({
            path: process.env.NODE_ENV === 'teste'
                ? '.env.test' : '.env',
        })
    }

    routers() {
        this.server.use(ContatosRoutes);
        this.server.use(EventosRoutes);
        this.server.use(GruposRoutes);
    }

    exibirContatos() {

    }
}

export default new App().server;