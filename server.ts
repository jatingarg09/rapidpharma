import 'zone.js/node';
import express from 'express';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { CommonEngine } from '@angular/ssr';
import { APP_BASE_HREF } from '@angular/common';
import bootstrap from './src/main.server';

// --- Directory references ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = express();
const distFolder = join(__dirname, './dist/rapid-pharmaceuticals/browser'); // SSR output folder
const indexHtml = join(distFolder, 'index.html'); // Correct file

console.log('✅ Using browser dist folder:', distFolder);
// Serve static files from /browser and /public
server.use(express.static(distFolder, { maxAge: '1y' }));
server.use(express.static(join(process.cwd(), 'public'), { maxAge: '1y' }));

// Angular SSR Engine
const commonEngine = new CommonEngine();

server.get('*', async (req, res, next) => {
  try {
    const html = await commonEngine.render({
      bootstrap,
      documentFilePath: indexHtml,
      url: req.originalUrl,
      publicPath: distFolder,
      providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
    });
    res.status(200).send(html);
  } catch (err) {
    console.error('SSR Error:', err);
    next(err);
  }
});

// Start server
const port = process.env['PORT'] || 4000;
server.listen(port, () => {
  console.log(`✅ Node Express server running on http://localhost:${port}`);
});
