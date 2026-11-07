import fs from 'fs';
import path from 'path';
import https from 'https';

const images = [
  // Hero & About
  {
    name: 'hero-doctor.jpg',
    url: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80' // Professional doctor with slit lamp / clinic
  },
  {
    name: 'hero-patient.jpg',
    url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80' // Eye examination close-up
  },
  {
    name: 'about-hospital.jpg',
    url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80' // Modern clean clinic interior
  },
  {
    name: 'about-care.jpg',
    url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80' // Doctor patient discussion
  },

  // Services (6 available services)
  {
    name: 'service-general.jpg',
    url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80' // General eye checkup
  },
  {
    name: 'service-cataract.jpg',
    url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80' // Cataract / microsurgery
  },
  {
    name: 'service-cornea.jpg',
    url: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80' // Detailed eye close-up / cornea
  },
  {
    name: 'service-glaucoma.jpg',
    url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80' // Diagnostics / tonometry / examination
  },
  {
    name: 'service-retina.jpg',
    url: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80' // Medical retina diagnostic view
  },
  {
    name: 'service-opticals.jpg',
    url: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80' // Premium optical frames & eyeglasses
  },

  // Doctors
  {
    name: 'doctor-1.jpg',
    url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80' // Female senior eye surgeon
  },
  {
    name: 'doctor-2.jpg',
    url: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80' // Male eye specialist
  },
  {
    name: 'doctor-3.jpg',
    url: 'https://images.unsplash.com/photo-1594824813590-b896937c48f8?auto=format&fit=crop&w=800&q=80' // Female ophthalmologist
  },
  {
    name: 'doctor-4.jpg',
    url: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80' // Male senior doctor
  },

  // Gallery
  {
    name: 'gallery-reception.jpg',
    url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80' // Reception
  },
  {
    name: 'gallery-consultation.jpg',
    url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80' // Consultation
  },
  {
    name: 'gallery-diagnostics.jpg',
    url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80' // Diagnostic wing
  },
  {
    name: 'gallery-opticals.jpg',
    url: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80' // Optical store
  },
  {
    name: 'gallery-counseling.jpg',
    url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80' // Counseling
  },
  {
    name: 'gallery-facility.jpg',
    url: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=80' // Modern facility
  },

  // Blogs
  {
    name: 'blog-cataract.jpg',
    url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'blog-checkup.jpg',
    url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'blog-glaucoma.jpg',
    url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'blog-blurry.jpg',
    url: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'blog-digital.jpg',
    url: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'blog-cornea.jpg',
    url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80'
  }
];

const targetDir = path.resolve('public/images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function download(item) {
  return new Promise((resolve) => {
    const dest = path.join(targetDir, item.name);
    const file = fs.createWriteStream(dest);
    https.get(item.url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        https.get(response.headers.location, (redirectRes) => {
          redirectRes.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`Downloaded ${item.name}`);
            resolve();
          });
        });
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded ${item.name}`);
          resolve();
        });
      }
    }).on('error', (err) => {
      console.error(`Error downloading ${item.name}:`, err.message);
      resolve();
    });
  });
}

async function run() {
  console.log('Downloading curated medical images...');
  for (const img of images) {
    await download(img);
  }
  console.log('All images downloaded successfully!');
}

run();

