import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { getPrices, savePrices, quote } from './prices.ts';

export const honoApp = new Hono().basePath('/api');

honoApp.use('*', cors());

honoApp.get('/prices', async (c) => {
  const cfg = await getPrices();
  return c.json(cfg);
});

honoApp.put('/prices', async (c) => {
  let body: unknown;
  try {
    body = await c.req.json();
  } catch {
    return c.json({ error: 'JSON inválido.' }, 400);
  }
  try {
    const next = await savePrices(body as Record<string, unknown>);
    return c.json(next);
  } catch (e) {
    return c.json({ error: (e as Error).message }, 400);
  }
});

honoApp.get('/quote', async (c) => {
  const cfg = await getPrices();
  const longitud = Number(c.req.query('longitud'));
  const tipo = c.req.query('tipo') === 'curvo' ? 'curvo' : 'recto';
  if (!Number.isFinite(longitud) || longitud <= 0) {
    return c.json({ error: 'longitud debe ser un número mayor a 0.' }, 400);
  }
  const { unit, total } = quote(longitud, tipo as 'recto' | 'curvo', cfg);
  return c.json({ longitud, tipo, unit, total, moneda: cfg.moneda });
});
