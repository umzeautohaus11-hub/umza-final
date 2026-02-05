import { Metadata } from 'next';
import ImportProcessClient from './ImportProcessClient';

export const metadata: Metadata = {
    title: 'Import Cars from Japan to Australia | Process',
    description: 'Learn how to import cars from Japan to Australia with our step-by-step guide covering auctions, shipping, compliance, and delivery.',
    openGraph: {
        title: 'Import Cars from Japan to Australia | Process',
        description: 'Learn how to import cars from Japan to Australia with our step-by-step guide covering auctions, shipping, compliance, and delivery.',
    },
    alternates: {
        canonical: '/import-process',
    },
};

export default function ImportProcessPage() {
    return <ImportProcessClient />;
}
