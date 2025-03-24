import React from "react";
import { Header } from "./Layout/header";

interface LayoutProps {
  children: React.ReactNode;
}
export default function LayoutContainer({ children }: LayoutProps) {
  return (
    <div className="w-full gap-2 flex flex-col">
      <Header />
      {children}
    </div>
  );
}
