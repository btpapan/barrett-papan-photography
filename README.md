# Barrett Papan Photography

A static photography portfolio built with HTML, CSS, and JavaScript. Wildlife is the default gallery, with separate views for places and details.

## Local preview

Serve this directory with any static web server and open `index.html`. The site has no build step or runtime dependencies.

## Photo workflow

The repository stores two exports for each selected photograph:

- `images/thumb/`: 1,440 px long edge, JPEG quality 84, used by the gallery
- `images/large/`: up to 3,200 px long edge, JPEG quality 90, used by the hero and lightbox

The original full-resolution files stay outside the repository. To rebuild the exports on Windows:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\tools\export-images.ps1 -Source "C:\path\to\Best"
```

When adding work, update the mapping in `tools/export-images.ps1` and the matching photo metadata in `script.js`, regenerate exports, preview locally, then commit the source and image changes together.

## Deployment

The project is configured as a static Vercel site. Deployments do not require environment variables.

