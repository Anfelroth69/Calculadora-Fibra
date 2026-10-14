import type { APIRoute } from 'astro';
import { honoApp } from '../../lib/hono-app.ts';

const handler: APIRoute = async (ctx) => {
  // Reenvía cualquier /api/* al router Hono (GET /api/prices, PUT /api/prices, GET /api/quote).
  const res = await honoApp.fetch(ctx.request);
  return res;
};

export const GET = handler;
export const PUT = handler;
export const POST = handler;
export const PATCH = handler;
export const DELETE = handler;
