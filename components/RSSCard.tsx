import type { FeedEntry } from "@mikaelporttila/rss";
import { RelativeDateFormatter } from "./util/relDateFormatter.ts";
import { decodeHtmlEntities } from "./util/decodeHTMLEntities.ts";

export interface RSSCardProps {
  feedEntry: FeedEntry;
  key: number;
}

const CATEGORY_STYLES: Record<string, {
  accentBar: string;
  accentIcon: string;
  accentDot: string;
}> = {
  "default": {
    accentBar: "bg-stone-400",
    accentIcon: "text-stone-400",
    accentDot: "bg-stone-400",
  },
  "youtube/videos": {
    accentBar: "bg-rose-700",
    accentIcon: "text-rose-700",
    accentDot: "bg-rose-700",
  },
  "github/repos": {
    accentBar: "bg-indigo-900",
    accentIcon: "text-indigo-900",
    accentDot: "bg-indigo-900",
  },
};

export default function RSSCard(props: RSSCardProps) {
  const relativeTimeFormatter = new RelativeDateFormatter();

  const rss = props.feedEntry;
  const title = decodeHtmlEntities(rss.title?.value ?? "No Data");
  const imageSrc = rss.attachments?.[0].url;
  const category = rss.categories?.[0].term || "default";
  const link = rss.links?.[0]?.href;
  const description = decodeHtmlEntities(
    rss.description?.value ?? "No Description",
  );
  const date = rss.updated
    ? relativeTimeFormatter.getRelTime(rss.updated)
    : "No date";

  const styles = CATEGORY_STYLES[category];

  const card = (
    <div class="w-64 flex h-full flex-col rounded-xl overflow-hidden transition-colors bg-zinc-50 border-4 border-zinc-50">
      <div class={`h-1 w-full ${styles.accentBar}`} />

      <img
        src={imageSrc}
        alt=""
        class="w-full aspect-video object-cover block"
      />

      <div class="flex flex-col flex-1 gap-2 py-4 px-2">
        <h3 class="text-sm font-semibold leading-snug text-zinc-900 line-clamp-2">
          {title}
        </h3>
        <p class="text-xs leading-relaxed text-zinc-500 line-clamp-3 flex-1">
          {description}
        </p>

        <div class="flex items-center justify-between mt-auto pt-3 border-t border-zinc-500">
          <span class="font-mono text-xs text-zinc-500">
            {date}
          </span>
          <span class={`w-2 h-2 rounded-full ${styles.accentDot}`} />
        </div>
      </div>
    </div>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        class="no-underline text-inherit"
      >
        {card}
      </a>
    );
  }

  return card;
}
