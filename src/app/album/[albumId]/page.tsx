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
        

        <header className="mb-8 md:mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-headline text-foreground drop-shadow-sm">
            {album.data}
          </h1>
        </header>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
</link>
        <ImageGrid images={album.images} />
        <br></br>
        {album.id == "hotel" ? 


<div className="min-h-screen flex items-center justify-center p-4 font-[Poppins]">
  <div className="max-w-xl w-full rounded-2xl bg-white/15 p-8 border border-white/30 shadow-2xl backdrop-blur-md transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-3xl">

    <h2 className="mb-6 text-center text-4xl font-bold text-white drop-shadow-lg">
      Experience Comfort &amp; Luxury at <span className="text-white/90 font-extrabold">Ratnam Hotel Jaffna</span>! 
    </h2>

    <p className="mb-6 text-white/90 text-center text-lg font-light leading-relaxed">
      Looking for a perfect stay in Jaffna? Whether it’s a cozy getaway, a family vacation, or a group retreat, we’ve got you covered with affordable and comfortable accommodations!
    </p>

    <h3 className="mb-2 text-2xl font-semibold text-white">🏨 Room Rates</h3>
    <ul className="mb-6 list-disc list-inside space-y-2 text-white/90 font-medium">
      <li>AC Double Room – 5,500&nbsp;LKR</li>
      <li>AC Family Room (4 people) – 6,500&nbsp;LKR</li>
      <li>AC Villa (10 people) – 10,000&nbsp;LKR</li>
      <li>AC Budget Double Room – 5,000&nbsp;LKR</li>
      <li>AC Budget Family Room – 6,000&nbsp;LKR</li>
      <li>Delicious Breakfast – 500&nbsp;LKR per person</li>
    </ul>

    <h3 className="mb-2 text-2xl font-semibold text-white">✨ Facilities Available</h3>
    <ul className="mb-6 list-disc list-inside space-y-2 text-white/90 font-medium">
      <li>Vehicle Hire 🚗</li>
      <li>Laundry Service 🧺</li>
      <li>Kids’ Playground 🛝</li>
      <li>Yoga Space 🧘</li>
    </ul>

    <h3 className="mb-4 text-2xl font-semibold text-white">📞 Book Your Stay Now!</h3>
    <p className="mb-6 text-white/90 text-lg font-medium space-y-1 leading-relaxed">
      ☎ +94&nbsp;775&nbsp;026&nbsp;827<br></br>
      ☎ +94&nbsp;77&nbsp;869&nbsp;2777
    </p>

    <p className="text-center font-semibold text-white text-lg drop-shadow">
      📍 <strong>Ratnam Hotel – Your Home in Jaffna!</strong>
    </p>

  </div>
</div>

         :album.id == "weddingcar" ? 
         <div className="min-h-screen flex items-center justify-center p-4 font-[Poppins]">
  <div className="max-w-xl w-full rounded-2xl bg-white/15 p-8 border border-white/30 shadow-2xl backdrop-blur-md transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-3xl">

    <h2 className="mb-6 text-center text-4xl font-bold text-white drop-shadow-lg">
      Wedding Car Rental in <span className="text-white/90 font-extrabold">Jaffna</span>
    </h2>

    <p className="mb-6 text-white/90 text-center text-lg font-light leading-relaxed">
      Make your special day unforgettable with our elegant wedding car service! 💐
    </p>

    <h3 className="mb-2 text-2xl font-semibold text-white">🚗 Cars Available</h3>
    <ul className="mb-6 list-disc list-inside space-y-2 text-white/90 font-medium">
      <li>Toyota C-HR – 25,000&nbsp;LKR</li>
      <li>Toyota Yaris – 20,000&nbsp;LKR</li>
    </ul>

    <h3 className="mb-2 text-2xl font-semibold text-white">✨ What's Included</h3>
    <ul className="mb-6 list-disc list-inside space-y-2 text-white/90 font-medium">
      <li>Professional Chauffeur</li>
      <li>Beautiful Wedding Car Decorations</li>
    </ul>

    <h3 className="mb-4 text-2xl font-semibold text-white">📞 Book Now</h3>
    <p className="mb-6 text-white/90 text-lg font-medium leading-relaxed">
      ☎ +94&nbsp;775&nbsp;026&nbsp;827
    </p>

    <p className="text-center font-semibold text-white text-lg drop-shadow">
      📍 Available exclusively in <strong>Jaffna</strong> 
    </p>

    

  </div>
</div>

         :album.id == "volunteering" ?
         <div className="min-h-screen flex items-center justify-center p-4 font-[Poppins]">
  <div className="max-w-md w-full rounded-2xl bg-white/15 p-6 border border-white/30 shadow-2xl backdrop-blur-md transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-3xl">

    

    <h3 className="mb-2 text-2xl font-semibold text-white text-center">💖 Donate Now</h3>
    <p className="mb-4 text-white/90 text-lg font-medium text-center">
      ☎ +94&nbsp;775&nbsp;026&nbsp;827
    </p>

    <div className="text-center mt-4">
      <a href="https://www.facebook.com/share/1BCw2TRPs7/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"
         className="inline-block px-4 py-2 text-white font-medium border border-white/30 rounded-xl hover:bg-white/10 transition">
         Facebook
      </a>
    </div>

    

  </div>
</div>
:album.id == "engineering" ? 
<div className="min-h-screen flex items-center justify-center p-4 font-[Poppins] bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-building-image.jpg')" }}>
  <div className="max-w-xl w-full rounded-2xl bg-white/15 p-8 border border-white/30 shadow-2xl backdrop-blur-md transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-3xl">

    <h2 className="mb-6 text-center text-4xl font-bold text-white drop-shadow-lg">
      <span className="text-white/90 font-extrabold">Engineering</span>
    </h2>

   

    <h3 className="mb-2 text-2xl font-semibold text-white">🔧 Services Offered</h3>
    <ul className="mb-6 list-disc list-inside space-y-2 text-white/90 font-medium">
      <li>Geo Technical Engineering</li>
      <li>Construction</li>
      <li>Designing</li>
      <li>Surveyor Services</li>
      <li>Project Management</li>
      <li>Real Estate</li>
      <li>Engineering Solutions</li>
    </ul>

    <p className="text-center text-white/70 text-sm font-light">
      Build with confidence. Built by experts.
    </p>

  </div>
</div>
: ""}
      </main>
       
    </div>
  );
}
