import type { Feed } from "@mikaelporttila/rss";
import RSSCard from "../components/RSSCard.tsx";

export interface FeedProps {
  feedData: Feed
}

export default function Feed(props:FeedProps) {
  return (
    <div className="h-screen overflow-y-scroll flex items-center justify-center bg-spatchy-duotone">
      <div class="h-full">
        <div class="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-stretch p-4">
            {
              props.feedData.entries.map((e, i) => <RSSCard key={i} feedEntry={e}/>)
            }
        </div>
        <div class="flex items-center justify-center py-9">
          <span class="text-zinc-500">You reached the end!</span>
        </div>
      </div>
    </div>
  );
}
