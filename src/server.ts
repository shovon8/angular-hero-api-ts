import {Server} from './server.class';
import {HeroRouter} from "./routes/hero.routes";

let app = new Server(4243);
app.addRoute('/api', HeroRouter);
app.start();