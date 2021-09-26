import { createServer, Model, ActiveModelSerializer } from 'miragejs';

type User = {
    name: string;
}


// Partial = parcial, talvez não use tudo do tipo

export function makeServer() {
    const server = createServer({
        serializers: {
            application: ActiveModelSerializer,
        },
        
        models: {
            user: Model.extend<Partial<User>>({})
        },

        routes() {
            this.namespace = 'api';
            // delay para chamadas;
            this.timing = 750;

            this.get('/users');
            this.post('/users');

            this.namespace = '';
            // passa a chamada para a original, caso não seja do mirage
            this.passthrough();
        }
    })

    return server;
}