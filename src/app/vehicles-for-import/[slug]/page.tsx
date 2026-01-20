import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import VehicleDetailClient from './VehicleDetailClient';
import { Vehicle } from '@/types/vehicle';

// Force dynamic rendering for this page
export const dynamic = 'force-dynamic';
export const dynamicParams = true;

interface PageProps {
    params: Promise<{ slug: string }>;
}

import { getVehicleBySlug, getRelatedVehiclesByVehicle } from '@/lib/vehicle-service';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const vehicle = await getVehicleBySlug(slug);

    if (!vehicle) {
        return {
            title: 'Vehicle Not Found | UMZE Autohaus',
        };
    }

    const title = `${vehicle.year} ${vehicle.brand} ${vehicle.model}${vehicle.variant ? ` ${vehicle.variant}` : ''} | UMZE Autohaus`;
    const description = vehicle.description?.slice(0, 160) ||
        `Import this ${vehicle.year} ${vehicle.brand} ${vehicle.model} from ${vehicle.importSource}. Premium JDM import with full inspection and compliance.`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: vehicle.images?.[0]?.url ? [vehicle.images[0].url] : [],
        },
    };
}

export default async function VehicleDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const vehicle = await getVehicleBySlug(slug);

    if (!vehicle) {
        notFound();
    }

    const relatedVehicles = await getRelatedVehiclesByVehicle(vehicle);

    return <VehicleDetailClient vehicle={vehicle} relatedVehicles={relatedVehicles} />;
}
