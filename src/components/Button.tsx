import { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  el: "button";
  text: string;
  className: "short" | "long";
} & ComponentPropsWithoutRef<"button">;

type LinkProps = {
  el: "link";
} & ComponentPropsWithoutRef<"a">;

type ButtonOrLinkProps = LinkProps | ButtonProps;

export default function Button(props: ButtonOrLinkProps) {
  if (props.el === "button") {
    return (
      <button {...props} className={`button button_${props.className}`}>
        {props.text}
      </button>
    );
  }

  return <a href="#" {...props} />;
}
