import {
  TbAt,
  TbBrandGithub,
  TbBrandPrintables,
  TbBrandYoutube,
  TbQuestionMark,
} from "@preact-icons/tb";
import { useSignal } from "@preact/signals";
import Button from "../components/Button.tsx";

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
          onMouseEnter={() => hoveredLink.value = "About"}
          onMouseLeave={resetHoveredLink}
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
