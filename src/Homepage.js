/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,

} from '@heroicons/react/24/outline'
import { 
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid'
import {
  CalendarIcon,
  MusicalNoteIcon,
  MicrophoneIcon,
  ArchiveBoxArrowDownIcon,
  PencilIcon,
  NewspaperIcon,
  TagIcon,
  PaperClipIcon,
  BookOpenIcon,
  TvIcon,
  AcademicCapIcon,
  LifebuoyIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/24/outline";
import SidebarNav from './SidebarNav'
import Sections from './Sections'
import Banners from './Banners'
import SectionTitle from './SectionTitle'
import BlogFeed from './BlogFeed'
import NewVideos from './NewVideos'
import Footer from './Footer'


const userNavigation = [
  { name: 'Personal area', href: '#' },
  { name: 'My account', href: '#' },
  { name: 'Log out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const sections = [
  {
    name: "Watch",
    items: [
      {
        name: "Lessons & Lectures",
        href: "#",
        description:
          "Lessons and lectures by Dr. Michael Laitman. Virtual lessons, lectures for women, unique recordings by Rabbi Baruch Ashlag (RABASH) and more.",
        icon: AcademicCapIcon,
        iconForeground: "text-teal-700",
        iconBackground: "bg-teal-50",
        current: true,
        hidefromsections: false,
      },
      {
        name: "Programs & Clips",
        href: "#",
        description:
          "Here you will find a rich variety of programs that include: fascinating conversations about the meaning of life, current events, programs for the whole family, clips and more.",
        icon: TvIcon,
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
        current: false,
        hidefromsections: false,
      },
      {
        name: "Conventions & Events",
        href: "#",
        description:
          'Today, the wisdom of Kabbalah is already everywhere in the world. In this section you will be able to see events, conventions and special meetings of the "Kabbalah L’Am" association in Israel and abroad.',
        icon: CalendarIcon,
        iconForeground: "text-sky-700",
        iconBackground: "bg-sky-50",
        current: false,
        hidefromsections: false,
      },
    ],
  },
  {
    name: "Read",
    items: [
      {
        name: "Kabbalah Library",
        href: "#",
        description:
          "A collection of all the most important original texts for the study of Kabbalah, written by the greatest Kabbalists.",
        icon: BookOpenIcon,
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
        current: false,
        hidefromsections: false,
      },
      {
        name: "Assorted Excerpts",
        href: "#",
        description:
          "In this section, you will find excerpts from the writings of the greatest kabbalists that we learn during the daily Kabbalah lessons with Dr. Michael Laitman. The excerpts concern the spiritual work and the structure of the upper worlds.",
        icon: PaperClipIcon,
        iconForeground: "text-rose-700",
        iconBackground: "bg-rose-50",
        current: false,
        hidefromsections: false,
      },
      {
        name: "Topics",
        href: "#",
        description: "A collection of all items for a selected topic.",
        icon: TagIcon,
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
        current: false,
        hidefromsections: false,
      },
      {
        name: "Publications",
        href: "#",
        description:
          "Articles on current events, culture, popular science, relationships and more, presented from the unique perspective of the wisdom of Kabbalah. The content is based on talks given by Dr. Michael Laitman and is written and edited by his students.",
        icon: NewspaperIcon,
        iconForeground: "text-rose-700",
        iconBackground: "bg-rose-50",
        current: false,
        hidefromsections: false,
      },
      {
        name: "Sketches",
        href: "#",
        description: "",
        icon: PencilIcon,
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
        current: false,
        hidefromsections: true,
      },
    ],
  },
  {
    name: "Listen",
    items: [
      {
        name: "Music",
        href: "#",
        description: "",
        icon: MusicalNoteIcon,
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
        current: false,
        hidefromsections: false,
      },
      {
        name: "Podcast",
        href: "#",
        description: "",
        icon: MicrophoneIcon,
        iconForeground: "text-rose-700",
        iconBackground: "bg-rose-50",
        current: false,
        hidefromsections: true,
      },
      {
        name: "Downloads",
        href: "#",
        description: "All media for a certain day",
        icon: ArchiveBoxArrowDownIcon,
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
        current: false,
        hidefromsections: false,
      },
    ],
  },
];
export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div>
        <Transition show={sidebarOpen}>
          <Dialog className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <TransitionChild
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </TransitionChild>

            <div className="fixed inset-0 flex">
              <TransitionChild
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <TransitionChild
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </TransitionChild>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                    <SidebarNav items={sections}/>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
            <SidebarNav items={sections}/>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form className="relative flex flex-1" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <MagnifyingGlassIcon
                  className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
                <input
                  id="search-field"
                  className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  type="search"
                  name="search"
                />
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Separator */}
                <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true" />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <MenuButton className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full bg-gray-50"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span className="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                        Tom Cook
                      </span>
                      <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </MenuButton>
                  <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <MenuItem key={item.name}>
                          {({ focus }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                focus ? 'bg-gray-50' : '',
                                'block px-3 py-1 text-sm leading-6 text-gray-900'
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">
              <Banners/>
              <SectionTitle text={'Archive Sections'}/>
              <Sections items={sections}/>
              <SectionTitle text={'New on the site'}/>
              <NewVideos/>
              <SectionTitle text={'Rav Laitman in Social networks'}/>
              <BlogFeed/>
            </div>
          </main>
              <Footer items={sections}/>
        </div>
      </div>
    </>
  )
}
