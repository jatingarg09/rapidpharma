const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'dist', 'rapid-pharmaceuticals', 'browser');
const destDir = path.join(__dirname, 'public');

if (!fs.existsSync(srcDir)) {
  console.error(`Source directory ${srcDir} does not exist. Please run ng build first.`);
  process.exit(1);
}

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Remove existing JS and CSS files in public/ to avoid accumulating hashed build files
try {
  const existingDestFiles = fs.readdirSync(destDir);
  for (const file of existingDestFiles) {
    if (file.endsWith('.js') || file.endsWith('.css')) {
      fs.unlinkSync(path.join(destDir, file));
    }
  }
} catch (err) {
  console.warn('Warning: Could not clean up old public JS/CSS files:', err.message);
}

// Copy index.html, JS, and CSS files
try {
  const files = fs.readdirSync(srcDir);
  let copiedCount = 0;
  for (const file of files) {
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, file);
    
    const stat = fs.statSync(srcPath);
    if (stat.isFile()) {
      if (file === 'index.html' || file.endsWith('.js') || file.endsWith('.css')) {
        fs.copyFileSync(srcPath, destPath);
        copiedCount++;
      }
    }
  }
  console.log(`Successfully copied ${copiedCount} assets from dist browser to public.`);
} catch (err) {
  console.error('Error copying assets:', err);
  process.exit(1);
}
