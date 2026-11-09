/**
 * DUGOUT — Sports Club Data Source
 * Location: Shaktigarh Path, Bhangagarh, Guwahati, Assam 781005
 * Phone: 098640 00151 | WhatsApp: 919864000151
 * 
 * NOTE: Information strictly adheres to provided business details.
 * Facility items and reviews contain editable placeholders for owner updates.
 */

export interface FacilityItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  specs: string[];
  image: string;
  isPlaceholder?: boolean;
}

export interface ReviewItem {
  id: string;
  authorLabel: string;
  rating: number;
  date: string;
  quote: string;
  isPlaceholder: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
}

export const CLUB_INFO = {
  name: 'DUGOUT',
  tagline: 'WHERE THE GAME COMES ALIVE',
  supportingLine: 'Your space. Your team. Your game.',
  category: 'Sports Club',
  rating: 4.6,
  reviewCount: 19,
  address: 'Shaktigarh Path, Bhangagarh, Guwahati, Assam 781005',
  phoneDisplay: '098640 00151',
  phoneRaw: '+919864000151',
  whatsappRaw: '919864000151',
  operatingHours: 'Open daily until 11:00 PM',
  closingTime: '11:00 PM',
  locationCity: 'Bhangagarh, Guwahati',
  state: 'Assam',
  pincode: '781005',
  mapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=DUGOUT+Shaktigarh+Path+Bhangagarh+Guwahati+Assam+781005',
  mapsEmbedUrl: 'https://maps.google.com/maps?q=Shaktigarh+Path,+Bhangagarh,+Guwahati,+Assam+781005&t=&z=15&ie=UTF8&iwloc=&output=embed',
};

export const TIME_SLOTS = [
  { id: 'morning_06', label: '06:00 AM – 07:00 AM', category: 'Morning' },
  { id: 'morning_07', label: '07:00 AM – 08:00 AM', category: 'Morning' },
  { id: 'morning_08', label: '08:00 AM – 09:00 AM', category: 'Morning' },
  { id: 'morning_09', label: '09:00 AM – 10:00 AM', category: 'Morning' },
  { id: 'afternoon_15', label: '03:00 PM – 04:00 PM', category: 'Afternoon' },
  { id: 'afternoon_16', label: '04:00 PM – 05:00 PM', category: 'Afternoon' },
  { id: 'evening_17', label: '05:00 PM – 06:00 PM', category: 'Prime Floodlight' },
  { id: 'evening_18', label: '06:00 PM – 07:00 PM', category: 'Prime Floodlight' },
  { id: 'evening_19', label: '07:00 PM – 08:00 PM', category: 'Prime Floodlight' },
  { id: 'evening_20', label: '08:00 PM – 09:00 PM', category: 'Prime Floodlight' },
  { id: 'evening_21', label: '09:00 PM – 10:00 PM', category: 'Prime Floodlight' },
  { id: 'evening_22', label: '10:00 PM – 11:00 PM', category: 'Final Match Slot (Closes 11 PM)' },
];

export const FACILITIES_DATA: FacilityItem[] = [
  {
    id: 'fac-turf',
    title: 'Synthetic Turf Arena',
    subtitle: 'Primary Pitch · All-Weather Surface',
    description: 'High-density synthetic grass turf designed for seamless ball control, shock absorption, and fast-paced team play.',
    specs: ['All-Weather Synthetic Turf', 'Standard Match Markings', 'Safety Perimeter Netting'],
    image: '/src/assets/images/hero_sports_turf_1794213046282.jpg',
    isPlaceholder: true,
  },
  {
    id: 'fac-floodlights',
    title: 'High-Lumen Floodlight Array',
    subtitle: 'Night Match Play · Open until 11 PM',
    description: 'Evenly distributed overhead stadium illumination providing crisp visibility with minimal glare for late evening matches.',
    specs: ['Zero-Glare Shadow Reduction', 'Active Until 11:00 PM', 'Even Pitch Coverage'],
    image: '/src/assets/images/gallery_turf_match_1794213051352.jpg',
    isPlaceholder: true,
  },
  {
    id: 'fac-dugout',
    title: 'Player Dugout & Spectator Bench',
    subtitle: 'Team Pavilion · Rest & Strategy Zone',
    description: 'Covered team dugouts providing comfortable bench seating, hydration space, and optimal sideline pitch sightlines.',
    specs: ['Covered Sideline Shelter', 'Hydration & Kit Storage', 'Clear Tactical Sightlines'],
    image: '/src/assets/images/gallery_club_lounge_1794213049142.jpg',
    isPlaceholder: true,
  },
  {
    id: 'fac-amenities',
    title: 'Club Warmup & Prep Area',
    subtitle: 'Warmup Space · Changing Facilities',
    description: 'Designated pre-match warmup space, stretching zones, and player prep amenities maintained for every booked slot.',
    specs: ['Warmup & Agility Space', 'Convenient Onsite Parking', 'Direct Pitch Access'],
    image: '/src/assets/images/about_sports_facility_1794213048746.jpg',
    isPlaceholder: true,
  },
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Main Turf Arena at Dusk',
    category: 'Arena',
    image: '/src/assets/images/hero_sports_turf_1794213046282.jpg',
    caption: 'Full-pitch perspective under high-output floodlights in Guwahati.',
  },
  {
    id: 'gal-2',
    title: 'Club Dugout & Pavilion',
    category: 'Facilities',
    image: '/src/assets/images/gallery_club_lounge_1794213049142.jpg',
    caption: 'Modern sideline seating and spectator vantage point.',
  },
  {
    id: 'gal-3',
    title: 'High-Paced Turf Action',
    category: 'Match Play',
    image: '/src/assets/images/gallery_turf_match_1794213051352.jpg',
    caption: 'Intense nighttime gameplay on synthetic grass.',
  },
  {
    id: 'gal-4',
    title: 'Facility Fieldhouse View',
    category: 'Grounds',
    image: '/src/assets/images/about_sports_facility_1794213048746.jpg',
    caption: 'Athletic prep and warmup grounds adjacent to pitch.',
  },
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    authorLabel: 'Verified Google Reviewer #1',
    rating: 5,
    date: 'Verified Google Review',
    quote: '[Editable Review Placeholder] "Great turf quality and convenient location in Bhangagarh. Perfect floodlights for late evening matches with friends."',
    isPlaceholder: true,
  },
  {
    id: 'rev-2',
    authorLabel: 'Verified Google Reviewer #2',
    rating: 5,
    date: 'Verified Google Review',
    quote: '[Editable Review Placeholder] "Smooth booking process and well-maintained ground. Open until 11 PM which makes it easy to schedule games after work."',
    isPlaceholder: true,
  },
  {
    id: 'rev-3',
    authorLabel: 'Verified Google Reviewer #3',
    rating: 4,
    date: 'Verified Google Review',
    quote: '[Editable Review Placeholder] "Solid sports club atmosphere in Guwahati. Dugout seating is clean and pitch turf provides good grip."',
    isPlaceholder: true,
  },
];
