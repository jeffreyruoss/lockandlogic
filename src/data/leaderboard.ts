export interface LeaderboardEntry {
  rank: number;
  teamName: string;
  time: string;
  date: string;
}

export interface RoomLeaderboard {
  roomName: string;
  roomSlug: string;
  entries: LeaderboardEntry[];
}

export const leaderboardData: RoomLeaderboard[] = [
  {
    roomName: "Grandma Betty's Secret Recipe",
    roomSlug: 'grandma-bettys-secret-recipe',
    entries: [
      { rank: 1, teamName: 'Sunday Dinner Crew', time: '31:45', date: '2026-02-11' },
      { rank: 2, teamName: 'The Kitchen Sink', time: '33:22', date: '2026-02-08' },
      { rank: 3, teamName: 'Betty White Fans', time: '35:10', date: '2026-01-29' },
      { rank: 4, teamName: 'Spice Rack Attack', time: '37:03', date: '2026-02-14' },
      { rank: 5, teamName: 'Homemade Heroes', time: '38:47', date: '2026-01-21' },
      { rank: 6, teamName: 'Apron Strings', time: '40:15', date: '2026-02-03' },
      { rank: 7, teamName: 'The Leftovers', time: '42:38', date: '2026-01-16' },
      { rank: 8, teamName: 'Comfort Food Club', time: '44:52', date: '2026-02-07' },
      { rank: 9, teamName: 'Nonna Knows Best', time: '46:20', date: '2026-01-24' },
      { rank: 10, teamName: 'Potluck Posse', time: '49:05', date: '2026-02-01' },
    ],
  },
  {
    roomName: "The Pharaoh's Wrath",
    roomSlug: 'the-pharaohs-wrath',
    entries: [
      { rank: 1, teamName: 'Tomb Raiders', time: '38:12', date: '2026-02-10' },
      { rank: 2, teamName: 'Curse Breakers', time: '40:33', date: '2026-01-30' },
      { rank: 3, teamName: 'The Excavators', time: '42:08', date: '2026-02-13' },
      { rank: 4, teamName: 'Sand Storm', time: '43:55', date: '2026-02-02' },
      { rank: 5, teamName: 'Dynasty Squad', time: '45:21', date: '2026-01-25' },
      { rank: 6, teamName: 'Scarab Hunters', time: '47:40', date: '2026-02-07' },
      { rank: 7, teamName: 'Hieroglyph Gang', time: '49:15', date: '2026-01-18' },
      { rank: 8, teamName: 'The Archaeologists', time: '51:02', date: '2026-02-11' },
      { rank: 9, teamName: 'Anubis Rising', time: '53:33', date: '2026-01-27' },
      { rank: 10, teamName: 'Pyramid Scheme', time: '55:48', date: '2026-02-04' },
    ],
  },
  {
    roomName: 'The Initiation',
    roomSlug: 'the-initiation',
    entries: [
      { rank: 1, teamName: 'Inner Circle', time: '35:50', date: '2026-02-09' },
      { rank: 2, teamName: 'The Worthy Ones', time: '37:28', date: '2026-02-06' },
      { rank: 3, teamName: 'Secret Keepers', time: '39:44', date: '2026-01-28' },
      { rank: 4, teamName: 'Shadow Council', time: '41:12', date: '2026-02-14' },
      { rank: 5, teamName: 'The Chosen Few', time: '43:05', date: '2026-01-20' },
      { rank: 6, teamName: 'Midnight Society', time: '44:58', date: '2026-02-03' },
      { rank: 7, teamName: 'Trial By Fire', time: '46:30', date: '2026-01-15' },
      { rank: 8, teamName: 'The Pledges', time: '48:22', date: '2026-02-08' },
      { rank: 9, teamName: 'Order of Chaos', time: '50:45', date: '2026-01-22' },
      { rank: 10, teamName: 'The Outsiders', time: '52:10', date: '2026-02-12' },
    ],
  },
  {
    roomName: "Tesla's Lost Laboratory",
    roomSlug: 'teslas-lost-laboratory',
    entries: [
      { rank: 1, teamName: 'AC/DC Squad', time: '36:18', date: '2026-02-12' },
      { rank: 2, teamName: 'The Coil Crackers', time: '38:42', date: '2026-01-31' },
      { rank: 3, teamName: 'Voltage Runners', time: '40:05', date: '2026-02-09' },
      { rank: 4, teamName: 'Spark Gap', time: '42:33', date: '2026-02-05' },
      { rank: 5, teamName: 'Frequency Flyers', time: '44:10', date: '2026-01-23' },
      { rank: 6, teamName: 'The Inventors', time: '45:55', date: '2026-02-07' },
      { rank: 7, teamName: 'Current Events', time: '47:48', date: '2026-01-17' },
      { rank: 8, teamName: 'Ohm My God', time: '49:30', date: '2026-02-10' },
      { rank: 9, teamName: 'Watt Power', time: '51:22', date: '2026-01-26' },
      { rank: 10, teamName: 'Edison Was Wrong', time: '53:45', date: '2026-02-02' },
    ],
  },
];
