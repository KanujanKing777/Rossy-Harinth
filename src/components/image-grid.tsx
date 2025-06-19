import Image from 'next/image';
import type { AlbumImage } from '@/lib/data';
import { Card } from '@/components/ui/card';

interface ImageGridProps {
  images: AlbumImage[];
}

export default function ImageGrid({ images }: ImageGridProps) {
  if (!images || images.length === 0) {
    return <p className="text-center text-muted-foreground py-10">No images in this album yet.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {images.map((image, index) => (
        <Card 
          key={image.id} 
          className="overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300 
                     animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out"
          style={{ animationDelay: `${index * 75}ms` }} // Staggered animation
          role="figure"
          aria-label={image.alt}
        >
          <div className="aspect-square relative w-full bg-muted/50">
            <Image
              src={image.url}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={image.hint}
              priority={index < 8} // Prioritize loading initial images
            />
          </div>
        </Card>
      ))}
    </div>
  );
}
