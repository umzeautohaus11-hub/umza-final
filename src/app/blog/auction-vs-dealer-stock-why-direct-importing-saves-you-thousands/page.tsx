import { Metadata } from 'next';
import AuctionVsDealerClient from './AuctionVsDealerClient';

export const metadata: Metadata = {
    title: 'Auction vs. Dealer Stock: Why Direct Importing Saves You Thousands',
    description: 'Discover why direct importing from Japanese auctions is often the smartest and most cost-effective way to secure your dream JDM vehicle.',
    openGraph: {
        title: 'Auction vs. Dealer Stock: Why Direct Importing Saves You Thousands',
        description: 'Discover why direct importing from Japanese auctions is often the smartest and most cost-effective way to secure your dream JDM vehicle.',
        type: 'article',
    },
    alternates: {
        canonical: '/blog/auction-vs-dealer-stock-why-direct-importing-saves-you-thousands',
    },
};

export default function BlogPage() {
    return <AuctionVsDealerClient />;
}
