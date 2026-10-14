export interface PriceConfig {
  rectoPorMetro: number;
  curvoPorMetro: number;
  longitudMin: number;
  longitudMax: number;
  moneda: string;
  titulo: string;
  nota: string;
  updatedAt: string;
}

const DEFAULTS: PriceConfig = {
  rectoPorMetro: Number(process.env.PRECIO_RECTO ?? 800_000),
  curvoPorMetro: Number(process.env.PRECIO_CURVO ?? 1_000_000),
  longitudMin: 1,
  longitudMax: 30,
  moneda: 'COP',
  titulo: 'Cotiza tu tobogán',
  nota: 'Valores provisionales por metro lineal. La longitud se mide en metros.',
  updatedAt: new Date().toISOString(),
};

// Ephemeral en Render free: memoria + data/prices.json (se pierde en redeploy).
// Para persistencia real futura: KV externo o DB.
let cache: PriceConfig | null = null;

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const DATA_FILE = join(here, '..', '..', 'data', 'prices.json');

export async function getPrices(): Promise<PriceConfig> {
  if (cache) return cache;
  try {
    const raw = await readFile(DATA_FILE, 'utf8');
    cache = { ...DEFAULTS, ...JSON.parse(raw) };
  } catch {
    cache = { ...DEFAULTS };
  }
  return cache!;
}

export async function savePrices(patch: Partial<PriceConfig>): Promise<PriceConfig> {
  const current = await getPrices();
  const next: PriceConfig = {
    ...current,
    ...patch,
    updatedAt: new Date().toISOString(),
  };
  // Validación dura: números positivos, min < max.
  if (!(next.rectoPorMetro > 0) || !(next.curvoPorMetro > 0)) {
    throw new Error('Los precios por metro deben ser mayores a 0.');
  }
  if (!(next.longitudMin >= 0.5) || !(next.longitudMax <= 100) || !(next.longitudMin < next.longitudMax)) {
    throw new Error('Rango de longitud inválido (0.5 – 100, min < max).');
  }
  cache = next;
  try {
    await mkdir(dirname(DATA_FILE), { recursive: true });
    await writeFile(DATA_FILE, JSON.stringify(next, null, 2), 'utf8');
  } catch {
    // En Render free el disco es efímero; memoria sigue siendo válida.
  }
  return next;
}

export function quote(longitud: number, tipo: 'recto' | 'curvo', cfg: PriceConfig) {
  const unit = tipo === 'recto' ? cfg.rectoPorMetro : cfg.curvoPorMetro;
  const total = longitud * unit;
  return { unit, total };
}
