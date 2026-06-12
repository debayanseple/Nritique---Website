import fs from 'fs';
import path from 'path';

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const srcDir = path.resolve('.netlify/functions-internal/server');
const destDir = path.resolve('netlify/functions/server');

console.log(`Copying from ${srcDir} to ${destDir}...`);
try {
  if (fs.existsSync(destDir)) {
    fs.rmSync(destDir, { recursive: true, force: true });
  }
  if (fs.existsSync(srcDir)) {
    copyDir(srcDir, destDir);
    console.log('Successfully copied functions!');
  } else {
    console.error('Source functions directory does not exist!');
  }
} catch (err) {
  console.error('Error copying functions:', err);
  process.exit(1);
}
