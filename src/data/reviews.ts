export interface Review {
  quote: string;
  name: string;
  context: string;
  stars: number;
}

export const reviews: Review[] = [
  {
    quote: "Grandma Betty's Secret Recipe had our whole family laughing and working together. The kitchen set felt so real — like stepping into an actual grandmother's house. We escaped with 5 minutes to spare and the ending was so satisfying!",
    name: 'Sarah M.',
    context: "Grandma Betty's Secret Recipe — Team of 4",
    stars: 5,
  },
  {
    quote: "We brought our team of six for a corporate outing and had an absolute blast. The Initiation had us stumped a few times, but the 'aha!' moments made it so worth it. Highly recommend for team building!",
    name: 'Jason R.',
    context: 'The Initiation — Corporate Event',
    stars: 5,
  },
  {
    quote: "My kids (ages 14 and 16) loved it just as much as we did. Lock & Logic is the perfect mix of challenging and fun. Tesla's Lost Laboratory blew us away — the effects were unreal.",
    name: 'Amanda T.',
    context: "Tesla's Lost Laboratory — Family Night",
    stars: 5,
  },
  {
    quote: "We've done escape rooms in Philly and New York, but Lock & Logic blew them all away. The attention to detail in every room is unreal. Our group of 8 split into two rooms and had a blast comparing notes afterward.",
    name: 'Chris D.',
    context: "Grandma Betty's & The Pharaoh's Wrath — Friends Night Out",
    stars: 5,
  },
  {
    quote: "Booked this for my wife's birthday and it was the highlight of the evening. The game master was friendly and gave us just enough hints to keep us moving without spoiling anything. We escaped with 3 minutes left!",
    name: 'Marcus L.',
    context: "The Pharaoh's Wrath — Birthday Party",
    stars: 5,
  },
  {
    quote: "I'm not usually into escape rooms but my coworkers dragged me along. I was completely hooked within the first five minutes. The storyline pulled me in and the puzzles were genuinely clever. Already planning our next visit.",
    name: 'Priya S.',
    context: 'The Initiation — Corporate Team Building',
    stars: 5,
  },
  {
    quote: "Took my scout troop here and the kids had an incredible time. The staff was patient, encouraging, and made sure everyone felt included. It's a perfect activity for groups of teens.",
    name: 'Denise K.',
    context: "Grandma Betty's Secret Recipe — Scout Troop Outing",
    stars: 5,
  },
  {
    quote: "We come back every time a new room opens. Lock & Logic keeps raising the bar — The Pharaoh's Wrath is their best one yet. Fair warning: once you start, you'll be addicted.",
    name: 'Tyler & Morgan B.',
    context: "The Pharaoh's Wrath — Repeat Visitors",
    stars: 5,
  },
  {
    quote: "Clean facility, friendly staff, and puzzles that actually make you think. No random padlocks on everything — these rooms tell a story. Worth the drive from King of Prussia.",
    name: 'Danielle W.',
    context: "Tesla's Lost Laboratory — Date Night",
    stars: 5,
  },
];

export const averageRating = reviews.reduce((sum, r) => sum + r.stars, 0) / reviews.length;
