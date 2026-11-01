# Nexora Digital — Portafolio

Sitio estático desarrollado con HTML, CSS y JavaScript vanilla.

## Estructura
- `index.html`: página principal.
- `css/`: estilos base y responsive.
- `js/`: navegación, metadatos de proyectos y contacto.
- `assets/images/logo.svg`: marca vectorial.
- `404.html`: página no encontrada.
- `robots.txt` y `sitemap.xml`: archivos para indexación.

## Despliegue en Cloudflare Pages
1. Crear un proyecto Pages conectado únicamente a este repositorio.
2. Framework preset: **None**.
3. Build command: dejar vacío.
4. Build output directory: `/`.
5. Production branch: `main`.

No requiere dependencias, servidor, base de datos ni variables de entorno.

## Antes de publicar
- Configurar el teléfono comercial en `js/contact.js`.
- Reemplazar el email de ejemplo `contacto@nexoradigital.net` por una dirección operativa verificada.
- Añadir enlaces de demos únicamente después de probarlas.
- Revisar textos, identidad visual y accesibilidad en móvil.

## Seguridad
No incluir claves API, tokens, credenciales ni archivos `.env`. Este repositorio es independiente de otros proyectos de Nexora.