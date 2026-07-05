import React from 'react';
import { motion } from 'framer-motion';
import type { GalleryImage } from '../../types';

interface GalleryGridProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
}

export function GalleryGrid({ images, columns = 2 }: GalleryGridProps) {
  const colClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  }[columns];

  return (
    <div className={`grid ${colClass} gap-4`}>
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-card"
        >
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://placehold.co/400x300/3FA34D/white?text=${encodeURIComponent(image.caption ?? 'MIASei')}`;
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
            {image.caption && (
              <p className="text-white font-heading font-semibold text-sm">
                {image.caption}
              </p>
            )}
          </div>

          {/* Category badge */}
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white text-xs font-medium capitalize">
            {image.category}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
