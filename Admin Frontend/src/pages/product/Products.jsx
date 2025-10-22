import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from "react";
import productsData from "../../data/products"

export default function Products() {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSort = (column) => {
    if (sortColumn === column) {
      if (sortDirection === 'asc') {
        setSortDirection('desc');
      } else {
        setSortColumn(null);
        setSortDirection('asc'); // Default to asc for next sort
      }
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const sortedProducts = [...productsData].sort((a, b) => {
    if (sortColumn === null) return 0;

    const aValue = a[sortColumn];
    const bValue = b[sortColumn];

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortDirection === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    } else if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
    } else {
      return 0;
    }
  });
  return (
    <div className="px-2 sm:px-4 lg:px-0">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
            A list of all the products in your inventory including their name, category, price, availability and status.
          </p>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300 dark:divide-white/15">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className={`py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0 dark:text-white ${sortColumn === 'productName' ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                  >
                    <a href="#" className="group inline-flex" onClick={() => handleSort('productName')}>
                      Product
                      <span className={`ml-2 flex-none rounded text-gray-400 ${sortColumn === 'productName' ? 'visible' : 'invisible'} group-hover:visible group-focus:visible dark:text-gray-500`}>
                        <ChevronDownIcon aria-hidden="true" className={`size-5 ${sortColumn === 'productName' && sortDirection === 'desc' ? 'rotate-180' : ''}`} />
                      </span>
                    </a>
                  </th>
                  <th scope="col" className={`px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white ${sortColumn === 'productCategories' ? 'bg-gray-100 dark:bg-gray-800' : ''}`}>
                    <a href="#" className="group inline-flex" onClick={() => handleSort('productCategories')}>
                      Category
                      <span className={`ml-2 flex-none rounded text-gray-400 ${sortColumn === 'productCategories' ? 'visible' : 'invisible'} group-hover:visible group-focus:visible dark:text-gray-500`}>
                        <ChevronDownIcon aria-hidden="true" className={`size-5 ${sortColumn === 'productCategories' && sortDirection === 'desc' ? 'rotate-180' : ''}`} />
                      </span>
                    </a>
                  </th>
                  <th scope="col" className={`px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white ${sortColumn === 'productPrice' ? 'bg-gray-100 dark:bg-gray-800' : ''}`}>
                    <a href="#" className="group inline-flex" onClick={() => handleSort('productPrice')}>
                      Price
                      <span className={`ml-2 flex-none rounded text-gray-400 ${sortColumn === 'productPrice' ? 'visible' : 'invisible'} group-hover:visible group-focus:visible dark:text-gray-500`}>
                        <ChevronDownIcon aria-hidden="true" className={`size-5 ${sortColumn === 'productPrice' && sortDirection === 'desc' ? 'rotate-180' : ''}`} />
                      </span>
                    </a>
                  </th>
                  <th scope="col" className={`px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white ${sortColumn === 'productAvailable' ? 'bg-gray-100 dark:bg-gray-800' : ''}`}>
                    <a href="#" className="group inline-flex" onClick={() => handleSort('productAvailable')}>
                      Available
                      <span className={`ml-2 flex-none rounded text-gray-400 ${sortColumn === 'productAvailable' ? 'visible' : 'invisible'} group-hover:visible group-focus:visible dark:text-gray-500`}>
                        <ChevronDownIcon aria-hidden="true" className={`size-5 ${sortColumn === 'productAvailable' && sortDirection === 'desc' ? 'rotate-180' : ''}`} />
                      </span>
                    </a>
                  </th>
                  <th scope="col" className={`px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white ${sortColumn === 'visibility' ? 'bg-gray-100 dark:bg-gray-800' : ''}`}>
                    <a href="#" className="group inline-flex" onClick={() => handleSort('visibility')}>
                      Status
                      <span className={`ml-2 flex-none rounded text-gray-400 ${sortColumn === 'visibility' ? 'visible' : 'invisible'} group-hover:visible group-focus:visible dark:text-gray-500`}>
                        <ChevronDownIcon aria-hidden="true" className={`size-5 ${sortColumn === 'visibility' && sortDirection === 'desc' ? 'rotate-180' : ''}`} />
                      </span>
                    </a>
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-white/10">
                {sortedProducts.map((product, index) => (
                  <tr key={`${product.productName}-${index}`}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 dark:text-white">
                      <div className="flex items-center">
                        <img
                          src={product.coverPhoto}
                          alt={product.productName}
                          className="h-14 w-14 shrink-0 rounded-md object-cover mr-3"
                        />
                        <span>{product.productName}</span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                      {product.productCategories}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                      ${product.productPrice}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                      {product.productAvailable} in stock
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                      {product.visibility}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
                      >
                        Edit<span className="sr-only">, {product.productName}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}