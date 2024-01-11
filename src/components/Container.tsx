import Header from "./Header";
import img from "../assets/modules/photo.png";
import { type ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="container">
      <Header text="Goals of the day" img={{ src: img, alt: "Goals" }} />
      {children}
    </div>
  );
}
