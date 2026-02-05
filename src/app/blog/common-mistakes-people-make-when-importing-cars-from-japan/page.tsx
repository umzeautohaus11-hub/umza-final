import { Metadata } from 'next';
import CommonMistakesClient from './CommonMistakesClient';

export const metadata: Metadata = {
  title: 'Common Mistakes When Importing Cars from Japan | UMZE Autohaus',
  description: 'Avoid common pitfalls when importing cars from Japan. Learn why relying solely on auction grades or chasing the cheapest quote can be costly.',
  openGraph: {
    title: 'Common Mistakes When Importing Cars from Japan | UMZE Autohaus',
    description: 'Avoid common pitfalls when importing cars from Japan. Learn why relying solely on auction grades or chasing the cheapest quote can be costly.',
    type: 'article',
  },
  alternates: {
    canonical: '/blog/common-mistakes-people-make-when-importing-cars-from-japan',
  },
};

export default function BlogPage() {
  return <CommonMistakesClient />;
}