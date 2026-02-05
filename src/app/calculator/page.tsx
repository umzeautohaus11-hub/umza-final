import { Metadata } from 'next';
import CalculatorClient from './CalculatorClient';

export const metadata: Metadata = {
    title: 'Cost to Import Car from Japan to Australia',
    description: 'Calculate the cost to import a car from Japan to Australia. Get accurate estimates for auction price, shipping, taxes, and compliance.',
    openGraph: {
        title: 'Cost to Import Car from Japan to Australia',
        description: 'Calculate the cost to import a car from Japan to Australia. Get accurate estimates for auction price, shipping, taxes, and compliance.',
    }
};

export default function CalculatorPage() {
    return <CalculatorClient />;
}
