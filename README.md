# OCR-express

This is an Express-based OCR (Optical Character Recognition) app that takes an image as input and returns the text extracted from the image in the response.

Usage:
1. Start the server by running `npm start`.
2. Send a POST request to the `/api/upload` endpoint with an image file attached as `multipart/form-data`.
3. The server will process the image and return the extracted text in the response.

Dependencies:
- Express.js: A web application framework for Node.js.
- Tesseract.js: A JavaScript library for OCR.

Endpoints:
- POST /api/upload: Accepts an image file and returns the extracted text.

Example Usage:
jpeg, png
