import { Metadata } from 'next';
import ContactUsClient from './ContactUsClient';

export const metadata: Metadata = {
  title: 'Contact UMZE Autohaus | Japanese Car Importer Australia',
  description: 'Get in touch with UMZE Autohaus for expert Japanese car import services in Australia. We help you source, buy, and import JDM cars with complete transparency.',
  openGraph: {
    title: 'Contact UMZE Autohaus | Japanese Car Importer Australia',
    description: 'Get in touch with UMZE Autohaus for expert Japanese car import services in Australia. We help you source, buy, and import JDM cars with complete transparency.',
  },
  alternates: {
    canonical: '/contact-us',
  },
};

export default function ContactPage() {
  return <ContactUsClient />;
}
