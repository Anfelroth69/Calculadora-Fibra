# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (última versión) + shadcn para frontend, HonoJS para backend/API de precios, despliegue en Render plan free. Decisión confirmada por el usuario en el brief inicial.

## Users

- Cliente final / visitante: persona que quiere cotizar un tobogán (fibra), ingresa longitud y tipo para obtener un precio estimado en COP. Uso puntual, desde móvil o escritorio, sin cuenta.
- Herramienta interna (decisión 2026-10-14): por ahora NO es pública para clientes; la usa el equipo/taller para cotizar. La ruta pública queda reservada a futuro.
- Administrador / dueño: ajusta los valores de cotización. Fase provisional: sin login, accede a sección admin abierta.

## Product Purpose

Calculadora web de cotización de toboganes. Permite estimar el precio con base en longitud y tipo de tobogán, y permite al admin actualizar los valores sin tocar código. Éxito = cotización inmediata, clara en COP, con valores editables.

## Positioning

Cotizador específico de toboganes por metro lineal según tipo (recto / curvo), con panel administrativo propio para cambiar precios y parámetros, en lugar de una cotización manual por WhatsApp o planilla.

## Operating Context

- Uso en taller/obra y venta: el cliente mide o estima longitud en metros lineales.
- Moneda: COP (pesos colombianos), formato es-CO.
- Tipos confirmados: recto y curvo.
- Fórmula provisional confirmada: precio = longitud (m) × precio por metro del tipo.
- Valores iniciales provisionales: recto 800.000 COP/m, curvo 1.000.000 COP/m.
- Admin sin autenticación en esta fase; riesgo aceptado como provisional.

## Capabilities and Constraints

- Cotizar: entrada longitud (número, metros), selección tipo (recto / curvo), cálculo instantáneo, desglose y total.
- Admin: editar precio/m recto, precio/m curvo, más parámetros (longitud mínima/máxima, moneda, textos de la calculadora). Sin login en v1.
- Persistencia en Render free: sin disco persistente garantizado; usar API Hono con almacenamiento simple (JSON/env o KV externo) y fallback a valores por defecto. Decisión de almacenamiento final abierta.
- Despliegue: Render plan free (un solo servicio web Astro + Hono). Credenciales las provee el usuario, no inventarlas.
- Terminología: tobogán recto, tobogán curvo, longitud (m), precio por metro, cotización.
- Indeciso: validación exacta de rangos, impuestos/instalación, guardado definitivo de precios, auth futura.

## Brand Commitments

Nombre de repo: Calculadora Fibra. Sin logo, voz ni paleta vinculante declarados. No inventar marca.

## Evidence on Hand

Sin contenido real, testimonios, precios finales ni assets. Valores de precio actuales son provisionales provistos por el usuario. No fabricar pruebas, clientes ni benchmarks.

## Product Principles

1. Cotizar en segundos: mínimo de campos, resultado inmediato y legible.
2. Precio transparente: mostrar fórmula, valores unitarios y total en COP.
3. Admin sin fricción: cambiar un precio debe reflejarse al instante en la cotización.
4. Provisional pero correcto: rangos y validación claros hasta definir regla comercial final.
