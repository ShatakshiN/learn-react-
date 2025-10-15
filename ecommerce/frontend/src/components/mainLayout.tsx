// components/MainLayout.tsx
import type{ ReactNode } from "react";
import Navbar from "./navbar";


interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="app-container">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
