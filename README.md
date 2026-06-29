# Web Stoa Consulting · `www.stoa.consulting`

Sitio estático, en español, listo para desplegar. Sin build, sin dependencias: HTML + CSS + JS plano. Se sube tal cual a Vercel, Netlify, GitHub Pages o cualquier hosting estático.

## Estructura

```
web/
├── index.html          Home · recorrido cinematográfico de 9 escenas + valoración IA
├── casos.html          Casos representativos (Legal · Industria · Educación)
├── contacto.html       Formulario de contacto + agenda Stoa Call
├── aviso-legal.html    Aviso legal (LSSI-CE)
├── privacidad.html     Política de privacidad (RGPD · LOPDGDD)
├── cookies.html        Política de cookies
└── assets/
    ├── stoa.css        Sistema de diseño: header, footer, cookies, páginas internas
    ├── stoa.js         Header dinámico, menú móvil, banner de cookies
    ├── stoa_logo_navy.png
    └── stoa_logo_white.png
```

La home (`index.html`) mantiene sus estilos y animaciones propios en línea; `stoa.css`/`stoa.js`
solo añaden el header global, el footer global y el banner de cookies (comunes a todas las páginas).

## Cómo previsualizar en local

```bash
cd web
python3 -m http.server 8000
# abrir http://localhost:8000
```

## Despliegue

- **Vercel / Netlify:** arrastra la carpeta `web/` o conéctala al repo (directorio raíz = `web`).
- **GitHub Pages:** publica el contenido de `web/` en la rama de Pages.
- Apunta el dominio `www.stoa.consulting` al hosting y fuerza HTTPS.

---

## ⚠️ Pendientes antes de publicar (datos que solo tú puedes completar)

Busca estos marcadores y sustitúyelos por los datos reales:

| Dónde | Qué falta |
|---|---|
| `aviso-legal.html`, `privacidad.html` | **NIF**, **domicilio social** y **datos registrales** de Stoa Consulting S.L. (entre corchetes `[ ]`). Son obligatorios por ley. |
| `index.html`, footer de todas las páginas | **NIF · pendiente** en el bloque de dirección. |
| `contacto.html` (script) | Variable `ENDPOINT`: pega la URL del **Google Apps Script** (ver `../WEB_STOA_APPS_SCRIPT.js`) para recibir los mensajes. Sin ella, el formulario solo muestra la confirmación. |
| `index.html` (función `submitForm`) | Conecta el envío de la **valoración** al mismo Apps Script (línea comentada `fetch(APPS_SCRIPT_URL…)`). |
| Todas las páginas | Enlaces **Cal.com** (`cal.com/stoa-consulting/stoa-call`) y **LinkedIn** (`in/jmantelo`): confirma que las URLs reales coinciden. |
| `privacidad.html`, `cookies.html` | Lista de **proveedores/encargados** y **herramienta de analítica** reales cuando estén decididos. |
| `assets/` | Sustituir, si quieres, los **fondos SVG** de las escenas por imágenes definitivas (prompts en `../WEB_STOA_MAGNIFIC_PROMPTS.md`). El sitio funciona perfectamente con los SVG actuales. |
| Opcional | Versión **bronze/white** del logo y un **favicon/og-image** definitivos (ahora el favicon es un ◆ SVG embebido). |

## Notas de diseño

- **Header** (opción C del brief): oculto sobre la portada, aparece al avanzar; transparente sobre
  fondos oscuros y sólido al hacer scroll. En móvil (<900px) se convierte en menú lateral (drawer).
- **Cookies:** banner con consentimiento granular (aceptar / solo esenciales) guardado en
  `localStorage`. No se carga analítica hasta que el usuario acepta.
- **Accesibilidad/SEO:** `lang="es"`, metadatos Open Graph, datos estructurados `ProfessionalService`
  y páginas legales marcadas `noindex`.
- **Casos:** publicados como ejemplos representativos anonimizados, con nota de honestidad explícita
  (los dossiers `CASO_DEMO_*` son ficticios y así se declara). El caso UNED Barbastro, por ser
  confidencial, **no** se incluye en la web.

© 2026 Stoa Consulting
