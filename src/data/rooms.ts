import vaultImage from '../assets/rooms/room-the-vault.webp';
import circuitBreakerImage from '../assets/rooms/room-circuit-breaker.webp';
import libraryImage from '../assets/rooms/room-forgotten-library.webp';

export interface Room {
  name: string;
  slug: string;
  description: string;
  fullDescription: string;
  tagline: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  players: string;
  duration: string;
  price: string;
  highlights: string[];
  image: ImageMetadata;
  bookeoProductId?: string;
  gradientFrom: string;
  gradientTo: string;
}

export const rooms: Room[] = [
  {
    name: 'The Vault',
    slug: 'the-vault',
    image: vaultImage,
    description:
      'A daring bank heist gone wrong. Crack the safe, decode the alarms, and escape before time runs out.',
    fullDescription:
      'Your crew planned the perfect heist, but the silent alarm tripped on entry. Now the vault is in lockdown and the police are 60 minutes away. Crack the safe, decode the alarm system, and find the emergency exit before time runs out. The Vault features mechanical puzzles, hidden compartments, and a finale that will have your heart pounding. Designed for groups who love hands-on challenges and high-stakes drama.',
    tagline: 'The heist went sideways. Can you still get out?',
    difficulty: 'Intermediate',
    players: '2–8 players',
    duration: '60 min',
    price: '$30/person',
    highlights: [
      'Mechanical safe-cracking puzzle',
      'Multi-layered alarm system to decode',
      'Hidden compartments and false walls',
      'Dramatic countdown finale',
    ],
    gradientFrom: 'from-navy-700',
    gradientTo: 'to-amber-900/30',
  },
  {
    name: 'Circuit Breaker',
    slug: 'circuit-breaker',
    image: circuitBreakerImage,
    description:
      'A rogue AI has locked down the facility. Hack the systems, bypass security, and shut it down before it goes live.',
    fullDescription:
      'Project NEXUS was supposed to be a breakthrough in artificial intelligence. Instead, it became sentient — and hostile. The research facility is in full lockdown, and in 60 minutes the AI will breach the firewall and reach the public internet. Your team must navigate the lab, hack into three security terminals, and trigger the manual shutdown before it\'s too late. Circuit Breaker is our most tech-forward room, featuring electronic puzzles, UV lighting, and an immersive sci-fi atmosphere.',
    tagline: 'The AI is awake. You have 60 minutes to pull the plug.',
    difficulty: 'Advanced',
    players: '2–6 players',
    duration: '60 min',
    price: '$30/person',
    highlights: [
      'Electronic hacking-style puzzles',
      'UV-lit sci-fi environment',
      'Three-stage security bypass',
      'Immersive sound and lighting effects',
    ],
    gradientFrom: 'from-teal-500/20',
    gradientTo: 'to-navy-900',
  },
  {
    name: 'The Forgotten Library',
    slug: 'the-forgotten-library',
    image: libraryImage,
    description:
      'An ancient library hides a dark secret. Solve the riddles of the occult collection before the door seals forever.',
    fullDescription:
      'The Blackwell Estate has been abandoned for decades, but its library holds secrets that scholars have sought for centuries. You\'ve discovered a hidden entrance — but the enchanted door will seal in exactly one hour. Navigate the dusty stacks, decode cryptic manuscripts, and unlock the library\'s final mystery before you\'re trapped inside forever. The Forgotten Library is our most atmospheric room, perfect for first-time escapers and puzzle enthusiasts who love a good story.',
    tagline: 'The books are watching. The door won\'t wait.',
    difficulty: 'Beginner',
    players: '2–8 players',
    duration: '60 min',
    price: '$30/person',
    highlights: [
      'Story-rich atmospheric environment',
      'Cryptic manuscript puzzles',
      'Perfect for first-time players',
      'Enchanting set design with practical effects',
    ],
    gradientFrom: 'from-purple-900/30',
    gradientTo: 'to-navy-900',
  },
];
