import { Metadata } from 'next';
import TermsClient from './TermsClient';

export const metadata: Metadata = {
  title: 'Terms of Service | UMZE Autohaus',
  description: 'Read the terms of service of UMZE Autohaus. Understand the rules and regulations governing our vehicle import services.',
  alternates: {
    canonical: '/terms-of-service',
  },
};

export default function TermsPage() {
  return <TermsClient />;
}