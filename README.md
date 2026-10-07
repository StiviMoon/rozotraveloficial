# RozoTravel — Landing

Sitio web de [RozoTravel](https://www.rozotravel.com): alquiler de fincas, pasadías, eventos empresariales y catering en Rozó, Valle del Cauca.

## Stack

- [Vite](https://vite.dev) + React 19
- Tailwind CSS 3
- React Router 7 (SPA)
- lucide-react (iconos)
- pnpm

## Desarrollo

Requiere Node 20 o superior y pnpm 11.

```bash
pnpm install
pnpm run dev       # http://localhost:5173
pnpm run build     # genera dist/
pnpm run preview   # sirve dist/ en local
pnpm run lint      # oxlint
```

## Estructura

```
public/
  images/{hero,servicios,fincas,gastronomia,galeria,testimonios}/
  logopng.png
  portafolio-gastronomia.pdf
  cotizacion-catering-eventos-2026.pdf
src/
  components/   Secciones del home, Header, Footer, BrandImage, LegalLayout
  pages/        Home y páginas legales
  index.css     Sistema de diseño (botones, secciones, campos, animaciones)
```

### Imágenes

Las fotos se cargan con `BrandImage`: mientras la imagen carga, o si no existe, se muestra un placeholder con el logo y los colores de la marca. Para cambiar una foto basta con reemplazar el archivo en `public/images/...` manteniendo el nombre.

### Páginas

| Ruta | Página |
|---|---|
| `/` | Home |
| `/politica-de-privacidad` | Política de tratamiento de datos |
| `/terminos-y-condiciones` | Términos y condiciones |
| `/politica-de-cookies` | Política de cookies |

Los archivos de las páginas legales evitan las palabras `Privacy`/`Cookies` en el nombre: algunos bloqueadores (Brave Shields, uBlock) bloquean esos módulos en desarrollo y la página queda en blanco.

## Deploy

Configurado para Vercel en `vercel.json`: build con pnpm, salida en `dist/`, rewrite de todas las rutas a `index.html` y caché inmutable para `/assets`.
