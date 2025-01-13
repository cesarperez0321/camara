# camara
Repositorio que almacena la función para poder abrir la cámara en el navegador.

## Archivos

1. Index.js (Este archivo maneja el procesamiento de imagenes, y es la función que está desplegada en Funciones de Cloud Run)
2. Package.json (Este archivo pertenece al index.js, y también se despliega en Funciones de Cloud Run)
Esta es la url de la función: https://us-central1-server-5907c.cloudfunctions.net/processImage

3. index.html (Es el frontend que muestra las funciones de abrir la cámara en la página web, tomar una foto y mostrar la descripción de lo que ve en pantalla)
2. script.js (En este archivo se procesan todas las funciones de la página y es donde se maneja la comunicación con la función de cloud run)
Esta es la url de la página web: https://prueba1-f90c9.web.app/



# Cámara

Repositorio que almacena la función para abrir la cámara en el navegador.

## Procesamiento de Imágenes con Vision API

Este proyecto utiliza la Google Cloud Vision API para analizar imágenes enviadas desde un formulario web y proporcionar descripciones en español.

---

## Características

- Análisis de imágenes utilizando Google Cloud Vision API.
- Generación de descripciones detalladas en español.
- Captura de fotos directamente desde el navegador.

---

## Requisitos previos

Antes de comenzar, asegúrate de cumplir con los siguientes requisitos:

1. **Cuenta en Google Cloud**: Configura un proyecto en Google Cloud Platform (GCP) con acceso a Vision API.
2. **Credenciales de servicio**: Descarga el archivo JSON de credenciales de la cuenta de servicio desde GCP.
3. **Node.js**: Instala [Node.js](https://nodejs.org/) (versión 18 o superior).
4. **NPM**: Asegúrate de tener instalado NPM para manejar las dependencias.

---

## Instalación

1. Clona este repositorio o descarga los archivos.
2. En la carpeta del proyecto, instala las dependencias:

   ```bash
   npm install
