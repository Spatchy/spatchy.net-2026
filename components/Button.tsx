import type { ComponentChildren } from "preact";

export interface ButtonProps {
  id?: string;
  onClick?: () => void;
  children?: ComponentChildren;
  disabled?: boolean;
  ghost?: boolean;
  tailwindColor?: string;
}

export function Button(props: ButtonProps) {
  const classList = ["px-2", "py-2", "rounded-md", "cursor-pointer", "my-1"];
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
  return (
    <button
      class={classList.join(" ")}
      type="button"
    >
      { props.children }
    </button>
  );
}
