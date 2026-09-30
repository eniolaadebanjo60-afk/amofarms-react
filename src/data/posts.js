
import farm from '../assets/farm.jpg'
import broiler from '../assets/broiler.jpg'

const posts = [
  {
    id: 'nipoli-expo-2026',
    featured: true,
    image: farm,
    alt: 'NIPOLI EXPO',
    category: 'Events',
    date: 'May 12, 2026',
    read: '4 min read',
    title: 'Amo Farm Sieberer Hatchery at NIPOLI EXPO 2026',
    excerpt: `Our team represented AFSH at this year's NIPOLI EXPO, Nigeria's premier poultry and livestock exhibition. Here's a full recap of our participation, the conversations we had, and what it means for the future of poultry farming in Nigeria.`,
    author: 'AFSH Editorial Team',
    tags: ['Events', 'NIPOLI', 'Poultry', 'Nigeria'],
    body: [
      {
        type: 'p',
        text: `This year's NIPOLI EXPO brought together Nigeria's leading names in poultry and livestock farming under one roof — and Amo Farm Sieberer Hatchery Ltd. (AFSH) was proud to be among them. Our team represented AFSH at this prestigious annual event, showcasing our products, sharing our expertise, and connecting with farmers, industry partners, and government stakeholders from across the country.`,
      },
      { type: 'h2', text: 'Why NIPOLI EXPO Matters' },
      {
        type: 'p',
        text: `The Nigeria Poultry and Livestock Exhibition (NIPOLI) is the nation's premier gathering for everyone in the agricultural value chain — from feed manufacturers and veterinary suppliers to commercial farmers and policy makers. For AFSH, it is a critical platform to demonstrate our commitment to advancing Nigeria's poultry industry and to hear directly from the farmers we serve.`,
      },
      { type: 'h2', text: 'What We Showcased' },
      {
        type: 'p',
        text: `At our booth, visitors had the opportunity to learn about our full range of day-old chick varieties — Pullets, Noilers, Cockerels, and Broilers — as well as our ongoing Research and Development work. Our team of agronomists and hatchery specialists were on hand to answer technical questions and offer practical advice on flock management, biosecurity, and feeding programmes.`,
      },
      {
        type: 'quote',
        text: `The response from farmers at this year's expo was incredible. People are hungry for reliable, quality chicks and the kind of expert support AFSH provides. It reminded us why we do what we do.`,
        cite: 'AFSH Representative, NIPOLI EXPO 2026',
      },
      { type: 'h2', text: 'Key Highlights from the Event' },
      {
        type: 'p',
        text: `The three-day event was packed with panel discussions, product demonstrations, and networking sessions. Some of the key highlights for our team included:`,
      },
      {
        type: 'list',
        items: [
          `A live demonstration of our Noiler breed's performance data, comparing growth rates and egg production against conventional breeds`,
          `A Q&A session with smallholder farmers on best practices for raising Noilers in semi-intensive systems`,
          `Meetings with potential distribution partners to expand our reach in the North-Central and North-West regions`,
          `Recognition from the event organisers for AFSH's contribution to breed innovation in Nigeria`,
        ],
      },
      { type: 'h2', text: 'Looking Ahead' },
      {
        type: 'p',
        text: `Events like NIPOLI EXPO remind us that the future of Nigerian agriculture is bright — but it requires continued investment in quality genetics, farmer education, and industry collaboration. AFSH remains committed to being a driving force in that future.`,
      },
      {
        type: 'p',
        text: `We look forward to returning next year with even more innovations to share. In the meantime, if you have questions about our products or want to place an order, our team is always ready to help.`,
      },
    ],
  },
  {
    id: 'getting-started',
    image: 'https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?w=1200&q=80',
    alt: 'Poultry Farming',
    category: 'Farming Tips',
    date: 'April 28, 2026',
    read: '5 min read',
    title: 'Getting Started in Poultry Farming: What Every First-Time Farmer Should Know',
    excerpt: `Thinking about starting a poultry farm? Here's everything you need to know before you invest in your first flock of day-old chicks.`,
    author: 'AFSH Editorial Team',
    tags: ['Farming Tips', 'Poultry', 'Nigeria'],
    body: [
      {
        type: 'p',
        text: `Thinking about starting a poultry farm? Here's everything you need to know before you invest in your first flock of day-old chicks.`,
      },
      { type: 'p', text: `The full article will be published here soon.` },
    ],
  },
  {
    id: 'rising-feed-costs',
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1200&q=80',
    alt: 'Feed Costs',
    category: 'Business',
    date: 'March 15, 2026',
    read: '6 min read',
    title: 'How to Maximise Profits Despite Rising Feed Costs in Nigeria',
    excerpt: `Practical strategies for Nigerian poultry farmers navigating a challenging economic climate without sacrificing flock performance.`,
    author: 'AFSH Editorial Team',
    tags: ['Business', 'Poultry', 'Nigeria'],
    body: [
      {
        type: 'p',
        text: `Practical strategies for Nigerian poultry farmers navigating a challenging economic climate without sacrificing flock performance.`,
      },
      { type: 'p', text: `The full article will be published here soon.` },
    ],
  },
  {
    id: 'why-noiler',
    image: 'https://images.unsplash.com/photo-1612170153139-6f881ff067e0?w=1200&q=80',
    alt: 'Noiler',
    category: 'Products',
    date: 'February 20, 2026',
    read: '4 min read',
    title: 'Why the Noiler is the Best Bird for Smallholder Farmers in Nigeria',
    excerpt: `The Noiler's unique dual-purpose nature makes it a game-changer for farmers looking to maximise income from both eggs and meat.`,
    author: 'AFSH Editorial Team',
    tags: ['Products', 'Noiler', 'Nigeria'],
    body: [
      {
        type: 'p',
        text: `The Noiler's unique dual-purpose nature makes it a game-changer for farmers looking to maximise income from both eggs and meat.`,
      },
      { type: 'p', text: `The full article will be published here soon.` },
    ],
  },
  {
    id: 'biosecurity-101',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=1200&q=80',
    alt: 'Biosecurity',
    category: 'Health & Biosecurity',
    date: 'January 10, 2026',
    read: '7 min read',
    title: 'Biosecurity 101: How to Protect Your Flock from Disease Outbreaks',
    excerpt: `Disease outbreaks are one of the biggest risks in poultry farming. Here's a practical guide to setting up effective biosecurity on your farm.`,
    author: 'AFSH Editorial Team',
    tags: ['Health & Biosecurity', 'Poultry', 'Nigeria'],
    body: [
      {
        type: 'p',
        text: `Disease outbreaks are one of the biggest risks in poultry farming. Here's a practical guide to setting up effective biosecurity on your farm.`,
      },
      { type: 'p', text: `The full article will be published here soon.` },
    ],
  },
  {
    id: 'vaccination-schedules',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&q=80',
    alt: 'Vaccination',
    category: 'Health & Biosecurity',
    date: 'December 5, 2025',
    read: '5 min read',
    title: 'Vaccination Schedules for Day-Old Chicks: A Complete Guide',
    excerpt: `Getting your vaccination programme right from day one is critical to flock health and productivity. Our experts break it all down.`,
    author: 'AFSH Editorial Team',
    tags: ['Health & Biosecurity', 'Vaccination', 'Nigeria'],
    body: [
      {
        type: 'p',
        text: `Getting your vaccination programme right from day one is critical to flock health and productivity. Our experts break it all down.`,
      },
      { type: 'p', text: `The full article will be published here soon.` },
    ],
  },
  {
    id: 'broiler-farming',
    image: broiler,
    alt: 'Broiler farming',
    category: 'Farming Tips',
    date: 'November 18, 2025',
    read: '6 min read',
    title: 'Broiler Farming in Nigeria: From Day-Old Chick to Market in 6 Weeks',
    excerpt: `A step-by-step guide to raising broilers profitably — from housing and feeding to managing weight gain and planning for market day.`,
    author: 'AFSH Editorial Team',
    tags: ['Farming Tips', 'Broilers', 'Nigeria'],
    body: [
      {
        type: 'p',
        text: `A step-by-step guide to raising broilers profitably — from housing and feeding to managing weight gain and planning for market day.`,
      },
      { type: 'p', text: `The full article will be published here soon.` },
    ],
  },
]

export default posts