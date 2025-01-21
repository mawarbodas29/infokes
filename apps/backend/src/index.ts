import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import { swagger } from '@elysiajs/swagger'
import Routes from './routes';

const app = new Elysia();
app.use(cors({
  origin: "http://localhost:5173"
}))

app.use(swagger())
app.get('/', () => 'Hello Elysia!');
app.group(`/api/v1`, (app) => app.use(Routes))
app.listen(3000);
 
console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);