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

const banners = [
  {
    items: "",
    title: "Rising Above Reason",
    subtitle: "World Kabbalah Convention 2024",
    href: "#",
    bgimage:
      "https://kabbalahmedia.info/imaginary/thumbnail?url=https%3A%2F%2Fkabbalahmedia.info%2F%2Fbackend%2Fcms%2F%2Fimages%2FСнимок-экрана-2022-04-16-в-16.40.36.png&width=512&height=288&nocrop=false&stripmeta=true",
    icon: AcademicCapIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    items: "",
    title: "Preface to the Wisdom of Kabbalah",
    subtitle: "A recomended series for the study of",
    href: "#",
    bgimage:
      "https://kabbalahmedia.info/imaginary/thumbnail?url=https%3A%2F%2Fkabbalahmedia.info%2F%2Fbackend%2Fcms%2F%2Fimages%2F2019%2F08%2Fvlcsnap-2531-12-09-13h22m40s587.png&width=512&height=288&nocrop=false&stripmeta=true",
    icon: AcademicCapIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  // {
  //   items: "",
  //   title: "General overview of the Upper Worlds",
  //   subtitle: "Intro to preface (crash course)",
  //   href: "#",
  //   bgimage:
  //     "https://kabbalahmedia.info/imaginary/thumbnail?url=https%3A%2F%2Fkabbalahmedia.info%2F%2Fbackend%2Fcms%2F%2Fimages%2F2019%2F08%2FIMG_1316.jpg&width=512&height=288&nocrop=false&stripmeta=true",
  //   icon: AcademicCapIcon,
  //   iconForeground: "text-teal-700",
  //   iconBackground: "bg-teal-50",
  // },
  {
    items: [
      {
        title: "Daily Lesson - morning",
        subtitle: "Jun 13, 2024",
        href: "#",
        bgimage: "./images/morning.jpg",
        icon: AcademicCapIcon,
        iconForeground: "text-teal-700",
        iconBackground: "bg-teal-50",
      },
      {
        title: "Daily Lesson - afternoon",
        subtitle: "Jun 13, 2024",
        href: "#",
        bgimage: "./images/noon.jpg",
        icon: AcademicCapIcon,
        iconForeground: "text-teal-700",
        iconBackground: "bg-teal-50",
      },
      {
        title: "Daily Lesson - evening A",
        subtitle: "Jun 13, 2024",
        href: "#",
        bgimage: "./images/evening1.jpg",
        icon: AcademicCapIcon,
        iconForeground: "text-teal-700",
        iconBackground: "bg-teal-50",
      },
      {
        title: "Daily Lesson - evening B",
        subtitle: "Jun 13, 2024",
        href: "#",
        bgimage: "./images/evening2.jpg",
        icon: AcademicCapIcon,
        iconForeground: "text-teal-700",
        iconBackground: "bg-teal-50",
      },
    ],
    title: "Rising Above Reason",
    subtitle: "World Kabbalah Convention 2024",
    href: "#",
    bgimage:
      "https://kabbalahmedia.info/imaginary/thumbnail?url=https%3A%2F%2Fkabbalahmedia.info%2F%2Fbackend%2Fcms%2F%2Fimages%2FСнимок-экрана-2022-04-16-в-16.40.36.png&width=512&height=288&nocrop=false&stripmeta=true",
    icon: AcademicCapIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
      {banners.map((banner) => (
        <>
          {banner.items == "" ? (
            <div className="group relative flex flex-1 overflow-hidden rounded sm:rounded-lg">
              <div className="absolute inset-0">
                <img
                  src={banner.bgimage}
                  alt={
                    "Banner for " +
                    banner.title +
                    " - " +
                    banner.subtitle +
                    " link."
                  }
                  className="h-full w-full object-cover group-hover:opacity-75"
                />
              </div>
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-60 sm:from-transparent sm:to-black sm:opacity-50"
              />
              <div className="relative flex flex-1 flex-col justify-end px-4 py-2">
                <p aria-hidden="true" className="mt-1 text-xs text-white">
                  {banner.subtitle}
                </p>
                <h3 className="text-m font-semibold leading-tight text-white">
                  <a href={banner.href}>
                    <span className="absolute inset-0" />
                    {banner.title}
                  </a>
                </h3>
              </div>
            </div>
          ) : (
            <div className="flex flex-1 flex-col gap-1">
              {banner.items.map((banneritem) => (
                // <div className="aspect-h-1 aspect-w-2 sm:aspect-h-1 sm:aspect-w-5 group overflow-hidden first:rounded-t-lg last:rounded-b-lg sm:row-span-2 flex-1">
                <div className="group relative overflow-hidden rounded sm:first:rounded-t-lg sm:last:rounded-b-lg">
                  <div className="absolute inset-0">
                    <img
                      src={banneritem.bgimage}
                      alt={
                        "Banner for " +
                        banneritem.title +
                        " - " +
                        banneritem.subtitle +
                        " link."
                      }
                      className="h-full w-full object-cover group-hover:opacity-75"
                    />
                  </div>
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-60 sm:from-transparent sm:to-black sm:opacity-50"
                  />
                  <div className="relative flex flex-1 flex-col justify-end px-4 py-2">
                    <p aria-hidden="true" className="mt-1 text-xs text-white">
                      {banneritem.subtitle}
                    </p>
                    <h3 className="text-m font-semibold leading-tight text-white">
                      <a href={banneritem.href}>
                        <span className="absolute inset-0" />
                        {banneritem.title}
                      </a>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      ))}
    </div>
  );
}
