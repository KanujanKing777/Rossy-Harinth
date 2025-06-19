export interface AlbumImage {
  id: string;
  url: string;
  alt: string;
  hint: string;
}

export interface Album {
  id: string;
  title: string;
  coverImageUrl: string;
  coverImageAlt: string;
  coverImageHint: string;
  images: AlbumImage[];
}

export interface UserProfile {
  name: string;
  profileImageUrl: string;
  profileImageHint: string;
}

export const userProfileData: UserProfile = {
  name: "Rossy Harinth",
  profileImageUrl: "/src/images/profile.jpg",
  profileImageHint: "portrait person",
};

export const albumsData: Album[] = [
  {
    id: "engineering",
    title: "Engineering",
    coverImageUrl: "https://placehold.co/300x200.png",
    coverImageAlt: "Beach scene with palm trees and blue sky",
    coverImageHint: "beach landscape",
    images: [
      { id: "sv1", url: "https://placehold.co/600x400.png", alt: "Golden sunset over a calm ocean", hint: "sunset ocean" },
      { id: "sv2", url: "https://placehold.co/600x400.png", alt: "Family smiling on a sandy beach", hint: "family beach" },
      { id: "sv3", url: "https://placehold.co/600x400.png", alt: "Colorful local dish on a plate", hint: "food plate" },
      { id: "sv4", url: "https://placehold.co/600x400.png", alt: "View from a mountain trail", hint: "mountain path" },
      { id: "sv5", url: "https://placehold.co/600x400.png", alt: "Street art in a vibrant city alley", hint: "city street" },
      { id: "sv6", url: "https://placehold.co/600x400.png", alt: "Person relaxing by a resort pool", hint: "poolside lounge" },
    ],
  },
  {
    id: "urban-exploration-journey",
    title: "Urban Exploration",
    coverImageUrl: "https://placehold.co/300x200.png",
    coverImageAlt: "Modern city skyline at dusk",
    coverImageHint: "city skyline",
    images: [
      { id: "ue1", url: "https://placehold.co/600x400.png", alt: "Intricate graffiti on a brick wall", hint: "graffiti wall" },
      { id: "ue2", url: "https://placehold.co/600x400.png", alt: "Musician playing guitar on a city street", hint: "street musician" },
      { id: "ue3", url: "https://placehold.co/600x400.png", alt: "Sleek lines of a contemporary building", hint: "modern building" },
      { id: "ue4", url: "https://placehold.co/600x400.png", alt: "Crowded and colorful outdoor market", hint: "market crowd" },
    ],
  },
  {
    id: "peaceful-nature-retreat",
    title: "Nature Retreat",
    coverImageUrl: "https://placehold.co/300x200.png",
    coverImageAlt: "Sunlight filtering through a dense forest path",
    coverImageHint: "forest path",
    images: [
      { id: "nr1", url: "https://placehold.co/600x400.png", alt: "Majestic waterfall cascading down rocks", hint: "waterfall nature" },
      { id: "nr2", url: "https://placehold.co/600x400.png", alt: "Deer grazing in a green meadow", hint: "wildlife deer" },
      { id: "nr3", url: "https://placehold.co/600x400.png", alt: "Cozy tent pitched at a forest campsite", hint: "camping tent" },
      { id: "nr4", url: "https://placehold.co/600x400.png", alt: "Clear night sky full of stars", hint: "night sky" },
      { id: "nr5", url: "https://placehold.co/600x400.png", alt: "Misty morning view over a calm lake", hint: "lake morning" },
    ],
  },
  {
    id: "my-culinary-adventures",
    title: "Culinary Adventures",
    coverImageUrl: "https://placehold.co/300x200.png",
    coverImageAlt: "Artistically arranged platter of gourmet food",
    coverImageHint: "food platter",
    images: [
      { id: "ca1", url: "https://placehold.co/600x400.png", alt: "Hands kneading dough for homemade pasta", hint: "cooking pasta" },
      { id: "ca2", url: "https://placehold.co/600x400.png", alt: "Stall with a variety of exotic fruits", hint: "fruit market" },
      { id: "ca3", url: "https://placehold.co/600x400.png", alt: "Elegantly plated dish at a fine dining restaurant", hint: "restaurant meal" },
    ],
  },
  {
    id: "cherished-festive-moments",
    title: "Festive Moments",
    coverImageUrl: "https://placehold.co/300x200.png",
    coverImageAlt: "Colorful fireworks exploding in the night sky",
    coverImageHint: "fireworks celebration",
    images: [
      { id: "fm1", url: "https://placehold.co/600x400.png", alt: "Birthday cake with lit candles", hint: "birthday cake" },
      { id: "fm2", url: "https://placehold.co/600x400.png", alt: "Family gathered around a holiday dinner table", hint: "family dinner" },
      { id: "fm3", url: "https://placehold.co/600x400.png", alt: "People celebrating New Year's Eve with confetti", hint: "new year" },
      { id: "fm4", url: "https://placehold.co/600x400.png", alt: "Couple exchanging vows at a wedding ceremony", hint: "wedding couple" },
    ],
  },
];

export const getAlbumById = (id: string): Album | undefined => {
  return albumsData.find(album => album.id === id);
};
