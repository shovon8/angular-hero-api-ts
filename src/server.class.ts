import * as Express from 'express';
import * as BodyParser from 'body-parser';

export class Server {
    private app: Express.Application;
    private port: number;

    constructor(port: number) {
        this.port = port;
        this.app = Express();
        this.app.use(BodyParser.urlencoded({extended: false}));
    }

    start(): void {
        this.app.listen(this.port, () => {
            console.log('server started on port ' + this.port);
        });
    }

    getPort(): number {
        return this.port;
    }

    addRoute(mountPoint: string, router: Express.Router) {
        this.app.use(mountPoint, router);
    }
}