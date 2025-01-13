# camara
Repositorio que almacena la función para poder abrir la cámara en el navegador.
Procesamiento de Imágenes con Vision API
Este proyecto utiliza la Google Cloud Vision API para analizar imágenes enviadas desde un formulario web y proporcionar descripciones en español.

Características
Análisis de imágenes utilizando Google Cloud Vision API.
Generación de descripciones detalladas en español.
Captura de fotos directamente desde el navegador.
Requisitos previos
Antes de comenzar, asegúrate de cumplir con los siguientes requisitos:

Cuenta en Google Cloud: Configura un proyecto en Google Cloud Platform (GCP) con acceso a Vision API.
Credenciales de servicio: Descarga el archivo JSON de credenciales de la cuenta de servicio desde GCP.
Node.js: Instala Node.js (versión 18 o superior).
NPM: Asegúrate de tener instalado NPM para manejar las dependencias.
Instalación
Clona este repositorio o descarga los archivos.
En la carpeta del proyecto, instala las dependencias:
bash
Copiar código
npm install
Configura la variable de entorno para las credenciales de la cuenta de servicio:
bash
Copiar código
export GOOGLE_APPLICATION_CREDENTIALS="ruta/a/tu/archivo/credenciales.json"
Uso
Ejecución local
Inicia el servidor local:
bash
Copiar código
npm start
Accede a la aplicación en tu navegador en http://localhost:8080.
Despliegue en Google Cloud
Sube el proyecto como una función HTTP en Google Cloud Functions o Cloud Run.
Asegúrate de que la función apunte al endpoint wh (punto de entrada del proyecto).
Configura las políticas CORS si es necesario para permitir el acceso desde el navegador.
Estructura del Proyecto
plaintext
Copiar código
/
├── index.html          # Página web principal con el formulario
├── script.js           # Lógica para captura de imágenes
├── index.js            # Código de la función en Node.js
├── package.json        # Gestión de dependencias
├── README.md           # Documentación del proyecto
Notas importantes
La función procesa imágenes desde el formulario y devuelve una descripción detallada en español.
Configura correctamente la variable de entorno GOOGLE_APPLICATION_CREDENTIALS para evitar errores de autenticación.
Dependencias
@google-cloud/functions-framework: Framework para implementar funciones en Google Cloud.
@google-cloud/vision: Biblioteca para trabajar con la Vision API.
axios: Biblioteca para realizar solicitudes HTTP.
Licencia
Este proyecto se distribuye bajo la licencia MIT. Puedes utilizarlo y modificarlo libremente.
