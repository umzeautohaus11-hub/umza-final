import { Metadata } from 'next';
import JapaneseAuctionGradingClient from './JapaneseAuctionGradingClient';

export const metadata: Metadata = {
  title: 'Japanese Auction Grading System Explained | UMZE Autohaus',
  description: 'Learn how to decode Japanese auction sheets, understand grading codes, and avoid costly mistakes when importing from Japan.',
  openGraph: {
    title: 'Japanese Auction Grading System Explained | UMZE Autohaus',
    description: 'Learn how to decode Japanese auction sheets, understand grading codes, and avoid costly mistakes when importing from Japan.',
    type: 'article',
  },
  alternates: {
    canonical: '/blog/japanese-auction-grading-system',
  },
};

export default function BlogPage() {
  return <JapaneseAuctionGradingClient />;
}
