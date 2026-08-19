import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
  id?: string;
}

export default function Container({
  children,
  className = "",
  as: Tag = "div",
  id,
}: ContainerProps) {
  return (
    <Tag id={id} className={`max-w-6xl mx-auto px-6 ${className}`}>
      {children}
    </Tag>
  );
}
