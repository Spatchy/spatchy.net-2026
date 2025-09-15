import type { ComponentChildren } from "preact";
import type { CSSProperties } from "preact";

export interface ButtonProps {
  id?: string;
  onClick?: () => void;
  children?: ComponentChildren;
  disabled?: boolean;
  ghost?: boolean;
  color: CSSProperties["color"];
}

export function Button(props: ButtonProps) {
  const classList = ["px-2", "py-1", "rounded-md", "cursor-pointer"];
  if (props.ghost) {
    classList.push(
      "border-3",
      "border-solid",
      `border-${props.color}`,
      `text-${props.color}`,
      `hover:bg-${props.color}`,
      "hover:text-black",
      "hover:mix-blend-screen",
      "hover:border-transparent"
    );
  } else {
    classList.push(`bg-${props.color}`, `hover:bg-white`);
  }
  return (
    <button
      {...props}
      class={classList.join(" ")}
    />
  );
}
