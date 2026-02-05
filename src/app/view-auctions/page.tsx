import { Metadata } from 'next';
import ViewAuctionsClient from './ViewAuctionsClient';

export const metadata: Metadata = {
  title: 'Live Japanese Car Auctions Online | UMZE Autohaus',
  description: "Browse live Japanese car auctions including USS, TAA, JU, and CAA. UMZE Autohaus gives you direct access to Japan's largest auction networks.",
  openGraph: {
    title: 'Live Japanese Car Auctions Online | UMZE Autohaus',
    description: "Browse live Japanese car auctions including USS, TAA, JU, and CAA. UMZE Autohaus gives you direct access to Japan's largest auction networks.",
  },
  alternates: {
    canonical: '/view-auctions',
  },
};

export default function AuctionsPage() {
  return <ViewAuctionsClient />;
}