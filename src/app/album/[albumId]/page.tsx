import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ImageGrid from '@/components/image-grid';
import { getAlbumById } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';

interface AlbumPageProps {
  params: { albumId: string };
}

export async function generateMetadata(
  { params }: AlbumPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const album = getAlbumById(params.albumId);
  const previousTitle = (await parent).title?.absolute || 'Photo Memoirs';

  if (!album) {
    return {
      title: `Album Not Found | ${previousTitle}`,
    };
  }

  return {
    title: `${album.title} | ${previousTitle}`,
    description: `View photos from the album: ${album.title}.`,
  };
}

export default function AlbumPage({ params }: AlbumPageProps) {
  const album = getAlbumById(params.albumId);

  if (!album) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
       <div className="relative isolate overflow-hidden">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 dark:stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="album-bg-pattern"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50 dark:fill-gray-800/20">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#album-bg-pattern)" />
        </svg>
      </div>
      <main className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="mb-8 flex justify-start">
          <Button variant="outline" asChild className="group border-primary/50 text-primary hover:bg-primary/10 hover:text-primary">
            <Link href="/" className="flex items-center gap-2 ">
              <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
              <span className="font-headline text-base">Back to Albums</span>
            </Link>
          </Button>
        </div>

        <header className="mb-8 md:mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-headline text-foreground drop-shadow-sm">
            {album.title}
          </h1>
        </header>
        
        <ImageGrid images={album.images} />
      </main>
       <footer className="text-center py-8 mt-12 border-t border-border/50">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Photo Memoirs. All rights reserved.</p>
      </footer>
    </div>
  );
}
