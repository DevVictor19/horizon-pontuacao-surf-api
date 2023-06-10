import express from 'express';

import { surfistasRoutes } from './routes/surfistas.routes';
import { bateriasRoutes } from './routes/baterias.routes';
import { ondasRoutes } from './routes/ondas.routes';
import { notasRoutes } from './routes/notas.routes';

const app = express();

app.use(express.json());

app.use('/surfistas', surfistasRoutes);
app.use('/baterias', bateriasRoutes);
app.use('/ondas', ondasRoutes);
app.use('/notas', notasRoutes);

export { app };
