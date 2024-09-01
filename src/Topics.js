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

import Banners from './Banners'
import BlogFeed from './BlogFeed'
import Layout from './Layout'
import NewVideos from './NewVideos'
import SectionTitle from './SectionTitle'
import Sections from './Sections'

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
        href: "topics#",
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
  return (
    <>
      <Layout sections={sections}>
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            Topics
          </div>
        </main>
      </Layout>
    </>
  )
}
