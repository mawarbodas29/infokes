//import elysia
import { Elysia, t } from 'elysia';

//import controller
import { getFolders } from '../controllers/FolderController';
 
const Routes = new Elysia({ prefix: '/folders' })
    .get('/:id?', ({params: { id }}) => getFolders(id||0),{
        params: t.Object({
            id: t.Optional(t.Number() || 0),
        }),
    })

export default Routes;