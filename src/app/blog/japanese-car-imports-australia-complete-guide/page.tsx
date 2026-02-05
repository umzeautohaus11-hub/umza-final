import { Metadata } from 'next';
import BlogContent from './BlogContent';

export const metadata: Metadata = {
    title: 'Japanese Car Imports Australia | JDM Cars for Sale – Umze Autohaus',
    description: 'Looking for Japanese car imports in Australia? Discover fully compliant JDM cars for sale with expert sourcing, transparent pricing, and trusted import support from Umze Autohaus.',
    openGraph: {
        title: 'Japanese Car Imports Australia | JDM Cars for Sale – Umze Autohaus',
        description: 'Looking for Japanese car imports in Australia? Discover fully compliant JDM cars for sale with expert sourcing, transparent pricing, and trusted import support from Umze Autohaus.',
        type: 'article',
    }
};

export default function BlogPage() {
    return <BlogContent />;
}
