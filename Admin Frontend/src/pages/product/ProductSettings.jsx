import { Link, Outlet, useLocation } from "react-router";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

const tabs = [
  { name: "Categories", href: "/product-settings/category", current: false },
  { name: "Colors", href: "/product-settings/color", current: false },
  { name: "Sizes", href: "/product-settings/size", current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductSettings() {
  const location = useLocation();

  // Find the current tab based on the current pathname
  const getCurrentTab = () => {
    return (
      tabs.find((tab) => location.pathname.endsWith(tab.href))?.name ||
      tabs[0].name
    );
  };

  const currentTab = getCurrentTab();

  return (
    <div>
      <div className="border-b border-gray-200 pb-5 sm:pb-0 dark:border-white/10">
        <div className="mt-3 sm:mt-4">
          <div className="grid grid-cols-1 sm:hidden">
            {/* Mobile dropdown */}
            <select
              value={currentTab}
              onChange={(e) => {
                const selectedTab = tabs.find(
                  (tab) => tab.name === e.target.value
                );
                if (selectedTab) {
                  window.location.href = selectedTab.href;
                }
              }}
              aria-label="Select a tab"
              className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:*:bg-gray-800 dark:focus:outline-white"
            >
              {tabs.map((tab) => (
                <option key={tab.name} value={tab.name}>
                  {tab.name}
                </option>
              ))}
            </select>
            <ChevronDownIcon
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500 dark:fill-gray-400"
            />
          </div>
          <div className="hidden sm:block">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <Link
                  key={tab.name}
                  to={tab.href}
                  aria-current={currentTab === tab.name ? "page" : undefined}
                  className={classNames(
                    currentTab === tab.name
                      ? "border-indigo-500 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-white/20 dark:hover:text-white",
                    "border-b-2 px-1 pb-4 text-sm font-medium whitespace-nowrap transition-colors duration-200"
                  )}
                >
                  {tab.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="grow h-full">
        <Outlet />
      </div>
    </div>
  );
}
