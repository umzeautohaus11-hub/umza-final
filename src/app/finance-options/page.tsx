import { Metadata } from 'next';
import FinanceOptionsClient from './FinanceOptionsClient';

export const metadata: Metadata = {
    title: 'Japanese Car Dealer Australia | Finance Options',
    description: 'UMZE Autohaus is a trusted Japanese car dealer in Australia offering flexible finance options for importing JDM and used Japanese cars.',
    openGraph: {
        title: 'Japanese Car Dealer Australia | Finance Options',
        description: 'UMZE Autohaus is a trusted Japanese car dealer in Australia offering flexible finance options for importing JDM and used Japanese cars.',
    }
};

export default function FinanceOptionsPage() {
    return <FinanceOptionsClient />;
}
