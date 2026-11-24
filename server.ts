import 'zone.js/node';
import express from 'express';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { CommonEngine } from '@angular/ssr';
import { APP_BASE_HREF } from '@angular/common';
import bootstrap from './src/main.server';
import { existsSync, readFileSync } from 'node:fs';

// Get correct directory of compiled server file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = express();
const commonEngine = new CommonEngine();

const distFolder = join(process.cwd(), 'public');
const indexHtml = existsSync(join(distFolder, 'index.original.html'))
  ? 'index.original.html'
  : 'index.html';

const template = readFileSync(join(distFolder, indexHtml), 'utf-8');

server.get('/franchise', (req, res) => {
  res.redirect(301, '/pcd-pharma-franchise');
});
// 1️⃣ Serve static files FIRST

server.get(
  '*.*',
  express.static(distFolder, {
    maxAge: '1y',
  }),
);

// 2️⃣ Angular SSR route

server.get('*', async (req, res, next) => {
  try {
    const html = await commonEngine.render({
      bootstrap,
      document: template,
      url: req.originalUrl,
      publicPath: distFolder,
      providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
    });
    const isNotFound = html.includes('data-page-status="404"');
    res.status(isNotFound ? 404 : 200).send(html);
  } catch (err) {
    console.error('❌ SSR Error:', err);
    next(err);
  }
});

// 3️⃣ Start server
if (require.main === module) {
  const port = process.env['PORT'] || 4000;
  server.listen(port, () => {
    console.log(`✅ Local server running at http://localhost:${port}`);
  });
}

export default server;
