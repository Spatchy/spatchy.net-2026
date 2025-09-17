import type { ComponentChildren } from "preact";

type ButtonThemes = "spatchy" | "youtube" | "github" | "printables"

export interface ButtonProps {
  id?: string;
  onClick?: () => void;
  onHover?: () => void;
  children?: ComponentChildren;
  disabled?: boolean;
  ghost?: boolean;
  tailwindColor?: string;
  theme?: ButtonThemes;
  circle?: boolean;
}

export function Button(props: ButtonProps) {
  const classList = ["px-2", "py-2", "cursor-pointer", "my-1", "mx-2", "flex", "items-center", "justify-center"];
  if (props.ghost) {
    classList.push(
      "border-3",
      "border-solid",
      `border-${props.tailwindColor}`,
      `text-${props.tailwindColor}`,
      `hover:bg-${props.tailwindColor}`,
      "hover:text-black",
      "hover:mix-blend-screen",
      "hover:border-transparent",
    );
  } else {
    classList.push(`bg-${props.tailwindColor}`, "hover:bg-white");
  }

  if (props.theme === "spatchy") {
    classList.push("spatchy-gradient");
  }

  if (props.circle) {
    classList.push("rounded-full", "w-10", "h-10");
  } else {
    classList.push("rounded-md");
  }

  return (
    <button
      class={classList.join(" ")}
      type="button"
      onMouseOver={props.onHover}
    >
      { props.children }
    </button>
  );
}
