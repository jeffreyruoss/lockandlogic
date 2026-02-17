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
    roomName: 'The Vault',
    roomSlug: 'the-vault',
    entries: [
      { rank: 1, teamName: 'Safe Crackers', time: '34:12', date: '2026-02-10' },
      { rank: 2, teamName: 'The Inside Job', time: '36:45', date: '2026-02-08' },
      { rank: 3, teamName: 'Vault Busters', time: '38:03', date: '2026-01-28' },
      { rank: 4, teamName: 'Gold Rush', time: '40:17', date: '2026-02-14' },
      { rank: 5, teamName: 'Heist Mode', time: '41:52', date: '2026-01-20' },
      { rank: 6, teamName: 'The Getaway', time: '43:08', date: '2026-02-01' },
      { rank: 7, teamName: 'Combination Lock', time: '44:30', date: '2026-01-15' },
      { rank: 8, teamName: 'Alarm Breakers', time: '46:11', date: '2026-02-05' },
      { rank: 9, teamName: 'Night Shift', time: '48:55', date: '2026-01-22' },
      { rank: 10, teamName: 'Last Minute Crew', time: '51:03', date: '2026-02-12' },
    ],
  },
  {
    roomName: 'Circuit Breaker',
    roomSlug: 'circuit-breaker',
    entries: [
      { rank: 1, teamName: 'Ctrl+Alt+Escape', time: '37:44', date: '2026-02-09' },
      { rank: 2, teamName: 'Kernel Panic', time: '39:20', date: '2026-01-30' },
      { rank: 3, teamName: 'The Debuggers', time: '40:55', date: '2026-02-13' },
      { rank: 4, teamName: 'Firewall Breach', time: '42:18', date: '2026-02-02' },
      { rank: 5, teamName: 'System Override', time: '43:47', date: '2026-01-25' },
      { rank: 6, teamName: 'Binary Squad', time: '45:33', date: '2026-02-07' },
      { rank: 7, teamName: 'Root Access', time: '47:02', date: '2026-01-18' },
      { rank: 8, teamName: 'Pixel Pirates', time: '48:19', date: '2026-02-11' },
      { rank: 9, teamName: 'Zero Day', time: '50:41', date: '2026-01-27' },
      { rank: 10, teamName: 'Stack Overflow', time: '53:28', date: '2026-02-04' },
    ],
  },
  {
    roomName: 'The Forgotten Library',
    roomSlug: 'the-forgotten-library',
    entries: [
      { rank: 1, teamName: 'Bookworms', time: '32:08', date: '2026-02-11' },
      { rank: 2, teamName: 'Page Turners', time: '33:55', date: '2026-01-29' },
      { rank: 3, teamName: 'The Archivists', time: '35:22', date: '2026-02-06' },
      { rank: 4, teamName: 'Dewey Decimators', time: '37:40', date: '2026-02-14' },
      { rank: 5, teamName: 'Spell Bound', time: '39:15', date: '2026-01-21' },
      { rank: 6, teamName: 'Chapter & Verse', time: '41:03', date: '2026-02-03' },
      { rank: 7, teamName: 'Manuscript Club', time: '42:47', date: '2026-01-16' },
      { rank: 8, teamName: 'Lost in the Stacks', time: '44:58', date: '2026-02-08' },
      { rank: 9, teamName: 'Overdue Notice', time: '47:12', date: '2026-01-24' },
      { rank: 10, teamName: 'The Librarians', time: '49:30', date: '2026-02-01' },
    ],
  },
];
