import {
  TbAt,
  TbBrandGithub,
  TbBrandPrintables,
  TbBrandYoutube,
  TbRss,
} from "@preact-icons/tb";
import { useSignal } from "@preact/signals";
import Button from "../components/Button.tsx";

export default function LinkPanel() {
  const hoveredLink = useSignal("-");

  const resetHoveredLink = () => hoveredLink.value = "-";

  const feedUrl = "https://spatchy.net/api/feed"

  const copyRSSFeed = () => {
    navigator.clipboard.writeText(feedUrl);
    hoveredLink.value = "Copied!";
  }

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center md:mb-2.5">
        <Button
          tailwindColor="white"
          circle
          ghost
          onMouseEnter={() => hoveredLink.value = "YouTube"}
          onMouseLeave={resetHoveredLink}
          href="https://youtube.com/@SpatchyIsOnline"
        >
          <TbBrandYoutube />
        </Button>
        <Button
          tailwindColor="white"
          circle
          ghost
          onMouseEnter={() => hoveredLink.value = "Github"}
          onMouseLeave={resetHoveredLink}
          href="https://github.com/Spatchy"
        >
          <TbBrandGithub />
        </Button>
        <Button
          tailwindColor="white"
          circle
          ghost
          onMouseEnter={() => hoveredLink.value = "Printables"}
          onMouseLeave={resetHoveredLink}
          href="https://www.printables.com/@Spatchy_1649691"
        >
          <TbBrandPrintables />
        </Button>
        <Button
          tailwindColor="white"
          circle
          ghost
          onMouseEnter={() => hoveredLink.value = "Email"}
          onMouseLeave={resetHoveredLink}
          href="mailto:spatchy@spatchy.net"
        >
          <TbAt />
        </Button>
        <Button
          tailwindColor="white"
          circle
          ghost
          onMouseEnter={() => hoveredLink.value = "Copy RSS Feed"}
          onMouseLeave={resetHoveredLink}
          onClick={copyRSSFeed}
        >
          <TbRss />
        </Button>
      </div>
      <p
        className={`md:flex justify-center text-white hidden ${
          hoveredLink.value === "-" ? "invisible" : ""
        }`}
      >
        {hoveredLink}
      </p>
    </>
  );
}
