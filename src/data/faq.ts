export interface FaqEntry {
  question: string;
  answer: string;
}

export interface FaqCategory {
  category: string;
  entries: FaqEntry[];
}

export const faqData: FaqCategory[] = [
  {
    category: 'Before You Visit',
    entries: [
      {
        question: 'What is an escape room?',
        answer:
          'An escape room is a live, interactive puzzle experience. You and your team are "locked" in a themed room and must solve a series of puzzles, find hidden clues, and crack codes to escape before time runs out — usually 60 minutes.',
      },
      {
        question: 'Do I need to book in advance?',
        answer:
          'Yes, we strongly recommend booking online in advance. Walk-ins are welcome if space is available, but we can\'t guarantee availability without a reservation.',
      },
      {
        question: 'How early should we arrive?',
        answer:
          'Please arrive 15 minutes before your scheduled time. This gives us time to check you in, go over the rules, and get you into the room on time. Late arrivals may result in a shortened experience.',
      },
      {
        question: 'What should I wear?',
        answer:
          'Wear comfortable clothing and shoes you can move in. You won\'t need to do anything physically demanding, but you\'ll be on your feet and moving around the room.',
      },
      {
        question: 'Is there an age requirement?',
        answer:
          'Players under 16 must be accompanied by a participating adult. We recommend our rooms for ages 10 and up, though The Forgotten Library is great for younger puzzle fans.',
      },
      {
        question: 'Are your rooms wheelchair accessible?',
        answer:
          'Yes, our facility and all rooms are fully wheelchair accessible. If you have specific accessibility needs, please contact us in advance so we can ensure the best experience.',
      },
    ],
  },
  {
    category: 'During Your Visit',
    entries: [
      {
        question: 'Can we bring our phones into the room?',
        answer:
          'We ask that all phones be left in the provided lockers before entering the room. Phones are not needed (or allowed) to solve any puzzles, and it keeps the experience immersive for everyone.',
      },
      {
        question: 'What if we get stuck?',
        answer:
          'Don\'t worry — your Game Master is monitoring your progress and can provide hints when you need them. There\'s no penalty for asking for help, and hints are designed to nudge you in the right direction without spoiling the fun.',
      },
      {
        question: 'Is it actually scary?',
        answer:
          'Our rooms are immersive and atmospheric, but they\'re not haunted houses. There are no jump scares, no actors hiding in the dark, and nothing designed to frighten. Think mystery and adventure, not horror.',
      },
      {
        question: 'Can we leave the room if we need to?',
        answer:
          'Absolutely. You are never truly locked in. There is always an accessible exit, and you can leave at any time. Safety is our top priority.',
      },
    ],
  },
  {
    category: 'Booking & Payments',
    entries: [
      {
        question: 'How much does it cost?',
        answer:
          'Our rooms are $30 per person. Private bookings and group packages are available — see our Corporate & Groups page for details.',
      },
      {
        question: 'What is your cancellation policy?',
        answer:
          'You can cancel or reschedule up to 24 hours before your booking for a full refund. Cancellations within 24 hours are non-refundable, but we\'re happy to help you reschedule when possible.',
      },
      {
        question: 'Do you offer gift cards?',
        answer:
          'Yes! Gift cards are available for purchase on our Gift Cards page. They\'re delivered digitally and can be redeemed for any room or experience.',
      },
      {
        question: 'Do you offer group or corporate rates?',
        answer:
          'Yes, we offer special packages for corporate events, birthday parties, and large groups. Visit our Corporate & Groups page or contact us directly for a custom quote.',
      },
    ],
  },
];
