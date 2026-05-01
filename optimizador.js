const sharp = require('sharp');

sharp('img/receta1.jpg')
  .resize(400)
  .toFile('receta1-400.webp');

sharp('img/receta1.jpg')
  .resize(800)
  .toFile('receta1-800.webp');

sharp('img/receta1.jpg')
  .resize(1200)
  .toFile('receta1-1200.webp');



sharp('img/receta2.jpg')
  .resize(1500, 1000, { fit: 'cover' }) 
  .webp()
  .toFile('receta2-desktop.webp');

sharp('img/receta2.jpg')
  .resize(600, 800, { fit: 'cover' }) 
  .webp()
  .toFile('receta2-mobile.webp');



sharp('img/receta1a.jpg')
  .webp()
  .toFile('img/receta1a.webp');