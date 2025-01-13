const functions = require('@google-cloud/functions-framework');
const vision = require('@google-cloud/vision');
const axios = require('axios');

const visionClient = new vision.ImageAnnotatorClient();

functions.http('processImage', async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).send('');
  }

  try {
    if (req.method !== 'POST') {
      return res.status(405).send('Only POST requests are accepted');
    }

    const { base64Image } = req.body;
    if (!base64Image) {
      return res.status(400).send('base64Image is required');
    }

    const [result] = await visionClient.labelDetection({
      image: { content: base64Image }
    });

    const labels = result.labelAnnotations.map(label => label.description).join(', ');

    return res.status(200).json({
      success: true,
      description: `La imagen contiene: ${labels}`
    });
  } catch (error) {
    console.error('Error en el procesamiento:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
});
