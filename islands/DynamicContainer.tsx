import { useSignal } from "@preact/signals";
import Button from "../components/Button.tsx";
import Feed from "./Feed.tsx";
import { parseFeed } from "@mikaelporttila/rss";

const feedUrl = Deno.env.get("FRESH_PUBLIC_RSS_FEED_URL");

if(!feedUrl){
  throw new Error("Error - RSS_FEED_URL environment variable not set");
}

// TODO: This should probably be made async
const response = await fetch(
  feedUrl
);
const xml = await response.text();
const feedData = await parseFeed(xml);
const imageUrls = feedData.entries.map((e) => e.attachments?.[0].url);

export default function DynamicContainer() {
  const collapsed = useSignal<boolean>(false);
  const showFeed = useSignal<boolean>(false);

  function handleViewProjects() {
    collapsed.value = true;
    showFeed.value = true;
  }

  return (
    <div class="w-2/3 dynamic-wrapper">
      <div
        class={`hero-panel spatchy-gradient${
          collapsed.value ? " collapsed" : ""
        }`}
      >

        {/* Preload all the images before the feed is shown */}
        <div aria-hidden="true" class="preload-cache">
          {imageUrls.map((url, i) => <img key={i} src={url} />)}
        </div>

        <div class="hero-body">
          <img
            class="my-6 max-w-full"
            src="/all-rights-reserved/wordmark-white.svg"
            alt="The Spatchy logo"
          />
          <p class="my-4 text-white text-lg">
            I am an open source and right to repair advocate, full stack
            developer, and creator.
          </p>
          <Button
            tailwindColor="white"
            ghost
            onClick={handleViewProjects}
          >
            View my projects
          </Button>
        </div>

        <nav class="hero-nav">
          <img
            class="hero-nav__logo"
            src="/all-rights-reserved/wordmark-white.svg"
            alt="Spatchy"
          />
        </nav>
      </div>

      {showFeed.value && <Feed feedData={feedData} />}
    </div>
  );
}
