import { Metadata } from 'next';
import ImportNowClient from './ImportNowClient';

export const metadata: Metadata = {
    title: 'Buy JDM Cars in Australia | Import Now',
    description: 'Buy JDM cars in Australia with UMZE Autohaus. Start your Japanese car import today with expert guidance and complete import support.',
    openGraph: {
        title: 'Buy JDM Cars in Australia | Import Now',
        description: 'Buy JDM cars in Australia with UMZE Autohaus. Start your Japanese car import today with expert guidance and complete import support.',
    },
    alternates: {
        canonical: '/import-now',
    },
};

export default function ImportNowPage() {
    return <ImportNowClient />;
}
