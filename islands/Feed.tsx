import { parseFeed } from "@mikaelporttila/rss";

const response = await fetch(
  "http://static.userland.com/gems/backend/rssTwoExample2.xml",
);
const xml = await response.text();
const feed = await parseFeed(xml);

export default function Feed() {
  feed.entries.forEach((e) => {
    console.log(e.title);
  });
  
  return (
    <>
    </>
  );
}
