import { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
    title: 'Japanese Performance Cars Australia Blog',
    description: 'Discover guides on Japanese performance cars in Australia, import tips, auction insights, and the best Japanese import cars.',
    openGraph: {
        title: 'Japanese Performance Cars Australia Blog',
        description: 'Discover guides on Japanese performance cars in Australia, import tips, auction insights, and the best Japanese import cars.',
    },
    alternates: {
        canonical: '/blog',
    },
};

export default function BlogPage() {
    return <BlogClient />;
}
