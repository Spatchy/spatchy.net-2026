import { parseFeed } from "@mikaelporttila/rss";
import RSSCard from "../components/RSSCard.tsx";

const response = await fetch(
  "http://127.0.0.1:5173/demo-feed.xml", // TODO: Change this so it works in prod!!
);
const xml = await response.text();
const feed = await parseFeed(xml);

export default function Feed() {
  return (
    <div className="w-2/3 h-screen overflow-y-scroll flex items-center justify-center bg-spatchy-duotone">
      <div class="h-full">
        <div class="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-stretch p-4">
            {
              feed.entries.map((e, i) => <RSSCard key={i} feedEntry={e}/>)
            }
        </div>
        <div class="flex items-center justify-center py-9">
          <span class="text-zinc-500">You reached the end!</span>
        </div>
      </div>
    </div>
  );
}
