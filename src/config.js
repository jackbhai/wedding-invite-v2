// ─────────────────────────────────────────────────────────────
//  ALL CONTENT LIVES HERE. Edit freely — the whole site rebuilds.
//  (User will add remaining details later.)
// ─────────────────────────────────────────────────────────────

export const CONFIG = {
  couple: {
    groom: 'Gaurav',
    bride: 'Uma',
    groomShort: 'Gaurav',
    brideShort: 'Uma',
    monogram: 'G · U',
    tagline: 'Two souls, one beautiful journey',
    // Main wedding date
    dateISO: '2026-11-20T19:00:00+05:30',
    dateDisplay: 'Friday, 20 November 2026',
    dateShort: '20 . 11 . 2026',
  },

  envelope: {
    headline: '॥ श्री गणेशाय नमः ॥',
    subtext: 'With the divine blessings of Waheguru Ji',
    hintText: 'Tap the seal to open',
  },

  scratch: {
    heading: "You're Invited!",
    date: 'November 20, 2026',
    day: 'Friday, 7:00 PM onwards',
    cta: 'SAVE THE DATE',
  },

  welcome: {
    kicker: 'We are honored to welcome you',
    body: 'to the wedding ceremony of Gaurav & Uma. As they begin their journey together in faith and love, we thank you for being part of this blessed occasion.',
    heart: '♥',
  },

  // Pre-filled from the family wedding plan — editable anytime.
  events: [
    { id: 'haldi', title: 'Haldi', date: '19 Nov 2026', time: '10:00 AM onwards', venue: "Bride's Residence, Paschim Vihar", note: 'A morning of turmeric, marigolds and laughter.' },
    { id: 'mehndi', title: 'Mehndi', date: '19 Nov 2026', time: '4:00 PM onwards', venue: "Bride's Residence, Paschim Vihar", note: 'Henna, music and the sweetest gossip.' },
    { id: 'sangeet', title: 'Sangeet & DJ Night', date: '20 Nov 2026', time: '7:00 PM onwards', venue: 'Community Hall, Paschim Vihar', note: 'Dance performances, dhol and full dhamaka.' },
    { id: 'shaadi', title: 'Anand Karaj', date: '21 Nov 2026', time: '9:00 AM onwards', venue: 'Gurudwara Sahib, Paschim Vihar', note: 'The sacred ceremony in the presence of Guru Granth Sahib Ji.' },
    { id: 'reception', title: 'Reception & Dinner', date: '21 Nov 2026', time: '7:00 PM onwards', venue: 'Grand Banquet, Paschim Vihar', note: 'Dinner, blessings and celebration under the stars.' },
  ],

  venue: {
    title: 'Venue',
    name: 'Grand Banquet Hall',
    address: 'Paschim Vihar, New Delhi — 110063',
    mapUrl: 'https://maps.google.com/?q=Paschim+Vihar+New+Delhi',
  },

  family: {
    blessing: 'With the divine blessings of',
    grandparents: 'Late Sardar Gurbachan Singh & Sardarni Prakash Kaur',
    groomParents: 'S/o Sardar Harpreet Singh & Sardarni Gurpreet Kaur',
    brideParents: 'D/o Sardar Rajinder Singh & Sardarni Manjeet Kaur',
    verse: [
      'Two families join, two hearts unite,',
      'under the blessings of the Divine Light.',
      'Come, grace our happiest day —',
      'your presence is the gift we pray.',
    ],
  },

  gallery: [
    { src: 'images/couple-main.png', caption: 'Gaurav & Uma' },
    { src: 'images/ai-romantic-1.webp', caption: 'Golden Hour' },
    { src: 'images/ai-romantic-2.webp', caption: 'Starlit Vows' },
    { src: 'images/ai-romantic-3.webp', caption: 'Marigold Dreams' },
    { src: 'images/ai-romantic-4.webp', caption: 'Forever Begins' },
  ],

  rsvp: {
    heading: "We can't wait to celebrate with you!",
    sub: 'Kindly respond by 10 November 2026',
    signature: 'Gaurav & Uma',
  },

  footer: {
    familyText: 'With love & blessings',
    inviteLine: 'Your presence is the greatest gift.',
  },

  music: {
    url: 'audio/bg-music.mp3',
  },
}
