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
  data: string;
  images: AlbumImage[];
}

export interface UserProfile {
  name: string;
  profileImageUrl: string;
  profileImageHint: string;
}

export const userProfileData: UserProfile = {
  name: "Rossy Harinth",
  profileImageUrl: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/profile.jpg",
  profileImageHint: "portrait person",
};

export const albumsData: Album[] = [
  {
    id: "engineering",
    title: "Engineering",
    data:"",
    coverImageUrl: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/engineering.jpg",
    coverImageAlt: "Beach scene with palm trees and blue sky",
    coverImageHint: "beach landscape",
    images: [
      { id: "sv1", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/engineering.jpg", alt: "Golden sunset over a calm ocean", hint: "sunset ocean" },
      { id: "sv2", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/engineering1.jpg", alt: "Family smiling on a sandy beach", hint: "family beach" },
      { id: "sv3", url: "https://placehold.co/600x400.png", alt: "Colorful local dish on a plate", hint: "food plate" },
    ],
  },
  {
    id: "karate",
    title: "Karate",
    data:"",
    coverImageUrl: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/karate.jpg",
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
    id: "hotel",
    title: "Hotel",
    coverImageUrl: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/hotel.jpg",
    coverImageAlt: "Sunlight filtering through a dense forest path",
    coverImageHint: "forest path",
    data:"Ratnam Hotel Jaffna",
    images: [
      { id: "h1", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/hotel1.jpg", alt: "Majestic waterfall cascading down rocks", hint: "waterfall nature" },
      { id: "h2", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/hotel2.jpg", alt: "Deer grazing in a green meadow", hint: "wildlife deer" },
      { id: "h3", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/hotel3.jpg", alt: "Cozy tent pitched at a forest campsite", hint: "camping tent" },
      { id: "h4", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/hotel4.jpg", alt: "Clear night sky full of stars", hint: "night sky" },
      { id: "h5", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/hotel5.jpg", alt: "Misty morning view over a calm lake", hint: "lake morning" },
      { id: "h6", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/hotel6.jpg", alt: "Misty morning view over a calm lake", hint: "lake morning" },
      { id: "h7", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/hotel7.jpg", alt: "Misty morning view over a calm lake", hint: "lake morning" },
      { id: "h8", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/hotel8.jpg", alt: "Misty morning view over a calm lake", hint: "lake morning" },

    ],
  },
  {
    id: "weddingcar",
    title: "Wedding Car",
    data:"Wedding Car Rental in Jaffna",
    coverImageUrl: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/car.jpg",
    coverImageAlt: "Artistically arranged platter of gourmet food",
    coverImageHint: "food platter",
    images: [
      { id: "ca1", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/car1.jpg", alt: "car", hint: "car" },
      { id: "ca1", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/car2.jpg", alt: "car", hint: "car" },
      { id: "ca1", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/car3.jpg", alt: "car", hint: "car" },
      { id: "ca1", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/car4.jpg", alt: "car", hint: "car" },
      { id: "ca1", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/car5.jpg", alt: "car", hint: "car" },
      { id: "ca1", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/car7.jpg", alt: "car", hint: "car" },
      { id: "ca1", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/car8.jpg", alt: "car", hint: "car" },
      { id: "ca1", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/car9.jpg", alt: "car", hint: "car" },
      { id: "ca1", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/car10.jpg", alt: "car", hint: "car" },
      { id: "ca1", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/car11.jpg", alt: "car", hint: "car" },
      { id: "ca1", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/car12.jpg", alt: "car", hint: "car" },
      { id: "ca1", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/car13.jpg", alt: "car", hint: "car" },

    ],
  },
  {
    id: "volunteering",
    title: "Volunteering",
    data:"Volunteering",
    coverImageUrl: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/volunteering.jpg",
    coverImageAlt: "Colorful fireworks exploding in the night sky",
    coverImageHint: "fireworks celebration",
    images: [
      { id: "fm1", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/volunteering1.jpg", alt: "Birthday cake with lit candles", hint: "birthday cake" },
      { id: "fm1", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/volunteering2.jpg", alt: "Birthday cake with lit candles", hint: "birthday cake" },
      { id: "fm1", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/volunteering3.jpg", alt: "Birthday cake with lit candles", hint: "birthday cake" },
      { id: "fm1", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/volunteering4.jpg", alt: "Birthday cake with lit candles", hint: "birthday cake" },
      { id: "fm1", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/volunteering5.jpg", alt: "Birthday cake with lit candles", hint: "birthday cake" },
      { id: "fm1", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/volunteering6.jpg", alt: "Birthday cake with lit candles", hint: "birthday cake" },
      { id: "fm1", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/volunteering7.jpg", alt: "Birthday cake with lit candles", hint: "birthday cake" },
      { id: "fm1", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/volunteering8.jpg", alt: "Birthday cake with lit candles", hint: "birthday cake" },
      { id: "fm1", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/volunteering9.jpg", alt: "Birthday cake with lit candles", hint: "birthday cake" },
      { id: "fm1", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/volunteering10.jpg", alt: "Birthday cake with lit candles", hint: "birthday cake" },
      { id: "fm1", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/volunteering11.jpg", alt: "Birthday cake with lit candles", hint: "birthday cake" },
      { id: "fm1", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/volunteering12.jpg", alt: "Birthday cake with lit candles", hint: "birthday cake" },
      { id: "fm1", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/volunteering13.jpg", alt: "Birthday cake with lit candles", hint: "birthday cake" },
      { id: "fm1", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/volunteering14.jpg", alt: "Birthday cake with lit candles", hint: "birthday cake" },
      { id: "fm1", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/volunteering15.jpg", alt: "Birthday cake with lit candles", hint: "birthday cake" },
      { id: "fm1", url: "https://raw.githubusercontent.com/KanujanKing777/Rossy-Harinth/refs/heads/main/images/volunteering16.jpg", alt: "Birthday cake with lit candles", hint: "birthday cake" },
      
    ],
  },
];

export const getAlbumById = (id: string): Album | undefined => {
  return albumsData.find(album => album.id === id);
};
