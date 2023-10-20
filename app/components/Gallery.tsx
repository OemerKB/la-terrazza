import React from 'react';

interface Image {
  src: string;
  alt: string;
}

interface GalleryProps {
  images: Image[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt={image.alt} className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
