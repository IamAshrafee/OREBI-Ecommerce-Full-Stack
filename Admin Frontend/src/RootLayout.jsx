import { Outlet } from "react-router";
import { Avatar } from "./components/avatar";
import girlProfile from "./assets/jpg/portrait-of-woman-with-hand-on-her-face.jpg";
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "./components/dropdown";
import {
  Navbar,
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
} from "./components/navbar";
import {
  Sidebar,
  SidebarBody,
  SidebarDivider,
  SidebarFooter,
  SidebarHeader,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from "./components/sidebar";
import { SidebarLayout } from "./components/sidebar-layout";
import {
  ArrowRightStartOnRectangleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  Cog8ToothIcon,
  LightBulbIcon,
  PlusIcon,
  ShieldCheckIcon,
  UserIcon,
  ArchiveBoxIcon,
} from "@heroicons/react/16/solid";
import {
  BanknotesIcon,
  BellIcon,
  Cog6ToothIcon,
  HomeIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  MegaphoneIcon,
  PlusCircleIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  Square2StackIcon,
  TicketIcon,
  WindowIcon,
} from "@heroicons/react/20/solid";

export default function RootLayout() {
  return (
    <SidebarLayout
      navbar={
        <Navbar>
          <NavbarSpacer />
          <NavbarSection>
            <NavbarItem to="/notifications" aria-label="Notifications">
              <BellIcon />
            </NavbarItem>
            <NavbarItem to="/" aria-label="Dashboard">
              <WindowIcon />
            </NavbarItem>
            <Dropdown>
              <DropdownButton as={NavbarItem}>
                <Avatar src={girlProfile} square />
              </DropdownButton>
              <DropdownMenu className="min-w-64" anchor="top start">
                <DropdownItem to="/my-profile">
                  <UserIcon />
                  <DropdownLabel>My profile</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem to="/logout">
                  <ArrowRightStartOnRectangleIcon />
                  <DropdownLabel>Sign out</DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <div className="text-white font-semibold text-2xl font-sans">
              OREBI Admin
            </div>
          </SidebarHeader>
          <SidebarBody>
            <SidebarSection className="max-lg:hidden">
              <SidebarItem to="/">
                <WindowIcon />
                <SidebarLabel>Dashboard</SidebarLabel>
              </SidebarItem>
              <SidebarItem to="/notifications">
                <BellIcon />
                <SidebarLabel>Notifications</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
            <SidebarDivider />
            <SidebarSection>
              <SidebarHeading>Product</SidebarHeading>
              <SidebarItem to="/products">
                <ArchiveBoxIcon />
                <SidebarLabel>All Products</SidebarLabel>
              </SidebarItem>
              <SidebarItem to="/create-product">
                <PlusCircleIcon />
                <SidebarLabel>Create Product</SidebarLabel>
              </SidebarItem>
              <SidebarHeading>Order</SidebarHeading>
              <SidebarItem to="/orders">
                <BanknotesIcon />
                <SidebarLabel>All Orders</SidebarLabel>
              </SidebarItem>
              <SidebarItem to="/create-order">
                <PlusCircleIcon />
                <SidebarLabel>Create Order</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarBody>
          <SidebarFooter className="max-lg:hidden">
            <Dropdown>
              <DropdownButton as={SidebarItem}>
                <span className="flex min-w-0 items-center gap-3">
                  <Avatar src={girlProfile} className="size-10" square alt="" />
                  <span className="min-w-0">
                    <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">
                      Erica
                    </span>
                    <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                      erica.example.com
                    </span>
                  </span>
                </span>
                <ChevronUpIcon />
              </DropdownButton>
              <DropdownMenu className="min-w-64" anchor="top start">
                <DropdownItem to="/my-profile">
                  <UserIcon />
                  <DropdownLabel>My profile</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem to="/logout">
                  <ArrowRightStartOnRectangleIcon />
                  <DropdownLabel>Sign out</DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </SidebarFooter>
        </Sidebar>
      }
    >
      {/* The page content */}
      <div className="pb-10">
        <header className="mb-2 border-b border-gray-900/10 z-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white ">
              Create New Product
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarLayout>
  );
}
