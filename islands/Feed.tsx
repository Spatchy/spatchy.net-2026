import { parseFeed } from "@mikaelporttila/rss";

const response = await fetch(
  "http://127.0.0.1:5173/demo-feed.xml", // TODO: Change this so it works in prod!!
);
const xml = await response.text();
const feed = await parseFeed(xml);

export default function Feed() {
  return (
    <div class="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {
          feed.entries.map((e, i) => <span key={i}>{e.title?.value ?? "No Data"}</span>)
        }
    </div>
  );
}
