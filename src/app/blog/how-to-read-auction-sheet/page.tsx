import { Metadata } from 'next';
import HowToReadAuctionSheetClient from './HowToReadAuctionSheetClient';

export const metadata: Metadata = {
  title: "How to Read a Japanese Auction Sheet: A Beginner's Guide | UMZE Autohaus",
  description: 'A step-by-step guide to understanding Japanese auction sheets. We break down the four key sections and explain what every first-time importer needs to know.',
  openGraph: {
    title: "How to Read a Japanese Auction Sheet: A Beginner's Guide | UMZE Autohaus",
    description: 'A step-by-step guide to understanding Japanese auction sheets. We break down the four key sections and explain what every first-time importer needs to know.',
    type: 'article',
  },
  alternates: {
    canonical: '/blog/how-to-read-auction-sheet',
  },
};

export default function BlogPage() {
  return <HowToReadAuctionSheetClient />;
}
