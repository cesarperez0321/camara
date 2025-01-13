document.addEventListener('DOMContentLoaded', () => {
    const btnOpenCamera = document.getElementById('btnOpenCamera');
    const videoStream = document.getElementById('videoStream');
    const btnCapture = document.getElementById('btnCapture');
    const canvasOutput = document.getElementById('canvasOutput');
    const photoPreview = document.getElementById('photoPreview');
    const btnNewPhoto = document.getElementById('btnNewPhoto');
    const description = document.getElementById('description');
    
    let videoStreamTrack;
  
    // Abrir cámara
    btnOpenCamera.addEventListener('click', async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoStream.srcObject = stream;
        videoStream.style.display = 'block';
        btnCapture.style.display = 'inline-block';
        btnOpenCamera.style.display = 'none';
        videoStreamTrack = stream.getTracks()[0];
      } catch (err) {
        alert('No se pudo acceder a la cámara: ' + err.message);
      }
    });
  
    // Capturar foto
    btnCapture.addEventListener('click', () => {
      const context = canvasOutput.getContext('2d');
      canvasOutput.width = videoStream.videoWidth;
      canvasOutput.height = videoStream.videoHeight;
      context.drawImage(videoStream, 0, 0, canvasOutput.width, canvasOutput.height);
  
      const photoData = canvasOutput.toDataURL('image/jpeg');
      photoPreview.src = photoData;
      photoPreview.style.display = 'block';
      videoStream.style.display = 'none';
      btnCapture.style.display = 'none';
      btnNewPhoto.style.display = 'inline-block';
      videoStreamTrack.stop();
  
      enviarImagen(photoData);
    });
  
    // Tomar nueva foto
    btnNewPhoto.addEventListener('click', async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoStream.srcObject = stream;
        videoStream.style.display = 'block';
        btnCapture.style.display = 'inline-block';
        btnNewPhoto.style.display = 'none';
        photoPreview.style.display = 'none';
        description.value = '';
        videoStreamTrack = stream.getTracks()[0];
      } catch (err) {
        alert('No se pudo acceder a la cámara: ' + err.message);
      }
    });
  
    // Enviar imagen al servidor
    async function enviarImagen(base64Image) {
      const cloudFunctionURL = 'https://us-central1-server-5907c.cloudfunctions.net/processImage';
      try {
        const response = await fetch(cloudFunctionURL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ base64Image: base64Image.split(',')[1] })
        });
        const data = await response.json();
        if (data.success) {
          description.value = data.description;
        } else {
          description.value = 'Error al procesar la imagen.';
        }
      } catch (err) {
        description.value = 'Error en la comunicación con el servidor.';
      }
    }
  });
  
