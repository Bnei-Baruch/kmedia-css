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
} from "@heroicons/react/24/outline";

const actionsss = [
  {
    title: "Lectures & Lessons",
    description:
      "Lessons and lectures by Dr. Michael Laitman. Virtual lessons, lectures for women, unique recordings by Rabbi Baruch Ashlag (RABASH) and more.",
    href: "#",
    icon: AcademicCapIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    title: "Programs & Clips",
    description:
      "Here you will find a rich variety of programs that include: fascinating conversations about the meaning of life, current events, programs for the whole family, clips and more.",
    href: "#",
    icon: TvIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    title: "Conventions & Events",
    description:
      'Today, the wisdom of Kabbalah is already everywhere in the world. In this section you will be able to see events, conventions and special meetings of the "Kabbalah L’Am" association in Israel and abroad.',
    href: "#",
    icon: CalendarIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
  {
    title: "Kabbalah Library",
    description:
      "A collection of all the most important original texts for the study of Kabbalah, written by the greatest Kabbalists.",
    href: "#",
    icon: BookOpenIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
  },
  {
    title: "Assorted Excerpts",
    description:
      "In this section, you will find excerpts from the writings of the greatest kabbalists that we learn during the daily Kabbalah lessons with Dr. Michael Laitman. The excerpts concern the spiritual work and the structure of the upper worlds.",
    href: "#",
    icon: PaperClipIcon,
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
  },
  {
    title: "Topics",
    description: "A collection of all items for a selected topic.",
    href: "#",
    icon: TagIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
  },
  {
    title: "Publications",
    description:
      "Articles on current events, culture, popular science, relationships and more, presented from the unique perspective of the wisdom of Kabbalah. The content is based on talks given by Dr. Michael Laitman and is written and edited by his students.",
    href: "#",
    icon: NewspaperIcon,
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
  },
  {
    title: "Sketches",
    description: "",
    href: "#",
    icon: PencilIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
  },
  {
    title: "Music",
    description: "",
    href: "#",
    icon: MusicalNoteIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
  },
  //   {
  //     title: "Podcast",
  //     href: "#",
  //     description:'',
  //     icon: MicrophoneIcon,
  //     iconForeground: "text-rose-700",
  //     iconBackground: "bg-rose-50",
  //   },
  {
    title: "Downloads",
    description: "All media for a certain day",
    href: "#",
    icon: ArchiveBoxArrowDownIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Footer({ items }) {
  const actions = [];
  items.forEach((item) => {
    item.items.forEach((action) => {
      actions.push(action);
    });
  });
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 p-5 sm:p-10 shadow sm:grid sm:grid-cols-3 sm:gap-px sm:divide-y-0">
      {actions.map((action, actionIdx) => (
        <>
          {action.hidefromsections == false && (
            <div
              key={action.title}
              className={classNames(
                // actionIdx === 0
                //   ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                //   : "",
                // actionIdx === 2 ? "sm:rounded-tr-lg" : "",
                // actionIdx === actions.length - 3 ? "sm:rounded-bl-lg" : "",
                // actionIdx === actions.length - 1
                //   ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                //   : "",
                "group relative bg-white p-6 last:rounded-bl-xl last:rounded-br-xl first:rounded-tl-xl first:rounded-tr-xl sm:first:rounded-tr-none focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 sm:last:rounded-bl-none [&:nth-last-child(3)]:sm:rounded-bl-xl [&:nth-child(3)]:sm:rounded-tr-xl",
              )}
            >
              <div>
                <span
                  className={classNames(
                    action.iconBackground,
                    action.iconForeground,
                    "inline-flex rounded-lg p-3 ring-4 ring-white",
                  )}
                >
                  <action.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  <a href={action.href} className="focus:outline-none">
                    {/* Extend touch target to entire panel */}
                    <span className="absolute inset-0" aria-hidden="true" />
                    {action.name}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {action.description}
                </p>
              </div>
              <span
                className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
              </span>
            </div>
          )}
        </>
      ))}
    </div>
  );
}
