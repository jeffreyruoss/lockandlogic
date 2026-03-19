import grandmaBettyImage from '../assets/rooms/room-grandma-bettys-secret-recipe.webp';
import pharaohsWrathImage from '../assets/rooms/room-the-pharaohs-wrath.webp';
import initiationImage from '../assets/rooms/room-the-initiation.webp';
import teslasLabImage from '../assets/rooms/room-teslas-lost-laboratory.webp';

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
    name: "Grandma Betty's Secret Recipe",
    slug: 'grandma-bettys-secret-recipe',
    image: grandmaBettyImage,
    description:
      "Grandma Betty's kitchen holds a lifetime of memories — and one well-hidden family secret. Can you find what she left behind before the house changes hands forever?",
    fullDescription:
      "Grandma Betty was known for her warmth, her Sunday dinners, and a legendary dish that brought the whole family together. Now that she's gone and the house has been sold, the family has one last chance to search her beloved kitchen before the new owners arrive. Everything in Betty's home had a place and a purpose — she was meticulous that way. The kitchen may look ordinary at first glance, but Grandma always had a way of hiding things in plain sight. You and your team have 60 minutes to uncover what she left behind. Think like Betty. Look closer. Some things aren't as simple as they seem.",
    tagline: "The house is sold. The clock is ticking. One secret remains.",
    difficulty: 'Beginner',
    players: '2–8 players',
    duration: '60 min',
    price: '$30/person',
    highlights: [
      'Nostalgic home environment',
      'Hidden-in-plain-sight puzzles',
      'Perfect for first-time players',
      'Heartwarming story with a satisfying payoff',
    ],
    gradientFrom: 'from-amber-800/30',
    gradientTo: 'to-navy-900',
  },
  {
    name: "The Pharaoh's Wrath",
    slug: 'the-pharaohs-wrath',
    image: pharaohsWrathImage,
    description:
      'A sealed tomb. An ancient warning. Your excavation team has broken through — but something inside has awakened, and it wants you gone.',
    fullDescription:
      "Your archaeological team has spent months searching for the lost tomb of a forgotten pharaoh. Today, you finally broke through the sealed entrance. But the moment you stepped inside, the passage collapsed behind you. Ancient mechanisms have begun to stir, and the warnings carved into the walls are clear — intruders will not leave alive. The tomb is a maze of cryptic symbols, mechanical traps, and hidden chambers that have kept their secrets for millennia. Your team must decipher the pharaoh's riddles and find another way out before the tomb claims you as its next offering. You have 60 minutes.",
    tagline: 'You broke the seal. Now the tomb wants payment.',
    difficulty: 'Advanced',
    players: '2–8 players',
    duration: '60 min',
    price: '$30/person',
    highlights: [
      'Immersive ancient Egyptian atmosphere',
      'Multi-chamber exploration',
      'Mechanical traps and hidden passages',
      'Intense time pressure',
    ],
    gradientFrom: 'from-yellow-900/30',
    gradientTo: 'to-navy-900',
  },
  {
    name: 'The Initiation',
    slug: 'the-initiation',
    image: initiationImage,
    description:
      'A secret society has invited you to prove your worth. Pass their trials before midnight — or be forgotten like those who failed before you.',
    fullDescription:
      "You've heard the rumors for years — a secret society that operates in the shadows, whose members include some of the most powerful people in the world. Tonight, you've received an unmarked envelope with an address and a time. This is your one chance to prove you belong. The society's initiation chamber is designed to test your intellect, your teamwork, and your nerve. Each trial builds on the last, and the society does not tolerate failure. Those who don't complete the initiation before midnight are escorted out and never contacted again. Show them what you're made of. You have 60 minutes.",
    tagline: "They're watching. They're judging. Prove you belong.",
    difficulty: 'Intermediate',
    players: '2–6 players',
    duration: '60 min',
    price: '$30/person',
    highlights: [
      'Mysterious secret society atmosphere',
      'Progressive multi-stage trials',
      'Tests of logic, teamwork, and nerve',
      'Dramatic reveal finale',
    ],
    gradientFrom: 'from-indigo-900/30',
    gradientTo: 'to-navy-900',
  },
  {
    name: "Tesla's Lost Laboratory",
    slug: 'teslas-lost-laboratory',
    image: teslasLabImage,
    description:
      "Nikola Tesla's hidden workshop has been sealed for over a century. His greatest invention is inside — and it's powering up on its own.",
    fullDescription:
      "In 1908, Nikola Tesla sealed his private laboratory and vanished from public life. For over a century, no one knew what he was working on inside. Now, a power surge has been detected from behind the locked doors — something in the lab has activated on its own. Your team of investigators has been sent in to assess the situation, but the moment you entered, the lab's automated security systems engaged and sealed the exits. Tesla's workshop is filled with half-finished experiments, cryptic blueprints, and machines that still hum with energy. You must figure out what Tesla was building, stabilize the device, and find your way out before the power overloads. You have 60 minutes.",
    tagline: 'His greatest invention was never meant to be found.',
    difficulty: 'Intermediate',
    players: '2–8 players',
    duration: '60 min',
    price: '$30/person',
    highlights: [
      "Authentic inventor's workshop atmosphere",
      'Science-themed puzzles and contraptions',
      'Electrical effects and interactive machines',
      'Unfolding mystery narrative',
    ],
    gradientFrom: 'from-cyan-600/20',
    gradientTo: 'to-navy-900',
  },
];
