import { Metadata } from 'next';
import BenefitsClient from './BenefitsClient';

export const metadata: Metadata = {
  title: 'Benefits of Importing Cars from Japan to Australia | UMZE Autohaus',
  description: 'Discover the advantages of importing vehicles from Japan, including better condition, unique models, and transparent history.',
  openGraph: {
    title: 'Benefits of Importing Cars from Japan to Australia | UMZE Autohaus',
    description: 'Discover the advantages of importing vehicles from Japan, including better condition, unique models, and transparent history.',
    type: 'article',
  },
  alternates: {
    canonical: '/blog/benefits-of-importing-from-japan',
  },
};

export default function BlogPage() {
  return <BenefitsClient />;
}