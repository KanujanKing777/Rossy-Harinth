import ProfileHeader from '@/components/profile-header';
import AlbumCard from '@/components/album-card';
import { userProfileData, albumsData } from '@/lib/data';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <div className="relative isolate overflow-hidden">
        {/* Decorative gradient */}
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 dark:stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
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
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
        </svg>
         <div
          className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#ffb3c6] to-[#e6e6fa] opacity-20"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64.6%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 1.4% 98.2%, 8.5% 92.5%, 20.9% 75.7%, 28.8% 76%, 32.9% 70.8%, 47.5% 58.3%, 47.9% 34.5%, 22.8% 48.7%, 21.7% 20.3%, 48.2% 0%, 71.9% 27.7%)',
            }}
          />
        </div>
      </div>
      <main className="container mx-auto px-4 py-8 relative z-10">
        <ProfileHeader user={userProfileData} />
        
        <section aria-labelledby="albums-heading" className="mt-8 md:mt-12">
          <h2 id="albums-heading" className="sr-only">Photo Albums</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {albumsData.slice(0, 5).map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </div>
        </section>
      </main>
      <footer className="text-center py-8 mt-12 border-t border-border/50">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Photo Memoirs. All rights reserved.</p>
      </footer>
    </div>
  );
}
