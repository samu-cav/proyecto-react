# Proyecto React - Vite

## Capturas del proyecto

### 1. React Confetti
Captura de la web con el componente react-confetti.

### 2. Canvas Confetti
Captura de la web con el componente canvas-confetti.

### 3. Three.js
Captura de la web con la escena 3D de fondo.

## Pregunta teórica

**Si la carpeta `node_modules/` está excluida, ¿borrar una dependencia hace alguna acción sobre el repositorio? ¿Cuál?**

Sí. Aunque `node_modules/` está excluida del repositorio, al eliminar una dependencia se modifican los archivos `package.json` y `package-lock.json`, que sí están incluidos en Git. Por tanto, Git registra esos cambios y permite subirlos al repositorio. Los archivos de la dependencia eliminada de `node_modules/` no se suben porque esa carpeta está ignorada.

## Despliegue

Web publicada: (añadir aquí el enlace de GitHub Pages).