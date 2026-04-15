import sharp from 'sharp';
import fs from 'fs';

async function process() {
  console.log('Converting user-portrait.png to webp...');
  await sharp('d:/Projects/Web/my-portfolio/static/user-portrait.png')
    .webp({ quality: 80 })
    .toFile('d:/Projects/Web/my-portfolio/static/user-portrait.webp');
  
  console.log('Creating thumbnail...');
  await sharp('d:/Projects/Web/my-portfolio/static/user-portrait.png')
    .resize(80, 80)
    .webp({ quality: 80 })
    .toFile('d:/Projects/Web/my-portfolio/static/user-portrait-thumb.webp');
    
  if (fs.existsSync('d:/Projects/Web/my-portfolio/static/user-portrait1.png')) {
    console.log('Deleting unused user-portrait1.png...');
    fs.unlinkSync('d:/Projects/Web/my-portfolio/static/user-portrait1.png');
  }
  
  console.log('Done.');
}

process().catch(console.error);
