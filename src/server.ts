import express from 'express';
import path from 'path';
import mustache from 'mustache-express';
import mainRounter from "./routes/index.ts";

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(import.meta.dirname, 'views'));
server.engine('mustache', mustache())

server.use(mainRounter);

server.use(express.static(path.join(import.meta.dirname, '../public')));




server.listen(3000, () => {
    console.log('http://localhost:3000')
})