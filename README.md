# Proyecto React - Vite

## Capturas del proyecto

### 1. React Confetti

![React Confetti](capturas/Screenshot%202026-11-09%20170947.png)

### 2. Canvas Confetti

![Canvas Confetti](capturas/Screenshot%202026-11-09%20172352.png)

### 3. Three.js

![Three.js](capturas/Screenshot%202026-11-09%20180919.png)

## Pregunta teórica

**Si la carpeta `node_modules/` está excluida, ¿borrar una dependencia hace alguna acción sobre el repositorio? ¿Cuál?**

Sí. Aunque `node_modules/` está excluida del repositorio, al eliminar una dependencia se modifican los archivos `package.json` y `package-lock.json`, que sí están incluidos en Git. Por tanto, Git registra esos cambios y permite subirlos al repositorio. Los archivos de la dependencia eliminada de `node_modules/` no se suben porque esa carpeta está ignorada.

## Despliegue

Web publicada: https://samu-cav.github.io/proyecto-react