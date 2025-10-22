import { useState } from "react";
import categories from "../../../data/categories";
import FormDialog from "../../../components/FormDialog";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Category() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const categoryFormFields = [
    {
      id: "name",
      name: "name",
      label: "Category Name",
      type: "text",
      placeholder: "Enter category name",
    },
    {
      id: "description",
      name: "description",
      label: "Description",
      type: "textarea",
      placeholder: "Enter category description",
    },
  ];

  const handleCreateCategory = () => {
    // Handle category creation logic here
    closeModal();
  };

  return (
    <div className="px-4 mt-8 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Categories
          </h1>
        </div>
        <div className="sm:mt-0 sm:ml-16 sm:flex-none flex justify-center items-center">
          <button
            type="button"
            onClick={openModal}
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500 cursor-pointer"
          >
            Create New
          </button>
        </div>
      </div>
      <div className="-mx-4 mt-10 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg dark:ring-white/15">
        <table className="min-w-full divide-y divide-gray-300 dark:divide-white/15">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6 dark:text-white"
              >
                Name
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell dark:text-white"
              >
                Description
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:pr-6 dark:text-white"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((plan, planIdx) => (
              <tr key={plan.id}>
                <td
                  className={classNames(
                    planIdx === 0
                      ? ""
                      : "border-t border-gray-200 dark:border-white/10",
                    "py-4 pr-3 pl-4 text-sm sm:pl-6"
                  )}
                >
                  <div className="font-medium text-gray-900 dark:text-white">
                    {plan.name}
                  </div>
                  <div className="mt-1 flex flex-col text-gray-500 sm:block lg:hidden dark:text-gray-400">
                    <span>{plan.description}</span>
                  </div>
                </td>
                <td
                  className={classNames(
                    planIdx === 0
                      ? ""
                      : "border-t border-gray-200 dark:border-white/10",
                    "hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell dark:text-gray-400"
                  )}
                >
                  {plan.description}
                </td>
                <td
                  className={classNames(
                    planIdx === 0
                      ? ""
                      : "border-t border-gray-200 dark:border-white/10",
                    "py-3.5 pr-4 pl-3 text-sm sm:pr-6"
                  )}
                >
                  <div className="flex flex-col sm:flex-row w-max gap-2">
                    <button
                      type="button"
                      className="text-center justify-center inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white dark:bg-white/10 dark:text-white dark:ring-white/10 dark:hover:bg-white/15 dark:disabled:hover:bg-white/10 cursor-pointer"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white dark:bg-white/10 dark:text-white dark:ring-white/10 dark:hover:bg-white/15 dark:disabled:hover:bg-white/10 cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <FormDialog
        open={isModalOpen}
        onClose={closeModal}
        title="Create New Category"
        fields={categoryFormFields}
        primaryButtonText="Create Category"
        secondaryButtonText="Cancel"
        onSubmit={handleCreateCategory}
      />
    </div>
  );
}
