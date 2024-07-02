import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/20/solid";

const activity = [
  {
    title: "Climbing the Spiritual Degrees",
    href: "#",
    imageUrl:
      "https://laitman.com/wp-content/gallery/headshots_100-300/Laitman_041_01.gif",
    text: "<b>Question:</b> What should we do to reveal the Creator? ...",
    date: "Jun 29, 2024 9:18 PM",
  },
  {
    title: "What To Do If There Is Emptiness in the Soul?",
    href: "#",
    imageUrl:
      "https://laitman.com/wp-content/gallery/headshots_100-300/Laitman_183_02.jpg",
    text: "<b>Nazarbay asks:</b> “When there is emptiness in the soul, what to do?”<br/><b>My Response:</b> Fill it. When there is emptiness in the soul, it is necessary to open this soul to the light, and it will fill it. When you open your soul to the light, you expect this fulfillment from...",
    date: "Jun 29, 2024 9:10 PM",
  },
  {
    title: "Conditions of Origin",
    href: "#",
    imageUrl:
      "https://laitman.com/wp-content/gallery/informal-900/laitman_945.jpg",
    text: "<b>Question:</b> I don’t have the strength to annul myself. How can the ten help me with this?<br/><b>Answer:</b> First, by example, and on the other hand, by pressure, when the ten shows you that you must cancel yourself in front of them.",
    date: "Jun 29, 2024 8:59 PM",
  },
  {
    title: "Female Desire, Male Intention",
    href: "#",
    imageUrl:
      "https://laitman.com/wp-content/gallery/headshots_100-300/laitman_282_02.jpg",
    text: "It therefore follows that each one should try to bring into the society a spirit of life and hopefulness, and infuse energy into the society. Thus, each of the friends will be able to tell himself, “Now I am starting a clean slate in the work.” ",
    date: "Jun 29, 2024 8:47 PM",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function BlogFeed() {
  return (
    <div className="mb-10 flow-root">
      <h3 className="text-xl mb-4">Blog</h3>
      <ul role="list" className="-mb-8">
        {activity.map((activityItem, activityItemIdx) => (
          <li key={activityItem.id}>
            <div className="relative pb-8">
              {activityItemIdx !== activity.length - 1 ? (
                <span
                  className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex items-start space-x-3">
                <>
                  <div className="relative">
                    <img
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                      src={activityItem.imageUrl}
                      alt=""
                    />

                    {/* <span className="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">
                      <ChatBubbleLeftEllipsisIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span> */}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div>
                      <div className="text-sm">
                        <a
                          href={activityItem.href}
                          className="font-medium text-gray-900"
                        >
                          {activityItem.title}
                        </a>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        {activityItem.date}
                      </p>
                    </div>
                    <div className="mt-2 text-sm text-gray-700">
                      <p
                        dangerouslySetInnerHTML={{ __html: activityItem.text }}
                      />
                    </div>
                  </div>
                </>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
