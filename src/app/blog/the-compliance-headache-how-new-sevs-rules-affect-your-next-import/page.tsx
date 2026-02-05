import { Metadata } from 'next';
import ComplianceRulesClient from './ComplianceRulesClient';

export const metadata: Metadata = {
    title: 'The "Compliance" Headache: How the New SEVS Rules Affect Your Next Import',
    description: "A deep dive into Australia's RVSA and SEVS rules. Learn how compliance works, what cars are eligible, and how to avoid costly mistakes.",
    openGraph: {
        title: 'The "Compliance" Headache: How the New SEVS Rules Affect Your Next Import',
        description: "A deep dive into Australia's RVSA and SEVS rules. Learn how compliance works, what cars are eligible, and how to avoid costly mistakes.",
        type: 'article',
    },
    alternates: {
        canonical: '/blog/the-compliance-headache-how-new-sevs-rules-affect-your-next-import',
    },
};

export default function BlogPage() {
    return <ComplianceRulesClient />;
}
