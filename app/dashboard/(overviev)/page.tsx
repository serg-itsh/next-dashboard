import { Card } from '@/app/ui/dashboard/cards';
// import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue , fetchLatestInvoices, fetchCardData,} from '@/app/lib/data';
// import {  fetchLatestInvoices, fetchCardData,} from '@/app/lib/data';
// import {   fetchCardData,} from '@/app/lib/data';
// import { Suspense } from 'react';
// import { LatestInvoicesSkeleton, RevenueChartSkeleton,  CardsSkeleton, } from '@/app/ui/skeletons';
// import React, { Suspense, lazy } from 'react';
// const CardWrapper = lazy(() => import('@/app/ui/dashboard/cards'));
// const RevenueChart = lazy(() => import('@/app/ui/dashboard/revenue-chart'));
// const LatestInvoices = lazy(() => import('@/app/ui/dashboard/latest-invoices'));


// interface PageProps {
//   revenue: any; // Replace YourRevenueType with the actual type
//   latestInvoices: any; // Replace YourLatestInvoicesType with the actual type
// }

// export default function Page({ revenue, latestInvoices }: PageProps) {
 
export default async function Page() {

  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
        {/* <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
 
        <RevenueChart revenue={revenue}  /> 
        {/* <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense> */}
        <LatestInvoices latestInvoices={latestInvoices} />
        {/* <Suspense fallback={<LatestInvoicesSkeleton/>}>
        <LatestInvoices  />
        
        </Suspense> */}
      </div>
    </main>
  );
}

// export async function getServerSideProps() {
//   const revenue = await fetchRevenue();
//   const latestInvoices = await fetchLatestInvoices();

//   return {
//     props: {
//       revenue,
//       latestInvoices,
//     },
//   };
// }

