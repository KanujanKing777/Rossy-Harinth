import Image from 'next/image';
import Link from 'next/link';
import type { Album } from '@/lib/data';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface AlbumCardProps {
  album: Album;
}

export default function AlbumCard({ album }: AlbumCardProps) {
  return (
    <Link href={`/album/${album.id}`} className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg">
      <Card 
        className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl 
                  bg-card/60 dark:bg-card/40 backdrop-blur-lg border border-primary/20 hover:border-primary/50
                  h-full flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out"
        aria-label={`View album: ${album.title}`}
      >
        <CardContent className="p-0 flex-grow">
          <div className="aspect-[4/3] relative w-full">
            <Image
              src={album.coverImageUrl}
              alt={album.coverImageAlt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={album.coverImageHint}
            />
          </div>
        </CardContent>
        <CardFooter className="p-4 bg-transparent border-t border-primary/10">
          <h2 className="text-xl font-headline text-card-foreground group-hover:text-primary transition-colors truncate" title={album.title}>
            {album.title}
          </h2>
        </CardFooter>
      </Card>
    </Link>
  );
}
