import { Metadata } from 'next';
import AboutUsClient from './AboutUsClient';

export const metadata: Metadata = {
    title: 'Japanese Car Importer Melbourne | UMZE Autohaus',
    description: 'UMZE Autohaus is a Melbourne-based Japanese car importer helping you buy high-quality cars from Japan auctions with complete transparency.',
    openGraph: {
        title: 'Japanese Car Importer Melbourne | UMZE Autohaus',
        description: 'UMZE Autohaus is a Melbourne-based Japanese car importer helping you buy high-quality cars from Japan auctions with complete transparency.',
    },
    alternates: {
        canonical: '/about-us',
    },
};

export default function AboutUsPage() {
    return <AboutUsClient />;
}
