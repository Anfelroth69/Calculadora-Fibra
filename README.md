# Calculadora Fibra

Cotizador interno de toboganes (fibra) por metro lineal + panel administrativo sin login (provisional).

- **Fórmula (provisional):** `total = longitud (m) × precio del tipo`
- **Valores iniciales:** recto `800.000` COP/m · curvo `1.000.000` COP/m
- **Stack:** Astro 7 (SSR, última versión) + Tailwind/shadcn-style + HonoJS (`src/lib/hono-app.ts`, rutas `/api/prices`, `/api/quote`) · despliegue Render plan free (`render.yaml`)
- **Versiones:** `/` = Señalética taller (principal) · `/canon` = Canon shadcn (alternativa)

## Uso local (Bun)

```sh
bun install
bun run dev      # http://localhost:4321
bun run build
bun run start    # sirve dist/ en PORT (Render usa 10000)
```

## API (Hono)

- `GET /api/prices` → config actual
- `PUT /api/prices` → `{ rectoPorMetro, curvoPorMetro, longitudMin, longitudMax, titulo, nota }`
- `GET /api/quote?longitud=5&tipo=recto` → `{ longitud, tipo, unit, total, moneda }`

## Notas

- Persistencia en Render free: memoria + `data/prices.json` (efímero ante reinicios). Para que los precios sobrevivan, próximo paso: KV externo o DB.
- Admin sin login es provisional. Pídeme auth (clave o login) cuando quieras cerrarlo.
- Para desplegar en Render: conecta el repo, usa `render.yaml` (plan free) y define `PRECIO_RECTO` / `PRECIO_CURVO` si quieres otros valores iniciales. Pásame las credenciales cuando quieras que lo despliegue.
