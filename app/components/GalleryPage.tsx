import React from 'react';
import Gallery from '../components/Gallery';

const images = [
  { src: '/next.svg', alt: 'Bild 1' },
  { src: '/restlat.jpg', alt: 'Bild 2' },
  { src: '/image3.jpg', alt: 'Bild 3' },
];

const GalleryPage: React.FC = () => {
  return (
    <div>
      <h1>Meine Galerie</h1>
      <Gallery images={images} />
    </div>
  );
};

export default GalleryPage;
