"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback } from "react";

type TMenuItem = {
  id: string;
  title: string;
  path: string;
};

const MENU: TMenuItem[] = [
  { id: "collections", title: "collections", path: "/collections" },
  { id: "products", title: "products", path: "/products" },
  { id: "blogs", title: "blog posts", path: "/blog-post" },
  { id: "settings", title: "settings", path: "/page-settings" },
];

export const AdminSidebar: React.FC = () => {
  const pathname = usePathname();

  const renderMenu = useCallback((item: TMenuItem) => {
    const isActive = pathname.startsWith(`/admin${item.path}`)
    return (
      <li key={item.id} className={`border-b border-gray-300 last:border-b-0 hover:bg-gray-200 ${isActive ? '!bg-gray-300' : ''}`}>
        <Link
          className="w-full block capitalize py-2 px-3"
          href={`/admin${item.path}`}
        >
          {item.title}
        </Link>
      </li>
    );
  }, [pathname]);
  return (
    <>
      <Link
        className="block text-center font-bold text-xl py-4 border-b border-gray-300"
        href="/"
      >
        Moni.Fashion
      </Link>

      <ul>{MENU.map(renderMenu)}</ul>
    </>
  );
};
