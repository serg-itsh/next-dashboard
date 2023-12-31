
// import { useState, useEffect } from 'react';
import {
  // BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/outline';
import { lusitana } from '@/app/ui/fonts';
// import { fetchCardData } from '@/app/lib/data';

const iconMap = {
  // collected: BanknotesIcon,
  collected: ClockIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};


// export default async function CardWrapper() {
  export default  async function CardWrapper() {
    // const {
    //   numberOfInvoices,
    //   numberOfCustomers,
    //   totalPaidInvoices,
    //   totalPendingInvoices,
    // } = await fetchCardData();
    
  // const [cardData, setCardData] = useState({
  //   numberOfInvoices: 0,
  //   numberOfCustomers: 0,
  //   totalPaidInvoices: 0,
  //   totalPendingInvoices: 0,
  // });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await fetchCardData();
  //       setCardData({
  //         numberOfInvoices: data.numberOfInvoices,
  //         numberOfCustomers: data.numberOfCustomers,
  //         totalPaidInvoices: Number(data.totalPaidInvoices),
  //         totalPendingInvoices: Number(data.totalPendingInvoices),
  //       });
  //     } catch (error) {
  //       console.error('Error fetching card data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []); // Run once on component mount


  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}

      {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      /> */}
    </>
  );
}



export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
