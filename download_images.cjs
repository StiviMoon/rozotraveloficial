const fs = require('fs');
const https = require('https');
const path = require('path');

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, response => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', err => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

const images = [
  // Hero
  { url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', dest: 'public/images/hero/fondo.jpg' },
  
  // Fincas
  { url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', dest: 'public/images/fincas/finca-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', dest: 'public/images/fincas/finca-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', dest: 'public/images/fincas/finca-3.jpg' },

  // Servicios
  { url: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', dest: 'public/images/servicios/servicio-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', dest: 'public/images/servicios/servicio-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1533174000253-1d59da62ddbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', dest: 'public/images/servicios/servicio-3.jpg' },
  { url: 'https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', dest: 'public/images/servicios/servicio-4.jpg' },
  { url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', dest: 'public/images/servicios/servicio-5.jpg' },

  // Galeria
  { url: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', dest: 'public/images/galeria/foto-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', dest: 'public/images/galeria/foto-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', dest: 'public/images/galeria/foto-3.jpg' },
  { url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', dest: 'public/images/galeria/foto-4.jpg' },
  { url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', dest: 'public/images/galeria/foto-5.jpg' },

  // Testimonios
  { url: 'https://randomuser.me/api/portraits/women/44.jpg', dest: 'public/images/testimonios/perfil-1.jpg' }
];

async function run() {
  for (const img of images) {
    try {
      await download(img.url, img.dest);
      console.log(`Downloaded ${img.dest}`);
    } catch (e) {
      console.error(`Failed ${img.dest}`, e);
    }
  }
}

run();
