function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Thumbnail({ thumbnail }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-sm border border-gray-200 bg-white">
      <div className="relative">
        <div className="aspect-h-9 aspect-w-16 bg-gray-200 group-hover:opacity-75">
          <img
            alt={thumbnail.imageAlt}
            src={thumbnail.imageSrc}
            className="h-full w-full object-cover object-center sm:h-full sm:w-full"
          />
        </div>
        <div className="absolute bg-slate-800 text-white top-1 right-1 text-xs px-2 py-1 rounded-sm">
          {thumbnail.duration}
        </div>
      </div>
      <div className="h-1 bg-slate-200 relative mt-px">
        <div
          className="absolute bg-brand-600 h-full left-0 top-0"
          style={{ width: thumbnail.playhead + "%" }}
        ></div>
      </div>
      <div className="flex flex-1 flex-col space-y-2 py-2 px-3">
        <div className="flex items-center space-x-2">
          <img
            alt={thumbnail.series.title}
            src={thumbnail.series.logo}
            className="rounded-full object-cover object-center w-8 h-8"
          />
          <h4 className="text-xs text-gray-500 line-clamp-2">
            {thumbnail.series.title} - Part {thumbnail.series.partNumber}
          </h4>
        </div>
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
          <a href={thumbnail.href}>
            <span aria-hidden="true" className="absolute inset-0" />
            {thumbnail.title}
          </a>
        </h3>
        <p className="text-sm text-gray-500 line-clamp-4">
          {thumbnail.description}
        </p>
        <ul className="*:px-1 first:*:pl-0 last:*:pr-0 flex flex-wrap divide-x-2 text-xs text-gray-400">
          <li>{thumbnail.date}</li>
          <li>{thumbnail.views}&nbsp;views</li>
          <li>{thumbnail.itemType}</li>
        </ul>
      </div>
    </div>
  );
}
