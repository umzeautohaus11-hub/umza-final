import { Metadata } from 'next';
import FAQsClient from './FAQsClient';

export const metadata: Metadata = {
    title: 'Japan Car Import FAQs Australia',
    description: 'Find answers to common questions about importing cars from Japan to Australia, including compliance rules, costs, and eligibility.',
    openGraph: {
        title: 'Japan Car Import FAQs Australia',
        description: 'Find answers to common questions about importing cars from Japan to Australia, including compliance rules, costs, and eligibility.',
    }
};

export default function FAQsPage() {
    return <FAQsClient />;
}
