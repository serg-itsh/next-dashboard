// import { ArrowPathIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { LatestInvoice } from '@/app/lib/definitions';
// import { fetchLatestInvoices } from '@/app/lib/data';


// export default async function LatestInvoices({
export default  function LatestInvoices({
  latestInvoices,
}: {
  latestInvoices: LatestInvoice[];
}) {
  // export default async function LatestInvoices() { // Remove props
  //   const latestInvoices = await fetchLatestInvoices();

  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Latest Invoices
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        {/* NOTE: comment in this code when you get to this point in the course */}

        <div className="bg-white px-6">
          {latestInvoices.map((invoice, i) => {
            return (
              <div
                key={invoice.id}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                  <Image
                    src={invoice.image_url}
                    alt={`${invoice.name}'s profile picture`}
                    className="mr-4 rounded-full"
                    width={32}
                    height={32}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {invoice.name}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {invoice.email}
                    </p>
                  </div>
                </div>
                <p
                  className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                >
                  {invoice.amount}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          {/* <ArrowPathIcon className="h-5 w-5 text-gray-500" /> */}

          <svg
          className="h-3 w-3 text-gray-500"
          xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="currentColor" d="M447.1 86.2C400.3 33.4 332.2 0 256 0C114.6 0 0 114.6 0 256h64c0-106.1 85.9-192 192-192c58.5 0 110.4 26.5 145.5 67.8L341.3 192H512V21.3zM256 448c-58.5 0-110.4-26.5-145.5-67.8l60.2-60.2H0v170.7l64.9-64.9c46.8 52.8 115 86.2 191.1 86.2c141.4 0 256-114.6 256-256h-64c0 106.1-85.9 192-192 192"/></svg>
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
