import {
  TbAt,
  TbBrandGithub,
  TbBrandPrintables,
  TbBrandYoutube,
  TbQuestionMark,
} from "@preact-icons/tb";
import { Button } from "../components/Button.tsx";
import { useSignal } from "@preact/signals";

export default function LinkPanel() {
  const hoveredLink = useSignal("-");

  const resetHoveredLink = () => hoveredLink.value = "-";

  return (
    <>
      <div className="flex flex-row justify-center mb-2.5">
        <Button
          tailwindColor="white"
          circle
          ghost
          onHover={() => hoveredLink.value = "YouTube"}
          onHoverLeave={resetHoveredLink}
          href="https://youtube.com/@SpatchyIsOnline"
        >
          <TbBrandYoutube />
        </Button>
        <Button
          tailwindColor="white"
          circle
          ghost
          onHover={() => hoveredLink.value = "Github"}
          onHoverLeave={resetHoveredLink}
          href="https://github.com/Spatchy"
        >
          <TbBrandGithub />
        </Button>
        <Button
          tailwindColor="white"
          circle
          ghost
          onHover={() => hoveredLink.value = "Printables"}
          onHoverLeave={resetHoveredLink}
          href="https://www.printables.com/@Spatchy_1649691"
        >
          <TbBrandPrintables />
        </Button>
        <Button
          tailwindColor="white"
          circle
          ghost
          onHover={() => hoveredLink.value = "Email"}
          onHoverLeave={resetHoveredLink}
          href="mailto:spatchy@spatchy.net"
        >
          <TbAt />
        </Button>
        <Button
          tailwindColor="white"
          circle
          ghost
          onHover={() => hoveredLink.value = "About"}
          onHoverLeave={resetHoveredLink}
        >
          <TbQuestionMark />
        </Button>
      </div>
      <p
        className={`flex justify-center text-white ${
          hoveredLink.value === "-" ? "invisible" : ""
        }`}
      >
        {hoveredLink}
      </p>
    </>
  );
}
