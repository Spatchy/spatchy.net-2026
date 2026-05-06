import { useSignal } from "@preact/signals";
import Button from "../components/Button.tsx";
import Feed from "./Feed.tsx";
import { parseFeed } from "@mikaelporttila/rss";
import type { Feed as FeedType } from "@mikaelporttila/rss";
import { useEffect, useState } from "preact/hooks";

export default function DynamicContainer() {
  const collapsed = useSignal<boolean>(false);
  const showFeed = useSignal<boolean>(false);
  const [feedData, setFeedData] = useState<FeedType>();

  useEffect(() => {
    fetch("/api/feed")
      .then(r => r.text())
      .then(parseFeed)
      .then(setFeedData);
  }, []);
  
  const imageUrls = feedData?.entries.map((e) => e.attachments?.[0].url);

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
          {imageUrls?.map((url, i) => <img key={i} src={url} />)}
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

      {showFeed.value && <Feed feedData={feedData!} />}
    </div>
  );
}
