import { Metadata } from 'next';
import EligibilityClient from './EligibilityClient';

export const metadata: Metadata = {
  title: 'What Cars Can Be Imported into Australia? Rules & Restrictions | UMZE Autohaus',
  description: 'A comprehensive guide to vehicle import eligibility in Australia. Learn about SEVS, model reports, and how to verify if a car can be imported.',
  openGraph: {
    title: 'What Cars Can Be Imported into Australia? Rules & Restrictions | UMZE Autohaus',
    description: 'A comprehensive guide to vehicle import eligibility in Australia. Learn about SEVS, model reports, and how to verify if a car can be imported.',
    type: 'article',
  },
  alternates: {
    canonical: '/blog/what-cars-can-be-imported-into-australia-rules-restrictions-common-confusion',
  },
};

export default function BlogPage() {
  return <EligibilityClient />;
}