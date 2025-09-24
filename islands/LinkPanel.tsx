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
        >
          <TbBrandYoutube />
        </Button>
        <Button
          tailwindColor="white"
          circle
          ghost
          onHover={() => hoveredLink.value = "Github"}
          onHoverLeave={resetHoveredLink}
        >
          <TbBrandGithub />
        </Button>
        <Button
          tailwindColor="white"
          circle
          ghost
          onHover={() => hoveredLink.value = "Printables"}
          onHoverLeave={resetHoveredLink}
        >
          <TbBrandPrintables />
        </Button>
        <Button
          tailwindColor="white"
          circle
          ghost
          onHover={() => hoveredLink.value = "Email"}
          onHoverLeave={resetHoveredLink}
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
