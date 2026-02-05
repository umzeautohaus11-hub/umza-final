import { Metadata } from 'next';
import PrivacyClient from './PrivacyClient';

export const metadata: Metadata = {
  title: 'Privacy Policy | UMZE Autohaus',
  description: 'Read the privacy policy of UMZE Autohaus. Learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}